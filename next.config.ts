import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Specify external packages for Server Components
  serverExternalPackages: ["@toolpad/core"],
}

export default nextConfig
