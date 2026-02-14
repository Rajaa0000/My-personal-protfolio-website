/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // allow Sanity images
  },
};

module.exports = nextConfig;