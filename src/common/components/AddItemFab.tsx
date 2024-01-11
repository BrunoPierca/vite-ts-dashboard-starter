import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material'
import pallete from '../../theme/pallete'

interface Props {
    onClick: () => void
}

export const AddItemFab = ({ onClick }: Props) => {
    return (
        <Fab aria-label="add" sx={{ backgroundColor: pallete.tertiary.main, color: pallete.secondary.main, position: 'fixed', bottom: 16, right: 16 }} onClick={onClick}>
            <AddIcon />
        </Fab>
    )
}
