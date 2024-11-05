import React from "react"
import {
  GridRowModes,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { Department } from "@/lib/types/user"
import { randomId } from "@mui/x-data-grid-generator"
import { CustomToolbarProps } from "@/lib/types/toolbar"

export const CustomToolbar: React.FC<CustomToolbarProps> = ({
  setRows,
  setRowModesModel,
  ...props
}) => {
  const handleClick = () => {
    const id = randomId()
    setRows(oldRows => [
      ...oldRows,
      {
        id,
        name: "",
        age: null,
        joinDate: new Date(),
        role: "" as Department,
        isNew: true,
      },
    ])
    setRowModesModel(oldModel => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }))
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
