const API_URL = process.env.API;

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["pedarbozorg-api.codintofuture.ir"],
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
