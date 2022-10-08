/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {topLevelAwait: true},
  images: {
    domains: ['logos-download.com', 'upload.wikimedia.org'],
  }
}

module.exports = nextConfig
