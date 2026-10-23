/**
 * CyberSuraksha Permission Model
 * Parameterized database queries for permissions table.
 */

const db = require('../config/databaseconfig');

const permissionamodel = {
  /**
   * Find a permission by ID
   * @param {number|string} id
   * @param {object} [connection]
   */
  async findById(id, connection = null) {
    const sql = `
      SELECT p.id, p.module_id, p.action, p.permission_key, m.module_key, m.module_name
      FROM permissions p
      JOIN modules m ON p.module_id = m.id
      WHERE p.id = ?
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [id], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Find a permission by unique permission_key (e.g. 'users.view')
   * @param {string} permissionKey
   * @param {object} [connection]
   */
  async findByKey(permissionKey, connection = null) {
    const sql = `
      SELECT p.id, p.module_id, p.action, p.permission_key, m.module_key, m.module_name
      FROM permissions p
      JOIN modules m ON p.module_id = m.id
      WHERE p.permission_key = ?
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [permissionKey], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Find all permissions for a module
   * @param {number|string} moduleId
   * @param {object} [connection]
   */
  async findByModuleId(moduleId, connection = null) {
    const sql = `
      SELECT p.id, p.module_id, p.action, p.permission_key
      FROM permissions p
      WHERE p.module_id = ?
      ORDER BY p.id ASC
    `;
    const [rows] = await db.query(sql, [moduleId], connection);
    return rows;
  },

  /**
   * List all permissions with module details
   * @param {object} [connection]
   */
  async listAll(connection = null) {
    const sql = `
      SELECT p.id, p.module_id, p.action, p.permission_key, m.module_key, m.module_name
      FROM permissions p
      JOIN modules m ON p.module_id = m.id
      ORDER BY m.module_key ASC, p.id ASC
    `;
    const [rows] = await db.query(sql, [], connection);
    return rows;
  }
};

module.exports = permissionamodel;

