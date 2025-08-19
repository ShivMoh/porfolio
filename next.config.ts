import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: 'dist',
  basePath: "/portfolio",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
