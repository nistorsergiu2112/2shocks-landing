import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Support previews opened through the loopback IP as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  agentRules: false,
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
