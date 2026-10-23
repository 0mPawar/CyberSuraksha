/**
 * CyberSuraksha Authentication Routes
 * Maps auth endpoints to rate limiters, validators, auth middleware, and controllers.
 */

const express = require('express');
const router = express.Router();

const authController = require('../controllers/authacontroller');
const authMiddleware = require('../middlewares/authamiddleware');
const { validateBody } = require('../middlewares/validationmiddleware');
const { rateLimit } = require('../middlewares/ratelimitmiddleware');
const authValidator = require('../validators/authavalidator');

// Strict rate limiters for sensitive security flows
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: 'Too many authentication attempts. Please try again in 15 minutes.' });
const otpLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 8, message: 'Too many OTP verification requests. Please try again later.' });
const resendLimiter = rateLimit({ windowMs: 10 * 60 * 1000, max: 5, message: 'Too many OTP resend attempts. Please wait before requesting another code.' });

// 1. User Registration Flow
router.post(
  '/register',
  authLimiter,
  validateBody(authValidator.validateRegister),
  authController.register
);

router.post(
  '/verify-registration-otp',
  otpLimiter,
  validateBody(authValidator.validateVerifyOtp),
  authController.verifyRegistrationOtp
);

router.post(
  '/resend-otp',
  resendLimiter,
  validateBody(authValidator.validateResendOtp),
  authController.resendOtp
);

// 2. Login Flow
router.post(
  '/login',
  authLimiter,
  validateBody(authValidator.validateLogin),
  authController.login
);

// 3. Forgot Password Flow
router.post(
  '/forgot-password',
  authLimiter,
  validateBody(authValidator.validateForgotPassword),
  authController.forgotPassword
);

router.post(
  '/verify-forgot-password-otp',
  otpLimiter,
  validateBody(authValidator.validateVerifyOtp),
  authController.verifyForgotPasswordOtp
);

router.post(
  '/reset-password',
  authLimiter,
  validateBody(authValidator.validateResetPassword),
  authController.resetPassword
);

// 4. Authenticated Password Change Flow (Requires Token + OTP)
router.post(
  '/change-password/request-otp',
  authMiddleware,
  resendLimiter,
  authController.requestChangePasswordOtp
);

router.post(
  '/change-password/verify-otp',
  authMiddleware,
  otpLimiter,
  authController.verifyChangePasswordOtp
);

router.post(
  '/change-password/confirm',
  authMiddleware,
  authLimiter,
  validateBody(authValidator.validateChangePasswordConfirm),
  authController.confirmChangePassword
);

// 5. Token Management & Session Controls
router.post('/refresh', authLimiter, authController.refreshToken);
router.post('/logout', authMiddleware, authController.logout);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;

