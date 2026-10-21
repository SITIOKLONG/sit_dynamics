import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {
        async redirects() {
          return [
            { source: "/services", destination: "/#solutions", permanent: true },
            { source: "/contact", destination: "/#contact", permanent: true },
            {
              source: "/customization",
              destination: "/#capabilities",
              permanent: true,
            },
            { source: "/platforms", destination: "/#solutions", permanent: true },
            { source: "/projects", destination: "/#research", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
