// project import
import MainCard from 'components/MainCard';

import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { debounce } from 'lodash';
import * as axios from 'axios';

// material-ui
import { Grid } from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
// project import
import TechCatergory from './TechCategory';
import FormTechCare365 from './FormTechCare365';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import { throttle } from 'lodash';

const RegisterPost = () => {
    const projectNameRef = useRef();
    const detailInfoRef = useRef();
    const effectivenessRef = useRef();
    const nameRef = useRef();
    const groupRef = useRef();
    const contactRef = useRef();
    const etcRef = useRef();
    const [projectName, setProjectName] = useState('');
    const [consultingForm, setConsultingForm] = useState([]);
    const [consultingField, setConsultingField] = useState([]);
    const [detailInfo, setDetailInfo] = useState('');
    const [effectiveness, setEffectiveness] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [contact, setContact] = useState('');
    const [etc, setEtc] = useState('');
    const [etcChecked, setEtcChecked] = useState(false);
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
        const consultantInfo = new Array(name, group, contact);
        console.log(projectNameRef.current.value);
        // submit 이벤트는 브라우저에서 새로고침을 발생
        // 이를 방지하기 위해 이 함수를 호출
        console.log();
        axios
            .post('http://se337.duckdns.org:80/api/request/care365', {
                projectName: projectNameRef.current.value,
                consultantForm: consultingForm,
                consultingField: consultingField,
                consultingFieldEtc: etcRef.current.value,
                consultantInfo: consultantInfo,
                detailInfo: detailInfoRef.current.value,
                effectiveness: effectivenessRef.current.value
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    function requestFormInfo() {
        axios
            .get('http://se337.duckdns.org:80/api/member/requestform', {})
            .then((res) => {
                console.log(res.data.data);

                const tmpFormInfo = {
                    companyName: res.data.data.companyName,
                    representativeName: res.data.data.representativeName,
                    companyRegistrationNum: res.data.data.companyRegistrationNum,
                    faxNum: res.data.data.faxNum,
                    address: res.data.data.address,
                    name: res.data.data.name,
                    departmentAndPosition: res.data.data.departmentAndPosition,
                    phoneNum: res.data.data.phoneNum,
                    email: res.data.data.email,
                    fullTimeWorker: res.data.data.fullTimeWorker,
                    sales: res.data.data.sales,
                    businessType: res.data.data.businessType,
                    businessTypeEtc: res.data.data.businessTypeEtc,
                    growthDegree: res.data.data.growthDegree,
                    mainService: res.data.data.mainService
                };

                setFormInfo(tmpFormInfo);
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
                                    etcChecked={etcChecked}
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

export default RegisterPost;
