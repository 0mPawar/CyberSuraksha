# CyberSuraksha Backend

> **Documentation generated:** 2026-10-18 00:00:02 IST  
> **Project:** CyberSuraksha — Community Engagement Project (CEP)  
> **Scope:** Backend authentication, OTP verification, JWT token management, and Role-Based Access Control (RBAC)

## Overview

The CyberSuraksha backend is a Node.js/Express API using MySQL for persistence. The implementation report supplied for this documentation describes registration, email verification, login, password reset, OTP-based password changes, token refresh/revocation, and database-backed RBAC.

This documentation reflects the supplied implementation report. Verify the current source code and environment before treating every described behavior as independently confirmed.

## Main capabilities

- User registration with email OTP verification.
- Login with password verification and account-status checks.
- Forgot-password and reset-password workflows.
- Authenticated password changes protected by email OTP.
- Short-lived JWT access tokens.
- Rotating refresh tokens stored as hashes.
- Role and permission checks against MySQL.
- Rate limiting on sensitive authentication routes.
- Centralized errors and icon-prefixed terminal logging.
- SQL migration and seed files for roles, modules, permissions, and mappings.

## Technology

- Node.js
- Express.js
- MySQL / InnoDB
- `mysql2`
- `bcryptjs`
- `jsonwebtoken`
- Nodemailer

Use the versions already defined in `backend/package.json`.

## Backend entry point

The implementation uses `backend/server.js` as the single Express application entry point. No `app.js` should be required.

From the backend directory:

```bash
npm start
# or
node server.js
```

## Quick setup

1. Install and start MySQL.
2. Create the `cybersuraksha` database.
3. Run `database/migrations/schema.sql`.
4. Run `database/seeders/seeddata.sql`.
5. Copy `.env.example` to `.env` and fill in local values.
6. Configure SMTP if real email delivery is required.
7. Start the backend and check `GET /api/health`.

See [Database Setup](DATABASE_SETUP.md), [Environment Configuration](ENVIRONMENT.md), and [API Reference](API_REFERENCE.md).

## Security notes

- Never commit `.env` or real secrets.
- Do not use example administrator credentials in a real environment.
- Keep OTPs, passwords, JWTs, refresh tokens, and SMTP credentials out of logs.
- Configure a strong, unique JWT secret and OTP HMAC secret.
- Confirm the rate limiter and token revocation behavior before deployment.
- Use HTTPS in production and configure cookies/CORS/CSRF consistently with the chosen token transport.

## Documentation index

- [API Reference](API_REFERENCE.md)
- [Database Setup](DATABASE_SETUP.md)
- [Environment Configuration](ENVIRONMENT.md)
- [Authentication and RBAC](AUTH_AND_RBAC.md)
- [Implementation Report](IMPLEMENTATION_REPORT.md)
- [Changelog](CHANGELOG.md)
- [Suggested Git Commit](COMMIT_MESSAGE.md)
