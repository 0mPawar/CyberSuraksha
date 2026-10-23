/**
 * CyberSuraksha User Routes
 * Protected profile management and administrative user management with RBAC middleware.
 */

const express = require('express');
const router = express.Router();

const userController = require('../controllers/useracontroller');
const authMiddleware = require('../middlewares/authamiddleware');
const { requirePermission } = require('../middlewares/permissionmiddleware');
const { validateBody } = require('../middlewares/validationmiddleware');
const userValidator = require('../validators/useravalidator');

// All user routes require an authenticated session
router.use(authMiddleware);

// 1. Current Authenticated User Profile Endpoints
router.get('/profile', userController.getProfile);
router.patch('/profile', validateBody(userValidator.validateUpdateProfile), userController.updateProfile);

// 2. Administrative User Management (Enforced by Database-backed RBAC)
router.get('/', requirePermission('users.view'), userController.listUsers);
router.patch('/:id/status', requirePermission('users.update'), validateBody(userValidator.validateUpdateStatus), userController.updateUserStatus);

module.exports = router;

