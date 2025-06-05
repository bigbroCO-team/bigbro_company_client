/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 도메인 허용
      },
      {
        protocol: 'http',
        hostname: '**', // http도 허용할 경우
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
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
