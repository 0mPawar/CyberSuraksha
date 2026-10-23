/**
 * CyberSuraksha Role Controller
 * Handles administrative role inspection with RBAC checks.
 */

const roleModel = require('../models/roleamodel');
const rolePermissionModel = require('../models/rolepermissionamodel');
const response = require('../utils/responseutil');

const roleacontroller = {
  /**
   * GET /api/roles
   * Protected with 'roles.view' permission
   */
  async getRoles(req, res, next) {
    try {
      const roles = await roleModel.listAll();
      return response.success(res, 200, 'Roles retrieved successfully', roles);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET /api/roles/:id/permissions
   * Protected with 'roles.view' permission
   */
  async getRolePermissions(req, res, next) {
    try {
      const roleId = req.params.id;
      const roleWithPermissions = await rolePermissionModel.getRoleWithPermissions(roleId);

      if (!roleWithPermissions) {
        return response.error(res, 404, 'Role not found', 'ROLE_NOT_FOUND');
      }

      return response.success(res, 200, 'Role permissions retrieved successfully', roleWithPermissions);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = roleacontroller;

