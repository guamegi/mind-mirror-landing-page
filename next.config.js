/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/mind-mirror-landing-page',
  assetPrefix: '/mind-mirror-landing-page',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mind-mirror-landing-page',
  },
}

module.exports = nextConfig
