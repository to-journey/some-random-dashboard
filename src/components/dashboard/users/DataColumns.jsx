import { GridRowModes, GridActionsCellItem } from "@mui/x-data-grid"
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material"

export const DataColumns = (
  rowModesModel,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
) => [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    minWidth: 100,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "created_at",
    headerName: "Created At",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "typebot_id",
    headerName: "Typebot ID",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "thread_id",
    headerName: "Thread ID",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "user_message",
    headerName: "User Message",
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: "suggested_message",
    headerName: "Suggested Message",
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: "bot_message",
    headerName: "Bot Message",
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: "user_id",
    headerName: "User ID",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "user_name",
    headerName: "User Name",
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: "user_email",
    headerName: "User Email",
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: "callback_spare1",
    headerName: "Callback Spare 1",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "callback_spare2",
    headerName: "Callback Spare 2",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "user_ip",
    headerName: "User IP",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "user_country",
    headerName: "User Country",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    flex: 1,
    minWidth: 50,
    cellClassName: "actions",
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key={`save-${id}`}
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
            color="primary"
            disabled={false}
          />,
          <GridActionsCellItem
            key={`cancel-${id}`}
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="inherit"
            disabled={false}
          />,
        ]
      }

      return [
        <GridActionsCellItem
          key={`edit-${id}`}
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick(id)}
          color="inherit"
          disabled={false}
        />,
        <GridActionsCellItem
          key={`delete-${id}`}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
          disabled={false}
        />,
      ]
    },
  },
]
