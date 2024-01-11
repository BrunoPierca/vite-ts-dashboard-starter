import { useState } from 'react'

import { Typography, Stack, TextField, Box, Button, Select, InputLabel, MenuItem, InputAdornment, IconButton, Autocomplete } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { CustomModal } from "../../../common/components"
import { useForm } from '../../../hooks/UseForm';
import { useUsersStore } from '../../../store/useUserStore';
import { createUser, updateUser } from '../../../services/api';
import { User } from '../../../interfaces/';
import { useCRUDModal } from '../../../hooks';


interface InitialForm {
    email: string,
    full_name: string,
    role: "admin" | "accountant" | "superAdmin",
    password: string,
}

const initialForm = {
    email: '',
    full_name: '',
    role: "admin",
    password: '',
}

export const UserModal = () => {
    const { activeUser, modalAction, removeActiveUser } = useUsersStore((state) => state)
    const { email, full_name, role, password, onInputChange } = useForm(initialForm ?? activeUser)

    const [showPassword, setShowPassword] = useState(false);

    const { createMutation, updateMutation } = useCRUDModal({ createFn: createUser, updateFn: updateUser, queryKey: 'user' })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (modalAction === 'create') {
            // @ts-expect-error
            createMutation.mutate({ email, full_name, role, password })
        } else {
            const updatedUser: any = { ...activeUser, role }
            updateMutation.mutate(updatedUser)
        }
        removeActiveUser()
    }
    return (
        <CustomModal open={true} closingFn={removeActiveUser} sx={{ overflowY: 'auto' }}>
            <Typography variant="h4">{modalAction!.slice(0, 1).toUpperCase() + modalAction?.slice(1)} user</Typography>
            <Stack spacing={2} direction="column" sx={{ padding: { sm: "1rem" } }}>
                <Stack spacing={2} component={'form'} onSubmit={(e) => handleSubmit(e)}>
                    <Box>
                        <Typography variant='body1'>Email:</Typography>
                        {!activeUser ?
                            <TextField
                                placeholder="JhonDoe@email.com"
                                type='text'
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                fullWidth
                            />
                            :
                            <Typography variant='h6'>{activeUser.email}</Typography>
                        }

                    </Box>
                    <Box>
                        <Typography variant='body1'>Full name:</Typography>
                        {!activeUser ?
                            <TextField
                                type='text'
                                fullWidth
                                required
                                placeholder='Jhon Doe'
                                name='full_name'
                                value={full_name}
                                onChange={onInputChange}
                            />
                            : <Typography variant='h6'>{activeUser.full_name}</Typography>
                        }
                    </Box>

                    <Box>
                        <InputLabel>Role:</InputLabel>
                        <Select
                            fullWidth
                            required
                            name='role'
                            value={role}
                            onChange={({ target }) => onInputChange({ target: { name: 'role', value: target.value } })}
                            MenuProps={{ sx: { zIndex: 2500 } }}
                        >
                            <MenuItem value={'admin'}>Admin</MenuItem>
                            <MenuItem value={'accountant'}>Accountant</MenuItem>
                            <MenuItem value={'superAdmin'}>Super-Admin</MenuItem>
                        </Select>
                    </Box>


                    {!activeUser &&
                        <Box>
                            <Typography variant='body1'>Password:</Typography>
                            <TextField
                                type={showPassword ? "text" : "password"}
                                fullWidth
                                required
                                autoComplete='off'
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                inputProps={{ "minLength": 6 }}
                                InputProps={{
                                    autoComplete: 'off',
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    }
                    <Button fullWidth type='submit' variant='contained' color='secondary'>Submit</Button>
                </Stack>
            </Stack>
        </CustomModal>
    )
}
