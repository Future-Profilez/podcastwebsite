/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'podcast-website-bucket.s3.eu-north-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /plyr/ }];
    return config;
  },
};

module.exports = nextConfig;
