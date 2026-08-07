import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: join(__dirname, ".."),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ideabeam.com",
      },
      {
        protocol: "https",
        hostname: "www.ideabeam.com",
      },
      {
        protocol: "https",
        hostname: "www.buyzone.lk",
      },
    ],
  },
};

export default nextConfig;
