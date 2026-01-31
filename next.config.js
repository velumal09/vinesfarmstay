/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['a0.muscache.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://vinesfarmstay.com',
    NEXT_PUBLIC_SITE_NAME: 'VinES Farmstay',
  },
}

module.exports = nextConfig
