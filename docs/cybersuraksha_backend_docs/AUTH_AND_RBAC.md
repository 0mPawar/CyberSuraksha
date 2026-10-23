# Authentication and RBAC

> **Last generated:** 2026-10-18 00:00:02 IST

## Authentication lifecycle

### Registration

1. Validate and normalize user input.
2. Assign the `user` role on the server.
3. Hash the password with bcrypt.
4. Store the new account as unverified.
5. Create a purpose-specific OTP record containing a secure hash.
6. Send the OTP through the email service.
7. Activate the account only after successful OTP verification.

Public registration must never accept an admin role from the client.

### OTP controls

The supplied implementation report describes:

- Six-digit numeric OTPs.
- Five-minute expiry.
- Five maximum attempts.
- Sixty-second resend cooldown.
- HMAC-SHA256 OTP hashing and timing-safe comparison.
- Invalidation of earlier active OTPs on resend.
- Purpose separation for registration, password reset, and password change.

These controls must be checked in the source code and database schema before deployment. OTP values must never be logged or returned in normal API responses.

### Login and tokens

The report describes:

- bcrypt password hashes using 12 salt rounds.
- A 15-minute access JWT.
- A seven-day refresh token.
- Cryptographically random refresh-token values with only their SHA-256 hashes persisted.
- Refresh-token rotation.
- Revocation of active refresh tokens after logout or password changes.

Access tokens should be short-lived. Validate JWT signature, issuer, audience, and expiry. Refresh tokens must be rotated and revoked atomically to reduce replay risk.

## RBAC model

The authorization relationship is:

`users -> roles -> role_permissions -> permissions -> modules`

Permission keys use the form `module.action`, such as `users.view` or `settings.manage`.

The middleware should resolve effective permissions from MySQL and reject unauthorized requests with HTTP `403`. Missing or invalid authentication should return HTTP `401`.

## Module list

The supplied report describes these 14 modules:

- `dashboard`
- `users`
- `roles`
- `permissions`
- `auth`
- `profile`
- `cyber_frauds`
- `scam_reports`
- `awareness_resources`
- `surveys`
- `feedback`
- `analytics`
- `settings`
- `audit_logs`

## Default role policy

| Area | Admin | User |
|---|---|---|
| Dashboard | View | No administrative dashboard access by default |
| Users | Manage users | No user-administration access |
| Roles and permissions | Administrative access | No access |
| Profile | View/update | View/update own profile |
| Cyber fraud resources | Manage | View |
| Scam reports | Manage | Create and view permitted reports |
| Awareness resources | Manage | View |
| Surveys | Manage | Participate/create permitted submissions |
| Feedback | Manage/view as configured | Submit feedback |
| Analytics | View | No access by default |
| Settings | Manage | No access |
| Audit logs | View | No access |

The exact permission matrix must match the seeded SQL data. Resource ownership checks (for example, ensuring a user can access only their own report) require additional application-level checks beyond broad RBAC permissions.

## Logging

Use icon-prefixed logs for operational readability, for example:

```text
[2026-10-17 23:59:00] 🔐 [AUTH] User login successful
[2026-10-17 23:59:01] ❌ [OTP] OTP verification failed
[2026-10-17 23:59:02] 🛡️ [RBAC] Permission check denied
```

Never log passwords, OTPs, bearer tokens, refresh tokens, secret values, or complete sensitive request bodies.
