/**
 * CyberSuraksha User Controller
 * Handles user profile endpoints and administrative user management with RBAC checks.
 */

const userModel = require('../models/useramodel');
const permissionService = require('../services/permissionservice');
const response = require('../utils/responseutil');
const logger = require('../utils/loggerutil');

const useracontroller = {
  /**
   * GET /api/users/profile
   * Authenticated user retrieves their own profile
   */
  async getProfile(req, res, next) {
    try {
      const user = await userModel.findById(req.user.id);
      if (!user) {
        return response.error(res, 404, 'User profile not found', 'NOT_FOUND');
      }

      const permissions = await permissionService.getPermissionsForRole(user.role_id);

      return response.success(res, 200, 'Profile retrieved successfully', {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        role: user.role,
        role_name: user.role_name,
        status: user.status,
        email_verified: Boolean(user.email_verified),
        created_at: user.created_at,
        permissions
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * PATCH /api/users/profile
   * Authenticated user updates their own profile
   */
  async updateProfile(req, res, next) {
    try {
      const { name, phone, gender } = req.body;
      await userModel.update(req.user.id, { name, phone, gender });

      const updated = await userModel.findById(req.user.id);

      return response.success(res, 200, 'Profile updated successfully', {
        id: updated.id,
        name: updated.name,
        email: updated.email,
        phone: updated.phone,
        gender: updated.gender,
        role: updated.role,
        status: updated.status
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET /api/users
   * Protected with 'users.view' permission
   */
  async listUsers(req, res, next) {
    try {
      const page = parseInt(req.query.page || '1', 10);
      const limit = parseInt(req.query.limit || '20', 10);
      const status = req.query.status || null;
      const roleId = req.query.role_id ? parseInt(req.query.role_id, 10) : null;
      const search = req.query.search || null;

      const [users, total] = await Promise.all([
        userModel.listUsers({ page, limit, status, roleId, search }),
        userModel.countUsers({ status, roleId, search })
      ]);

      const totalPages = Math.ceil(total / limit) || 1;

      return response.success(res, 200, 'Users retrieved successfully', {
        users: users.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          phone: u.phone,
          gender: u.gender,
          status: u.status,
          role: u.role,
          role_name: u.role_name,
          email_verified: Boolean(u.email_verified),
          created_at: u.created_at
        })),
        pagination: {
          total,
          page,
          limit,
          totalPages
        }
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * PATCH /api/users/:id/status
   * Protected with 'users.update' permission
   */
  async updateUserStatus(req, res, next) {
    try {
      const targetUserId = req.params.id;
      const { status } = req.body;

      // Prevent admin from blocking or inactivating their own current account
      if (String(targetUserId) === String(req.user.id) && status !== 'active') {
        return response.error(res, 400, 'You cannot deactivate or block your own account', 'SELF_DEACTIVATION_PREVENTED');
      }

      const targetUser = await userModel.findById(targetUserId);
      if (!targetUser) {
        return response.error(res, 404, 'User not found', 'USER_NOT_FOUND');
      }

      await userModel.updateStatus(targetUserId, status);
      logger.info('AUTH', `User status updated for #${targetUserId} to "${status}" by Admin #${req.user.id}`);

      return response.success(res, 200, `User status updated to ${status} successfully`, {
        id: targetUser.id,
        email: targetUser.email,
        status
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = useracontroller;

