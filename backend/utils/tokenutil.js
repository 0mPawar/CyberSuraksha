/**
 * CyberSuraksha Token Utilities
 * Handles JWT access token generation/verification and secure cryptographic refresh/reset tokens.
 */

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../config/environmentconfig');

const tokenutil = {
  /**
   * Generates a signed short-lived JWT access token
   * @param {{ id: string|number, email: string, role: string }} user
   * @returns {string}
   */
  generateAccessToken(user) {
    if (!user || !user.id || !user.email) {
      throw new Error('User payload requires at least id and email');
    }

    const payload = {
      sub: String(user.id),
      email: user.email,
      role: user.role || 'user',
      jti: crypto.randomUUID()
    };

    return jwt.sign(payload, config.jwt.accessSecret, {
      expiresIn: config.jwt.accessExpiresIn,
      issuer: config.jwt.issuer,
      audience: config.jwt.audience,
      algorithm: config.jwt.algorithm
    });
  },

  /**
   * Verifies an access token with strict signature, algorithm, audience, and issuer checking
   * @param {string} token
   * @returns {object} Decoded JWT payload
   */
  verifyAccessToken(token) {
    if (!token || typeof token !== 'string') {
      throw new Error('Token must be a non-empty string');
    }

    return jwt.verify(token, config.jwt.accessSecret, {
      algorithms: [config.jwt.algorithm],
      issuer: config.jwt.issuer,
      audience: config.jwt.audience
    });
  },

  /**
   * Generates a cryptographically random refresh token and its SHA-256 hash
   * @returns {{ token: string, tokenHash: string }}
   */
  generateRefreshToken() {
    const rawToken = crypto.randomBytes(40).toString('hex');
    const tokenHash = this.hashToken(rawToken);
    return { token: rawToken, tokenHash };
  },

  /**
   * Computes a SHA-256 hash of any token string
   * @param {string} token
   * @returns {string}
   */
  hashToken(token) {
    if (!token || typeof token !== 'string') {
      throw new Error('Token to hash must be a non-empty string');
    }
    return crypto.createHash('sha256').update(token).digest('hex');
  },

  /**
   * Generates a single-use authorization token for password reset / change
   * @returns {{ token: string, tokenHash: string }}
   */
  generateResetToken() {
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = this.hashToken(rawToken);
    return { token: rawToken, tokenHash };
  }
};

module.exports = tokenutil;

