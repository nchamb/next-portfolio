/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
      source: '/rss',
      destination: '/rss.xml',
      permanent: true,
      },
      {
      source: '/feed',
      destination: '/rss.xml',
      permanent: true,
      },
      {
      source: '/sitemap',
      destination: '/sitemap.xml',
      permanent: true,
      },
      {
      source: '/blogs/sitemap',
      destination: '/sitemap.xml',
      permanent: true,
      },
      {
      source: '/blogs/sitemap.xml',
      destination: '/sitemap.xml',
      permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
