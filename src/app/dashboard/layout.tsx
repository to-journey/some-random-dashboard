"use client"
import React, { Suspense } from "react" // Import Suspense
import { NextAppProvider } from "@toolpad/core/nextjs"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"
import { NAVIGATION } from "@/lib/constants/sidebarNavigation"
import { sidebarTheme } from "@/lib/config/sidebarTheme"

export default function DashboardPagesLayout({ children }): React.ReactNode {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NextAppProvider
        navigation={NAVIGATION}
        branding={{ title: "", logo: "" }}
        theme={sidebarTheme}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardLayout sx={{ overflow: "auto", width: "100%" }}>
            {children}
          </DashboardLayout>
        </Suspense>
      </NextAppProvider>
    </AppRouterCacheProvider>
  )
}
