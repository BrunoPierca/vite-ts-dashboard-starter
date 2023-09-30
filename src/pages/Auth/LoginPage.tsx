import { useMemo, useRef } from 'react';

// import { startLoginWithEmailAndPassword } from '../../store/auth/thunks';
// import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

// import { useForm } from '../../hooks/UseForm'

import { Alert, Button, Grid, TextField } from '@mui/material';
import { AuthLayout } from '../../common/layout';
import pallete from '../../theme/pallete'

// import gsap from 'gsap';

// const formData = {
//     email: 'email1@email.com',
//     password: '123456'
// }

export const LoginPage = () => {
    const logoIcon = useRef(null)
    // const dispatch = useAppDispatch()
    // const { status, errorMessage } = useAppSelector(state => state.auth)
    // const { formState, email, password, onInputChange }: any = useForm(formData)
    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // dispatch(startLoginWithEmailAndPassword(formState))
        // gsap.to(logoIcon.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
        //     gsap.to(logoIcon.current, { y: 0, duration: 0.6, ease: 'bounce.out' })
        // })
    }

    const handleAnimation = () => {
        // gsap.to(logoIcon.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
        //     gsap.to(logoIcon.current, { y: 0, duration: 0.6, ease: 'bounce.out' })
        // })
    }

    // gsap.to(logoIcon.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
    //     gsap.to(logoIcon.current, { y: 0, duration: 0.6, ease: 'bounce.out' })
    // })

    return (
        <AuthLayout>
            <Grid container direction='column' justifyContent='center' alignItems='center' component={'form'} onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid container spacing={0} alignItems='center' justifyContent='center' my={2} >
                        <img style={{ width: '100%' }} onMouseOver={handleAnimation} ref={logoIcon} src="../powerStaffingLogo.png" alt="logo power-staffing" />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="E-Mail"
                            type="email"
                            placeholder='mail@google.com'
                            fullWidth
                            name='email'
                            // value={email}
                            // onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='Password'
                            fullWidth
                            name='password'
                            // value={password}
                            // onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}
                            // display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>
                                {/* {errorMessage} */}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button variant='contained' type='submit' disabled={isAuthenticating} fullWidth sx={{ backgroundColor: pallete.secondary.main, color: pallete.secondary.contrastText, '&:hover': { backgroundColor: pallete.secondary.darker } }}>
                                Log in
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </AuthLayout>
    )
}
