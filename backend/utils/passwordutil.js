/**
 * CyberSuraksha Password Utilities
 * Handles secure hashing, verification, and policy enforcement with bcryptjs.
 */

const bcrypt = require('bcryptjs');

const BCRYPT_SALT_ROUNDS = 12;

const passwordutil = {
  /**
   * Hashes a plain password using bcrypt with 12 salt rounds
   * @param {string} password
   * @returns {Promise<string>}
   */
  async hashPassword(password) {
    if (!password || typeof password !== 'string') {
      throw new Error('Password must be a non-empty string');
    }
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    return bcrypt.hash(password, salt);
  },

  /**
   * Compares a plaintext password against a stored bcrypt hash
   * @param {string} plainPassword
   * @param {string} hashedPassword
   * @returns {Promise<boolean>}
   */
  async comparePassword(plainPassword, hashedPassword) {
    if (!plainPassword || !hashedPassword) {
      return false;
    }
    return bcrypt.compare(plainPassword, hashedPassword);
  },

  /**
   * Validates password strength against policy:
   * - At least 8 characters long
   * - Max 100 characters
   * - At least 1 uppercase letter
   * - At least 1 lowercase letter
   * - At least 1 number
   * - At least 1 special character
   * @param {string} password
   * @returns {{ valid: boolean, message?: string }}
   */
  validatePasswordStrength(password) {
    if (typeof password !== 'string') {
      return { valid: false, message: 'Password must be a string' };
    }
    if (password.length < 8) {
      return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (password.length > 100) {
      return { valid: false, message: 'Password must not exceed 100 characters' };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one numeric digit' };
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one special character' };
    }
    return { valid: true };
  }
};

module.exports = passwordutil;

