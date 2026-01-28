import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack, use standard webpack
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
