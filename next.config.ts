import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // The root layout lives under a dynamic segment (app/[lang]/layout.tsx),
    // so unmatched URLs have no layout to compose a 404 from. global-not-found
    // is the convention Next.js provides for exactly this case.
    globalNotFound: true,
  },
};

export default nextConfig;
