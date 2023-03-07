/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['coding-challenge-api.aerolab.co']
  },
}

module.exports = nextConfig
