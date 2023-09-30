import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Zoom } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import pallete from "../../../../theme/pallete";
// import { useAppSelector } from "../../hooks/reduxHooks";

export interface DrawerItemProps {
    open: boolean
    icon: JSX.Element
    title: string
    href: string
    adminPriv?: string
    isChildren?: boolean
    handleDrawerClose: (value: boolean) => void
}

export const DrawerItem = ({ open, icon, title, href, adminPriv, isChildren, handleDrawerClose }: DrawerItemProps) => {
    // const { role } = useAppSelector((state) => state.auth);
    const role = 'user'
    if (adminPriv && role !== adminPriv) return <></>
    return (
        <Tooltip title={title} placement="right" TransitionComponent={Zoom} arrow disableHoverListener={open || isChildren}>

            <ListItem onClick={() => handleDrawerClose(false)} disablePadding sx={{ display: "block" }}>

                <Link component={RouterLink} color='inherit' sx={{ textDecoration: "none" }} to={href}>

                    <ListItemButton className='animate__animated animate__fadeIn' sx={{ color: "white", minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5 }}>

                        <ListItemIcon className='animate__animated animate__fadeIn' sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                            color: pallete.primary.lighter + " !important"
                        }}
                        >
                            {icon}
                        </ListItemIcon>

                        <ListItemText sx={{ opacity: open ? 1 : 0, color: pallete.primary.lighter, textDecoration: 'none' }}>{title}</ListItemText>

                    </ListItemButton>
                </Link>
            </ListItem>
        </Tooltip>
    )
}
