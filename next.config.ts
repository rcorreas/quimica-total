import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/quimica-total",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
