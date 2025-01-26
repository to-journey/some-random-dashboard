"use client"

import React, { useState, useEffect } from "react"
import { ChatbotContext } from "../context/ChatbotContext"
import { fetchChatbotMessages } from "../api/chatbotApi"

export default function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch chatbot messages when the provider mounts
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true) // Set loading to true
      try {
        const data = await fetchChatbotMessages() // Fetch messages
        setMessages(data) // Update state with fetched messages
        setError(null) // Clear any previous errors
      } catch (err) {
        setError(err.message) // Set error message if something goes wrong
      } finally {
        setLoading(false) // Set loading to false
      }
    }

    getMessages() // Call the function to fetch messages
  }, [])

  // Provide the context value to children
  return (
    <ChatbotContext.Provider value={{ messages, loading, error }}>
      {children}
    </ChatbotContext.Provider>
  )
}
