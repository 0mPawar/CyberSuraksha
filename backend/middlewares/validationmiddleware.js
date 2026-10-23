/**
 * CyberSuraksha Request Validation Middleware
 * Validates request payload against validator functions and returns standardized 400 responses.
 */

const response = require('../utils/responseutil');

function validateBody(validatorFn) {
  return (req, res, next) => {
    if (typeof validatorFn !== 'function') {
      return next();
    }

    const { valid, errors, sanitized } = validatorFn(req.body);

    if (!valid) {
      return response.error(res, 400, 'Validation failed for request data', 'VALIDATION_ERROR', errors);
    }

    if (sanitized) {
      req.body = { ...req.body, ...sanitized };
    }

    next();
  };
}

module.exports = {
  validateBody
};

