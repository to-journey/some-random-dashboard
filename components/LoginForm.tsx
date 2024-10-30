"use client"
import React, { FormEvent, useState } from "react"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(email, password)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
