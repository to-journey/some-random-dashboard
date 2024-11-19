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
    field: "firstName",
    headerName: "First Name",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "occupation",
    headerName: "Occupation",
    flex: 1,
    minWidth: 100,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    type: "date",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "contactMethod",
    headerName: "Contact Method",
    flex: 1,
    minWidth: 100,
    editable: true,
  },
  {
    field: "maritalStatus",
    headerName: "Marital Status",
    flex: 1,
    minWidth: 100,
    editable: false,
  },
  {
    field: "rating",
    headerName: "Rating",
    flex: 1,
    minWidth: 100,
    editable: false,
  },
  {
    field: "newsletterSubscription",
    headerName: "Newsletter Subscription",
    flex: 1,
    minWidth: 100,
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
