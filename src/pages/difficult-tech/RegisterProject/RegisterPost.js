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
import TechCatergory from './TechCategory';
import RegisterForm from './RegisterForm';

const RegisterPost = () => {
    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        content: Yup.string().required('Required')
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            content:
                '※상세한 업무내용\n' +
                '- 프로젝트 소개 :\n' +
                '- 사내 인력 업무지원 범위 :　예 ) 디자인 자체 진행\n\n' +
                '+ 상세한 업무내용\n' +
                '- 업무범위 (주요기능, 페이지수등 )\n\n' +
                '※참고사항\n' +
                '- 우대사항\n'
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);

            console.log(values);
            setSubmitting(false);
        },
        validationSchema
    });

    const [view, setView] = useState(['list']);

    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
        console.log(view);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard title="애로 기술 내용 작성" codeHighlight>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TechCatergory view={view} handleView={handleView} />
                        </Grid>
                        <Grid item xs={12}>
                            <RegisterForm formik={formik} />
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default RegisterPost;
