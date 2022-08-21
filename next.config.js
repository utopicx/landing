/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [process.env.API_URL.replace(/(^\w+:|^)\/\//, "")],
  },
};
module.exports = nextConfig;
