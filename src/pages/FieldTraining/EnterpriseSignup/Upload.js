import {
    Grid,
    FormControlLabel,
    Checkbox,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Radio,
    Button,
    Stack,
    RadioGroup
} from '@mui/material';
import { useState } from 'react';
const Upload = ({ fileImageName, handleFile }) => {
    return (
        <Grid>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <Typography>사업자 등록증</Typography>
                </Grid>
                <Grid item>
                    <TextField value={fileImageName} variant="standard" fullWidth type="text" placeholder="선택된 파일없음" />
                </Grid>
                <Grid item>
                    <Button component="label" variant="contained">
                        파일 선택
                        <input accept="video" type="file" hidden onChange={handleFile} />
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Upload;
