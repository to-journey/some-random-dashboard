"use client"
import React from "react"
import { Header, Footer } from "@/components/index"
import { LayoutProps } from "@/lib/types/layout"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-between">
        <main className="container m-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
