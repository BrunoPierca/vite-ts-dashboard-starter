import { Typography, Drawer, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme, Theme } from '@mui/material'

// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import pallete from '../../../../theme/pallete'

interface Props {
    open: boolean,
    setOpen: (value: boolean) => void
}

export const drawerWidth = 240 //px

const openDrawerSx = (theme: Theme) => ({
    width: drawerWidth,
    backgroundColor: "#212B36",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
})

const closedDrawerSx = (theme: Theme) => ({
    backgroundColor: "inherit",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

const getDrawerSX = (theme: Theme, open: boolean) => {
    const additionalProps = open ? openDrawerSx(theme) : closedDrawerSx(theme)
    return {
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        "& .MuiDrawer-paper": additionalProps,
        ...additionalProps
    }
}


export const SideDrawer = ({ open, setOpen }: Props) => {
    const theme = useTheme()

    return (
        <Drawer open={open} sx={getDrawerSX(theme, open)}>
            <Box sx={{
                backgroundColor: pallete.secondary.dark, display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: 1,
                ...theme.mixins.toolbar
            }}>
                <Typography sx={{ color: pallete.primary.lighter, fontWeight: "bold", fontSize: "1.2rem" }}> CONTROL PANEL </Typography>
                <IconButton onClick={() => setOpen(!open)} sx={{ color: pallete.primary.lighter }}>
                    <ChevronLeftIcon />
                </IconButton>
            </Box>

            <List sx={{ backgroundColor: pallete.secondary.dark, flexGrow: "1", flexDirection: "column" }}>
                {open ? <Divider /> : ""}
                {/* {
            items.map((item) => {
                return item.children
                    ? <NavbarNestedItem handleDrawerClose={handleDrawerClose} open={open} setOpen={setOpen} {...item} key={item.title} />
                    : <NavbarItem handleDrawerClose={handleDrawerClose} open={open} {...item} key={item.title} />
            })
        } */}

            </List>
        </Drawer>
    )
}


{/* <Tooltip title='Logout' placement='right' arrow disableHoverListener={open}>
<ListItem disablePadding sx={{ display: "block" }}>
    <ListItemButton
        className='animate__animated animate__fadeIn'
        onClick={handleLogout}
        sx={{
            color: "white",
            fontWeight: "",
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
        }}
    >
        <ListItemIcon
            sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
            }}
        >
            {<LogoutIcon sx={iconColorSx} />}
        </ListItemIcon>
        <ListItemText sx={{ opacity: open ? 1 : 0, ...iconColorSx }}>Logout</ListItemText>
    </ListItemButton>
</ListItem>
</Tooltip> */}