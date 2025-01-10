import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: '/app',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
