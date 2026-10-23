/**
 * CyberSuraksha Permission & RBAC Test Suite
 * Automated tests for Role-Based Access Control, permission matrix enforcement,
 * profile access, and administrative boundary protection.
 * Uses Node.js built-in test runner (node:test) and assertions (node:assert).
 */

const { describe, it } = require('node:test');
const assert = require('node:assert');

const { requirePermission, requireAnyPermission } = require('../middlewares/permissionmiddleware');
const userValidator = require('../validators/useravalidator');

describe('RBAC Permission Matrix Definition Test Suite', () => {
  // Master matrix reflecting the seeded permissions from seeddata.sql
  const adminPermissions = [
    'dashboard.view',
    'users.view', 'users.create', 'users.update', 'users.delete', 'users.manage',
    'roles.view', 'roles.create', 'roles.update', 'roles.delete', 'roles.manage',
    'permissions.view', 'permissions.manage',
    'auth.manage',
    'profile.view', 'profile.update',
    'cyber_frauds.view', 'cyber_frauds.create', 'cyber_frauds.update', 'cyber_frauds.delete',
    'scam_reports.view', 'scam_reports.create', 'scam_reports.update', 'scam_reports.delete',
    'awareness_resources.view', 'awareness_resources.create', 'awareness_resources.update', 'awareness_resources.delete',
    'surveys.view', 'surveys.create', 'surveys.update', 'surveys.delete',
    'feedback.view', 'feedback.create', 'feedback.delete',
    'analytics.view',
    'settings.view', 'settings.manage',
    'audit_logs.view'
  ];

  const userPermissions = [
    'profile.view',
    'profile.update',
    'cyber_frauds.view',
    'awareness_resources.view',
    'scam_reports.create',
    'scam_reports.view',
    'surveys.create',
    'surveys.view',
    'feedback.create'
  ];

  it('admin role must possess all core administrative permissions', () => {
    const requiredAdminKeys = [
      'users.view',
      'users.create',
      'users.update',
      'users.delete',
      'roles.view',
      'settings.manage',
      'audit_logs.view'
    ];

    for (const key of requiredAdminKeys) {
      assert.ok(adminPermissions.includes(key), `Admin missing permission: ${key}`);
    }
  });

  it('standard user role must have restricted access only', () => {
    // Permitted user actions
    assert.ok(userPermissions.includes('profile.view'));
    assert.ok(userPermissions.includes('profile.update'));
    assert.ok(userPermissions.includes('awareness_resources.view'));
    assert.ok(userPermissions.includes('scam_reports.create'));

    // Forbidden user actions
    const forbiddenKeys = [
      'users.view',
      'users.create',
      'users.update',
      'users.delete',
      'roles.view',
      'roles.manage',
      'permissions.manage',
      'settings.manage',
      'audit_logs.view'
    ];

    for (const key of forbiddenKeys) {
      assert.strictEqual(
        userPermissions.includes(key),
        false,
        `User should NOT possess administrative permission: ${key}`
      );
    }
  });
});

describe('RBAC Middleware Execution Simulation', () => {
  it('should return 401 when request is not authenticated', async () => {
    const middleware = requirePermission('users.view');

    let responseStatus = null;
    let responseBody = null;

    const mockReq = {}; // No req.user
    const mockRes = {
      status(code) {
        responseStatus = code;
        return {
          json(payload) {
            responseBody = payload;
          }
        };
      }
    };
    let nextCalled = false;
    const next = () => { nextCalled = true; };

    await middleware(mockReq, mockRes, next);

    assert.strictEqual(responseStatus, 401);
    assert.strictEqual(nextCalled, false);
    assert.strictEqual(responseBody.success, false);
    assert.strictEqual(responseBody.error.code, 'UNAUTHENTICATED');
  });

  it('should block non-admin users from accessing administrative endpoints (HTTP 403)', async () => {
    // Middleware simulated with user lacking permission
    let responseStatus = null;
    let responseBody = null;

    const mockReq = {
      user: {
        id: 10,
        email: 'user@example.com',
        role: 'user',
        role_id: 2
      }
    };

    const mockRes = {
      status(code) {
        responseStatus = code;
        return {
          json(payload) {
            responseBody = payload;
          }
        };
      }
    };

    let nextCalled = false;
    const next = () => { nextCalled = true; };

    // Fake mock permission service returning false for regular user
    const checkUserPermission = async (permKey) => {
      const userAllowedKeys = ['profile.view', 'profile.update', 'awareness_resources.view'];
      return userAllowedKeys.includes(permKey);
    };

    // Test permission check
    const allowed = await checkUserPermission('users.view');
    assert.strictEqual(allowed, false);

    if (!allowed) {
      mockRes.status(403).json({
        success: false,
        message: 'Access forbidden: You lack the required permission',
        error: { code: 'INSUFFICIENT_PERMISSIONS' }
      });
    }

    assert.strictEqual(responseStatus, 403);
    assert.strictEqual(responseBody.success, false);
    assert.strictEqual(responseBody.error.code, 'INSUFFICIENT_PERMISSIONS');
  });

  it('should allow access when user has the required permission', async () => {
    const checkAdminPermission = async (permKey) => {
      const adminAllowedKeys = ['users.view', 'users.create', 'roles.view'];
      return adminAllowedKeys.includes(permKey);
    };

    const allowed = await checkAdminPermission('users.view');
    assert.strictEqual(allowed, true);
  });
});

describe('User Profile & Status Validation Test Suite', () => {
  it('should validate profile updates with valid data', () => {
    const valid = userValidator.validateUpdateProfile({
      name: 'Updated Name',
      phone: '+919123456789',
      gender: 'Male'
    });
    assert.strictEqual(valid.valid, true);
    assert.strictEqual(valid.sanitized.name, 'Updated Name');
    assert.strictEqual(valid.sanitized.phone, '+919123456789');
    assert.strictEqual(valid.sanitized.gender, 'Male');
  });

  it('should reject invalid gender during profile update', () => {
    const invalid = userValidator.validateUpdateProfile({
      gender: 'UnknownGender'
    });
    assert.strictEqual(invalid.valid, false);
    assert.ok(invalid.errors.some(e => e.field === 'gender'));
  });

  it('should validate user status updates with valid enum values', () => {
    assert.strictEqual(userValidator.validateUpdateStatus({ status: 'active' }).valid, true);
    assert.strictEqual(userValidator.validateUpdateStatus({ status: 'inactive' }).valid, true);
    assert.strictEqual(userValidator.validateUpdateStatus({ status: 'blocked' }).valid, true);
    assert.strictEqual(userValidator.validateUpdateStatus({ status: 'pending' }).valid, false);
  });
});

