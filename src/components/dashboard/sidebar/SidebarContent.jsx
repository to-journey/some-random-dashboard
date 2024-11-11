import { Box, Typography } from "@mui/material"

export function SidebarContent({ pathname }) {
  return (
    <Box className="py-4 flex flex-col items-center text-center">
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  )
}

export default SidebarContent
