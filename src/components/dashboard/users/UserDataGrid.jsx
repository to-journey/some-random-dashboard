"use client"
import React, { useState } from "react"
import { Box } from "@mui/material"
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid"
import { DataColumns } from "./DataColumns.jsx"
import { CustomToolbar } from "./CustomToolbar.jsx"
import Typography from "@mui/material/Typography"
import { INITIAL_USERS } from "@/lib/utils/utils.js"

const UserDataGrid = () => {
  const [rows, setRows] = useState(INITIAL_USERS)
  const [rowModesModel, setRowModesModel] = useState({})
  const handleRowEditStop = (params, event) => {
    try {
      if (params.reason === GridRowEditStopReasons.rowFocusOut) {
        event.defaultMuiPrevented = true
      }
    } catch (error) {
      console.error("Error in row edit stop handler:", error)
    }
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter(row => row.id !== id))
  }

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })
    const editedRow = rows.find(row => row.id === id)
    if (editedRow?.isNew) {
      setRows(rows.filter(row => row.id !== id))
    }
  }

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const columns = DataColumns(
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
  )

  if (rows.length > 0) {
    return (
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={setRowModesModel}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </Box>
    )
  } else {
    return (
      <Box
        sx={{
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Typography color="text.secondary">No users found</Typography>
      </Box>
    )
  }
}

export default UserDataGrid