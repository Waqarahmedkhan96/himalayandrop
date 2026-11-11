// `npm run export` builds a static copy of the site (used for the shareable preview).
// `npm run build` builds the normal Next.js app you deploy to Vercel.
const isStaticExport = process.env.STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every URL ends in a slash (/shop/), matching canonical links and the sitemap.
  trailingSlash: true,
  // A branded 404 for every unknown address (the site has two root layouts).
  experimental: { globalNotFound: true },
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }],
  },
  // Urdu was removed: old /ur/ links go to the same page in English.
  ...(isStaticExport ? {} : {
    async redirects() {
      return [
        { source: '/ur', destination: '/', permanent: true },
        { source: '/ur/:path*', destination: '/:path*', permanent: true },
      ];
    },
  }),
};

export default nextConfig;
