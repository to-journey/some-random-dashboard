import React from "react"
import currentYear from "@/lib/utils/currentYear"

const Footer: React.FC = () => {
  return (
    <footer className="my-auto mx-auto">
      <p className="text-sm">© {currentYear} Dashboard UI.</p>
    </footer>
  )
}

export default Footer
