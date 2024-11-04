import { GridRowModesModel, GridRowEditStopReasons, GridRowsProp } from "@mui/x-data-grid"
// import { User } from "./user"

export type EditToolbarProps = {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void
  // setRows: React.Dispatch<React.SetStateAction<User[]>>

  // setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>
}

export type GridRowEditStopParams = {
  reason: GridRowEditStopReasons;
}

export type HandleRowEditStopEvent = {
  defaultMuiPrevented: boolean;
}




// HandleRowEditStopParams