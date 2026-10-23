/**
 * CyberSuraksha Environment Configuration
 * Loads environment variables, validates required fields, and provides typed configuration.
 */

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from backend/.env if present
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

// Critical configuration validation
function validateConfig() {
  const missing = [];

  if (isProduction) {
    if (!process.env.DB_HOST) missing.push('DB_HOST');
    if (!process.env.DB_USER) missing.push('DB_USER');
    if (!process.env.DB_NAME) missing.push('DB_NAME');
    if (!process.env.JWT_ACCESS_SECRET) missing.push('JWT_ACCESS_SECRET');
  }

  if (missing.length > 0) {
    throw new Error(`[ENVIRONMENT CONFIG] Missing required production environment variables: ${missing.join(', ')}`);
  }
}

// Default development secrets (never used in production)
const DEFAULT_DEV_JWT_SECRET = 'dev_jwt_access_secret_cybersuraksha_very_long_and_safe_key_123456';
const DEFAULT_DEV_REFRESH_SECRET = 'dev_jwt_refresh_secret_cybersuraksha_very_long_and_safe_key_654321';
const DEFAULT_DEV_OTP_SECRET = 'dev_otp_hmac_secret_cybersuraksha_123456';

const environmentconfig = {
  env: NODE_ENV,
  isProduction,
  isTest: NODE_ENV === 'test',
  port: parseInt(process.env.PORT || '5000', 10),

  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cybersuraksha',
    waitForConnections: true,
    connectionLimit: parseInt(process.env.DB_POOL_LIMIT || '10', 10),
    queueLimit: 0,
    timezone: '+00:00',
    decimalNumbers: true
  },

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || DEFAULT_DEV_JWT_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    refreshSecret: process.env.JWT_REFRESH_SECRET || DEFAULT_DEV_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    issuer: process.env.JWT_ISSUER || 'cybersuraksha-api',
    audience: process.env.JWT_AUDIENCE || 'cybersuraksha-client',
    algorithm: 'HS256'
  },

  otp: {
    expiryMinutes: parseInt(process.env.OTP_EXPIRY_MINUTES || '5', 10),
    maxAttempts: parseInt(process.env.OTP_MAX_ATTEMPTS || '5', 10),
    resendCooldownSeconds: parseInt(process.env.OTP_RESEND_COOLDOWN_SECONDS || '60', 10),
    secret: process.env.OTP_SECRET || DEFAULT_DEV_OTP_SECRET
  },

  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || 'noreply@cybersuraksha.local',
    secure: process.env.SMTP_SECURE === 'true'
  },

  cors: {
    frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
  },

  validateConfig
};

module.exports = environmentconfig;

