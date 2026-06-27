// Next.js configuration (CommonJS) mirroring the original TypeScript config
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better code quality
  reactStrictMode: true,

  // Fix workspace root warning
  outputFileTracingRoot: __dirname,

  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.firebaseapp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // SEO: Enable trailing slashes for cleaner URLs
  trailingSlash: false,

  // Production optimizations
  poweredByHeader: false,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
