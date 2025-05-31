/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/midwest-junior-volleyball-website',
  assetPrefix: '/midwest-junior-volleyball-website',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 