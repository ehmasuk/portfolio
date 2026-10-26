import createMDX from "@next/mdx";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";

/**
 * Resolve image hostnames from the project `liveDemo` / `favicon` URLs in
 * data/resume.tsx at build time, so you don't have to touch this file every
 * time you add a new project. `img.freepik.com` is added separately (used by
 * avatar images in data/ui/real-time-presence.tsx).
 */
function getProjectHostnames(): string[] {
  const resumeSource = readFileSync(
    join(process.cwd(), "data/resume.tsx"),
    "utf8",
  );

  const hostnames = new Set<string>();
  // Matches `liveDemo: "https://..."` / `favicon: "https://..."` entries.
  const urlRegex = /(?:liveDemo|favicon):\s*"([^"]+)"/g;

  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(resumeSource))) {
    try {
      const hostname = new URL(match[1]).hostname;
      if (hostname) hostnames.add(hostname);
    } catch {
      // ignore invalid URLs
    }
  }

  return Array.from(hostnames);
}

const hostnames = [...getProjectHostnames(), "img.freepik.com"];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      hostname,
    })),
  },
};

const withMDX = createMDX({ extension: /\.(md|mdx)$/ });

export default withMDX(nextConfig);
