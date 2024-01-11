import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const EditAndDeleteFields: (disabled: boolean) => GridColDef[] = (disabled: boolean) => [
    {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        align: 'center',
        maxWidth: 65,
        disableColumnMenu: true,
        hideSortIcons: true,
        renderCell: (row) => <IconButton disabled={disabled}><EditIcon color={disabled ? "disabled" : "warning"} /></IconButton>
    },
    {
        field: 'delete',
        headerName: 'Delete',
        headerAlign: 'center',
        align: 'center',
        maxWidth: 65,
        disableColumnMenu: true,
        hideSortIcons: true,
        renderCell: (row) => <IconButton disabled={disabled}><DeleteForeverIcon color={disabled ? "disabled" : "error"} /></IconButton>
    },
]