# API Reference

> **Last generated:** 2026-10-18 00:00:02 IST  
> **Base path:** `/api`

This reference is based on the supplied backend implementation report. Confirm exact payload validation and response fields against the current route/controller code.

## Authentication endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/api/health` | Public | Application and database health |
| POST | `/api/auth/register` | Public, rate-limited | Register a user and send verification OTP |
| POST | `/api/auth/verify-registration-otp` | Public, rate-limited | Verify email and activate registration |
| POST | `/api/auth/resend-otp` | Public, rate-limited | Resend an OTP subject to cooldown |
| POST | `/api/auth/login` | Public, rate-limited | Authenticate and issue tokens |
| POST | `/api/auth/forgot-password` | Public, rate-limited | Request a password-reset OTP |
| POST | `/api/auth/verify-forgot-password-otp` | Public, rate-limited | Verify reset OTP and issue a reset authorization |
| POST | `/api/auth/reset-password` | Reset authorization, rate-limited | Set a new password |
| POST | `/api/auth/change-password/request-otp` | Authenticated, rate-limited | Request password-change OTP |
| POST | `/api/auth/change-password/verify-otp` | Authenticated, rate-limited | Verify password-change OTP |
| POST | `/api/auth/change-password/confirm` | Authenticated, rate-limited | Confirm password change |
| POST | `/api/auth/refresh` | Refresh token, rate-limited | Rotate refresh token and issue access token |
| POST | `/api/auth/logout` | Authenticated | Revoke active refresh token/session |
| GET | `/api/auth/me` | Authenticated | Get current authenticated user |

## User and role endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/api/users/profile` | Authenticated | Read own profile |
| PATCH | `/api/users/profile` | Authenticated | Update own profile |
| GET | `/api/users` | `users.view` permission | List users |
| PATCH | `/api/users/:id/status` | `users.update` permission | Update account status |
| GET | `/api/roles` | `roles.view` permission | List roles |
| GET | `/api/roles/:id/permissions` | `roles.view` permission | List role permissions |

## Registration

`POST /api/auth/register`

Example request:

```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "password": "Use-A-Unique-Strong-Password",
  "confirmPassword": "Use-A-Unique-Strong-Password",
  "phone": "+919876543210",
  "gender": "Female"
}
```

Expected behavior:

1. Validate input and normalize email.
2. Assign the default `user` role server-side.
3. Hash the password.
4. Create a pending/unverified account.
5. Generate and store an OTP hash.
6. Send the OTP using the configured email service.

Never include the OTP in the public API response.

## Registration OTP verification

`POST /api/auth/verify-registration-otp`

```json
{
  "email": "priya@example.com",
  "otp": "123456"
}
```

The sample OTP is illustrative only. The actual OTP should be delivered through the configured email service. Verification must enforce purpose, expiry, attempt limits, and single-use behavior.

## Login

`POST /api/auth/login`

```json
{
  "email": "priya@example.com",
  "password": "Use-A-Unique-Strong-Password"
}
```

The implementation report describes a response containing the user profile, role, effective permissions, access token, and refresh token. Do not store real tokens in logs or source control.

## Password recovery

1. `POST /api/auth/forgot-password` — request OTP.
2. `POST /api/auth/verify-forgot-password-otp` — verify OTP and receive a short-lived reset authorization.
3. `POST /api/auth/reset-password` — submit the reset authorization and new password.

Use the reset authorization exactly as implemented by the backend. It must be single-use and must not be interchangeable with registration or password-change OTPs.

## Authenticated password change

1. `POST /api/auth/change-password/request-otp`
2. `POST /api/auth/change-password/verify-otp`
3. `POST /api/auth/change-password/confirm`

The user identity must come from the authenticated session/token, not from an arbitrary user ID in the request. The flow should require current-password verification as implemented, reject password reuse, and revoke active sessions after a successful change.

## Standard response envelopes

Success:

```json
{
  "success": true,
  "message": "Operation completed",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Request could not be completed",
  "error": {
    "code": "ERROR_CODE"
  }
}
```

## Common status codes

- `200 OK` — successful read or action.
- `201 Created` — successful registration/resource creation.
- `400 Bad Request` — invalid request data or invalid workflow state.
- `401 Unauthorized` — missing or invalid authentication.
- `403 Forbidden` — authenticated but lacking permission.
- `404 Not Found` — route or resource not found.
- `409 Conflict` — duplicate or conflicting resource, if exposed by the implementation.
- `429 Too Many Requests` — rate limit or OTP cooldown exceeded.
- `500 Internal Server Error` — unexpected server error without internal details.

## Authentication header

For bearer-token routes:

```http
Authorization: Bearer <accessToken>
```

If the implementation also accepts HTTP-only cookies, ensure cookie security settings and CSRF protections match the deployment environment.
