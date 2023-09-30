import { Grid } from '@mui/material';
import pallete from '../../theme/pallete'
interface Props {
    children: JSX.Element | JSX.Element[];
}

const drawerWidth = "64px"

export const DashboardLayout = ({ children }: Props) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: pallete.secondary.blackLike, padding: 0, position: 'relative', paddingLeft: drawerWidth }}
        >
            {children}
        </Grid>
    )
}
