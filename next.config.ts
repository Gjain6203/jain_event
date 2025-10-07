import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // for static export
  basePath: '/repo-name', // your GitHub repo name
  images: {
    unoptimized: true, // disable image optimization for static export
  },
};

export default nextConfig;
