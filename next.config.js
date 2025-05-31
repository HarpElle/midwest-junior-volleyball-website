/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Only use static export for production builds
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  // Only use basePath for production builds (GitHub Pages)
  ...(isProd && { 
    basePath: '/midwest-junior-volleyball-website',
    assetPrefix: '/midwest-junior-volleyball-website/',
  }),
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 