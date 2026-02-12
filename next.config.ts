import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pinpad.vercel.app",
      },
      {
        hostname: "bookora.vercel.app",
      },
      {
        hostname: "freeclip.vercel.app",
      },
      {
        hostname: "eazybuy-rho.vercel.app",
      },
      {
        hostname: "wetravel.pk",
      },
      {
        hostname: "mybot-coral.vercel.app",
      },
    ],
  },
};

export default nextConfig;
