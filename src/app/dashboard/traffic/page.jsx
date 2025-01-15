"use client"

import React, { Suspense } from "react"

const TrafficPage = () => {
  <Suspense fallback={<div>Loading traffic data...</div>}>
    <h1>Traffic here</h1>
  </Suspense>
}

export default TrafficPage
