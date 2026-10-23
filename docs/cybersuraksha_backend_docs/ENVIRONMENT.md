# Environment Configuration

> **Last generated:** 2026-10-18 00:00:02 IST

Create `backend/.env` locally from `backend/.env.example`. Do not commit the actual `.env` file.

## Variables

```dotenv
NODE_ENV=development
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=cybersuraksha

JWT_ACCESS_SECRET=replace_with_a_long_random_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_SECRET=replace_with_a_separate_long_random_secret
JWT_REFRESH_EXPIRES_IN=7d
JWT_ISSUER=cybersuraksha-api
JWT_AUDIENCE=cybersuraksha-client

OTP_EXPIRY_MINUTES=5
OTP_MAX_ATTEMPTS=5
OTP_RESEND_COOLDOWN_SECONDS=60
OTP_SECRET=replace_with_a_separate_random_secret

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=noreply@cybersuraksha.local

FRONTEND_ORIGIN=http://localhost:5173

# Optional local administrator bootstrap values.
# Supply strong, private values only when running the bootstrap command.
ADMIN_NAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

Use the exact variable names expected by the current backend source. If the code uses additional variables, document them here after checking the implementation.

## Generate strong secrets

Generate separate random values for access-token signing, refresh-token signing if used, and OTP HMAC operations. Do not reuse one secret for every purpose.

Example with Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Run the command separately for each secret and copy the output directly into your local environment file.

## Email configuration

For real OTP delivery, configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM` using credentials from your email provider.

Development-mode simulated delivery is useful for local development, but it is not proof that production email delivery works. Never log the actual OTP.

## Production checklist

- Set `NODE_ENV=production`.
- Use HTTPS.
- Use strong unique secrets.
- Restrict CORS to the intended frontend origin.
- Configure secure cookie and CSRF behavior if cookies are used.
- Use a durable/shared rate limiter if multiple backend instances are deployed; an in-memory limiter is per process.
- Verify SMTP delivery, database permissions, backups, log redaction, and token revocation.
- Ensure `.env` is excluded from Git.
