import { Box } from "@mui/system"
import { CircularProgress, Typography } from "@mui/material"

interface Props {
    status: "loading" | "noData"
}

export const TableLoadingOrNoData = ({ status }: Props) => {
    return (
        <Box sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {
                status === "loading" ?
                    <CircularProgress
                        sx={{
                            color: (theme: any) =>
                                theme.palette.secondary.main,
                        }}
                        size={40}
                        thickness={4}
                        value={100}
                    />
                    :
                    <Typography>There isn't any data to show</Typography>
            }

        </Box>
    )
}
