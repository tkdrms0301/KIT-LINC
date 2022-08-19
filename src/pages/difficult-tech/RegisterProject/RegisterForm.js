import React, { useState } from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
import TechCatergory from './TechCategory';

const RegisterForm = ({ formik }) => {
    return (
        <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="content">프로젝트 제목</InputLabel>
                        <OutlinedInput
                            id="title"
                            type="text"
                            value={formik.values.title}
                            name="title"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
                            placeholder="Enter title"
                            fullWidth
                            error={Boolean(formik.touched.title && formik.errors.title)}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {formik.errors.title}
                            </FormHelperText>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="content">프로젝트 내용</InputLabel>
                        <OutlinedInput
                            id="content"
                            type="textarea"
                            value={formik.values.content}
                            name="content"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Enter content"
                            fullWidth
                            error={Boolean(formik.touched.content && formik.errors.content)}
                            sx={{
                                height: 300
                            }}
                            minRows="1"
                            maxRows="30"
                            rows="15"
                            multiline={true}
                        />
                        {formik.touched.content && formik.errors.content && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {formik.errors.content}
                            </FormHelperText>
                        )}
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={formik.isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            등록하기
                        </Button>
                    </AnimateButton>
                </Grid>
            </Grid>
        </form>
    );
};

export default RegisterForm;
