import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com", // 🔹 Permite imagens do Mercado Livre
      },
    ],
  },
};

export default nextConfig;
