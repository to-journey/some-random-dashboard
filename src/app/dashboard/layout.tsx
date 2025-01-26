"use client"

import React, { Suspense } from "react"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardLayout
        defaultSidebarCollapsed
        sx={{ overflow: "auto", width: "100%" }}
      >
        {children}
      </DashboardLayout>
    </Suspense>
  )
}
