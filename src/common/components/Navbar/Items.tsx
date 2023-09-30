import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from "@mui/icons-material/Settings";



interface Item {
    icon: JSX.Element
    title: string
    href: string
    adminPriv?: string
    children?: never
}

interface NestItem {
    icon: JSX.Element
    title: string
    href?: never
    adminPriv?: string
    children: Item[]
}


export const items: (Item | NestItem)[] = [
    { icon: <HomeIcon />, title: "Home", href: "/" },
    { icon: <PeopleAltIcon />, title: "Users", href: "/users" },
    {
        icon: <SettingsIcon />, title: "Settings",
        children: [
            { icon: <SettingsIcon />, title: "Config", href: "/config" }
        ],
        adminPriv: 'superAdmin'
    },
]