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
      destination: `https://pedarbozorg-api.codintofuture.ir/:path*/`,
      basePath: false,
    },
  ],
};

export default nextConfig;
