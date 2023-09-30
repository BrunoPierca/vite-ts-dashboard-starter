import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List, ListItem, Tooltip, Zoom } from '@mui/material'
import { useState } from 'react'
import { DrawerItem } from './DrawerItem'
import pallete from '../../../../theme/pallete'
// import { useAppSelector } from '../../hooks/reduxHooks'


interface IChildrenProps {
    open?: boolean
    icon: JSX.Element
    title: string
    href: string
    adminPriv?: string
}

interface IProps {
    open: boolean
    setOpen: (open: boolean) => void
    icon: JSX.Element
    title: string
    adminPriv?: string
    children: IChildrenProps[]
    handleDrawerClose: (open: boolean) => void
}


export const DrawerNestItem = ({ open, setOpen, icon, title, adminPriv, children, handleDrawerClose }: IProps) => {
    // const { role } = useAppSelector((state) => state.auth);
    // const role = 'user'
    const [openSubmenu, setOpenSubmenu] = useState(false);

    const handleClick = () => {
        if (!open) setOpen(true)
        setOpenSubmenu(!openSubmenu)
    }

    return (
        <Tooltip title={title} placement="right" PopperProps={{ style: { display: open ? 'none' : "block" } }} TransitionComponent={Zoom} arrow disableHoverListener={open}>

            <ListItem disablePadding sx={{ display: "block" }}>

                <ListItemButton onClick={handleClick}
                    className='animate__animated animate__fadeIn'
                    sx={{
                        color: pallete.primary.lighter,
                        minHeight: 48,
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className='animate__animated animate__fadeIn'
                        sx={{
                            minWidth: 0,
                            mr: "24px",
                            justifyContent: "center",
                            color: pallete.primary.lighter + " !important"
                        }}>
                        {icon}
                    </ListItemIcon>

                    <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />

                    {openSubmenu ? <ExpandLess /> : <ExpandMore />}

                </ListItemButton>

                <Collapse in={openSubmenu && open} timeout="auto" unmountOnExit>

                    <ul style={{ padding: 0 }}>

                        <List component="div" sx={{ marginLeft: 2 }}>
                            {children.map((children) => {
                                return <DrawerItem handleDrawerClose={handleDrawerClose} {...children} open={openSubmenu} isChildren={true} key={children.title} />
                            })}
                        </List>

                    </ul>

                </Collapse>

            </ListItem>
        </Tooltip>
    )
}
