import axios from "axios"

// Access environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_APIKEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create an Axios instance for Supabase
const supabase = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1`, // Correct base URL
  headers: {
    apikey: SUPABASE_APIKEY, // Supabase API key
    Authorization: `Bearer ${SUPABASE_APIKEY}`, // Authorization header
  },
})

// Fetch chatbot messages from Supabase
export const fetchChatbotMessages = async () => {
  try {
    // Construct the full URL for debugging
    const fullUrl = `${SUPABASE_URL}/rest/v1/chatbot?select=*`
    console.log("Full URL being hit:", fullUrl) // Log the full URL

    // Query the "chatbot" table
    const response = await supabase.get("/chatbot", {
      params: {
        select: "*", // Fetch all columns
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching chatbot messages:", error)
    throw error
  }
}
