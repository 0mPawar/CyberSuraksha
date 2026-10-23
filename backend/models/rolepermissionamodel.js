/**
 * CyberSuraksha Role-Permission Mapping Model
 * Parameterized database queries for role_permissions table.
 */

const db = require('../config/databaseconfig');

const rolepermissionamodel = {
  /**
   * Get all permission keys granted to a specific role ID
   * @param {number|string} roleId
   * @param {object} [connection]
   * @returns {Promise<string[]>} Array of permission keys (e.g. ['users.view', 'profile.update'])
   */
  async getPermissionsByRoleId(roleId, connection = null) {
    const sql = `
      SELECT p.permission_key
      FROM role_permissions rp
      JOIN permissions p ON rp.permission_id = p.id
      WHERE rp.role_id = ?
    `;
    const [rows] = await db.query(sql, [roleId], connection);
    return rows.map(r => r.permission_key);
  },

  /**
   * Checks directly in MySQL whether a role has a specific permission
   * @param {number|string} roleId
   * @param {string} permissionKey
   * @param {object} [connection]
   * @returns {Promise<boolean>}
   */
  async hasPermission(roleId, permissionKey, connection = null) {
    const sql = `
      SELECT 1 AS allowed
      FROM role_permissions rp
      JOIN permissions p ON rp.permission_id = p.id
      WHERE rp.role_id = ? AND p.permission_key = ?
      LIMIT 1
    `;
    const [rows] = await db.query(sql, [roleId, permissionKey], connection);
    return rows.length > 0 && rows[0].allowed === 1;
  },

  /**
   * Get full role details including assigned permissions list
   * @param {number|string} roleId
   * @param {object} [connection]
   */
  async getRoleWithPermissions(roleId, connection = null) {
    const roleSql = `SELECT id, role_name, role, description, status, created_at FROM roles WHERE id = ? LIMIT 1`;
    const [roleRows] = await db.query(roleSql, [roleId], connection);
    if (roleRows.length === 0) return null;

    const role = roleRows[0];
    const permSql = `
      SELECT p.id, p.action, p.permission_key, m.module_key, m.module_name
      FROM role_permissions rp
      JOIN permissions p ON rp.permission_id = p.id
      JOIN modules m ON p.module_id = m.id
      WHERE rp.role_id = ?
      ORDER BY m.module_key ASC, p.id ASC
    `;
    const [permRows] = await db.query(permSql, [roleId], connection);
    role.permissions = permRows;
    return role;
  },

  /**
   * Assign a permission to a role
   * @param {number|string} roleId
   * @param {number|string} permissionId
   * @param {object} [connection]
   */
  async assignPermission(roleId, permissionId, connection = null) {
    const sql = `INSERT IGNORE INTO role_permissions (role_id, permission_id) VALUES (?, ?)`;
    await db.query(sql, [roleId, permissionId], connection);
    return true;
  },

  /**
   * Remove a permission from a role
   * @param {number|string} roleId
   * @param {number|string} permissionId
   * @param {object} [connection]
   */
  async removePermission(roleId, permissionId, connection = null) {
    const sql = `DELETE FROM role_permissions WHERE role_id = ? AND permission_id = ?`;
    await db.query(sql, [roleId, permissionId], connection);
    return true;
  }
};

module.exports = rolepermissionamodel;

