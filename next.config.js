/** @type {import('next').NextConfig} */
const prefix = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '/'

const nextConfig = {
  assetPrefix: prefix,
  basePrefix: prefix,
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
