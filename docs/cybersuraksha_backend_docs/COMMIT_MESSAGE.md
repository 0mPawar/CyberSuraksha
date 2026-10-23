# Suggested Git Commit

> **Prepared:** 2026-10-18 00:00:02 IST

## Recommended commit subject

```text
feat(backend): implement OTP authentication and database-backed RBAC
```

## Detailed commit message

```text
feat(backend): implement OTP authentication and database-backed RBAC

- Add MySQL schema and seed data for users, roles, modules,
  permissions, role-permission mappings, and OTP verification
- Implement registration and email OTP verification
- Add login, forgot-password, password-reset, and OTP-based
  authenticated password-change flows
- Add JWT access tokens and rotating refresh-token support
- Persist refresh-token hashes and support session revocation
- Add database-backed authentication and permission middleware
- Add request validation, rate limiting, centralized errors,
  and consistent JSON responses
- Add reusable icon-prefixed logger with sensitive-data redaction
- Consolidate Express setup and startup in backend/server.js
- Add environment example, administrator bootstrap utility,
  automated tests, and backend documentation

Scope: backend only
```

## Before committing

Run these checks from the repository root:

```bash
git status --short
git diff --check
git diff --stat
```

Review the staged diff and confirm that no files outside `backend/` were changed. Do not commit `.env`, real SMTP credentials, JWT/OTP secrets, production data, or a real administrator password.

If only documentation files are being committed, use a documentation-specific subject instead:

```text
docs(backend): document authentication, RBAC, and API setup
```

Do not claim that tests passed in the commit message unless you reran them successfully in the current working copy.
