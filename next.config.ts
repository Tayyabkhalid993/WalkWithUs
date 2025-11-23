import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Disable ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
