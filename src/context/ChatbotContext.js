import { createContext } from "react"

// Create a context for chatbot messages
export const ChatbotContext = createContext({
  messages: [], // Array to store chatbot messages
  loading: false, // Loading state
  error: null, // Error state
})
