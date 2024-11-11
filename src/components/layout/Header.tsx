"use client"
import React from "react"
import { useRouter } from "next/navigation"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

const Header: React.FC = () => {

  const router = useRouter()

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Dashboard
            </Typography>

            <Button
              onClick={() => {
                router.push("/charts")
              }}
              color="inherit"
            >
              Charts
            </Button>

            <Button
              onClick={() => {
                router.push("/")
              }}
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header
