const API_URL = process.env.API;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pedarbozorg-api.codintofuture.ir", "api.pedarbozorg.shop"],
  },
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${API_URL}/:path*/`,
      basePath: false,
    },
  ],
};

export default nextConfig;
