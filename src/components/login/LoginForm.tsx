"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { TextField, Button, Container, Typography } from "@mui/material"
import { Inputs } from "@/lib/types/loginForm"

const LoginForm: React.FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "John@yahoo.com",
      password: "123456",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = () => {
    router.push("/dashboard")
  }

  return (
    <Container component="main" maxWidth="xs" className="mt-8">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </Container>
  )
}

export default LoginForm
