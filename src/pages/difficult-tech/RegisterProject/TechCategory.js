// project import
import MainCard from 'components/MainCard';

import React, { useState } from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';

const TechCatergory = (props) => {
    const categoryList = ['Android', 'IOS', '웹 사이트', '소프트웨어', '임베디드', '기계', '전기', '전자'];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <InputLabel>애로 기술 분야를 선택해주세요. (중복선택가능)</InputLabel>
                    <ToggleButtonGroup
                        size="large"
                        value={props.view}
                        onChange={props.handleView}
                        sx={{
                            '& .MuiToggleButton-root': {
                                border: 1,
                                borderRadius: 1
                            }
                        }}
                    >
                        {categoryList.map((category) => (
                            <ToggleButton
                                key={category}
                                value={category}
                                aria-label={category}
                                color="primary"
                                sx={{
                                    height: 50
                                }}
                            >
                                {category}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default TechCatergory;
