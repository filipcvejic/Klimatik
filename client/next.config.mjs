/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "klimatik.rs" }],
        destination: "https://klimatik.rs/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
