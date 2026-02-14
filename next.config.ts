import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This is the important part
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // If the "private ip" error persists locally, 
    // you can try adding this line to test:
    // unoptimized: true, 
  },
};

export default nextConfig;