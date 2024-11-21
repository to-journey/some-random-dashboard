"use client"
import React, { useState, useContext, useEffect } from "react"
import { Box } from "@mui/material"
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid"
import { DataColumns } from "./DataColumns.jsx"
import { CustomToolbar } from "./CustomToolbar.jsx"
import Typography from "@mui/material/Typography"
import { UsersContext } from "@/context/UsersContext.js"

const UserDataGrid = () => {
  const { users, setUsers } = useContext(UsersContext)
  const [rows, setRows] = useState(users)
  const [rowModesModel, setRowModesModel] = useState({})

  useEffect(() => {
    setRows(users)
  }, [users])

  const handleRowEditStop = (params, event) => {
    try {
      if (params.reason === GridRowEditStopReasons.rowFocusOut) {
        event.defaultMuiPrevented = true
      }
    } catch (error) {
      console.error("Error in row edit stop handler:", error)
    }
  }

  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = id => () => {
    setRows(rows.filter(row => row.id !== id))
  }

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })
    const editedRow = rows.find(row => row.id === id)
    if (editedRow?.isNew) {
      setRows(rows.filter(row => row.id !== id))
    }
  }

  const processRowUpdate = newRow => {
    const updatedUsers = rows.map(row => (row.id === newRow.id ? newRow : row))
    setUsers(updatedUsers)
    return newRow
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
          height: "auto",
          minHeight: 500,
          width: "98%",
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
