/**
 * CyberSuraksha Admin Bootstrap Utility
 * Safely creates an initial system administrator from environment variables.
 * Refuses to create duplicate administrators or store unhashed passwords.
 *
 * Usage:
 *   node database/seeders/bootstrapadmin.js
 */

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const db = require('../../config/databaseconfig');
const userModel = require('../../models/useramodel');
const roleModel = require('../../models/roleamodel');
const passwordUtil = require('../../utils/passwordutil');
const logger = require('../../utils/loggerutil');

async function bootstrapAdmin() {
  const name = process.env.ADMIN_NAME || 'Super Admin';
  const email = process.env.ADMIN_EMAIL ? process.env.ADMIN_EMAIL.trim().toLowerCase() : null;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    logger.warn(
      'AUTH',
      'Bootstrap skipped: ADMIN_EMAIL and ADMIN_PASSWORD environment variables are not set in .env'
    );
    console.log('\nTo bootstrap an initial administrator, configure these in backend/.env:');
    console.log('  ADMIN_NAME="Super Admin"');
    console.log('  ADMIN_EMAIL="admin@cybersuraksha.org"');
    console.log('  ADMIN_PASSWORD="YourStrongPassword123!"');
    process.exit(0);
  }

  try {
    const isConnected = await db.testConnection();
    if (!isConnected) {
      logger.error('DATABASE', 'Database connection unavailable for admin bootstrap');
      process.exit(1);
    }

    // 1. Verify admin role exists
    const adminRole = await roleModel.findByRole('admin');
    if (!adminRole) {
      logger.error('AUTH', 'Admin role does not exist in database. Please run seeddata.sql first.');
      process.exit(1);
    }

    // 2. Check if this email is already registered
    const existingEmailUser = await userModel.findByEmail(email);
    if (existingEmailUser) {
      logger.warn('AUTH', `Admin bootstrap aborted: User with email ${email} already exists (ID: #${existingEmailUser.id}). Refusing duplicate.`);
      process.exit(0);
    }

    // 3. Check if an administrator already exists
    const [existingAdmins] = await db.query('SELECT id, email FROM users WHERE role_id = ? LIMIT 1', [adminRole.id]);
    if (existingAdmins.length > 0) {
      logger.warn(
        'AUTH',
        `Admin bootstrap aborted: An administrator account already exists (${existingAdmins[0].email}). Refusing duplicate.`
      );
      process.exit(0);
    }

    // 4. Validate password strength
    const strength = passwordUtil.validatePasswordStrength(password);
    if (!strength.valid) {
      logger.error('AUTH', `Admin bootstrap failed: Password too weak - ${strength.message}`);
      process.exit(1);
    }

    // 5. Hash password and insert admin
    const hashedPassword = await passwordUtil.hashPassword(password);
    const adminId = await userModel.create({
      role_id: adminRole.id,
      name,
      email,
      password: hashedPassword,
      status: 'active',
      email_verified: 1
    });

    logger.success('AUTH', `Initial administrator created successfully! Email: ${email} (ID: #${adminId})`);
    process.exit(0);
  } catch (err) {
    logger.error('AUTH', 'Unexpected error during admin bootstrap', err);
    process.exit(1);
  }
}

if (require.main === module) {
  bootstrapAdmin();
}

module.exports = bootstrapAdmin;

