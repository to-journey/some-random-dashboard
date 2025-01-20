import type { Metadata } from "next"
import localFont from "next/font/local"
import "../styles/globals.css"
import { Layout, AuthProvider } from "@/components/index"
import { ChatbotProvider } from "@/context/ChatbotProvider"

const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "User dashboard UI",
  description: "Next.js app",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Layout>
            <ChatbotProvider>
              {children}
            </ChatbotProvider>
          </Layout>
        </AuthProvider>
      </body>
    </html>
  )
}
