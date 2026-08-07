import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
