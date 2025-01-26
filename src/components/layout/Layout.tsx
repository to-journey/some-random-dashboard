"use client"
import React from "react"
import { Header, Footer } from "@/components/index"
import { LayoutProps } from "src/types/layout"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-fit mx-auto">
      <Header />
      <div className="min-h-screen flex flex-col justify-between">
        <main className=" max-w-[1536px] container m-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
