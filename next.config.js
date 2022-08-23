/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      process.env.API_URL.replace(/(^\w+:|^)\/\//, ""),
      process.env.NEXT_PUBLIC_IMAGE_URL,
    ],
  },
};
module.exports = nextConfig;
