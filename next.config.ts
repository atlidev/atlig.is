import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Redirect / to /lason by default
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lason",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
