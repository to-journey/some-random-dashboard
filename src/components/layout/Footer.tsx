import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="my-auto mx-auto">
      <p className="text-sm">© {new Date().getFullYear()} Dashboard UI.</p>
    </footer>
  )
}

export default Footer

