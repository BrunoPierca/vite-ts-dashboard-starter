import { useEffect, useState } from 'react';

import { Typography, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { TableLoadingOrNoData } from './components/TableLoadingOrNoData';
import { EditAndDeleteFields } from './components/EditAndDeleteFields';
import { useTable } from '../../../hooks';


interface CustomTableProps {
    title: string;
    columns: GridColDef[];
    handleCellClick: React.Dispatch<React.SetStateAction<any>>;
    queryKey: string;
    pluralQueryKey?: string;
    queryFn: (actualPage: number, rowsPerPage: number) => Promise<any>
}

export const CustomTable = ({ title, columns, handleCellClick, queryFn, queryKey, pluralQueryKey }: CustomTableProps) => {
    const { actualPage, setActualPage, data, isLoading, isFetching, isMutating, maxRowsToShow, setRowsPerPage, rowsPerPage } = useTable({ queryKey, pluralQueryKey, queryFn })

    const [paginationModel, setPaginationModel] = useState({
        pageSize: rowsPerPage,
        page: actualPage
    });

    useEffect(() => {
        setActualPage(paginationModel.page);
        setRowsPerPage(paginationModel.pageSize);
    }, [paginationModel, setActualPage, setRowsPerPage])

    const handleRowClick = (e: any) => {
        // prevent misclicks
        if (isLoading || isMutating) return
        handleCellClick(e)
    }

    return (
        <Box
            sx={{
                width: "80%",
                minHeight: "460px",
                backgroundColor: "white",
                borderRadius: 2,
                padding: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography className="text-center" variant="h3" component={"h1"} fontSize={{ xs: "2rem", sm: "3rem", xl: "3.5rem" }} fontWeight={"bold"} my={1}>
                {title}
            </Typography>
            {isLoading || data?.users.length === 0 ? (
                <TableLoadingOrNoData status={isLoading ? "loading" : "noData"} />
            ) : (
                <DataGrid
                    loading={isMutating || isFetching}
                    paginationModel={paginationModel}
                    onPaginationModelChange={(e) => setPaginationModel(e)}
                    rowCount={maxRowsToShow ?? 5}
                    rows={data['users']}
                    onCellClick={handleRowClick}
                    columns={[...columns, ...EditAndDeleteFields(isMutating)]}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                    paginationMode="server"
                    sx={{
                        backgroundColor: "white",
                        flex: 1,
                    }}
                />
            )}
        </Box>
    );
}