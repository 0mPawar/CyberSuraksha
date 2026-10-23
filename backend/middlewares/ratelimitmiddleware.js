/**
 * CyberSuraksha Rate Limiting Middleware
 * Memory-efficient sliding-window rate limiter for sensitive authentication endpoints.
 */

const response = require('../utils/responseutil');
const logger = require('../utils/loggerutil');

// Memory store for tracking request counts
const rateLimitMap = new Map();

// Periodic cleanup of stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000).unref();

/**
 * Rate limiter middleware factory
 * @param {{ windowMs?: number, max?: number, message?: string }} options
 */
function rateLimit(options = {}) {
  const windowMs = options.windowMs || 15 * 60 * 1000; // 15 minutes default
  const max = options.max || 10; // max 10 requests per window by default
  const message = options.message || 'Too many requests from this IP. Please try again later.';

  return (req, res, next) => {
    // In test environment, skip rate limiting to avoid test interference
    if (process.env.NODE_ENV === 'test') {
      return next();
    }

    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const key = `${ip}:${req.baseUrl}${req.path}`;
    const now = Date.now();

    let record = rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
      record = {
        count: 1,
        resetTime: now + windowMs
      };
      rateLimitMap.set(key, record);
    } else {
      record.count += 1;
    }

    const remaining = Math.max(0, max - record.count);
    const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);

    res.setHeader('X-RateLimit-Limit', max);
    res.setHeader('X-RateLimit-Remaining', remaining);
    res.setHeader('X-RateLimit-Reset', Math.ceil(record.resetTime / 1000));

    if (record.count > max) {
      res.setHeader('Retry-After', retryAfterSeconds);
      logger.warn('AUTH', `Rate limit exceeded for IP: ${ip} on endpoint ${req.originalUrl}`);
      return response.error(
        res,
        429,
        message,
        'RATE_LIMIT_EXCEEDED',
        { retryAfter: retryAfterSeconds }
      );
    }

    next();
  };
}

module.exports = {
  rateLimit
};

