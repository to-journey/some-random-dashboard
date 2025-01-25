"use client"
import React, { useState, useEffect } from "react"
import { Box, MenuItem, Select, Typography } from "@mui/material"
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid"
import { DataColumns } from "./DataColumns.jsx"
import { CustomToolbar } from "./CustomToolbar.jsx"
import { useChatbotMessages } from "../../../hooks/useChatbotMessages.js" // Updated import
import { formatDate } from "../../../lib/utils/utils.js" // Import the utility function

const UserDataGrid = () => {
  // Use the chatbot messages context
  const { messages, loading, error } = useChatbotMessages()
  const [rows, setRows] = useState([]) // Initialize rows as an empty array
  const [rowModesModel, setRowModesModel] = useState({}) // Define rowModesModel state
  const [timeFilter, setTimeFilter] = useState("all") // State for time filter

  // Format the messages and update rows when messages change
  useEffect(() => {
    if (messages) {
      const formattedMessages = messages.map(message => ({
        ...message,
        created_at: formatDate(message.created_at), // Format the created_at field
      }))
      setRows(formattedMessages)
    }
  }, [messages])

  // Handle time filter change
  const handleTimeFilterChange = event => {
    setTimeFilter(event.target.value)
  }

  // Filter rows based on the selected time filter
  const filteredRows = rows.filter(row => {
    const rowDate = new Date(row.created_at)
    const now = new Date()

    switch (timeFilter) {
      case "today":
        return rowDate.toDateString() === now.toDateString()
      case "thisWeek":
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()))
        return rowDate >= startOfWeek
      case "last30Days":
        const startOf30Days = new Date(now.setDate(now.getDate() - 30))
        return rowDate >= startOf30Days
      default:
        return true // Show all rows if no filter is selected
    }
  })

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
      {/* Time Filter Dropdown */}
      <Box sx={{ marginBottom: 2 }}>
        <Select
          value={timeFilter}
          onChange={handleTimeFilterChange}
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="thisWeek">This Week</MenuItem>
          <MenuItem value="last30Days">Last 30 Days</MenuItem>
        </Select>
      </Box>

      <DataGrid
        rows={filteredRows} // Use filtered rows
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
