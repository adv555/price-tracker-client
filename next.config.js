/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "cdn.idealo.com"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
