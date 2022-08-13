import React from 'react';

// project import
import MainCard from 'components/MainCard';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// ============================|| COMPONENT - SHADOW ||============================ //

const TestLogin = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard title="test login" codeHighlight>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h5>1 : 가족회사, 2 : IMS 담당관, 3 : 교수</h5>
                        </Grid>
                        <Grid item xs={12}>
                            <>
                                <Formik
                                    initialValues={{
                                        email: '1',
                                        // password: '123456',
                                        submit: null
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                                        // password: Yup.string().max(255).required('Password is required')
                                    })}
                                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                        try {
                                            setStatus({ success: false });
                                            setSubmitting(false);
                                        } catch (err) {
                                            setStatus({ success: false });
                                            setErrors({ submit: err.message });
                                            setSubmitting(false);
                                        }
                                    }}
                                >
                                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                        <form noValidate onSubmit={handleSubmit}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12}>
                                                    <Stack spacing={1}>
                                                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                                        <OutlinedInput
                                                            id="email-login"
                                                            type="email"
                                                            value={values.email}
                                                            name="email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter email address"
                                                            fullWidth
                                                            error={Boolean(touched.email && errors.email)}
                                                        />
                                                        {touched.email && errors.email && (
                                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                                {errors.email}
                                                            </FormHelperText>
                                                        )}
                                                    </Stack>
                                                </Grid>

                                                {errors.submit && (
                                                    <Grid item xs={12}>
                                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                                    </Grid>
                                                )}
                                                <Grid item xs={12}>
                                                    <AnimateButton>
                                                        <Button
                                                            disableElevation
                                                            disabled={isSubmitting}
                                                            fullWidth
                                                            size="large"
                                                            type="submit"
                                                            variant="contained"
                                                            color="primary"
                                                        >
                                                            Login
                                                        </Button>
                                                    </AnimateButton>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default TestLogin;
