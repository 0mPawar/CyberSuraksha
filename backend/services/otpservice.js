/**
 * CyberSuraksha OTP Service
 * Handles generation, cryptographic hashing, cooldown enforcement,
 * and secure single-use verification of one-time passwords.
 * NEVER logs OTP plaintext values.
 */

const crypto = require('crypto');
const config = require('../config/environmentconfig');
const otpModel = require('../models/otpverificationamodel');
const logger = require('../utils/loggerutil');

const otpservice = {
  /**
   * Generates a 6-digit cryptographically secure numeric OTP
   * @returns {string} 6-digit string
   */
  generateNumericOtp() {
    return crypto.randomInt(100000, 1000000).toString();
  },

  /**
   * Hashes an OTP combined with email and purpose using HMAC-SHA256
   * @param {string} email
   * @param {string} purpose
   * @param {string} rawOtp
   * @returns {string} Hex hash
   */
  hashOtp(email, purpose, rawOtp) {
    const normalizedEmail = email.toLowerCase().trim();
    return crypto
      .createHmac('sha256', config.otp.secret)
      .update(`${normalizedEmail}:${purpose}:${rawOtp}`)
      .digest('hex');
  },

  /**
   * Create and store a new secure OTP
   * @param {{ email: string, purpose: string, userId?: number|null }} param0
   * @param {object} [connection]
   * @returns {Promise<{ otp: string, expiresAt: Date }>}
   */
  async createAndStoreOtp({ email, purpose, userId = null }, connection = null) {
    const normalizedEmail = email.toLowerCase().trim();

    // 1. Check resend cooldown
    const lastCreatedAt = await otpModel.getLatestCreatedAt({ email: normalizedEmail, purpose }, connection);
    if (lastCreatedAt) {
      const elapsedSeconds = (Date.now() - new Date(lastCreatedAt).getTime()) / 1000;
      if (elapsedSeconds < config.otp.resendCooldownSeconds) {
        const waitSeconds = Math.ceil(config.otp.resendCooldownSeconds - elapsedSeconds);
        logger.warn('OTP', `Resend rejected due to cooldown for email: ${normalizedEmail}`);
        const err = new Error(`Please wait ${waitSeconds} seconds before requesting another code.`);
        err.code = 'OTP_COOLDOWN';
        err.retryAfter = waitSeconds;
        throw err;
      }
    }

    // 2. Invalidate previous pending OTPs
    await otpModel.invalidatePrevious({ email: normalizedEmail, purpose }, connection);

    // 3. Generate raw OTP and hash
    const rawOtp = this.generateNumericOtp();
    const hashedOtp = this.hashOtp(normalizedEmail, purpose, rawOtp);
    const expiresAt = new Date(Date.now() + config.otp.expiryMinutes * 60 * 1000);

    // 4. Save to database
    await otpModel.createOtp(
      {
        userId,
        email: normalizedEmail,
        hashedOtp,
        purpose,
        expiresAt,
        maxAttempts: config.otp.maxAttempts
      },
      connection
    );

    return { otp: rawOtp, expiresAt };
  },

  /**
   * Verify an OTP submitted by the user
   * @param {{ email: string, purpose: string, otp: string }} param0
   * @param {object} [connection]
   * @returns {Promise<{ valid: boolean, userId?: number, reason?: string, attemptsLeft?: number }>}
   */
  async verifyOtp({ email, purpose, otp }, connection = null) {
    const normalizedEmail = email.toLowerCase().trim();
    const rawOtp = String(otp || '').trim();

    if (!rawOtp || rawOtp.length !== 6) {
      logger.warn('OTP', `OTP verification failed: invalid format for ${normalizedEmail}`);
      return { valid: false, reason: 'INVALID_FORMAT' };
    }

    const record = await otpModel.findLatestActive({ email: normalizedEmail, purpose, lock: true }, connection);

    if (!record) {
      logger.warn('OTP', `OTP verification failed: no active OTP found for ${normalizedEmail} (purpose: ${purpose})`);
      return { valid: false, reason: 'NOT_FOUND_OR_EXPIRED' };
    }

    // Check expiration
    if (new Date() > new Date(record.expires_at)) {
      await otpModel.markExpired(record.id, connection);
      logger.warn('OTP', `OTP verification failed: OTP expired for ${normalizedEmail}`);
      return { valid: false, reason: 'EXPIRED' };
    }

    // Check attempts
    if (record.attempts >= record.max_attempts) {
      await otpModel.markExpired(record.id, connection);
      logger.warn('OTP', `OTP verification failed: max attempts exceeded for ${normalizedEmail}`);
      return { valid: false, reason: 'MAX_ATTEMPTS_EXCEEDED' };
    }

    // Verify hash using constant-time comparison
    const expectedHash = record.otp;
    const computedHash = this.hashOtp(normalizedEmail, purpose, rawOtp);

    const isMatch =
      expectedHash.length === computedHash.length &&
      crypto.timingSafeEqual(Buffer.from(expectedHash, 'hex'), Buffer.from(computedHash, 'hex'));

    if (!isMatch) {
      await otpModel.incrementAttempts(record.id, connection);
      const attemptsLeft = Math.max(0, record.max_attempts - (record.attempts + 1));
      logger.warn('OTP', `OTP verification failed: incorrect code for ${normalizedEmail}. Attempts left: ${attemptsLeft}`);
      return { valid: false, reason: 'INCORRECT_CODE', attemptsLeft };
    }

    // Successful verification
    await otpModel.markVerified(record.id, connection);
    await otpModel.markConsumed(record.id, connection);
    logger.success('OTP', `Email verification completed successfully for ${normalizedEmail} (purpose: ${purpose})`);

    return { valid: true, userId: record.user_id, otpRecordId: record.id };
  }
};

module.exports = otpservice;

