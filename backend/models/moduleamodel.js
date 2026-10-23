/**
 * CyberSuraksha Module Model
 * Parameterized database queries for modules table.
 */

const db = require('../config/databaseconfig');

const moduleamodel = {
  /**
   * Find a module by ID
   * @param {number|string} id
   * @param {object} [connection]
   */
  async findById(id, connection = null) {
    const sql = `SELECT id, module_key, module_name, created_at FROM modules WHERE id = ? LIMIT 1`;
    const [rows] = await db.query(sql, [id], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * Find a module by unique key
   * @param {string} moduleKey
   * @param {object} [connection]
   */
  async findByKey(moduleKey, connection = null) {
    const sql = `SELECT id, module_key, module_name, created_at FROM modules WHERE module_key = ? LIMIT 1`;
    const [rows] = await db.query(sql, [moduleKey], connection);
    return rows.length > 0 ? rows[0] : null;
  },

  /**
   * List all system modules
   * @param {object} [connection]
   */
  async listAll(connection = null) {
    const sql = `SELECT id, module_key, module_name, created_at FROM modules ORDER BY id ASC`;
    const [rows] = await db.query(sql, [], connection);
    return rows;
  }
};

module.exports = moduleamodel;

