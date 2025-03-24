import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home", // Change to your desired default route
        permanent: false, // Set to true if this should be a permanent redirect
      },
    ];
  },
};

export default nextConfig;
