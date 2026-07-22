import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/mobile-wearable-systems-group" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
  ...(isGitHubPages ? { typescript: { ignoreBuildErrors: true } } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: isGitHubPages
      ? "https://yangliu-cs.github.io/mobile-wearable-systems-group"
      : "https://mobile-wearable-systems-group.yliu94913.chatgpt.site",
  },
};

export default nextConfig;
