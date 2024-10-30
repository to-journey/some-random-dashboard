"use client"
import React, { FormEvent, useState } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const validateEmail = (value: string) => {
    if (!value) return "Email is required"
    if (!emailRegex.test(value)) return "Enter a valid email address"
    return ""
  }

  const validatePassword = (value: string) => {
    if (!value) return "Password is required"
    if (value.length < 7) return "Password must be at least 8 characters"
    return ""
  }

  const validateInputs = () => {
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    setErrors({ email: emailError, password: passwordError })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    validateInputs()

    if (!errors.email && !errors.password) {
      // Proceed with login logic if validation passes
      console.log("Email:", email)
      console.log("Password:", password)
    }
  }

  return (
    <Container component="main" maxWidth="xs" className="mt-8">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            validateInputs()
          }}
          error={isSubmitted && !!errors.email}
          helperText={isSubmitted ? errors.email : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            validateInputs()
          }}
          error={isSubmitted && !!errors.password}
          helperText={isSubmitted ? errors.password : ""}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!!errors.email || !!errors.password}
        >
          Log In
        </Button>
      </form>
    </Container>
  )
}

export default LoginForm
