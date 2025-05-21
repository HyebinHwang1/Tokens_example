import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "github.com" }],
  },
};

export default nextConfig;
