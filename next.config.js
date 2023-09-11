/** @type {import('next').NextConfig} */
const prefix = process.env.PREFIX ? `/${process.env.PREFIX}` : '/'

const nextConfig = {
  assetPrefix: prefix,
  basePrefix: prefix,
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig