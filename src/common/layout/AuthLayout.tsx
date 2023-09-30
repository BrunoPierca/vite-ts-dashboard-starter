import { Grid, Typography } from '@mui/material';
import pallette from '../../theme/pallete';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
    color?: boolean;
    sx?: any;
}

export const AuthLayout = ({ children, title = '', color = true, sx }: Props) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: color ? pallette.secondary.blackLike : '', padding: 4, }}
        >
            <Grid item
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    ...sx
                }}>
                {title !== '' ? <Typography className="text-center" variant='h5' sx={{ mb: 1 }}>{title}</Typography> : ''}


                {children}

            </Grid>
        </Grid>
    )
}
