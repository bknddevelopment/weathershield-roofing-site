/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath or assetPrefix needed for custom domain deployment
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig