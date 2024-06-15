/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        port: "",
        pathname: "/docs/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scrumpoker.chongxian.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.jsoner.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
