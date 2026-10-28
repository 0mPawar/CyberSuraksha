# CyberSuraksha — Setup Guide V1.0

This guide explains how to obtain the repository and run the frontend locally, plus the team's general Git workflow.

## Prerequisites
- Git
- Node.js compatible with the installed Vite version
- npm
- Visual Studio Code or another code editor
- A GitHub account

Check installations:

```bash
git --version
node --version
npm --version
```

## Clone the Repository

```bash
git clone https://github.com/0mPawar/CyberSuraksha.git
cd CyberSuraksha
git status
git remote -v
```

SSH can also be used if SSH authentication is configured.

## Run the Frontend

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build and Lint

Run from `frontend/`:

```bash
npm run lint
npm run build
npm run preview
```

## Git Workflow

```bash
git switch main
git pull origin main
git switch -c feature/short-description
```

After making changes, review and commit only the intended files:

```bash
git status
git diff
git add path/to/changed-file
git diff --cached
git commit -m "Describe the change"
git push -u origin feature/short-description
```

Create a Pull Request when the team workflow requires review.

## Publishing the Frontend

The intended GitHub Pages site is https://0mPawar.github.io/CyberSuraksha/.

GitHub Pages hosts static files; it does not run the Node.js backend or a database. The deployment workflow should build `frontend/` and publish only `frontend/dist/`.

## Repository and Secret Hygiene
- Do not commit `.env` files, passwords, API keys, private keys, or real credentials.
- Do not commit `node_modules/` or generated `dist/` output unless there is an explicit reason.
- Review `git status` and the staged diff before each commit.
- Stage only files intended to be shared.

## Backend and Model
Backend and model setup instructions should be maintained in dedicated documentation if those components are intended to be shared and run. Hosting the frontend on GitHub Pages does not deploy the backend or model.

## Troubleshooting
- If `npm ci` fails, confirm you are in `frontend/` and `package-lock.json` exists.
- If the build fails, check the error and Node.js compatibility with Vite.
- If Git cannot push, check `git remote -v`, the current branch, and GitHub permissions.
- If deployed assets fail to load, verify the Vite base path matches `/CyberSuraksha/`.
