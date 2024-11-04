import {
  GridRowModesModel,
  GridRowModes,
  GridRowEditStopReasons,
  GridRowsProp,
  GridToolbarProps,
} from "@mui/x-data-grid"
import { User } from "./user"

export type EditToolbarProps = {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void
}

export interface CustomToolbarProps extends GridToolbarProps {
  setRows: (newRows: (oldRows: User[]) => User[]) => void
  setRowModesModel: (
    newModel: (
      oldModel: Record<string, { mode: GridRowModes; fieldToFocus: string }>,
    ) => Record<string, { mode: GridRowModes; fieldToFocus: string }>,
  ) => void
}

export type GridRowEditStopParams = {
  reason: GridRowEditStopReasons | undefined
}

export type HandleRowEditStopEvent = {
  defaultMuiPrevented: boolean
}
