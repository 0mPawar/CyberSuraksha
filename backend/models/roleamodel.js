/**
 * CyberSuraksha Role Model
 * Parameterized database queries for roles table.
 */

const db = require('../config/databaseconfig');

const roleamodel = {
  /**
   * Find a role by its primary key ID
   * @param {number|string} id
   * @param {object} [connection]
   * @returns {Promise<object|null>}
   */
  async findById(id, connection = null) {
    const sql = `SELECT id, role_name, role, description, status, created_at FROM roles WHERE id = ? LIMIT 1`;
    const [rows] = await db.query(sql, [id], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Find a role by its unique key identifier ('admin', 'user')
   * @param {string} roleKey
   * @param {object} [connection]
   * @returns {Promise<object|null>}
   */
  async findByRole(roleKey, connection = null) {
    const sql = `SELECT id, role_name, role, description, status, created_at FROM roles WHERE role = ? LIMIT 1`;
    const [rows] = await db.query(sql, [roleKey], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * List all roles
   * @param {object} [connection]
   * @returns {Promise<Array>}
   */
  async listAll(connection = null) {
    const sql = `SELECT id, role_name, role, description, status, created_at FROM roles ORDER BY id ASC`;
    const [rows] = await db.query(sql, [], connection);
    return rows;
  },

  /**
   * Create a role
   * @param {object} roleData
   * @param {object} [connection]
   */
  async create({ role_name, role, description = null, status = 'active' }, connection = null) {
    const sql = `INSERT INTO roles (role_name, role, description, status) VALUES (?, ?, ?, ?)`;
    const [result] = await db.query(sql, [role_name, role, description, status], connection);
    return result.insertId;
  }
};

module.exports = roleamodel;

