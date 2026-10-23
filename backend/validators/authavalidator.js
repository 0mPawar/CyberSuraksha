/**
 * CyberSuraksha Authentication Request Validators
 * Validates input payloads for all authentication endpoints.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-()]{7,20}$/;
const GENDERS = ['Male', 'Female', 'Transgender'];

function isNonEmptyString(val) {
  return typeof val === 'string' && val.trim().length > 0;
}

const authavalidator = {
  validateRegister(body = {}) {
    const errors = [];

    // Name
    if (!isNonEmptyString(body.name)) {
      errors.push({ field: 'name', message: 'Name is required' });
    } else if (body.name.trim().length > 100) {
      errors.push({ field: 'name', message: 'Name cannot exceed 100 characters' });
    }

    // Email
    if (!isNonEmptyString(body.email)) {
      errors.push({ field: 'email', message: 'Email address is required' });
    } else if (!EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Invalid email address format' });
    } else if (body.email.trim().length > 150) {
      errors.push({ field: 'email', message: 'Email address cannot exceed 150 characters' });
    }

    // Password
    if (!isNonEmptyString(body.password)) {
      errors.push({ field: 'password', message: 'Password is required' });
    } else if (body.password.length < 8) {
      errors.push({ field: 'password', message: 'Password must be at least 8 characters long' });
    } else if (body.password.length > 100) {
      errors.push({ field: 'password', message: 'Password cannot exceed 100 characters' });
    }

    // Confirm Password
    if (!isNonEmptyString(body.confirmPassword)) {
      errors.push({ field: 'confirmPassword', message: 'Password confirmation is required' });
    } else if (body.password !== body.confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Passwords do not match' });
    }

    // Phone (Optional)
    if (body.phone !== undefined && body.phone !== null && body.phone !== '') {
      if (typeof body.phone !== 'string' || !PHONE_REGEX.test(body.phone.trim())) {
        errors.push({ field: 'phone', message: 'Invalid phone number format' });
      }
    }

    // Gender (Optional)
    if (body.gender !== undefined && body.gender !== null && body.gender !== '') {
      if (!GENDERS.includes(body.gender)) {
        errors.push({ field: 'gender', message: `Gender must be one of: ${GENDERS.join(', ')}` });
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        name: body.name ? body.name.trim() : '',
        email: body.email ? body.email.trim().toLowerCase() : '',
        phone: body.phone ? body.phone.trim() : null,
        gender: body.gender || null
      }
    };
  },

  validateVerifyOtp(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.email) || !EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    if (!isNonEmptyString(body.otp) || !/^\d{6}$/.test(body.otp.trim())) {
      errors.push({ field: 'otp', message: '6-digit numeric verification code is required' });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        email: body.email ? body.email.trim().toLowerCase() : '',
        otp: body.otp ? body.otp.trim() : ''
      }
    };
  },

  validateResendOtp(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.email) || !EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    const validPurposes = ['register', 'forgot_password'];
    if (!isNonEmptyString(body.purpose) || !validPurposes.includes(body.purpose)) {
      errors.push({ field: 'purpose', message: `Purpose must be one of: ${validPurposes.join(', ')}` });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        email: body.email ? body.email.trim().toLowerCase() : '',
        purpose: body.purpose
      }
    };
  },

  validateLogin(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.email) || !EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    if (!isNonEmptyString(body.password)) {
      errors.push({ field: 'password', message: 'Password is required' });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        email: body.email ? body.email.trim().toLowerCase() : ''
      }
    };
  },

  validateForgotPassword(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.email) || !EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        email: body.email ? body.email.trim().toLowerCase() : ''
      }
    };
  },

  validateResetPassword(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.email) || !EMAIL_REGEX.test(body.email.trim())) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    if (!isNonEmptyString(body.resetToken)) {
      errors.push({ field: 'resetToken', message: 'Reset authorization token is required' });
    }

    if (!isNonEmptyString(body.newPassword) || body.newPassword.length < 8) {
      errors.push({ field: 'newPassword', message: 'New password must be at least 8 characters long' });
    }

    if (body.newPassword !== body.confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Passwords do not match' });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        email: body.email ? body.email.trim().toLowerCase() : ''
      }
    };
  },

  validateChangePasswordConfirm(body = {}) {
    const errors = [];

    if (!isNonEmptyString(body.changeToken)) {
      errors.push({ field: 'changeToken', message: 'Change authorization token is required' });
    }

    if (!isNonEmptyString(body.currentPassword)) {
      errors.push({ field: 'currentPassword', message: 'Current password is required' });
    }

    if (!isNonEmptyString(body.newPassword) || body.newPassword.length < 8) {
      errors.push({ field: 'newPassword', message: 'New password must be at least 8 characters long' });
    }

    if (body.newPassword !== body.confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'New passwords do not match' });
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
};

module.exports = authavalidator;

