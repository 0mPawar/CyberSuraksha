/**
 * CyberSuraksha Role Routes
 * Protected role inspection endpoints with RBAC middleware.
 */

const express = require('express');
const router = express.Router();

const roleController = require('../controllers/roleacontroller');
const authMiddleware = require('../middlewares/authamiddleware');
const { requirePermission } = require('../middlewares/permissionmiddleware');

// All role inspection routes require authentication and 'roles.view' permission
router.use(authMiddleware);
router.use(requirePermission('roles.view'));

router.get('/', roleController.getRoles);
router.get('/:id/permissions', roleController.getRolePermissions);

module.exports = router;

