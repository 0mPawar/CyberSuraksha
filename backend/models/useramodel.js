/**
 * CyberSuraksha User Model
 * Parameterized database queries for users table.
 */

const db = require('../config/databaseconfig');

const useramodel = {
  /**
   * Find a user by their unique primary key ID
   * @param {number|string} id
   * @param {object} [connection]
   * @returns {Promise<object|null>}
   */
  async findById(id, connection = null) {
    const sql = `
      SELECT u.id, u.role_id, u.name, u.email, u.password, u.phone, u.gender, 
             u.status, u.email_verified, u.created_at, u.updated_at,
             r.role, r.role_name
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.id
      WHERE u.id = ?
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [id], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Find a user by lowercase normalized email
   * @param {string} email
   * @param {object} [connection]
   * @returns {Promise<object|null>}
   */
  async findByEmail(email, connection = null) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const sql = `
      SELECT u.id, u.role_id, u.name, u.email, u.password, u.phone, u.gender, 
             u.status, u.email_verified, u.created_at, u.updated_at,
             r.role, r.role_name
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.id
      WHERE LOWER(u.email) = ?
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [normalizedEmail], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Create a new user record
   * @param {object} userData
   * @param {object} [connection]
   * @returns {Promise<number>} New user ID
   */
  async create(userData, connection = null) {
    const {
      role_id,
      name,
      email,
      password,
      phone = null,
      gender = null,
      status = 'active',
      email_verified = 0
    } = userData;

    const sql = `
      INSERT INTO users (role_id, name, email, password, phone, gender, status, email_verified)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(
      sql,
      [role_id, name, email.toLowerCase().trim(), password, phone, gender, status, email_verified],
      connection
    );
    return result.insertId;
  },

  /**
   * Update profile details
   * @param {number|string} id
   * @param {{ name?: string, phone?: string, gender?: string }} updateData
   * @param {object} [connection]
   */
  async update(id, updateData, connection = null) {
    const fields = [];
    const values = [];

    if (updateData.name !== undefined) {
      fields.push('name = ?');
      values.push(updateData.name);
    }
    if (updateData.phone !== undefined) {
      fields.push('phone = ?');
      values.push(updateData.phone);
    }
    if (updateData.gender !== undefined) {
      fields.push('gender = ?');
      values.push(updateData.gender);
    }

    if (fields.length === 0) return true;

    values.push(id);
    const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
    await db.query(sql, values, connection);
    return true;
  },

  /**
   * Update account status (active, inactive, blocked)
   * @param {number|string} id
   * @param {'active'|'inactive'|'blocked'} status
   * @param {object} [connection]
   */
  async updateStatus(id, status, connection = null) {
    const sql = `UPDATE users SET status = ? WHERE id = ?`;
    await db.query(sql, [status, id], connection);
    return true;
  },

  /**
   * Update password hash
   * @param {number|string} id
   * @param {string} hashedPassword
   * @param {object} [connection]
   */
  async updatePassword(id, hashedPassword, connection = null) {
    const sql = `UPDATE users SET password = ? WHERE id = ?`;
    await db.query(sql, [hashedPassword, id], connection);
    return true;
  },

  /**
   * Mark user's email as verified
   * @param {number|string} id
   * @param {object} [connection]
   */
  async markEmailVerified(id, connection = null) {
    const sql = `UPDATE users SET email_verified = 1 WHERE id = ?`;
    await db.query(sql, [id], connection);
    return true;
  },

  /**
   * List paginated users with optional filtering
   * @param {{ page?: number, limit?: number, status?: string, roleId?: number, search?: string }} options
   * @param {object} [connection]
   */
  async listUsers({ page = 1, limit = 20, status = null, roleId = null, search = null } = {}, connection = null) {
    const offset = (Math.max(1, page) - 1) * limit;
    const whereClauses = [];
    const params = [];

    if (status) {
      whereClauses.push('u.status = ?');
      params.push(status);
    }
    if (roleId) {
      whereClauses.push('u.role_id = ?');
      params.push(roleId);
    }
    if (search) {
      whereClauses.push('(u.name LIKE ? OR u.email LIKE ? OR u.phone LIKE ?)');
      const term = `%${search}%`;
      params.push(term, term, term);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
    const sql = `
      SELECT u.id, u.role_id, u.name, u.email, u.phone, u.gender, u.status, 
             u.email_verified, u.created_at, u.updated_at,
             r.role, r.role_name
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.id
      ${whereSql}
      ORDER BY u.created_at DESC
      LIMIT ? OFFSET ?
    `;
    params.push(Number(limit), Number(offset));
    const [rows] = await db.query(sql, params, connection);
    return rows;
  },

  /**
   * Count users matching filter criteria
   * @param {{ status?: string, roleId?: number, search?: string }} options
   * @param {object} [connection]
   */
  async countUsers({ status = null, roleId = null, search = null } = {}, connection = null) {
    const whereClauses = [];
    const params = [];

    if (status) {
      whereClauses.push('status = ?');
      params.push(status);
    }
    if (roleId) {
      whereClauses.push('role_id = ?');
      params.push(roleId);
    }
    if (search) {
      whereClauses.push('(name LIKE ? OR email LIKE ? OR phone LIKE ?)');
      const term = `%${search}%`;
      params.push(term, term, term);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
    const sql = `SELECT COUNT(*) AS total FROM users ${whereSql}`;
    const [rows] = await db.query(sql, params, connection);
    return rows[0] ? Number(rows[0].total) : 0;
  }
};

module.exports = useramodel;

