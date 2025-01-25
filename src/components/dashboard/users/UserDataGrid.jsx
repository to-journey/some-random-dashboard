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
  // Use the chatbot messages context
  const { messages, loading, error } = useChatbotMessages()
  const [rows, setRows] = useState(messages) // Initialize rows with messages
  const [rowModesModel, setRowModesModel] = useState({})

  // Update rows when messages change
  useEffect(() => {
    setRows(messages)
  }, [messages])

  // Handle row edit stop
  const handleRowEditStop = (params, event) => {
    try {
      if (params.reason === GridRowEditStopReasons.rowFocusOut) {
        event.defaultMuiPrevented = true
      }
    } catch (error) {
      console.error("Error in row edit stop handler:", error)
    }
  }

  // Handle edit click
  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  // Handle save click
  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  // Handle delete click
  const handleDeleteClick = id => () => {
    setRows(rows.filter(row => row.id !== id))
  }

  // Handle cancel click
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

  // Process row updates
  const processRowUpdate = newRow => {
    const updatedMessages = rows.map(row =>
      row.id === newRow.id ? newRow : row,
    )
    setRows(updatedMessages) // Update local state
    return newRow
  }

  // Define columns using DataColumns
  const columns = DataColumns(
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
  )

  // Loading state
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

  // Error state
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

  // Empty state
  if (!messages || messages.length === 0) {
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

  // Render the DataGrid
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
}

export default UserDataGrid
