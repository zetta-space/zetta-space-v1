/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["i.ibb.co", "unsplash.com"],
  },
};

module.exports = nextConfig;
