# Contributing to @farhod_dev/super-ui

First, thank you for considering contributing to `@farhod_dev/super-ui`! This library aims to be the premier Central Asia-focused accessible UI component library, and community contributions are essential to making that vision a reality.

This document provides a comprehensive guide on how to contribute to the project, from submitting bug reports to writing code and managing pull requests.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Contributing Code](#contributing-code)
- [Development Setup](#development-setup)
- [Code Review Process & PR Guidelines](#code-review-process--pr-guidelines)
- [Styleguides](#styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [TypeScript Rules](#typescript-rules)

## Code of Conduct

By participating in this project, you are expected to uphold our inclusive, respectful, and collaborative values. We welcome contributors from all backgrounds.

## How Can I Contribute?

### Reporting Bugs
If you find a bug, please check the [Issue Tracker](https://github.com/Farhodoff/components-main/issues) first to see if it has already been reported. If not, open a new issue. Include:
- A clear, descriptive title.
- Steps to reproduce the behavior.
- Expected vs. actual behavior.
- Browser, OS, and Node version.

### Suggesting Enhancements
Enhancements can range from small UI tweaks to entirely new components. 
- Describe the feature clearly.
- Provide examples of how it would be used.
- Explain why it fits the scope of a broad, accessible UI library.

### Contributing Code

#### 1. Find an Issue
Look for issues labeled `good first issue` or `help wanted`. If you want to work on something else, please open an issue first to discuss it before spending your time writing code.

#### 2. Local Setup
See [Development Setup](#development-setup) below.

#### 3. Branching Strategy
We use a feature branch workflow.
- Create your branch from `main`.
- Naming convention: `type/short-description` (e.g., `feat/date-picker`, `fix/button-alignment`, `docs/update-readme`).

## Development Setup

1. Fork the repo and clone your fork locally.
2. Ensure you have `Node.js 18+` and `pnpm` installed.

```bash
git clone https://github.com/YOUR_USERNAME/components-main.git
cd components-main
pnpm install
```

### Running the Environment

- **Storybook (Documentation):** `pnpm storybook` (Runs on port 6006)
- **Dev Playground:** `pnpm dev` (Runs on port 5173)

### Testing

All new components or bug fixes must include tests. We enforce 100% strict TypeScript mode.
- **Unit Tests:** `pnpm test`
- **E2E Tests:** `pnpm exec playwright test`

## Code Review Process & PR Guidelines

To prevent the accumulation of abandoned branches, we actively maintain our Pull Request queue.

1. **Draft PRs:** If your work is in progress, open it as a Draft PR.
2. **CI Pipeline:** All GitHub Actions (Tests, Formatting, TypeScript) must pass before a PR can be reviewed.
3. **Reviewers:** Tag `@Farhodoff` for review.
4. **Changes:** Be prepared to iterate on your code based on feedback.
5. **Merge:** Once approved, the maintainer will merge your PR.

### Abandoned PRs
PRs lacking activity for more than 14 days will be marked as "stale" and eventually closed. You can always reopen them when you are ready to continue.

## Styleguides

### Git Commit Messages
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification format.

- `feat:` A new feature.
- `fix:` A bug fix.
- `docs:` Documentation only changes.
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, etc).
- `refactor:` A code change that neither fixes a bug nor adds a feature.
- `test:` Adding missing tests or correcting existing tests.

Example: `feat: add accessibility testing support in storybook`

### TypeScript Rules
We run TypeScript in strict mode (`"strict": true` and `"noImplicitAny": true`).
- Do not use `any`. Use `unknown` if the type is truly dynamically determined, and provide type guards.
- All functional components must have their Props explicitly defined via interfaces.

---
*Thank you for helping us build an incredible UI library!*
