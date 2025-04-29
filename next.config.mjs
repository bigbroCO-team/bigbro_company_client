/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
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
  output: 'standalone',
};

export default nextConfig;
