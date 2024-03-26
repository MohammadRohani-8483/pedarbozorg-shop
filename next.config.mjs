const API_URL = process.env.API;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pedarbozorg-api.codintofuture.ir"],
  },
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `https://pedarbozorg-api.codintofuture.ir/:path*/`,
      basePath: false,
    },
  ],
};

export default nextConfig;
