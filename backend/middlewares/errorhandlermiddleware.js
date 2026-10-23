/**
 * CyberSuraksha Centralized Error Handler Middleware
 * Catches unhandled errors, logs them securely, and returns consistent JSON errors.
 */

const response = require('../utils/responseutil');
const logger = require('../utils/loggerutil');
const config = require('../config/environmentconfig');

function errorhandlermiddleware(err, req, res, next) {
  // If response has already started streaming, delegate to Express default handler
  if (res.headersSent) {
    return next(err);
  }

  // Handle JSON syntax parse error from express.json()
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    logger.warn('SERVER', `Malformed JSON payload received: ${err.message}`);
    return response.error(res, 400, 'Malformed JSON payload in request body', 'INVALID_JSON');
  }

  // Handle known operational error codes
  const statusCode = err.statusCode || (err.code === 'UNAUTHENTICATED' ? 401 : err.code === 'FORBIDDEN' ? 403 : 400);

  // Database error handling
  if (err.sqlState || err.sqlMessage) {
    logger.error('DATABASE', 'Database query execution error occurred', err);
    const message = config.isProduction ? 'A database error occurred' : err.message;
    return response.error(res, 500, message, 'DATABASE_ERROR');
  }

  // General server error logging
  logger.error('SERVER', `Unhandled exception on ${req.method} ${req.originalUrl}`, err);

  const safeMessage = err.message || 'An unexpected internal error occurred';
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';

  return response.error(
    res,
    statusCode >= 400 && statusCode < 600 ? statusCode : 500,
    safeMessage,
    errorCode,
    config.isProduction ? null : err.details || null
  );
}

module.exports = errorhandlermiddleware;

