/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['student-teacher-platform.sgp1.digitaloceanspaces.com'],
    // remotePatterns: [new URL('https://student-teacher-platform.sgp1.digitaloceanspaces.com/**')],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logistics-manage.s3.eu-north-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
