import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // pin the root to this config's directory so running commands from
    // a parent folder can't force Turbopack to scan the entire OneDrive
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.3:3000",
  ],
};

export default nextConfig;
