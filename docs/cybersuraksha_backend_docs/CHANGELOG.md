# Changelog

All entries in this file are documentation summaries of the supplied implementation report. They are not automatically derived from Git history.

## Unreleased — 2026-10-18

### Added

- Node.js/Express authentication backend using MySQL.
- Registration and email OTP verification.
- Login with password hashing and account-status checks.
- Forgot-password and OTP-based password change flows.
- JWT access tokens and rotating refresh-token support.
- Database-backed role and permission enforcement.
- Seed data for `admin` and `user` roles, application modules, and permissions.
- Centralized validation, error handling, rate limiting, and logging.
- Health-check route and environment example.
- Automated tests for authentication utilities, OTP logic, validators, and RBAC behavior.
- Backend setup and API documentation.

### Security-related behavior described in the report

- Hashed passwords and hashed/HMAC-protected OTPs.
- OTP expiry, attempt limits, resend cooldown, and purpose separation.
- Single-use reset/change authorizations.
- Refresh-token hash persistence and revocation.
- Server-side role assignment and permission checks.
- Redaction of sensitive values from logs.

### Configuration notes

- SMTP must be configured for real email delivery.
- Local secrets must be configured in `backend/.env`.
- The database schema and seed files must be applied before running integration flows.

### Verification note

The implementation report supplied for this documentation states that 27 automated tests passed and that a live MySQL integration test was executed. Verify the current repository and rerun tests before release.
