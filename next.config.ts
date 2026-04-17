import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSiteRepository = repositoryName.endsWith(".github.io");
const configuredBasePath = process.env.BASE_PATH ?? "";
const basePath = isUserSiteRepository ? "" : configuredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
