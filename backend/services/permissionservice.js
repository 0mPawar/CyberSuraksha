/**
 * CyberSuraksha Permission Service
 * Queries and verifies role-permission matrices against the database.
 */

const rolePermissionModel = require('../models/rolepermissionamodel');
const roleModel = require('../models/roleamodel');
const logger = require('../utils/loggerutil');

const permissionservice = {
  /**
   * Retrieves all permissions assigned to a given role ID
   * @param {number|string} roleId
   * @returns {Promise<string[]>}
   */
  async getPermissionsForRole(roleId) {
    if (!roleId) return [];
    return rolePermissionModel.getPermissionsByRoleId(roleId);
  },

  /**
   * Verifies if a role has a specific permission
   * @param {number|string} roleId
   * @param {string} permissionKey
   * @returns {Promise<boolean>}
   */
  async hasPermission(roleId, permissionKey) {
    if (!roleId || !permissionKey) return false;
    return rolePermissionModel.hasPermission(roleId, permissionKey);
  },

  /**
   * Get all system roles with assigned permissions
   */
  async getAllRolesWithPermissions() {
    const roles = await roleModel.listAll();
    const result = [];
    for (const r of roles) {
      const full = await rolePermissionModel.getRoleWithPermissions(r.id);
      result.push(full || r);
    }
    return result;
  }
};

module.exports = permissionservice;

