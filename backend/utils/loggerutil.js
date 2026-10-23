/**
 * CyberSuraksha Reusable Icon Logger
 * Outputs clean, icon-prefixed log lines with timestamps and tag context.
 * Strictly sanitizes inputs to avoid log injection and filters sensitive data.
 */

const SENSITIVE_KEYS = [
  'password',
  'confirmpassword',
  'currentpassword',
  'newpassword',
  'otp',
  'token',
  'accesstoken',
  'refreshtoken',
  'resettoken',
  'changetoken',
  'authorization',
  'smtp_pass',
  'secret'
];

function sanitize(message) {
  if (message === null || message === undefined) {
    return '';
  }
  if (typeof message === 'object') {
    try {
      const sanitizedObj = sanitizeObject(message);
      return JSON.stringify(sanitizedObj);
    } catch {
      return '[Complex Object]';
    }
  }
  // Strip or escape CR / LF to avoid log injection
  return String(message).replace(/[\r\n]+/g, ' ').trim();
}

function sanitizeObject(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const lowerKey = key.toLowerCase();
    if (SENSITIVE_KEYS.some(k => lowerKey.includes(k))) {
      result[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      result[key] = sanitizeObject(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function getTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const yyyy = now.getFullYear();
  const mm = pad(now.getMonth() + 1);
  const dd = pad(now.getDate());
  const hh = pad(now.getHours());
  const min = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  return `[${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}]`;
}

const loggerutil = {
  info(tag, message) {
    const ts = getTimestamp();
    const cleanMsg = sanitize(message);
    const upperTag = String(tag || 'INFO').toUpperCase();
    let icon = 'ℹ️';
    if (upperTag.includes('SERVER')) icon = '🚀';
    else if (upperTag.includes('DATABASE') || upperTag.includes('DB')) icon = '🗄️';
    else if (upperTag.includes('AUTH')) icon = '👤';
    else if (upperTag.includes('OTP')) icon = '📧';
    else if (upperTag.includes('RBAC')) icon = '🛡️';

    console.log(`${ts} ${icon} [${upperTag}] ${cleanMsg}`);
  },

  success(tag, message) {
    const ts = getTimestamp();
    const cleanMsg = sanitize(message);
    const upperTag = String(tag || 'SUCCESS').toUpperCase();
    let icon = '✅';
    if (upperTag.includes('AUTH') && cleanMsg.toLowerCase().includes('login')) icon = '🔐';
    else if (upperTag.includes('AUTH') && cleanMsg.toLowerCase().includes('password')) icon = '🔑';
    else if (upperTag.includes('OTP')) icon = '✅';
    else if (upperTag.includes('SERVER')) icon = '🚀';

    console.log(`${ts} ${icon} [${upperTag}] ${cleanMsg}`);
  },

  warn(tag, message) {
    const ts = getTimestamp();
    const cleanMsg = sanitize(message);
    const upperTag = String(tag || 'WARN').toUpperCase();
    let icon = '⚠️';
    if (upperTag.includes('RBAC') || cleanMsg.toLowerCase().includes('denied')) icon = '🛡️';

    console.warn(`${ts} ${icon} [${upperTag}] ${cleanMsg}`);
  },

  error(tag, message, err = null) {
    const ts = getTimestamp();
    const cleanMsg = sanitize(message);
    const upperTag = String(tag || 'ERROR').toUpperCase();
    let icon = '🔴';
    if (upperTag.includes('OTP')) icon = '❌';

    let errDetails = '';
    if (err) {
      if (err instanceof Error) {
        errDetails = ` - ${sanitize(err.message)}`;
      } else {
        errDetails = ` - ${sanitize(err)}`;
      }
    }

    console.error(`${ts} ${icon} [${upperTag}] ${cleanMsg}${errDetails}`);
  },

  debug(tag, message) {
    if (process.env.NODE_ENV === 'production') return;
    const ts = getTimestamp();
    const cleanMsg = sanitize(message);
    const upperTag = String(tag || 'DEBUG').toUpperCase();
    console.debug(`${ts} 🔍 [${upperTag}] ${cleanMsg}`);
  }
};

module.exports = loggerutil;

