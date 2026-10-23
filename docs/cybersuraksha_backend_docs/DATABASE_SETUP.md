# MySQL Database Setup

> **Last generated:** 2026-10-18 00:00:02 IST

## Database

Suggested local database:

```sql
CREATE DATABASE IF NOT EXISTS cybersuraksha
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

The implementation report describes InnoDB tables using `utf8mb4`.

## Core tables

| Table | Purpose |
|---|---|
| `users` | User identity, password hash, account status, role, and email verification state |
| `otp_verifications` | OTP purpose, hash, expiry, verification state, and attempt tracking |
| `roles` | Available application roles |
| `modules` | Functional areas used by the authorization model |
| `permissions` | Module-level actions and permission keys |
| `role_permissions` | Many-to-many mapping between roles and permissions |

The report also describes supporting token storage for refresh tokens and single-use reset/change authorization tokens.

## Relationships

- `users.role_id` references `roles.id`.
- `permissions.module_id` references `modules.id`.
- `role_permissions.role_id` references `roles.id`.
- `role_permissions.permission_id` references `permissions.id`.
- OTP records may reference `users.id`; nullable `user_id` supports flows where the user is not yet registered or resolved.

Primary keys should be `BIGINT UNSIGNED AUTO_INCREMENT`. Add indexes for frequently queried fields, including normalized unique email, foreign keys, permission keys, OTP lookup/expiry, and token hashes.

## Initialize using MySQL CLI

Run these commands from the repository root, adapting credentials and paths to your machine.

```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS cybersuraksha CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -p cybersuraksha < backend/database/migrations/schema.sql
mysql -u root -p cybersuraksha < backend/database/seeders/seeddata.sql
```

If your MySQL client prompts for a password, enter it interactively. Avoid putting database passwords directly in shell history.

## Seeded authorization data

According to the supplied report, the seeder provides:

- `admin` and `user` roles.
- 14 modules.
- 39 permissions.
- Role-to-permission mappings.

The seeder should be idempotent, so it can be rerun without duplicating role/module/permission records. Confirm this behavior in the actual SQL before rerunning it on a shared database.

## Bootstrap administrator

The report describes `database/seeders/bootstrapadmin.js` as a CLI utility that reads credentials from environment variables.

Use a unique, strong administrator password and keep it outside source control. Do not copy example credentials into a production environment. Run the bootstrap script only after the schema and role seed data are present.

## Safe database practices

- Back up existing data before applying schema changes.
- Do not use destructive `DROP TABLE` statements against an existing database without explicit review.
- Run integration tests against a dedicated test database.
- Ensure MySQL credentials have only the privileges required by the application.
- Never commit `.env` or a database dump containing real personal data.
