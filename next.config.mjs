// `npm run export` builds a static copy of the site (used for the shareable preview).
// `npm run build` builds the normal Next.js app you deploy to Vercel.
const isStaticExport = process.env.STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every URL ends in a slash (/shop/), matching canonical links and the sitemap.
  trailingSlash: true,
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }],
  },
};

export default nextConfig;
