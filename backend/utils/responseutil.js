/**
 * CyberSuraksha API Response Utilities
 * Provides standardized JSON response envelopes for successes and errors.
 */

const responseutil = {
  /**
   * Send a successful JSON response
   * @param {import('express').Response} res
   * @param {number} statusCode
   * @param {string} message
   * @param {object|null} data
   */
  success(res, statusCode = 200, message = 'Operation successful', data = null) {
    const payload = {
      success: true,
      message
    };
    if (data !== null && data !== undefined) {
      payload.data = data;
    }
    return res.status(statusCode).json(payload);
  },

  /**
   * Send an error JSON response
   * @param {import('express').Response} res
   * @param {number} statusCode
   * @param {string} message
   * @param {string|null} errorCode
   * @param {object|array|null} details
   */
  error(res, statusCode = 500, message = 'Internal server error', errorCode = 'SERVER_ERROR', details = null) {
    const payload = {
      success: false,
      message,
      error: {
        code: errorCode || 'ERROR'
      }
    };
    if (details) {
      payload.error.details = details;
    }
    return res.status(statusCode).json(payload);
  }
};

module.exports = responseutil;

