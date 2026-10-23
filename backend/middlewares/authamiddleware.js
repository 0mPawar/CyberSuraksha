/**
 * CyberSuraksha Authentication Middleware
 * Extracts, verifies, and validates JWT access tokens on protected routes.
 * Checks real-time user status in MySQL to reject blocked or deleted accounts.
 */

const tokenService = require('../services/tokenservice');
const userModel = require('../models/useramodel');
const response = require('../utils/responseutil');
const logger = require('../utils/loggerutil');

async function authamiddleware(req, res, next) {
  let token = null;

  // 1. Extract Bearer token from Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else if (req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    return response.error(res, 401, 'Authentication token missing. Please sign in.', 'TOKEN_MISSING');
  }

  // 2. Verify signature and claims
  let decoded;
  try {
    decoded = tokenService.verifyAccessToken(token);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      logger.warn('AUTH', 'Access token expired');
      return response.error(res, 401, 'Your session has expired. Please sign in again.', 'TOKEN_EXPIRED');
    }
    logger.warn('AUTH', `Invalid token provided: ${err.message}`);
    return response.error(res, 401, 'Invalid authentication token.', 'TOKEN_INVALID');
  }

  // 3. Load user from database to verify active status
  try {
    const user = await userModel.findById(decoded.sub);
    if (!user) {
      return response.error(res, 401, 'Account associated with token no longer exists.', 'USER_NOT_FOUND');
    }

    if (user.status === 'blocked') {
      logger.warn('AUTH', `Blocked user attempted access: ${user.email}`);
      return response.error(res, 403, 'Your account is blocked. Contact system administrator.', 'ACCOUNT_BLOCKED');
    }

    if (user.status === 'inactive') {
      logger.warn('AUTH', `Inactive user attempted access: ${user.email}`);
      return response.error(res, 403, 'Your account is inactive.', 'ACCOUNT_INACTIVE');
    }

    // Attach minimal sanitized user object to request
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role_id: user.role_id,
      role: user.role
    };

    next();
  } catch (dbErr) {
    logger.error('AUTH', 'Failed to verify user in database during authentication check', dbErr);
    return response.error(res, 500, 'Authentication check failed', 'AUTH_CHECK_FAILED');
  }
}

module.exports = authamiddleware;

