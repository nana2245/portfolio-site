/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.PREFIX ? `/${process.env.PREFIX}` : '/',
  basePath: process.env.PREFIX ? `/${process.env.PREFIX}` : '',
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
