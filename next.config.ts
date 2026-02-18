import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({ extension: /\.(md|mdx)$/ });

export default withMDX(nextConfig);
