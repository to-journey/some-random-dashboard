"use client"
import React from "react"
import { Box } from "@mui/material"
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
  GridRowModesModel,
  GridRowId,
} from "@mui/x-data-grid"
import { useState } from "react"
import { User } from "@/lib/types/user"
import { createColumns } from "./columns"
import { initialUsers } from "@/lib/utils/dummy-data"
import {
  GridRowEditStopParams,
  HandleRowEditStopEvent,
} from "@/lib/types/toolbar"
import { CustomToolbar } from "./CustomToolbar"

export const UserDataGrid = () => {
  const [rows, setRows] = useState<User[]>(initialUsers)
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

  const handleRowEditStop = (
    params: GridRowEditStopParams,
    event: HandleRowEditStopEvent,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter(row => row.id !== id))
  }

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })
    const editedRow = rows.find(row => row.id === id)
    if (editedRow?.isNew) {
      setRows(rows.filter(row => row.id !== id))
    }
  }

  const processRowUpdate = (newRow: User) => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const columns = createColumns(
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
  )

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
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  )
}