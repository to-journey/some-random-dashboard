import { createContext } from "react"

// Create a context for chatbot messages
export const ChatbotContext = createContext({
  messages: [],
  loading: false,
  error: null,
})
