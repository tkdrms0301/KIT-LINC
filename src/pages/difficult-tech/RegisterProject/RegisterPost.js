// project import
import MainCard from 'components/MainCard';

import React, { useEffect, useState } from 'react';

import { axios } from 'axios';

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

const RegisterPost = () => {
    const [consultingForm, setConsultingForm] = useState([]);
    const [consultingField, setConsultingField] = useState([]);
    const [detailInfo, setDetailInfo] = useState('');
    const [effectiveness, setEffectiveness] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [contact, setContact] = useState('');
    const [etc, setEtc] = useState('');
    const [etcChecked, setEtcChecked] = useState(false);
    let consultList = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', null];

    useEffect(() => {
        for (var i = 0; i < consultingField.length; i++) {
            consultList[Number(consultingField[i])] = '1';
        }
        if (consultList[consultList.length - 2] === '1') {
            setEtcChecked(true);
            consultList[consultList.length - 1] = etc;
        } else {
            setEtcChecked(false);
        }
    }, [etcChecked, consultingField]);

    const onChangeDetailInfo = (e) => {
        setDetailInfo(e.target.value);
    };

    const onChangeEffectiveness = (e) => {
        setEffectiveness(e.target.value);
    };

    const onChangeConsultingForm = (e) => {
        let updateList = [...consultingForm];
        if (e.target.checked) {
            updateList = [...consultingForm, e.target.value];
        } else {
            updateList.splice(consultingForm.indexOf(e.target.value), 1);
        }
        setConsultingForm(updateList);
        let List = ['0', '0', '0', '0', '0'];
        for (var i = 0; i < consultingForm.length; i++) {
            List[Number(consultingForm[i])] = '1';
        }
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

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeGroup = (e) => {
        setGroup(e.target.value);
    };
    const onChangeContact = (e) => {
        setContact(e.target.value);
    };

    const onChangeEtc = (e) => {
        setEtc(e.target.value);
    };

    const onSubmit = (e) => {
        const consultantInfo = {
            name: name,
            group: group,
            contact: contact
        };
        // submit 이벤트는 브라우저에서 새로고침을 발생
        // 이를 방지하기 위해 이 함수를 호출
        axios
            .post('http://localhost:8080/test', {
                consultingForm: consultingForm,
                consultingField: consultingField,
                consultantInfo: consultantInfo,
                detailInfo: detailInfo,

                effectiveness: effectiveness
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        e.preventDefault();
    };

    const formInfo = {
        companyName: '상근상조',
        representativeName: '안상근',
        CompanyRegistrationNum: '010-1234-1211',
        faxNum: '00123',
        address: '대구 북구 금오공대',
        name: '안상근',
        departmentAndPosition: '보안팀/신입',
        phoneNum: '010-1234-1111',
        email: 'basdf@gmail.com',
        fullTimeWorker: '20',
        sales: '1억',
        growthDegree: 3,
        businessType: [1, 0, 0, 1, 0, 1, 0, 1, 1, 'test'],
        mainService: '드론 제작 메인서비스'
    };

    const consultantInfo = {};

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
                '- 사내 인력 업무지원 범위 : 예 ) 디자인 자체 진행\n\n' +
                '+ 상세한 업무내용\n' +
                '- 업무범위 (주요기능, 페이지수등 )\n\n' +
                '※참고사항\n' +
                '- 우대사항\n'
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            setSubmitting(false);
        },
        validationSchema
    });

    const [view, setView] = useState('');

    const handleView = (event) => {
        setView(event.target.value);
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
                            {view === 'TechCare365' ? (
                                <FormTechCare365
                                    consultingForm={consultingForm}
                                    onChangeConsultingForm={onChangeConsultingForm}
                                    consultingField={consultingField}
                                    onChangeConsultingField={onChangeConsultingField}
                                    formInfo={formInfo}
                                    onChangeDetailInfo={onChangeDetailInfo}
                                    detailInfo={detailInfo}
                                    onChangeEffectiveness={onChangeEffectiveness}
                                    effectiveness={effectiveness}
                                    name={name}
                                    onChangeName={onChangeName}
                                    group={group}
                                    onChangeGroup={onChangeGroup}
                                    contact={contact}
                                    onChangeContact={onChangeContact}
                                    etc={etc}
                                    onChangeEtc={onChangeEtc}
                                    etcChecked={etcChecked}
                                ></FormTechCare365>
                            ) : null}
                            {view === '지원요청서2' ? <Form2></Form2> : null}
                            {view === '지원요청서3' ? <Form3></Form3> : null}
                            {view === '지원요청서4' ? <Form4></Form4> : null}
                            {view === '지원요청서5' ? <Form5></Form5> : null}
                        </Grid>

                        {/*
                        <Grid item xs={12}>
                            <RegisterForm formik={formik} />
                        </Grid>
                        */}
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default RegisterPost;
