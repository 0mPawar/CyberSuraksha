/**
 * CyberSuraksha User Management Request Validators
 * Validates profile updates and user management requests.
 */

const PHONE_REGEX = /^[+]?[\d\s\-()]{7,20}$/;
const GENDERS = ['Male', 'Female', 'Transgender'];
const STATUSES = ['active', 'inactive', 'blocked'];

const useravalidator = {
  validateUpdateProfile(body = {}) {
    const errors = [];

    if (body.name !== undefined) {
      if (typeof body.name !== 'string' || body.name.trim().length === 0) {
        errors.push({ field: 'name', message: 'Name cannot be empty' });
      } else if (body.name.trim().length > 100) {
        errors.push({ field: 'name', message: 'Name cannot exceed 100 characters' });
      }
    }

    if (body.phone !== undefined && body.phone !== null && body.phone !== '') {
      if (typeof body.phone !== 'string' || !PHONE_REGEX.test(body.phone.trim())) {
        errors.push({ field: 'phone', message: 'Invalid phone number format' });
      }
    }

    if (body.gender !== undefined && body.gender !== null && body.gender !== '') {
      if (!GENDERS.includes(body.gender)) {
        errors.push({ field: 'gender', message: `Gender must be one of: ${GENDERS.join(', ')}` });
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        name: body.name ? body.name.trim() : undefined,
        phone: body.phone !== undefined ? (body.phone ? body.phone.trim() : null) : undefined,
        gender: body.gender !== undefined ? (body.gender ? body.gender : null) : undefined
      }
    };
  },

  validateUpdateStatus(body = {}) {
    const errors = [];

    if (!body.status || !STATUSES.includes(body.status)) {
      errors.push({ field: 'status', message: `Status must be one of: ${STATUSES.join(', ')}` });
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: {
        status: body.status
      }
    };
  }
};

module.exports = useravalidator;

