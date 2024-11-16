import {
  GridColDef,
  GridActionsCellItem,
  GridRowModesModel,
  GridRowId,
  GridRowModes,
} from "@mui/x-data-grid"
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material"
import { DEPARTMENTS } from "@/lib/constants/userData"
import { COLUMN_CONFIG } from "@/lib/config/userGridColumns"

export const DataColumns = (
  rowModesModel: GridRowModesModel,
  handleSaveClick: (id: GridRowId) => () => void,
  handleCancelClick: (id: GridRowId) => () => void,
  handleEditClick: (id: GridRowId) => () => void,
  handleDeleteClick: (id: GridRowId) => () => void,
): GridColDef[] => [
  {
    field: "id",
    headerName: "ID",
    flex: COLUMN_CONFIG.ID.flex,
    minWidth: COLUMN_CONFIG.ID.minWidth,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "name",
    headerName: "Name",
    flex: COLUMN_CONFIG.NAME.flex,
    minWidth: COLUMN_CONFIG.NAME.minWidth,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: COLUMN_CONFIG.AGE.flex,
    minWidth: COLUMN_CONFIG.AGE.minWidth,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "joinDate",
    headerName: "Join date",
    type: "date",
    flex: COLUMN_CONFIG.JOIN_DATE.flex,
    minWidth: COLUMN_CONFIG.JOIN_DATE.minWidth,
    editable: true,
  },
  {
    field: "role",
    headerName: "Department",
    flex: COLUMN_CONFIG.DEPARTMENT.flex,
    minWidth: COLUMN_CONFIG.DEPARTMENT.minWidth,
    editable: true,
    type: "singleSelect",
    valueOptions: [...DEPARTMENTS],
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    flex: COLUMN_CONFIG.ACTIONS.flex,
    minWidth: COLUMN_CONFIG.ACTIONS.minWidth,
    cellClassName: "actions",
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key={`save-${id}`}
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: "primary.main",
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key={`cancel-${id}`}
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ]
      }

      return [
        <GridActionsCellItem
          key={`edit-${id}`}
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          key={`delete-${id}`}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ]
    },
  },
]
