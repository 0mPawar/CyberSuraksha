/**
 * CyberSuraksha Token Support Model
 * Queries for supporting security tables: refresh_tokens and password_reset_tokens.
 * Stores only cryptographic SHA-256 hashes of tokens.
 */

const db = require('../config/databaseconfig');

const tokensupportmodel = {
  // --------------------------------------------------------------------------
  // REFRESH TOKENS
  // --------------------------------------------------------------------------

  async saveRefreshToken({ userId, tokenHash, expiresAt }, connection = null) {
    const sql = `
      INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.query(sql, [userId, tokenHash, expiresAt], connection);
    return result.insertId;
  },

  async findActiveRefreshToken(tokenHash, connection = null) {
    const sql = `
      SELECT id, user_id, token_hash, expires_at, revoked_at, created_at
      FROM refresh_tokens
      WHERE token_hash = ? AND revoked_at IS NULL AND expires_at > NOW()
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [tokenHash], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  async revokeRefreshToken(tokenHash, connection = null) {
    const sql = `
      UPDATE refresh_tokens
      SET revoked_at = CURRENT_TIMESTAMP
      WHERE token_hash = ?
    `;
    const [result] = await db.query(sql, [tokenHash], connection);
    return result.affectedRows > 0;
  },

  async revokeAllUserRefreshTokens(userId, connection = null) {
    const sql = `
      UPDATE refresh_tokens
      SET revoked_at = CURRENT_TIMESTAMP
      WHERE user_id = ? AND revoked_at IS NULL
    `;
    const [result] = await db.query(sql, [userId], connection);
    return result.affectedRows;
  },

  // --------------------------------------------------------------------------
  // PASSWORD RESET TOKENS (Single-Use Authorization)
  // --------------------------------------------------------------------------

  async saveResetToken({ userId, tokenHash, purpose, expiresAt }, connection = null) {
    const sql = `
      INSERT INTO password_reset_tokens (user_id, token_hash, purpose, expires_at)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [userId, tokenHash, purpose, expiresAt], connection);
    return result.insertId;
  },

  async findActiveResetToken({ tokenHash, purpose }, connection = null) {
    const sql = `
      SELECT id, user_id, token_hash, purpose, expires_at, consumed_at, created_at
      FROM password_reset_tokens
      WHERE token_hash = ? AND purpose = ? AND consumed_at IS NULL AND expires_at > NOW()
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [tokenHash, purpose], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  async consumeResetToken(id, connection = null) {
    const sql = `
      UPDATE password_reset_tokens
      SET consumed_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    await db.query(sql, [id], connection);
  }
};

module.exports = tokensupportmodel;

