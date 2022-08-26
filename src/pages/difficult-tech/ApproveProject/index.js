import * as React from 'react';
import { useState, useEffect } from 'react';

import { Button, Box, Grid, Stack, Typography } from '@mui/material';

import ProjectTable from './ProjectTable';
import TechCare365Content from './TechCare365Content';
import * as axios from 'axios';
import Form2Content from './Form2Content';
import Form3Content from './Form3Content';
import Form4Content from './Form4Content';
import Form5Content from './Form5Content';

function createData(id, formType, name, content, businessType, date) {
    return { id, formType, name, content, businessType, date };
}

function ApproveProject() {
    const categoryList = ['All', 'Techcare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5', '지원요청서6', '지원요청서7'];

    const [selectedPost, setSelectedPost] = useState('');
    const [formInfo, setFormInfo] = useState();
    const [rows, setRows] = useState([]);
    const [selectedRow, setSelectedRow] = useState();
    const [requestInfo, setRequestInfo] = useState({
        state: '승인대기',
        requestForm: 'All',
        startDate: new Date(),
        endDate: new Date()
    });

    const { state, requestForm, startDate, endDate } = requestInfo;

    const onChangeRequestInfo = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        setRequestInfo({ ...requestFormInfo, [name]: value });
    };

    useEffect(() => {
        contentAllRequest();
    }, []);

    function contentAllRequest() {
        axios
            .get('http://se337.duckdns.org:80/api/request/pending', {
                type: 'All'
            })
            .then((res) => {
                console.log(res.data.data);
                setRows(res.data.data);
                //데이터 저장
            })
            .catch((err) => console.log(err));
    }
    const onSubmitRequestForm = (e) => {
        e.preventDefault();
        console.log(requestForm);
        axios
            .get('http://se337.duckdns.org:80/api/request/pending', {
                type: requestForm
            })
            .then((res) => {
                console.log(res.data.data);
                setRows(res.data.data);
                //데이터 저장
            })
            .catch((err) => console.log(err));
    };

    const onSubmitApproveProject = (e) => {
        e.preventDefault();
        console.log('승인');
        console.log(selectedPost.id);
        axios
            .post('http://se337.duckdns.org:80/api/request/status', null, {
                params: { requestId: Number(selectedPost.id) }
            })
            .then((res) => {
                console.log(res);
                alert('승인되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const onSubmitRejectProject = (e) => {
        e.preventDefault();
        console.log('거절');
        axios
            .post('http://se337.duckdns.org:80/api/request/care365', {
                //pk: pk
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
                    // companyName: res.data.data.companyName,
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
                    growthDegree: res.data.data.growthDegree,
                    businessType: res.data.data.businessType,
                    businessTypeEtc: res.data.data.businessTypeEtc,
                    mainService: res.data.data.mainService,
                    consultantForm: ['0', '4'],
                    consultantInfo: ['성명', '소속', '연락처'],
                    consultingField: ['1', '4', '8', '11'],
                    consultingFieldEtc: '기타',
                    detailInfo: '상세내용',
                    effectiveness: '기대효과',
                    projectName: '프로젝트제목'
                };

                setFormInfo(tmpFormInfo);
            })
            .catch((err) => console.log(err));
    }

    const handleProjectChange = (event, rows) => {
        console.log(rows.id); //선택한 post의 ID 배정 이걸로 back에 정보 요청
        requestFormInfo();
        setSelectedPost(rows);
    };

    const requestFormList = [
        {
            requestForm: 'Techcare365',
            template: (
                <TechCare365Content
                    onChangeRequestInfo={onChangeRequestInfo}
                    selectedPost={selectedPost}
                    handleProjectChange={handleProjectChange}
                    formInfo={formInfo}
                    rows={rows}
                    onSubmitRequestForm={onSubmitRequestForm}
                    onSubmitApproveProject={onSubmitApproveProject}
                    categoryList={categoryList}
                ></TechCare365Content>
            )
        },
        {
            requestForm: 'Form2Content',
            template: <Form2Content></Form2Content>
        },
        {
            requestForm: 'Form3Content',
            template: <Form3Content></Form3Content>
        },
        {
            requestForm: 'Form4Content',
            template: <Form4Content></Form4Content>
        },
        {
            requestForm: 'Form5Content',
            template: <Form5Content></Form5Content>
        }
    ];

    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ mb: 3 }}>
                    <ProjectTable
                        requestInfo={requestInfo}
                        onChangeRequestInfo={onChangeRequestInfo}
                        selectedPost={selectedPost}
                        handleProjectChange={handleProjectChange}
                        rows={rows}
                        onSubmitRequestForm={onSubmitRequestForm}
                        onSubmitApproveProject={onSubmitApproveProject}
                        categoryList={categoryList}
                    />
                </Grid>
                {requestFormList.map((requsetForms, index) =>
                    requsetForms.requestForm === selectedPost.projectType ? <Box key={index}> {requsetForms.template}</Box> : null
                )}
            </Grid>
        </Grid>
    );
}

export default ApproveProject;
