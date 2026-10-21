import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/services", destination: "/#solutions", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/customization", destination: "/#capabilities", permanent: true },
      { source: "/platforms", destination: "/#solutions", permanent: true },
      { source: "/projects", destination: "/#research", permanent: true },
    ];
  },
};

export default nextConfig;
