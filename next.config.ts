import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep local development output separate from production builds.
  distDir: process.env.BINBIN_WEBPACK === "1" ? ".next/webpack" : ".next",
  // Keep module resolution and file watching scoped to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
