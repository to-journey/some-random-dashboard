"use client"
import React from "react"
import { AppProvider } from "@toolpad/core/nextjs"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"
import { NAVIGATION } from "@/lib/constants/sidebarNavigation"
import { sidebarTheme } from "@/lib/config/sidebarTheme"

export default function DashboardPagesLayout({ children }): React.ReactNode {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <AppProvider
        navigation={NAVIGATION}
        theme={sidebarTheme}
      >
        <DashboardLayout>
            {children}
        </DashboardLayout>
      </AppProvider>
    </AppRouterCacheProvider>
  )
}
