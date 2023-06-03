/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    experimental: {
      outputStandalone: true,
    },
  },
  presets: ["next/babel"],
};

module.exports = nextConfig;
