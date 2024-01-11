import { useState } from 'react';
import { Button, Stack, SxProps, Theme, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface Props {
    name: string;
    label: string;
    isMultiple?: boolean
    maxFiles?: number;
    disabled?: boolean;
    showUploadLegend?: boolean;
    buttonSx?: SxProps<Theme> | undefined
    onInputChange: (e: any) => void;
}

export const UploadFileInput = ({ name, label, isMultiple = false, maxFiles = 10, onInputChange, disabled = false, showUploadLegend = true, buttonSx }: Props) => {
    const [files, setFiles] = useState<File[] | undefined>(undefined)

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isMultiple && e.target.files && e.target.files.length > maxFiles) {
            console.log('Max files: ', maxFiles)
            return;
        }
        const fileArray = e.target.files ? Array.from(e.target.files) : []
        onInputChange({ target: { name: name, value: fileArray } })
        setFiles(fileArray)
    }

    const handleRemoveFile = (fileToDelete: File) => {
        let newFiles;
        newFiles = files?.filter(file => file.name !== fileToDelete.name)
        if (newFiles) {
            newFiles.length === 0 && (newFiles = undefined)
        }
        onInputChange({ target: { name: name, value: newFiles } })
        setFiles(newFiles)
    }

    return (
        <>
            {(!(files && files.length > 0) || isMultiple) &&
                <Button variant='contained' component='label' fullWidth sx={{ ...buttonSx, textTransform: 'none' }} disabled={disabled} startIcon={<CloudUploadIcon color='secondary' />}>
                    <input type='file' hidden name={name} multiple={isMultiple} onChange={(e) => handleUpload(e)} accept='image/*,.pdf' />
                    <Stack direction='row' spacing={1}>
                        <Typography>{showUploadLegend && 'Upload'} {label}</Typography>
                    </Stack>
                </Button>
            }


            {files && <Stack direction={'column'} spacing={1} my={1.5}>
                {files.map((file, index) => <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} key={index}>
                    <Typography variant='subtitle2' sx={{ wordBreak: 'break-all' }}>{file.name}</Typography>
                    <Button variant='contained' onClick={() => handleRemoveFile(file)}>Remove</Button>
                </Stack>)}
            </Stack>}
        </>
    )
}
