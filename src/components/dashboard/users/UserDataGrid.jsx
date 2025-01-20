"use client"
import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid"
import { DataColumns } from "./DataColumns.jsx"
import { CustomToolbar } from "./CustomToolbar.jsx"
import Typography from "@mui/material/Typography"
import { useChatbotMessages } from "../../../hooks/useChatbotMessages.js" // Updated import

const UserDataGrid = () => {
  // Replace UsersContext with ChatbotContext
  const { messages, loading, error } = useChatbotMessages() // Updated context usage
  const [rows, setRows] = useState(messages) // Updated state initialization
  const [rowModesModel, setRowModesModel] = useState({})

  useEffect(() => {
    setRows(messages) // Update rows when messages change
    console.log(`messages, ${messages.thread_id}`)
  }, [messages])


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
    const updatedMessages = rows.map(row => (row.id === newRow.id ? newRow : row))
    // If you have a function to update messages in context, use it here
    // For now, we just update the local state
    setRows(updatedMessages)
    return newRow
  }

  const columns = DataColumns(
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
  )

  if (loading) {
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
        <Typography color="text.secondary">Loading...</Typography>
      </Box>
    )
  }

  if (error) {
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
        <Typography color="error">Error: {error}</Typography>
      </Box>
    )
  }

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
        <Typography color="text.secondary">No messages found</Typography>
      </Box>
    )
  }
}

export default UserDataGrid