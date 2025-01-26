"use client"

import AuthProvider from "./AuthProvider"
import ChatbotProvider from "./ChatbotProvider"

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ChatbotProvider>{children}</ChatbotProvider>
    </AuthProvider>
  )
}
