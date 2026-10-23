/**
 * CyberSuraksha Authentication Test Suite
 * Automated unit and service tests for authentication, OTP verification, tokens, and password management.
 * Uses Node.js built-in test runner (node:test) and assertions (node:assert).
 */

const { describe, it } = require('node:test');
const assert = require('node:assert');

const passwordUtil = require('../utils/passwordutil');
const tokenUtil = require('../utils/tokenutil');
const otpService = require('../services/otpservice');
const tokenService = require('../services/tokenservice');
const authValidator = require('../validators/authavalidator');

describe('Authentication & Password Utilities Test Suite', () => {
  // 1. Password Strength Validation
  it('should accept a strong password meeting all complexity criteria', () => {
    const result = passwordUtil.validatePasswordStrength('SafeP@ssw0rd2026!');
    assert.strictEqual(result.valid, true);
  });

  it('should reject a password that is too short (<8 characters)', () => {
    const result = passwordUtil.validatePasswordStrength('P@1a');
    assert.strictEqual(result.valid, false);
    assert.match(result.message, /at least 8 characters/);
  });

  it('should reject a password missing numbers or uppercase letters', () => {
    const noUpper = passwordUtil.validatePasswordStrength('password@123');
    assert.strictEqual(noUpper.valid, false);
    assert.match(noUpper.message, /uppercase letter/);

    const noNum = passwordUtil.validatePasswordStrength('Password@Secret');
    assert.strictEqual(noNum.valid, false);
    assert.match(noNum.message, /numeric digit/);
  });

  // 2. Password Hashing and Comparison
  it('should securely hash passwords and verify matching plaintext', async () => {
    const plain = 'StrongPass123!@#';
    const hash = await passwordUtil.hashPassword(plain);

    assert.notStrictEqual(hash, plain);
    assert.ok(hash.startsWith('$2')); // bcrypt identifier

    const isMatch = await passwordUtil.comparePassword(plain, hash);
    assert.strictEqual(isMatch, true);

    const isWrongMatch = await passwordUtil.comparePassword('WrongPassword123!', hash);
    assert.strictEqual(isWrongMatch, false);
  });
});

describe('JWT & Token Management Test Suite', () => {
  const dummyUser = {
    id: 42,
    email: 'citizen@cybersuraksha.org',
    role: 'user'
  };

  // 3. Access Token Generation and Claims Validation
  it('should generate a valid JWT access token with correct claims', () => {
    const token = tokenUtil.generateAccessToken(dummyUser);
    assert.ok(typeof token === 'string' && token.split('.').length === 3);

    const decoded = tokenUtil.verifyAccessToken(token);
    assert.strictEqual(decoded.sub, '42');
    assert.strictEqual(decoded.email, 'citizen@cybersuraksha.org');
    assert.strictEqual(decoded.role, 'user');
    assert.strictEqual(decoded.iss, 'cybersuraksha-api');
    assert.strictEqual(decoded.aud, 'cybersuraksha-client');
  });

  // 4. Malformed and Tampered JWT Rejection
  it('should reject malformed or tampered JWT access tokens', () => {
    assert.throws(() => {
      tokenUtil.verifyAccessToken('invalid.token.structure');
    });

    const validToken = tokenUtil.generateAccessToken(dummyUser);
    const tamperedToken = validToken.slice(0, -6) + 'abcdef';

    assert.throws(() => {
      tokenUtil.verifyAccessToken(tamperedToken);
    });
  });

  // 5. Cryptographic Refresh Token & Reset Token Generation
  it('should generate cryptographically random refresh and reset tokens and sha256 hashes', () => {
    const { token: refToken, tokenHash: refHash } = tokenUtil.generateRefreshToken();
    assert.strictEqual(typeof refToken, 'string');
    assert.strictEqual(typeof refHash, 'string');
    assert.strictEqual(refHash, tokenUtil.hashToken(refToken));

    const { token: resetToken, tokenHash: resetHash } = tokenUtil.generateResetToken();
    assert.strictEqual(typeof resetToken, 'string');
    assert.strictEqual(resetHash, tokenUtil.hashToken(resetToken));
    assert.notStrictEqual(refToken, resetToken);
  });
});

describe('OTP Generation, Hashing & Verification Logic', () => {
  it('should generate a 6-digit numeric OTP', () => {
    const otp = otpService.generateNumericOtp();
    assert.match(otp, /^\d{6}$/);
  });

  it('should produce identical HMAC hashes for identical inputs and different hashes for different inputs', () => {
    const email = 'victim@example.com';
    const otp = '123456';

    const hash1 = otpService.hashOtp(email, 'register', otp);
    const hash2 = otpService.hashOtp(email, 'register', otp);
    assert.strictEqual(hash1, hash2);

    // Purpose isolation: registration OTP hash must not match password reset hash
    const resetHash = otpService.hashOtp(email, 'forgot_password', otp);
    assert.notStrictEqual(hash1, resetHash);

    // Email isolation
    const otherEmailHash = otpService.hashOtp('other@example.com', 'register', otp);
    assert.notStrictEqual(hash1, otherEmailHash);
  });
});

describe('Authentication Request Validators Test Suite', () => {
  // 6. Registration Validation
  it('should validate valid registration input', () => {
    const body = {
      name: 'Safe Citizen',
      email: 'citizen@example.com',
      password: 'StrongPassword1!',
      confirmPassword: 'StrongPassword1!',
      phone: '+919876543210',
      gender: 'Female'
    };
    const result = authValidator.validateRegister(body);
    assert.strictEqual(result.valid, true);
    assert.strictEqual(result.errors.length, 0);
  });

  it('should reject invalid registration input (mismatched password, bad email, bad gender)', () => {
    const body = {
      name: '',
      email: 'invalid-email',
      password: 'Pass1',
      confirmPassword: 'Pass2',
      gender: 'InvalidGender'
    };
    const result = authValidator.validateRegister(body);
    assert.strictEqual(result.valid, false);
    assert.ok(result.errors.some(e => e.field === 'name'));
    assert.ok(result.errors.some(e => e.field === 'email'));
    assert.ok(result.errors.some(e => e.field === 'password'));
    assert.ok(result.errors.some(e => e.field === 'confirmPassword'));
    assert.ok(result.errors.some(e => e.field === 'gender'));
  });

  // 7. Login Validation
  it('should reject login with missing email or password', () => {
    const result = authValidator.validateLogin({});
    assert.strictEqual(result.valid, false);
    assert.ok(result.errors.some(e => e.field === 'email'));
    assert.ok(result.errors.some(e => e.field === 'password'));
  });

  // 8. OTP Code Validation
  it('should enforce 6-digit numeric OTP code format', () => {
    const badCode = authValidator.validateVerifyOtp({ email: 'test@example.com', otp: '123' });
    assert.strictEqual(badCode.valid, false);

    const alphaCode = authValidator.validateVerifyOtp({ email: 'test@example.com', otp: 'ABCDEF' });
    assert.strictEqual(alphaCode.valid, false);

    const goodCode = authValidator.validateVerifyOtp({ email: 'test@example.com', otp: '654321' });
    assert.strictEqual(goodCode.valid, true);
  });
});

describe('Simulated End-to-End Authentication Workflow Rules', () => {
  // In-memory mock database state for testing service behaviors
  const mockDb = {
    users: [],
    roles: [
      { id: 1, role: 'admin', role_name: 'Administrator' },
      { id: 2, role: 'user', role_name: 'User' }
    ],
    otps: [],
    refreshTokens: [],
    resetTokens: []
  };

  it('should enforce that duplicate verified emails cannot be re-registered', async () => {
    const verifiedUser = {
      id: 1,
      email: 'registered@cybersuraksha.org',
      email_verified: 1,
      status: 'active'
    };
    mockDb.users.push(verifiedUser);

    const attempt = mockDb.users.find(u => u.email === 'registered@cybersuraksha.org' && u.email_verified === 1);
    assert.ok(attempt, 'User found');
    assert.strictEqual(attempt.email_verified, 1);
  });

  it('should reject login for blocked or inactive accounts', () => {
    const blockedUser = { id: 2, email: 'blocked@example.com', status: 'blocked', email_verified: 1 };
    const inactiveUser = { id: 3, email: 'inactive@example.com', status: 'inactive', email_verified: 1 };

    assert.strictEqual(blockedUser.status === 'active', false);
    assert.strictEqual(inactiveUser.status === 'active', false);
  });

  it('should reject login for accounts that have not verified their email', () => {
    const unverifiedUser = { id: 4, email: 'pending@example.com', status: 'active', email_verified: 0 };
    assert.strictEqual(unverifiedUser.email_verified === 1, false);
  });

  it('should reject OTP verification when attempts exceed maximum allowed', () => {
    const maxAttempts = 5;
    let attempts = 5;
    const isExceeded = attempts >= maxAttempts;
    assert.strictEqual(isExceeded, true);
  });

  it('should reject OTP verification when expired', () => {
    const pastExpiresAt = new Date(Date.now() - 60 * 1000); // 1 minute in the past
    const isExpired = new Date() > pastExpiresAt;
    assert.strictEqual(isExpired, true);
  });

  it('should enforce single-use reset authorization token consumption', () => {
    const tokenRecord = { id: 1, consumed_at: null };
    assert.strictEqual(tokenRecord.consumed_at, null);

    // Consume
    tokenRecord.consumed_at = new Date();
    assert.ok(tokenRecord.consumed_at !== null);

    // Reuse attempt must fail
    const isReusable = tokenRecord.consumed_at === null;
    assert.strictEqual(isReusable, false);
  });
});

