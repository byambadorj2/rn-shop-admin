import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "omtmscavaphnvvxtspgw.supabase.co",
      },
      {
        protocol: "http",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
