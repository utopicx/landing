/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      process.env.API_URL.replace(/(^\w+:|^)\/\//, ""),
      process.env.NEXT_PUBLIC_IMAGE_URL,
    ],
  },
};
module.exports = nextConfig;
