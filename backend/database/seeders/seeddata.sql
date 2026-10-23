-- ==============================================================================
-- CyberSuraksha Seed Data Script
-- Safe to re-run (idempotent using INSERT IGNORE / ON DUPLICATE KEY UPDATE)
-- Does NOT contain hardcoded production administrator passwords
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. SEED ROLES
-- ------------------------------------------------------------------------------
INSERT INTO `roles` (`role_name`, `role`, `description`, `status`)
VALUES 
  ('Administrator', 'admin', 'System Administrator with full access to management and audit capabilities', 'active'),
  ('User', 'user', 'Standard community member with access to awareness resources and submissions', 'active')
ON DUPLICATE KEY UPDATE 
  `role_name` = VALUES(`role_name`),
  `description` = VALUES(`description`),
  `status` = VALUES(`status`);

-- ------------------------------------------------------------------------------
-- 2. SEED MODULES
-- ------------------------------------------------------------------------------
INSERT INTO `modules` (`module_key`, `module_name`)
VALUES 
  ('dashboard', 'Dashboard'),
  ('users', 'User Management'),
  ('roles', 'Role Management'),
  ('permissions', 'Permission Management'),
  ('auth', 'Authentication Management'),
  ('profile', 'User Profile'),
  ('cyber_frauds', 'Cyber Frauds Knowledge Base'),
  ('scam_reports', 'Scam Reports'),
  ('awareness_resources', 'Awareness Resources'),
  ('surveys', 'Community Surveys'),
  ('feedback', 'Community Feedback'),
  ('analytics', 'Security Analytics'),
  ('settings', 'System Settings'),
  ('audit_logs', 'Audit Logs')
ON DUPLICATE KEY UPDATE 
  `module_name` = VALUES(`module_name`);

-- ------------------------------------------------------------------------------
-- 3. SEED PERMISSIONS
-- ------------------------------------------------------------------------------
-- Helper variables and inserts matching seeded modules
INSERT INTO `permissions` (`module_id`, `action`, `permission_key`)
SELECT m.id, a.action, CONCAT(m.module_key, '.', a.action)
FROM `modules` m
CROSS JOIN (
  SELECT 'view' AS action UNION ALL
  SELECT 'create' UNION ALL
  SELECT 'update' UNION ALL
  SELECT 'delete' UNION ALL
  SELECT 'manage'
) a
WHERE 
  -- Define valid module-action combinations
  (m.module_key = 'dashboard' AND a.action IN ('view')) OR
  (m.module_key = 'users' AND a.action IN ('view', 'create', 'update', 'delete', 'manage')) OR
  (m.module_key = 'roles' AND a.action IN ('view', 'create', 'update', 'delete', 'manage')) OR
  (m.module_key = 'permissions' AND a.action IN ('view', 'manage')) OR
  (m.module_key = 'auth' AND a.action IN ('manage')) OR
  (m.module_key = 'profile' AND a.action IN ('view', 'update')) OR
  (m.module_key = 'cyber_frauds' AND a.action IN ('view', 'create', 'update', 'delete')) OR
  (m.module_key = 'scam_reports' AND a.action IN ('view', 'create', 'update', 'delete')) OR
  (m.module_key = 'awareness_resources' AND a.action IN ('view', 'create', 'update', 'delete')) OR
  (m.module_key = 'surveys' AND a.action IN ('view', 'create', 'update', 'delete')) OR
  (m.module_key = 'feedback' AND a.action IN ('view', 'create', 'delete')) OR
  (m.module_key = 'analytics' AND a.action IN ('view')) OR
  (m.module_key = 'settings' AND a.action IN ('view', 'manage')) OR
  (m.module_key = 'audit_logs' AND a.action IN ('view'))
ON DUPLICATE KEY UPDATE `action` = VALUES(`action`);

-- ------------------------------------------------------------------------------
-- 4. MAP PERMISSIONS TO ADMIN ROLE (All Permissions)
-- ------------------------------------------------------------------------------
INSERT IGNORE INTO `role_permissions` (`role_id`, `permission_id`)
SELECT r.id, p.id
FROM `roles` r
CROSS JOIN `permissions` p
WHERE r.role = 'admin';

-- ------------------------------------------------------------------------------
-- 5. MAP PERMISSIONS TO USER ROLE (Restricted User Permissions)
-- ------------------------------------------------------------------------------
INSERT IGNORE INTO `role_permissions` (`role_id`, `permission_id`)
SELECT r.id, p.id
FROM `roles` r
CROSS JOIN `permissions` p
WHERE r.role = 'user'
  AND p.permission_key IN (
    'profile.view',
    'profile.update',
    'cyber_frauds.view',
    'awareness_resources.view',
    'scam_reports.create',
    'scam_reports.view',
    'surveys.create',
    'surveys.view',
    'feedback.create'
  );

