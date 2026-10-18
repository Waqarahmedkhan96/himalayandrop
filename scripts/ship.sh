#!/usr/bin/env bash
# Ship an update: build-check, commit, push to GitHub.
# Vercel is linked to the GitHub repo, so every push to `main` deploys
# automatically to the live site (other branches get a preview link).
#
# Usage:  npm run ship -- "Describe the change"
set -euo pipefail

MSG="${1:-Update storefront}"

echo "› Checking the site builds…"
npm run build >/dev/null

echo "› Committing…"
git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit."
else
  git commit -m "$MSG"
fi

echo "› Pushing to GitHub…"
git push origin "$(git branch --show-current)"

echo "✓ Pushed. Vercel will deploy it in about a minute."
