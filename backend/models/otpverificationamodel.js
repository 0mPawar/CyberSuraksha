/**
 * CyberSuraksha OTP Verification Model
 * Parameterized database queries for otp_verifications table.
 * All queries store and compare cryptographically hashed OTP tokens.
 */

const db = require('../config/databaseconfig');

const otpverificationamodel = {
  /**
   * Create a new OTP verification record
   * @param {object} param0
   * @param {object} [connection]
   * @returns {Promise<number>} New OTP record ID
   */
  async createOtp({ userId = null, email, hashedOtp, purpose, expiresAt, maxAttempts = 5 }, connection = null) {
    const sql = `
      INSERT INTO otp_verifications (user_id, email, otp, purpose, max_attempts, status, expires_at)
      VALUES (?, ?, ?, ?, ?, 'pending', ?)
    `;
    const [result] = await db.query(
      sql,
      [userId, email.toLowerCase().trim(), hashedOtp, purpose, maxAttempts, expiresAt],
      connection
    );
    return result.insertId;
  },

  /**
   * Invalidate or supersede previous active/pending OTPs for the same email and purpose
   * @param {{ email: string, purpose: string }} param0
   * @param {object} [connection]
   */
  async invalidatePrevious({ email, purpose }, connection = null) {
    const sql = `
      UPDATE otp_verifications
      SET status = 'expired'
      WHERE email = ? AND purpose = ? AND status = 'pending'
    `;
    const [result] = await db.query(sql, [email.toLowerCase().trim(), purpose], connection);
    return result.affectedRows;
  },

  /**
   * Find the latest pending OTP for an email and purpose (supports FOR UPDATE lock)
   * @param {{ email: string, purpose: string, lock?: boolean }} param0
   * @param {object} [connection]
   * @returns {Promise<object|null>}
   */
  async findLatestActive({ email, purpose, lock = false }, connection = null) {
    const lockClause = lock && connection ? ' FOR UPDATE' : '';
    const sql = `
      SELECT id, user_id, email, otp, purpose, attempts, max_attempts, status, expires_at, created_at
      FROM otp_verifications
      WHERE email = ? AND purpose = ? AND status = 'pending'
      ORDER BY id DESC
      LIMIT 1${lockClause}
    `;
    const [rows] = await db.query(sql, [email.toLowerCase().trim(), purpose], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Increment attempt counter for an OTP record
   * @param {number|string} id
   * @param {object} [connection]
   */
  async incrementAttempts(id, connection = null) {
    const sql = `
      UPDATE otp_verifications
      SET attempts = attempts + 1,
          status = CASE WHEN attempts + 1 >= max_attempts THEN 'expired' ELSE status END
      WHERE id = ?
    `;
    await db.query(sql, [id], connection);
  },

  /**
   * Mark OTP record as verified
   * @param {number|string} id
   * @param {object} [connection]
   */
  async markVerified(id, connection = null) {
    const sql = `
      UPDATE otp_verifications
      SET status = 'verified', verified_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    await db.query(sql, [id], connection);
  },

  /**
   * Mark OTP record as consumed
   * @param {number|string} id
   * @param {object} [connection]
   */
  async markConsumed(id, connection = null) {
    const sql = `
      UPDATE otp_verifications
      SET consumed_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    await db.query(sql, [id], connection);
  },

  /**
   * Mark OTP record as expired
   * @param {number|string} id
   * @param {object} [connection]
   */
  async markExpired(id, connection = null) {
    const sql = `
      UPDATE otp_verifications
      SET status = 'expired'
      WHERE id = ?
    `;
    await db.query(sql, [id], connection);
  },

  /**
   * Check last OTP creation timestamp for resend cooldown enforcement
   * @param {{ email: string, purpose: string }} param0
   * @param {object} [connection]
   */
  async getLatestCreatedAt({ email, purpose }, connection = null) {
    const sql = `
      SELECT created_at
      FROM otp_verifications
      WHERE email = ? AND purpose = ?
      ORDER BY id DESC
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [email.toLowerCase().trim(), purpose], connection);
    return rows.length > 0 ? rows[0].created_at : null;
  }
};

module.exports = otpverificationamodel;

