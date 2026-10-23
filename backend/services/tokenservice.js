/**
 * CyberSuraksha Token Service
 * Orchestrates JWT access tokens, rotating hashed refresh tokens, and single-use reset authorization tokens.
 */

const tokenutil = require('../utils/tokenutil');
const tokenSupportModel = require('../models/tokensupportmodel');
const config = require('../config/environmentconfig');
const userModel = require('../models/useramodel');
const logger = require('../utils/loggerutil');

const tokenservice = {
  /**
   * Generates a signed access token
   * @param {{ id: number|string, email: string, role: string }} user
   */
  generateAccessToken(user) {
    return tokenutil.generateAccessToken(user);
  },

  /**
   * Verifies an access token
   * @param {string} token
   */
  verifyAccessToken(token) {
    return tokenutil.verifyAccessToken(token);
  },

  /**
   * Issues and stores a new refresh token for a user
   * @param {number|string} userId
   * @param {object} [connection]
   * @returns {Promise<string>} Plaintext refresh token string for the client
   */
  async issueRefreshToken(userId, connection = null) {
    const { token, tokenHash } = tokenutil.generateRefreshToken();

    // Parse refresh expiration (e.g. '7d' -> 7 days)
    const days = parseInt(config.jwt.refreshExpiresIn, 10) || 7;
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    await tokenSupportModel.saveRefreshToken(
      {
        userId,
        tokenHash,
        expiresAt
      },
      connection
    );

    return token;
  },

  /**
   * Rotates a refresh token: verifies old token, revokes it, and issues fresh access and refresh tokens
   * @param {string} rawRefreshToken
   * @param {object} [connection]
   */
  async rotateRefreshToken(rawRefreshToken, connection = null) {
    if (!rawRefreshToken || typeof rawRefreshToken !== 'string') {
      throw new Error('Refresh token is required');
    }

    const tokenHash = tokenutil.hashToken(rawRefreshToken);
    const existing = await tokenSupportModel.findActiveRefreshToken(tokenHash, connection);

    if (!existing) {
      logger.warn('AUTH', 'Refresh token rotation rejected: invalid, expired, or already revoked token');
      const err = new Error('Invalid or expired refresh token');
      err.code = 'INVALID_REFRESH_TOKEN';
      throw err;
    }

    // Revoke the old refresh token (Single-use rotation)
    await tokenSupportModel.revokeRefreshToken(tokenHash, connection);

    // Verify user is active
    const user = await userModel.findById(existing.user_id, connection);
    if (!user || user.status !== 'active') {
      logger.warn('AUTH', `Refresh token rotation rejected: user ${existing.user_id} is not active`);
      const err = new Error('Account is inactive or blocked');
      err.code = 'ACCOUNT_INACTIVE';
      throw err;
    }

    // Issue new tokens
    const newAccessToken = this.generateAccessToken(user);
    const newRefreshToken = await this.issueRefreshToken(user.id, connection);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  },

  /**
   * Revoke a specific refresh token (used on logout)
   * @param {string} rawRefreshToken
   * @param {object} [connection]
   */
  async revokeRefreshToken(rawRefreshToken, connection = null) {
    if (!rawRefreshToken) return false;
    const tokenHash = tokenutil.hashToken(rawRefreshToken);
    return tokenSupportModel.revokeRefreshToken(tokenHash, connection);
  },

  /**
   * Revoke all active refresh tokens for a user (used on password change/reset)
   * @param {number|string} userId
   * @param {object} [connection]
   */
  async revokeAllUserSessions(userId, connection = null) {
    return tokenSupportModel.revokeAllUserRefreshTokens(userId, connection);
  },

  /**
   * Creates a single-use authorization token for password reset or password change (valid for 10 minutes)
   * @param {number|string} userId
   * @param {'forgot_password'|'change_password'} purpose
   * @param {object} [connection]
   */
  async issueResetAuthorization(userId, purpose, connection = null) {
    const { token, tokenHash } = tokenutil.generateResetToken();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await tokenSupportModel.saveResetToken(
      {
        userId,
        tokenHash,
        purpose,
        expiresAt
      },
      connection
    );

    return token;
  },

  /**
   * Verifies and consumes a single-use reset authorization token
   * @param {string} rawToken
   * @param {'forgot_password'|'change_password'} purpose
   * @param {object} [connection]
   * @returns {Promise<number>} User ID
   */
  async verifyAndConsumeResetAuthorization(rawToken, purpose, connection = null) {
    if (!rawToken || typeof rawToken !== 'string') {
      const err = new Error('Reset authorization token is required');
      err.code = 'RESET_TOKEN_REQUIRED';
      throw err;
    }

    const tokenHash = tokenutil.hashToken(rawToken);
    const record = await tokenSupportModel.findActiveResetToken({ tokenHash, purpose }, connection);

    if (!record) {
      logger.warn('AUTH', `Reset authorization verification failed for purpose: ${purpose}`);
      const err = new Error('Invalid or expired reset authorization token');
      err.code = 'INVALID_RESET_TOKEN';
      throw err;
    }

    // Consume the token so it cannot be reused
    await tokenSupportModel.consumeResetToken(record.id, connection);
    return record.user_id;
  }
};

module.exports = tokenservice;

