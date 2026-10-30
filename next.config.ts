import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    deviceSizes: [360, 414, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
