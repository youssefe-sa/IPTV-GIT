/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/channels',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
