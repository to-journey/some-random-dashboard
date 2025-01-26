"use client"
import React, { Suspense } from "react"
import { NextAppProvider } from "@toolpad/core/nextjs"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"
import { createTheme } from "@mui/material/styles"
import { NAVIGATION } from "@/config/sidebarNavigation"

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NextAppProvider
        navigation={NAVIGATION}
        branding={{ title: "", logo: "" }}
        theme={createTheme({
          colorSchemes: { light: true },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 600,
              lg: 1200,
              xl: 1536,
            },
          },
        })}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardLayout
            defaultSidebarCollapsed
            // disableCollapsibleSidebar /*disable collapsable side panel button*/
            sx={{ overflow: "auto", width: "100%" }}
          >
            {children}
          </DashboardLayout>
        </Suspense>
      </NextAppProvider>
    </AppRouterCacheProvider>
  )
}
