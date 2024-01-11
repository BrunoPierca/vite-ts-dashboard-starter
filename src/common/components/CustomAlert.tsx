import { AlertTitle, Slide, SlideProps, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useUiStore } from '../../store/useUiStore';


function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

export const CustomAlert = () => {
    const { isOpen, message, severity, closeAlert } = useUiStore((state) => state);
    return (
        <Snackbar
            style={{ cursor: 'default' }}
            open={isOpen}
            onClose={() => closeAlert()}
            TransitionComponent={SlideTransition}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert sx={{ width: '100%', position: 'relative', zIndex: 10000001 }} severity={severity ?? 'error'} color={severity === 'error' ? 'error' : 'success'}>
                <AlertTitle>{severity === 'error' ? 'Error' : 'Success'}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
}

