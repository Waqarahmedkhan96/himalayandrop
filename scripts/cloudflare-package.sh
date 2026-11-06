#!/usr/bin/env bash
# Build a standalone, uploadable package for Cloudflare Pages.
# Output: himalayan-drop-cloudflare.zip  (unzip contents = the site root)
# Upload: Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets,
# or:  npx wrangler pages deploy out --project-name himalayan-drop
#
# Usage: npm run package:cloudflare
# Set NEXT_PUBLIC_SITE_URL (your real domain) and NEXT_PUBLIC_GSC_VERIFICATION first if you have them.
set -euo pipefail
rm -rf out himalayan-drop-cloudflare.zip
echo "› Building the static site…"
# API routes (the contact form) need a server, so they are left out of the static package.
# In this package the contact form posts to NEXT_PUBLIC_CONTACT_ENDPOINT (the Vercel URL).
mv app/api .api-off 2>/dev/null || true
trap 'mv .api-off app/api 2>/dev/null || true' EXIT
STATIC_EXPORT=1 npx next build >/dev/null
mv .api-off app/api 2>/dev/null || true
test -f out/index.html || { echo "Export failed: out/index.html missing"; exit 1; }
test -f out/sitemap.xml && test -f out/robots.txt || { echo "sitemap.xml / robots.txt missing"; exit 1; }
test -f out/_headers || cp public/_headers out/_headers
echo "› Zipping…"
(cd out && zip -qr ../himalayan-drop-cloudflare.zip .)
echo "✓ himalayan-drop-cloudflare.zip ($(du -h himalayan-drop-cloudflare.zip | cut -f1), $(find out -name '*.html' | wc -l) pages)"
