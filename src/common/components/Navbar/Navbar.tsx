import { AppBar, Box, Grid, IconButton, Theme, Toolbar, useTheme } from "@mui/material"
import pallete from "../../../theme/pallete"
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom"
import { useMemo, useState } from "react";
import { SideDrawer, drawerWidth } from './components/SideDrawer';

const getAppBarSX = (theme: Theme, open: boolean) => ({
    zIndex: theme.zIndex.drawer + 1111,
    color: "white",
    boxShadow: "none",
    backgroundColor: pallete.secondary.dark,
    marginLeft: open ? drawerWidth : 0,
    width: `calc(100% - ${open ? drawerWidth : 0}px)`,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
    }),
})


export const Navbar = () => {

    const theme = useTheme()
    const [open, setOpen] = useState(false);

    const location = useLocation()
    const isInDashboard = useMemo(() => location.pathname.includes('/auth') ? false : true, [location])

    return (
        <Box display='flex'>
            <AppBar sx={getAppBarSX(theme, open)} position='fixed'>
                <Toolbar>
                    {isInDashboard && <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={() => setOpen(true)}
                        edge='start'
                        sx={{
                            marginRight: 5, display: open ? "none" : "block"
                        }}
                    >
                        <MenuIcon sx={{ color: pallete.primary.lighter }} />
                    </IconButton>}
                    <Grid container direction='row' >
                        <img src="/images/powerStaffingLogo.png" alt="logo company name" height='50px' />
                    </Grid>
                </Toolbar>
            </AppBar>
            {isInDashboard && <SideDrawer open={open} setOpen={setOpen} />}
        </Box>
    )
}
