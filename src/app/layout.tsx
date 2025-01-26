import type { Metadata } from "next"
import { Inter } from "next/font/google" // Import Inter from next/font/google
import "../styles/globals.css"
import { Layout } from "@/components/index"
import Providers from "@/providers/Providers"

// Load the Inter font with specific weights and subsets
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "b2blead",
  description: "Analytics dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
