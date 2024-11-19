import React from "react"
import { useRouter } from "next/navigation"
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export const CustomToolbar = ({ ...props }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/create-user")
  }

  return (
    <GridToolbarContainer {...props}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add User
      </Button>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}
