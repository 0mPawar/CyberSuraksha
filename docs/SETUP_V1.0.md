````md
# Cyber Suraksha — Setup V1.0

> Cyber Fraud / Digital Scam Awareness & Assistance System

## 1. Project Overview

Cyber Suraksha is a digital safety and awareness platform designed to help users:

- Recognize common cyber fraud and digital scams
- Understand suspicious activities
- Follow immediate safety steps
- Find appropriate reporting guidance
- Learn safe digital practices
- Access AI-based assistance

The project is being developed as part of the Community Engagement Project (CEP).

---

# 2. Prerequisites

Install the following software:

- Git
- Node.js
- npm
- Visual Studio Code
- GitHub account

Verify the installations:

```bash
git --version
node --version
npm --version
````

---

# 3. Clone the Repository

To get the project for the first time, clone the GitHub repository.

Using SSH:

```bash
git clone git@github.com:0mPawar/CyberSuraksha.git
```

Move into the project directory:

```bash
cd CyberSuraksha
```

Check the repository:

```bash
git status
```

The repository should be connected to GitHub.

Check the remote:

```bash
git remote -v
```

Expected:

```text
origin  git@github.com:0mPawar/CyberSuraksha.git (fetch)
origin  git@github.com:0mPawar/CyberSuraksha.git (push)
```

---

# 4. GitHub SSH Setup

The project uses SSH for GitHub authentication.

Test the SSH connection:

```bash
ssh -T git@github.com
```

A successful authentication message should be displayed.

If SSH is not configured, configure an SSH key with GitHub before cloning or pushing the repository.

---

# 5. Project Structure

```text
CyberSuraksha/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── docs/
├── model/
├── temp/
│
├── .gitignore
├── README.md
└── SETUP_V1.0.md
```

---

# 6. Backend Setup

Open a terminal in the project root.

Move to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## 6.1 Backend Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=5000
```

Additional database and service configuration can be added as development progresses.

### Important

Never commit `.env` to GitHub.

The `.gitignore` file already ignores environment files.

---

# 7. Start the Backend

From the `backend` directory:

### Development mode

```bash
npm run dev
```

### Normal mode

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

---

# 8. Frontend Setup

Open another terminal.

From the project root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The Vite development server will display the local URL.

Example:

```text
http://localhost:5173
```

---

# 9. Running Frontend and Backend Together

Two terminals are required during development.

### Terminal 1 — Backend

```bash
cd backend
npm run dev
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Keep both terminals running while developing and testing the application.

---

# 10. Backend Structure

```text
backend/
├── config/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
├── services/
├── tests/
├── utils/
├── validators/
├── app.js
├── server.js
├── package.json
└── .env
```

### Directory Purpose

| Directory      | Purpose                          |
| -------------- | -------------------------------- |
| `config/`      | Configuration and database setup |
| `controllers/` | Request handling                 |
| `database/`    | Database-related files           |
| `middlewares/` | Middleware functions             |
| `models/`      | Data models                      |
| `routes/`      | API routes                       |
| `services/`    | Application/business logic       |
| `tests/`       | Testing                          |
| `utils/`       | Utility functions                |
| `validators/`  | Input validation                 |

---

# 11. Frontend Structure

```text
frontend/src/
├── assets/
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

---

# 12. Planned Core Modules

## Scam Awareness

Information about common digital scams such as:

* UPI scams
* OTP scams
* Phishing
* Fake customer care
* KYC scams
* Job scams
* Online shopping scams
* Investment scams
* Loan scams
* Social media scams

## Scam Checker

Allows users to provide suspicious information and receive basic guidance about possible warning signs.

## Emergency Assistance

Provides clear steps that users can follow after a suspected cyber fraud.

## Report Guidance

Provides guidance about appropriate official reporting channels and procedures.

## Awareness Resources

Educational resources such as:

* Safety tips
* Scam examples
* FAQs
* Videos
* Awareness material

## AI Assistance

An AI-based assistant is planned to help users understand:

* Scam patterns
* Suspicious messages
* Safe digital practices
* General cyber-safety questions

---

# 13. Basic System Flow

```text
User
  ↓
Suspicious Call / Message / Link / Payment Request
  ↓
Cyber Suraksha
  ↓
Scam Awareness
Scam Checker
Emergency Assistance
Report Guidance
Awareness Resources
AI Assistance
  ↓
Safety Guidance / Appropriate Next Steps
```

---

# 14. Git Workflow

The project follows a feature-branch workflow.

Do not normally develop directly on the `main` branch.

The general workflow is:

```text
main
  ↓
Create Feature Branch
  ↓
Make Changes
  ↓
Test
  ↓
Commit
  ↓
Push Branch
  ↓
Create Pull Request
  ↓
Review
  ↓
Merge into main
  ↓
Update Local main
```

---

# 15. Before Starting New Work

Always get the latest version of the project.

First check your current branch:

```bash
git branch
```

Switch to `main`:

```bash
git switch main
```

Pull the latest changes:

```bash
git pull origin main
```

This ensures that your local `main` contains the latest version from GitHub.

---

# 16. Create a Feature Branch

Never make feature development directly on `main`.

Create a new branch:

```bash
git switch -c feature/feature-name
```

Example:

```bash
git switch -c feature/scam-checker
```

Check the current branch:

```bash
git branch
```

The active branch will be marked with `*`.

---

# 17. Naming Branches

Use descriptive branch names.

Examples:

```text
feature/scam-checker
feature/awareness-page
feature/emergency-assistance
feature/report-guidance
feature/ai-assistant
feature/login
feature/dashboard
```

For bug fixes:

```text
fix/login-error
fix/api-validation
fix/ui-layout
```

For documentation:

```text
docs/setup-update
docs/project-documentation
```

---

# 18. Make Your Changes

Develop and test your feature.

Check the project status:

```bash
git status
```

Review changed files:

```bash
git diff
```

---

# 19. Stage Changes

Stage all required changes:

```bash
git add .
```

Or stage a specific file:

```bash
git add filename
```

Check the staged files:

```bash
git status
```

---

# 20. Commit Changes

Create a meaningful commit:

```bash
git commit -m "Add scam checker module"
```

Examples:

```bash
git commit -m "Add scam awareness page"
git commit -m "Add emergency assistance flow"
git commit -m "Fix API validation"
git commit -m "Update project documentation"
```

Avoid vague commit messages such as:

```text
update
changes
stuff
final
test
```

---

# 21. Push a Feature Branch

Push your branch to GitHub:

```bash
git push -u origin feature/scam-checker
```

For subsequent pushes to the same branch:

```bash
git push
```

---

# 22. Create a Pull Request

After pushing your feature branch:

1. Open the GitHub repository.
2. GitHub will usually show an option to create a Pull Request for the recently pushed branch.
3. Select **Compare & pull request**.
4. Set the target/base branch to:

```text
main
```

5. Set the source/compare branch to your feature branch.

Example:

```text
base: main
compare: feature/scam-checker
```

6. Add a clear Pull Request title.

Example:

```text
Add scam checker module
```

7. Describe what was changed.
8. Mention testing performed.
9. Review the changed files.
10. Create the Pull Request.

---

# 23. Pull Request Description Template

Use a description similar to:

```md
## Description

Briefly describe what this Pull Request changes.

## Changes

- Added ...
- Updated ...
- Fixed ...

## Testing

- Tested frontend locally
- Tested backend locally
- Verified API functionality

## Notes

Mention anything important for reviewers.
```

---

# 24. Pull Request Review

Before merging, check:

* Code works correctly
* No unnecessary files are included
* No `.env` or secrets are committed
* No `node_modules` are committed
* Frontend works
* Backend works
* No obvious errors are present
* Documentation is updated where required

If changes are requested, make the changes on the same branch.

Then:

```bash
git add .
git commit -m "Address review feedback"
git push
```

The existing Pull Request will automatically update.

---

# 25. Merge Pull Request

After the Pull Request is reviewed and approved:

1. Open the Pull Request on GitHub.
2. Review the final changes.
3. Select the appropriate merge option.
4. Merge the Pull Request into `main`.

The feature is now part of the main project branch.

---

# 26. Update Local Repository After Merge

After the Pull Request is merged, update your local repository.

Switch to `main`:

```bash
git switch main
```

Pull the latest version:

```bash
git pull origin main
```

Your local `main` is now synchronized with GitHub.

---

# 27. Delete the Local Feature Branch

After the Pull Request has been merged:

```bash
git branch -d feature/scam-checker
```

Replace the branch name with your actual branch.

Example:

```bash
git branch -d feature/awareness-page
```

---

# 28. Delete the Remote Feature Branch

The remote branch can also be deleted after merging:

```bash
git push origin --delete feature/scam-checker
```

GitHub may also provide a **Delete branch** button after the Pull Request is merged.

---

# 29. Complete Development Cycle

The normal development cycle is:

```bash
git switch main
git pull origin main

git switch -c feature/your-feature

# Make changes

git status
git add .
git commit -m "Describe your changes"

git push -u origin feature/your-feature
```

Then create a Pull Request on GitHub.

After the Pull Request is merged:

```bash
git switch main
git pull origin main
```

Then optionally delete the old feature branch:

```bash
git branch -d feature/your-feature
git push origin --delete feature/your-feature
```

---

# 30. Pull vs Fetch

## Git Pull

Downloads the latest changes and integrates them into the current branch.

```bash
git pull origin main
```

Use this when you want to update your local branch.

## Git Fetch

Downloads information about remote changes without merging them.

```bash
git fetch origin
```

You can then inspect the changes before deciding what to merge.

---

# 31. Check Branches

List local branches:

```bash
git branch
```

List remote branches:

```bash
git branch -r
```

List both:

```bash
git branch -a
```

---

# 32. Check Commit History

View commit history:

```bash
git log --oneline
```

A shorter recent history can be viewed with:

```bash
git log --oneline -10
```

---

# 33. Check Remote Repository

```bash
git remote -v
```

Expected:

```text
origin  git@github.com:0mPawar/CyberSuraksha.git (fetch)
origin  git@github.com:0mPawar/CyberSuraksha.git (push)
```

---

# 34. Important Git Rules

Do not commit:

* `.env`
* `node_modules/`
* Passwords
* API keys
* Private keys
* Database credentials
* Personal credentials
* Temporary files
* Local machine configuration

Always check:

```bash
git status
```

before committing.

---

# 35. Useful Git Commands

### Check status

```bash
git status
```

### Check current branch

```bash
git branch
```

### Switch branch

```bash
git switch branch-name
```

### Create and switch to a branch

```bash
git switch -c branch-name
```

### Pull changes

```bash
git pull origin main
```

### Stage changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Your message"
```

### Push changes

```bash
git push
```

### Push a new branch

```bash
git push -u origin branch-name
```

### View commit history

```bash
git log --oneline
```

### View remote

```bash
git remote -v
```

---

# 36. Development Guidelines

* Keep frontend and backend separate.
* Use meaningful file and variable names.
* Avoid unnecessary duplication.
* Validate user input.
* Do not expose sensitive information.
* Do not store secrets directly in source code.
* Avoid storing unnecessary user information.
* Clearly distinguish educational guidance from official reporting procedures.
* Test changes before creating a Pull Request.
* Keep Pull Requests focused on a specific feature or fix.

---

# 37. Current V1.0 Status

## Completed

* [x] Project created
* [x] React + Vite frontend initialized
* [x] Node.js + Express backend initialized
* [x] Backend development server configured
* [x] Root `.gitignore` configured
* [x] Git repository initialized
* [x] GitHub repository connected through SSH
* [x] Initial project documentation created

## In Development

* [ ] Frontend UI
* [ ] Backend API architecture
* [ ] Database integration
* [ ] Scam awareness module
* [ ] Scam checker
* [ ] Emergency assistance
* [ ] Report guidance
* [ ] Awareness resources
* [ ] AI assistance
* [ ] Community survey integration
* [ ] Testing

---

# 38. Version

**Project:** Cyber Suraksha
**Version:** V1.0
**Status:** Initial Development
**Project Type:** Community Engagement Project (CEP)

## Tagline

**Think Before You Click, Verify Before You Trust.**

```

This version is suitable as the **team's setup + Git workflow document**, so another team member can start from cloning the repo and follow the workflow all the way through a Pull Request and merge.
```
