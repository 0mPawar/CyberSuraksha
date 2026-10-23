/**
 * CyberSuraksha Permission (RBAC) Middleware
 * Verifies role-based permissions against MySQL for each protected endpoint.
 * Strictly avoids trusting client claims or stale token permissions.
 */

const permissionService = require('../services/permissionservice');
const response = require('../utils/responseutil');
const logger = require('../utils/loggerutil');

/**
 * Middleware factory requiring a specific permission key (e.g. 'users.view')
 * @param {string} permissionKey
 */
function requirePermission(permissionKey) {
  return async (req, res, next) => {
    if (!req.user || !req.user.id || !req.user.role_id) {
      return response.error(res, 401, 'Authentication required before checking permissions.', 'UNAUTHENTICATED');
    }

    try {
      const allowed = await permissionService.hasPermission(req.user.role_id, permissionKey);

      if (!allowed) {
        logger.warn(
          'RBAC',
          `Permission denied: User #${req.user.id} (${req.user.role}) attempted to access "${permissionKey}"`
        );
        return response.error(
          res,
          403,
          `Access forbidden: You lack the required permission (${permissionKey}) to perform this action.`,
          'INSUFFICIENT_PERMISSIONS'
        );
      }

      next();
    } catch (err) {
      logger.error('RBAC', `Error evaluating permission "${permissionKey}"`, err);
      return response.error(res, 500, 'Authorization check failed.', 'RBAC_ERROR');
    }
  };
}

/**
 * Middleware requiring ANY of the provided permissions
 * @param {string[]} permissionKeys
 */
function requireAnyPermission(permissionKeys) {
  return async (req, res, next) => {
    if (!req.user || !req.user.id || !req.user.role_id) {
      return response.error(res, 401, 'Authentication required before checking permissions.', 'UNAUTHENTICATED');
    }

    try {
      for (const key of permissionKeys) {
        const allowed = await permissionService.hasPermission(req.user.role_id, key);
        if (allowed) {
          return next();
        }
      }

      logger.warn(
        'RBAC',
        `Permission denied: User #${req.user.id} lacks any of [${permissionKeys.join(', ')}]`
      );
      return response.error(
        res,
        403,
        'Access forbidden: You lack the required permissions to perform this action.',
        'INSUFFICIENT_PERMISSIONS'
      );
    } catch (err) {
      logger.error('RBAC', 'Error evaluating permissions', err);
      return response.error(res, 500, 'Authorization check failed.', 'RBAC_ERROR');
    }
  };
}

module.exports = {
  requirePermission,
  requireAnyPermission
};

