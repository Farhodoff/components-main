# CI/CD Pipeline Setup Guide

## 🎯 What Was Created

### GitHub Actions Workflows

1. **`.github/workflows/ci.yml`** - Continuous Integration
   - ✅ Lint checking (ESLint)
   - ✅ Type checking (TypeScript)
   - ✅ Unit tests (Vitest)
   - ✅ Build verification
   - ✅ E2E tests (Playwright)

2. **`.github/workflows/storybook.yml`** - Storybook Deployment
   - Auto-deploys to GitHub Pages on main branch
   - Public component documentation

3. **`.github/workflows/codeql.yml`** - Security Scanning
   - Weekly security scans
   - Vulnerability detection

4. **`.github/dependabot.yml`** - Dependency Updates
   - Automated dependency updates
   - Weekly npm package updates

### GitHub Templates

1. **`.github/PULL_REQUEST_TEMPLATE.md`** - PR Template
2. **`.github/ISSUE_TEMPLATE/bug_report.md`** - Bug Reports
3. **`.github/ISSUE_TEMPLATE/feature_request.md`** - Feature Requests

---

## 📋 Next Steps to Activate

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: initial commit with CI/CD pipeline"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/components-main.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. Save

### Step 3: Update README Badges

Replace `YOUR_USERNAME` in README.md with your actual GitHub username:
- Line 3: CI badge
- Line 4: Storybook badge

### Step 4: Configure Branch Protection (Optional)

Settings → Branches → Add rule for `main`:
- ✅ Require pull request before merging
- ✅ Require status checks to pass
  - Select: lint, typecheck, test, build
- ✅ Require branches to be up to date

---

## 🧪 Testing Locally

Before pushing, ensure all checks pass locally:

```bash
# 1. Lint
pnpm lint

# 2. Type check
pnpm exec tsc --noEmit

# 3. Tests
pnpm test --run

# 4. Build
pnpm build
pnpm build:lib

# 5. Storybook build
pnpm build-storybook

# 6. E2E tests
pnpm exec playwright test
```

---

## 🔍 What Happens After Push?

### On Every Push to Main:
1. ✅ CI workflow runs (lint, test, build)
2. ✅ Storybook deploys to GitHub Pages
3. ✅ CodeQL security scan runs

### On Every Pull Request:
1. ✅ CI workflow runs
2. ✅ Status checks appear in PR
3. ❌ Cannot merge if checks fail

### Every Monday:
1. ✅ Dependabot checks for updates
2. ✅ Creates PRs for outdated dependencies
3. ✅ CodeQL security scan runs

---

## 📊 Monitoring

### GitHub Actions Tab
- View all workflow runs
- See detailed logs
- Download artifacts (test reports)

### Status Badges
- CI badge shows build status
- Storybook badge links to docs
- Visible in README

---

## 🚀 Future Enhancements

### 1. NPM Publishing Workflow
When ready to publish to NPM:

```yaml
# .github/workflows/release.yml
name: Release
on:
  push:
    tags:
      - 'v*'
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm build:lib
      - run: pnpm publish --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 2. Slack/Discord Notifications
Get notified when builds fail:

```yaml
- name: Notify on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### 3. Lighthouse CI
Automatic performance testing:

```yaml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      http://localhost:5173
```

---

## 🐛 Troubleshooting

### CI Fails on GitHub but Passes Locally

**Check:**
1. Node version (use 18 in both)
2. Environment variables (.env not in repo)
3. Dependencies (pnpm install --frozen-lockfile)

### Storybook Deploy Fails

**Check:**
1. GitHub Pages is enabled
2. Source is set to "GitHub Actions"
3. Build succeeds locally: `pnpm build-storybook`

### CodeQL Takes Too Long

**Solution:**
- Only runs on main push and PRs
- Scheduled weekly scans
- Can be disabled in workflow file

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Setup](https://docs.github.com/en/pages)
- [Dependabot Configuration](https://docs.github.com/en/code-security/dependabot)
- [CodeQL Security](https://codeql.github.com/)

---

## ✅ Checklist

Before pushing to GitHub:

- [ ] All local tests pass
- [ ] README badges updated with username
- [ ] GitHub repository created
- [ ] GitHub Pages enabled
- [ ] First commit pushed
- [ ] Actions tab checked
- [ ] Storybook deployed successfully

**You're ready for professional CI/CD! 🎉**
