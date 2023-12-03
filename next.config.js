/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {};

module.exports = withNextIntl({
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: envImageUnoptimize,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
});
