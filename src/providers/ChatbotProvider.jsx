"use client"

import React, { useState, useEffect } from "react"
import { ChatbotContext } from "../context/ChatbotContext"
import { fetchChatbotMessages } from "../api/chatbotApi"

export default function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const data = await fetchChatbotMessages()
        setMessages(data)
        setError(null)
      } catch (err) {
        setError(err.message || "Failed to fetch messages")
      } finally {
        setLoading(false)
      }
    }

    getMessages()
  }, [])

  return (
    <ChatbotContext.Provider value={{ messages, loading, error }}>
      {children}
    </ChatbotContext.Provider>
  )
}
