/**
 * CyberSuraksha Authentication Service
 * Implements end-to-end registration, OTP verification, login, forgot password,
 * authenticated password change, token refresh, and session revocation.
 */

const db = require('../config/databaseconfig');
const userModel = require('../models/useramodel');
const roleModel = require('../models/roleamodel');
const otpService = require('./otpservice');
const emailService = require('./emailservice');
const tokenService = require('./tokenservice');
const permissionService = require('./permissionservice');
const passwordUtil = require('../utils/passwordutil');
const logger = require('../utils/loggerutil');

const authaservice = {
  /**
   * Register a new user
   * @param {{ name: string, email: string, password: string, confirmPassword: string, phone?: string, gender?: string }} data
   */
  async register(data) {
    const { name, email, password, confirmPassword, phone = null, gender = null } = data;
    const normalizedEmail = String(email || '').trim().toLowerCase();

    // 1. Password confirmation check
    if (password !== confirmPassword) {
      const err = new Error('Passwords do not match');
      err.code = 'PASSWORD_MISMATCH';
      throw err;
    }

    // 2. Password strength check
    const strength = passwordUtil.validatePasswordStrength(password);
    if (!strength.valid) {
      const err = new Error(strength.message);
      err.code = 'WEAK_PASSWORD';
      throw err;
    }

    // 3. Check existing user
    const existingUser = await userModel.findByEmail(normalizedEmail);
    if (existingUser) {
      if (existingUser.email_verified === 1) {
        logger.warn('AUTH', `Registration rejected: email already registered and verified: ${normalizedEmail}`);
        const err = new Error('Email is already registered. Please sign in instead.');
        err.code = 'EMAIL_ALREADY_REGISTERED';
        throw err;
      }
      // If user exists but is unverified, allow re-registration by updating password & details
    }

    // 4. Resolve default 'user' role
    const userRole = await roleModel.findByRole('user');
    if (!userRole) {
      throw new Error('Default user role not found in system. Please contact administrator.');
    }

    // 5. Hash password
    const hashedPassword = await passwordUtil.hashPassword(password);

    // 6. Execute atomic user creation and OTP generation in a transaction
    let generatedOtp = null;
    let userId = null;

    await db.transaction(async (conn) => {
      if (existingUser && existingUser.email_verified === 0) {
        userId = existingUser.id;
        await userModel.update(userId, { name, phone, gender }, conn);
        await userModel.updatePassword(userId, hashedPassword, conn);
      } else {
        userId = await userModel.create(
          {
            role_id: userRole.id,
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            gender,
            status: 'active',
            email_verified: 0
          },
          conn
        );
      }

      // Generate and store OTP inside the same transaction
      const otpResult = await otpService.createAndStoreOtp(
        {
          email: normalizedEmail,
          purpose: 'register',
          userId
        },
        conn
      );
      generatedOtp = otpResult.otp;
    });

    // 7. Send registration verification email
    try {
      await emailService.sendRegistrationOtpEmail(normalizedEmail, generatedOtp, name);
    } catch (mailErr) {
      logger.error('AUTH', `Failed to deliver registration OTP to ${normalizedEmail}`, mailErr);
      // We do not fail registration completely since account is pending and user can use resend-otp
    }

    logger.info('AUTH', `User registered successfully: ${normalizedEmail} (ID: ${userId})`);
    return {
      message: 'Registration successful. A verification code has been sent to your email.',
      email: normalizedEmail
    };
  },

  /**
   * Verify registration OTP and activate user account
   * @param {{ email: string, otp: string }} param0
   */
  async verifyRegistrationOtp({ email, otp }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    return db.transaction(async (conn) => {
      const result = await otpService.verifyOtp(
        {
          email: normalizedEmail,
          purpose: 'register',
          otp
        },
        conn
      );

      if (!result.valid) {
        const err = new Error(
          result.reason === 'EXPIRED'
            ? 'Verification code has expired. Please request a new one.'
            : result.reason === 'MAX_ATTEMPTS_EXCEEDED'
            ? 'Maximum attempts exceeded. Please request a new code.'
            : 'Invalid verification code.'
        );
        err.code = 'INVALID_OTP';
        err.details = { attemptsLeft: result.attemptsLeft };
        throw err;
      }

      const user = await userModel.findByEmail(normalizedEmail, conn);
      if (!user) {
        const err = new Error('User account not found');
        err.code = 'USER_NOT_FOUND';
        throw err;
      }

      await userModel.markEmailVerified(user.id, conn);
      logger.success('AUTH', `Email successfully verified for user: ${normalizedEmail}`);

      return {
        message: 'Email verified successfully. You may now log in to CyberSuraksha.'
      };
    });
  },

  /**
   * Resend an OTP code
   * @param {{ email: string, purpose: string }} param0
   */
  async resendOtp({ email, purpose }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    // Allow only public resend purposes
    if (!['register', 'forgot_password'].includes(purpose)) {
      const err = new Error('Invalid OTP purpose for resend request');
      err.code = 'INVALID_PURPOSE';
      throw err;
    }

    const user = await userModel.findByEmail(normalizedEmail);

    // If purpose is register, user must exist and be unverified
    if (purpose === 'register') {
      if (!user) {
        const err = new Error('No registration found for this email address.');
        err.code = 'NOT_FOUND';
        throw err;
      }
      if (user.email_verified === 1) {
        const err = new Error('Email is already verified. Please proceed to login.');
        err.code = 'ALREADY_VERIFIED';
        throw err;
      }
    }

    // If purpose is forgot_password and user doesn't exist, return generic success (enumeration protection)
    if (purpose === 'forgot_password' && !user) {
      logger.info('AUTH', `Forgot-password resend ignored for non-existent email: ${normalizedEmail}`);
      return {
        message: 'If the email is registered, a new verification code has been dispatched.'
      };
    }

    const { otp } = await otpService.createAndStoreOtp({
      email: normalizedEmail,
      purpose,
      userId: user ? user.id : null
    });

    if (purpose === 'register') {
      await emailService.sendRegistrationOtpEmail(normalizedEmail, otp, user ? user.name : 'User');
    } else if (purpose === 'forgot_password') {
      await emailService.sendForgotPasswordOtpEmail(normalizedEmail, otp, user ? user.name : 'User');
    }

    return {
      message: 'A new verification code has been dispatched to your email.'
    };
  },

  /**
   * Authenticate user with email and password
   * @param {{ email: string, password: string }} param0
   */
  async login({ email, password }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    const user = await userModel.findByEmail(normalizedEmail);
    if (!user) {
      logger.warn('AUTH', `Login attempt rejected: user not found: ${normalizedEmail}`);
      const err = new Error('Invalid email or password');
      err.code = 'INVALID_CREDENTIALS';
      throw err;
    }

    // Verify password
    const isPasswordValid = await passwordUtil.comparePassword(password, user.password);
    if (!isPasswordValid) {
      logger.warn('AUTH', `Login attempt rejected: incorrect password for: ${normalizedEmail}`);
      const err = new Error('Invalid email or password');
      err.code = 'INVALID_CREDENTIALS';
      throw err;
    }

    // Check account status
    if (user.status === 'blocked') {
      logger.warn('AUTH', `Login attempt rejected: account blocked for: ${normalizedEmail}`);
      const err = new Error('Your account has been blocked. Please contact support.');
      err.code = 'ACCOUNT_BLOCKED';
      throw err;
    }

    if (user.status === 'inactive') {
      logger.warn('AUTH', `Login attempt rejected: account inactive for: ${normalizedEmail}`);
      const err = new Error('Your account is currently inactive.');
      err.code = 'ACCOUNT_INACTIVE';
      throw err;
    }

    // Require email verification
    if (user.email_verified !== 1) {
      logger.warn('AUTH', `Login attempt rejected: unverified email for: ${normalizedEmail}`);
      const err = new Error('Email is not verified. Please verify your email before logging in.');
      err.code = 'EMAIL_NOT_VERIFIED';
      err.details = { email_verified: false };
      throw err;
    }

    // Generate tokens
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      role: user.role
    };

    const accessToken = tokenService.generateAccessToken(safeUser);
    const refreshToken = await tokenService.issueRefreshToken(user.id);
    const permissions = await permissionService.getPermissionsForRole(user.role_id);

    logger.success('AUTH', `User login successful: ${normalizedEmail} (Role: ${user.role})`);

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        role: user.role,
        role_name: user.role_name,
        email_verified: Boolean(user.email_verified),
        status: user.status,
        permissions
      },
      accessToken,
      refreshToken
    };
  },

  /**
   * Request password reset OTP
   * @param {{ email: string }} param0
   */
  async forgotPassword({ email }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const user = await userModel.findByEmail(normalizedEmail);

    if (!user) {
      // Prevent user enumeration
      logger.info('AUTH', `Forgot password requested for non-existent email: ${normalizedEmail}`);
      return {
        message: 'If the provided email is registered, a password reset code has been sent.'
      };
    }

    const { otp } = await otpService.createAndStoreOtp({
      email: normalizedEmail,
      purpose: 'forgot_password',
      userId: user.id
    });

    await emailService.sendForgotPasswordOtpEmail(normalizedEmail, otp, user.name);

    return {
      message: 'If the provided email is registered, a password reset code has been sent.'
    };
  },

  /**
   * Verify password reset OTP and generate single-use reset authorization token
   * @param {{ email: string, otp: string }} param0
   */
  async verifyForgotPasswordOtp({ email, otp }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    return db.transaction(async (conn) => {
      const result = await otpService.verifyOtp(
        {
          email: normalizedEmail,
          purpose: 'forgot_password',
          otp
        },
        conn
      );

      if (!result.valid) {
        const err = new Error(
          result.reason === 'EXPIRED'
            ? 'Verification code has expired.'
            : result.reason === 'MAX_ATTEMPTS_EXCEEDED'
            ? 'Maximum attempts exceeded.'
            : 'Invalid verification code.'
        );
        err.code = 'INVALID_OTP';
        err.details = { attemptsLeft: result.attemptsLeft };
        throw err;
      }

      const user = await userModel.findByEmail(normalizedEmail, conn);
      if (!user) {
        const err = new Error('Account not found');
        err.code = 'USER_NOT_FOUND';
        throw err;
      }

      // Issue single-use reset authorization token (10 min expiry)
      const resetToken = await tokenService.issueResetAuthorization(user.id, 'forgot_password', conn);

      return {
        message: 'Code verified successfully. You may now reset your password.',
        resetToken
      };
    });
  },

  /**
   * Reset password using single-use authorization token
   * @param {{ email: string, resetToken: string, newPassword: string, confirmPassword: string }} param0
   */
  async resetPassword({ email, resetToken, newPassword, confirmPassword }) {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (newPassword !== confirmPassword) {
      const err = new Error('Passwords do not match');
      err.code = 'PASSWORD_MISMATCH';
      throw err;
    }

    const strength = passwordUtil.validatePasswordStrength(newPassword);
    if (!strength.valid) {
      const err = new Error(strength.message);
      err.code = 'WEAK_PASSWORD';
      throw err;
    }

    return db.transaction(async (conn) => {
      // 1. Verify and consume the single-use reset authorization token
      const userId = await tokenService.verifyAndConsumeResetAuthorization(resetToken, 'forgot_password', conn);

      const user = await userModel.findById(userId, conn);
      if (!user || user.email.toLowerCase() !== normalizedEmail) {
        const err = new Error('Invalid reset authorization for this email address');
        err.code = 'INVALID_RESET_AUTHORIZATION';
        throw err;
      }

      // 2. Hash new password
      const hashedPassword = await passwordUtil.hashPassword(newPassword);

      // 3. Update password
      await userModel.updatePassword(user.id, hashedPassword, conn);

      // 4. Invalidate all active sessions/refresh tokens
      await tokenService.revokeAllUserSessions(user.id, conn);

      logger.success('AUTH', `Password reset completed successfully for user: ${normalizedEmail}`);

      return {
        message: 'Your password has been reset successfully. Please log in with your new password.'
      };
    });
  },

  /**
   * Step 1 of Authenticated Password Change: Request OTP
   * @param {number|string} userId Authenticated user ID from token
   */
  async requestChangePasswordOtp(userId) {
    const user = await userModel.findById(userId);
    if (!user) {
      const err = new Error('User not found');
      err.code = 'USER_NOT_FOUND';
      throw err;
    }

    const { otp } = await otpService.createAndStoreOtp({
      email: user.email,
      purpose: 'change_password',
      userId: user.id
    });

    await emailService.sendChangePasswordOtpEmail(user.email, otp, user.name);

    return {
      message: 'A verification code has been dispatched to your registered email address.'
    };
  },

  /**
   * Step 2 of Authenticated Password Change: Verify OTP
   * @param {number|string} userId
   * @param {string} otp
   */
  async verifyChangePasswordOtp(userId, otp) {
    const user = await userModel.findById(userId);
    if (!user) {
      const err = new Error('User not found');
      err.code = 'USER_NOT_FOUND';
      throw err;
    }

    return db.transaction(async (conn) => {
      const result = await otpService.verifyOtp(
        {
          email: user.email,
          purpose: 'change_password',
          otp
        },
        conn
      );

      if (!result.valid) {
        const err = new Error(
          result.reason === 'EXPIRED'
            ? 'Verification code has expired.'
            : result.reason === 'MAX_ATTEMPTS_EXCEEDED'
            ? 'Maximum attempts exceeded.'
            : 'Invalid verification code.'
        );
        err.code = 'INVALID_OTP';
        err.details = { attemptsLeft: result.attemptsLeft };
        throw err;
      }

      const changeToken = await tokenService.issueResetAuthorization(user.id, 'change_password', conn);

      return {
        message: 'Verification code confirmed. You may now finalize your new password.',
        changeToken
      };
    });
  },

  /**
   * Step 3 of Authenticated Password Change: Confirm New Password
   * @param {number|string} userId
   * @param {{ changeToken: string, currentPassword: string, newPassword: string, confirmPassword: string }} param1
   */
  async confirmChangePassword(userId, { changeToken, currentPassword, newPassword, confirmPassword }) {
    if (newPassword !== confirmPassword) {
      const err = new Error('New password and confirmation do not match');
      err.code = 'PASSWORD_MISMATCH';
      throw err;
    }

    const strength = passwordUtil.validatePasswordStrength(newPassword);
    if (!strength.valid) {
      const err = new Error(strength.message);
      err.code = 'WEAK_PASSWORD';
      throw err;
    }

    return db.transaction(async (conn) => {
      // 1. Verify single-use change authorization token
      const tokenUserId = await tokenService.verifyAndConsumeResetAuthorization(changeToken, 'change_password', conn);
      if (String(tokenUserId) !== String(userId)) {
        const err = new Error('Unauthorized change token');
        err.code = 'UNAUTHORIZED';
        throw err;
      }

      // 2. Verify current password
      const user = await userModel.findById(userId, conn);
      if (!user) {
        const err = new Error('User not found');
        err.code = 'USER_NOT_FOUND';
        throw err;
      }

      const isCurrentValid = await passwordUtil.comparePassword(currentPassword, user.password);
      if (!isCurrentValid) {
        logger.warn('AUTH', `Password change failed: incorrect current password for user ID: ${userId}`);
        const err = new Error('Current password is incorrect');
        err.code = 'INVALID_CURRENT_PASSWORD';
        throw err;
      }

      // 3. Prevent reusing the current password
      const isSamePassword = await passwordUtil.comparePassword(newPassword, user.password);
      if (isSamePassword) {
        const err = new Error('New password cannot be the same as your current password');
        err.code = 'PASSWORD_REUSED';
        throw err;
      }

      // 4. Hash and update
      const hashedPassword = await passwordUtil.hashPassword(newPassword);
      await userModel.updatePassword(user.id, hashedPassword, conn);

      // 5. Invalidate existing sessions
      await tokenService.revokeAllUserSessions(user.id, conn);

      logger.success('AUTH', `Password changed successfully for user ID: ${userId}`);

      return {
        message: 'Password changed successfully. Please sign in with your new password.'
      };
    });
  },

  /**
   * Rotate refresh token
   * @param {string} refreshToken
   */
  async refreshToken(refreshToken) {
    return tokenService.rotateRefreshToken(refreshToken);
  },

  /**
   * Logout user and revoke refresh token
   * @param {string} refreshToken
   */
  async logout(refreshToken) {
    if (refreshToken) {
      await tokenService.revokeRefreshToken(refreshToken);
    }
    return { message: 'Logged out successfully' };
  }
};

module.exports = authaservice;

