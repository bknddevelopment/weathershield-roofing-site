/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix when using custom domain
  // basePath: isProd ? '/weathershield-roofing-site' : '',
  // assetPrefix: isProd ? '/weathershield-roofing-site' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig