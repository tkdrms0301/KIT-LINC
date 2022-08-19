import React, { useState } from 'react';

// material-ui
import {
    FormControl,
    MenuItem,
    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    ToggleButtonGroup,
    ToggleButton,
    Select
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';

const TechCatergory = ({ view, handleView }) => {
    const categoryList = ['TechCare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5'];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <InputLabel htmlFor="content">지원 요청서</InputLabel>
                    <FormControl fullWidth size="large">
                        <InputLabel id="demo-select-small">지원 요청서</InputLabel>
                        <Select value={view} onChange={handleView}>
                            {categoryList.map((category, index) => (
                                <div key={index} value={category}>
                                    <MenuItem>{category}</MenuItem>
                                </div>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default TechCatergory;
