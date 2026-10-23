/**
 * CyberSuraksha Authentication Controller
 * Handles HTTP requests and responses for all authentication flows.
 */

const authService = require('../services/authaservice');
const userModel = require('../models/useramodel');
const permissionService = require('../services/permissionservice');
const response = require('../utils/responseutil');

const authacontroller = {
  /**
   * POST /api/auth/register
   */
  async register(req, res, next) {
    try {
      const result = await authService.register(req.body);
      return response.success(res, 201, result.message, { email: result.email });
    } catch (err) {
      if (err.code === 'EMAIL_ALREADY_REGISTERED' || err.code === 'PASSWORD_MISMATCH' || err.code === 'WEAK_PASSWORD') {
        return response.error(res, 400, err.message, err.code);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/verify-registration-otp
   */
  async verifyRegistrationOtp(req, res, next) {
    try {
      const result = await authService.verifyRegistrationOtp(req.body);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (err.code === 'INVALID_OTP' || err.code === 'USER_NOT_FOUND') {
        return response.error(res, 400, err.message, err.code, err.details);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/resend-otp
   */
  async resendOtp(req, res, next) {
    try {
      const result = await authService.resendOtp(req.body);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (err.code === 'OTP_COOLDOWN') {
        return response.error(res, 429, err.message, err.code, { retryAfter: err.retryAfter });
      }
      if (err.code === 'ALREADY_VERIFIED' || err.code === 'NOT_FOUND' || err.code === 'INVALID_PURPOSE') {
        return response.error(res, 400, err.message, err.code);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/login
   */
  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);
      return response.success(res, 200, 'Login successful', result);
    } catch (err) {
      if (err.code === 'INVALID_CREDENTIALS') {
        return response.error(res, 401, err.message, err.code);
      }
      if (err.code === 'EMAIL_NOT_VERIFIED' || err.code === 'ACCOUNT_BLOCKED' || err.code === 'ACCOUNT_INACTIVE') {
        return response.error(res, 403, err.message, err.code, err.details);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/forgot-password
   */
  async forgotPassword(req, res, next) {
    try {
      const result = await authService.forgotPassword(req.body);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (err.code === 'OTP_COOLDOWN') {
        return response.error(res, 429, err.message, err.code, { retryAfter: err.retryAfter });
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/verify-forgot-password-otp
   */
  async verifyForgotPasswordOtp(req, res, next) {
    try {
      const result = await authService.verifyForgotPasswordOtp(req.body);
      return response.success(res, 200, result.message, { resetToken: result.resetToken });
    } catch (err) {
      if (err.code === 'INVALID_OTP' || err.code === 'USER_NOT_FOUND') {
        return response.error(res, 400, err.message, err.code, err.details);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/reset-password
   */
  async resetPassword(req, res, next) {
    try {
      const result = await authService.resetPassword(req.body);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (
        err.code === 'INVALID_RESET_TOKEN' ||
        err.code === 'INVALID_RESET_AUTHORIZATION' ||
        err.code === 'PASSWORD_MISMATCH' ||
        err.code === 'WEAK_PASSWORD'
      ) {
        return response.error(res, 400, err.message, err.code);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/change-password/request-otp (Authenticated)
   */
  async requestChangePasswordOtp(req, res, next) {
    try {
      const result = await authService.requestChangePasswordOtp(req.user.id);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (err.code === 'OTP_COOLDOWN') {
        return response.error(res, 429, err.message, err.code, { retryAfter: err.retryAfter });
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/change-password/verify-otp (Authenticated)
   */
  async verifyChangePasswordOtp(req, res, next) {
    try {
      const { otp } = req.body;
      if (!otp || typeof otp !== 'string' || !/^\d{6}$/.test(otp.trim())) {
        return response.error(res, 400, '6-digit verification code is required', 'INVALID_OTP_FORMAT');
      }
      const result = await authService.verifyChangePasswordOtp(req.user.id, otp);
      return response.success(res, 200, result.message, { changeToken: result.changeToken });
    } catch (err) {
      if (err.code === 'INVALID_OTP') {
        return response.error(res, 400, err.message, err.code, err.details);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/change-password/confirm (Authenticated)
   */
  async confirmChangePassword(req, res, next) {
    try {
      const result = await authService.confirmChangePassword(req.user.id, req.body);
      return response.success(res, 200, result.message);
    } catch (err) {
      if (
        err.code === 'INVALID_RESET_TOKEN' ||
        err.code === 'INVALID_CURRENT_PASSWORD' ||
        err.code === 'PASSWORD_REUSED' ||
        err.code === 'PASSWORD_MISMATCH' ||
        err.code === 'WEAK_PASSWORD' ||
        err.code === 'UNAUTHORIZED'
      ) {
        return response.error(res, 400, err.message, err.code);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/refresh
   */
  async refreshToken(req, res, next) {
    try {
      const refreshToken = req.body.refreshToken || (req.cookies && req.cookies.refreshToken);
      if (!refreshToken) {
        return response.error(res, 400, 'Refresh token is required', 'REFRESH_TOKEN_REQUIRED');
      }
      const result = await authService.refreshToken(refreshToken);
      return response.success(res, 200, 'Token refreshed successfully', result);
    } catch (err) {
      if (err.code === 'INVALID_REFRESH_TOKEN' || err.code === 'ACCOUNT_INACTIVE') {
        return response.error(res, 401, err.message, err.code);
      }
      next(err);
    }
  },

  /**
   * POST /api/auth/logout (Authenticated)
   */
  async logout(req, res, next) {
    try {
      const refreshToken = req.body.refreshToken || (req.cookies && req.cookies.refreshToken);
      const result = await authService.logout(refreshToken);
      return response.success(res, 200, result.message);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET /api/auth/me (Authenticated)
   */
  async getMe(req, res, next) {
    try {
      const user = await userModel.findById(req.user.id);
      if (!user) {
        return response.error(res, 404, 'User not found', 'USER_NOT_FOUND');
      }

      const permissions = await permissionService.getPermissionsForRole(user.role_id);

      return response.success(res, 200, 'Current user profile retrieved', {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        role: user.role,
        role_name: user.role_name,
        status: user.status,
        email_verified: Boolean(user.email_verified),
        permissions
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = authacontroller;

