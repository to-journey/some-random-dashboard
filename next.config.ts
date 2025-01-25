import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Experimental features
  experimental: {
    // Enable the App Router (if not already enabled)
    appDir: true,

    // Specify external packages for Server Components
    serverComponentsExternalPackages: ["@toolpad/core"],

    // Disable CSR bailout warnings (use with caution)
    disableClientSideRenderWarning: true,
  },
}

export default nextConfig
