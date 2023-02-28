// project import
import MainCard from 'components/MainCard';

import React, { useEffect, useState, useRef } from 'react';
import * as axios from 'axios';

// material-ui
import { Grid } from '@mui/material';

// project import
import TechCatergory from './TechCategory';
import FormTechCare365 from './FormTechCare365';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import registerProjectApi from 'pages/api/difficult-tech/RegisterProjectApi';

const RegisterProject = () => {
    const projectNameRef = useRef();
    const detailInfoRef = useRef();
    const effectivenessRef = useRef();
    const nameRef = useRef();
    const groupRef = useRef();
    const contactRef = useRef();
    const etcRef = useRef();
    const [consultingForm, setConsultingForm] = useState([]);
    const [consultingField, setConsultingField] = useState([]);
    const [formInfo, setFormInfo] = useState();

    const onChangeConsultingForm = (e) => {
        let updateList = [...consultingForm];
        if (e.target.checked) {
            updateList = [...consultingForm, e.target.value];
        } else {
            updateList.splice(consultingForm.indexOf(e.target.value), 1);
        }
        setConsultingForm(updateList);
    };

    const onChangeConsultingField = (e) => {
        let updateConsultList = [...consultingField];
        if (e.target.checked) {
            updateConsultList = [...consultingField, e.target.value];
        } else {
            updateConsultList.splice(consultingField.indexOf(e.target.value), 1);
        }
        setConsultingField(updateConsultList);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const consultantInfo = new Array(nameRef.current.value, groupRef.current.value, contactRef.current.value);
        console.log(projectNameRef.current.value);
        // submit 이벤트는 브라우저에서 새로고침을 발생
        // 이를 방지하기 위해 이 함수를 호출
        const formInfo = {
            projectName: projectNameRef.current.value,
            consultantForm: consultingForm,
            consultingField: consultingField,
            consultingFieldEtc: etcRef.current.value,
            consultantInfo: consultantInfo,
            detailInfo: detailInfoRef.current.value,
            effectiveness: effectivenessRef.current.value
        };
        registerProjectApi
            .contentSubmit(formInfo)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    function requestFormInfo() {
        registerProjectApi
            .contentForm()
            .then((res) => {
                console.log(res.data.data);
                setFormInfo(res.data.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        requestFormInfo();
    }, []);

    const [view, setView] = useState('');

    const handleView = (event) => {
        setView(event.target.value);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard title="애로 기술 내용 작성" codeHighlight sx={{ width: '80%', margin: 'auto' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TechCatergory view={view} handleView={handleView} />
                        </Grid>
                        <Grid item xs={12}>
                            {view === 'TechCare365' ? (
                                <FormTechCare365
                                    projectNameRef={projectNameRef}
                                    consultingForm={consultingForm}
                                    onChangeConsultingForm={onChangeConsultingForm}
                                    consultingField={consultingField}
                                    onChangeConsultingField={onChangeConsultingField}
                                    formInfo={formInfo}
                                    detailInfoRef={detailInfoRef}
                                    effectivenessRef={effectivenessRef}
                                    nameRef={nameRef}
                                    groupRef={groupRef}
                                    contactRef={contactRef}
                                    etcRef={etcRef}
                                    onSubmit={onSubmit}
                                ></FormTechCare365>
                            ) : null}
                            {view === '지원요청서2' ? <Form2></Form2> : null}
                            {view === '지원요청서3' ? <Form3></Form3> : null}
                            {view === '지원요청서4' ? <Form4></Form4> : null}
                            {view === '지원요청서5' ? <Form5></Form5> : null}
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default RegisterProject;
