// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This 'images' block is the new part you are adding.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;