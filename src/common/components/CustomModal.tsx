import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { SxProps, Theme } from '@mui/system';

interface Props {
    open: boolean;
    closingFn: () => void;
    children: JSX.Element | JSX.Element[] | string;
    sx?: SxProps<Theme> | undefined
}

export const CustomModal = ({ open, closingFn, children, sx }: Props) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={closingFn}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ ...sx, zIndex: 2400 }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: { xs: "80%", md: "60%" },
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        bgcolor: 'white',
                        boxShadow: 24,
                        borderRadius: '14px',
                        p: { xs: 2, md: 4 },
                        pt: 2
                    }}
                >
                    {children}
                </Box>
            </Modal>
        </div>
    );
}

