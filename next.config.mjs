/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
    },
  ],
  redirects: async () => [
    {
      source: '/',
      destination: '/main',
      permanent: false,
    },
  ],
};

export default nextConfig;
