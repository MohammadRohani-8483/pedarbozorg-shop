const API_URL = process.env.API;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["trustseal.enamad.ir", "api.pedarbozorg.shop"],
  },
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `https://api.pedarbozorg.shop/:path*/`,
      basePath: false,
    },
  ],
};

export default nextConfig;
