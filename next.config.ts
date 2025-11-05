// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// // for static export
//   basePath: '/repo-name', // your GitHub repo name
//    reactStrictMode: true,
//   assetPrefix: "/repo-name/",
//   images: {
//     unoptimized: true, // disable image optimization for static export
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

