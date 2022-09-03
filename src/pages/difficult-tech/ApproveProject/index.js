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
import dayjs from 'dayjs';
function createData(id, formType, name, content, businessType, date) {
    return { id, formType, name, content, businessType, date };
}

function ApproveProject() {
    const categoryList = [
        { label: 'All', value: 'All' },
        { label: 'Techcare365', value: 'Techcare365' },
        { label: '지원요청서2', value: '지원요청서2' },
        { label: '지원요청서3', value: '지원요청서3' },
        { label: '지원요청서4', value: '지원요청서4' },
        { label: '지원요청서5', value: '지원요청서5' }
    ];

    const [selectedPost, setSelectedPost] = useState('');
    const [formInfo, setFormInfo] = useState();
    const [rows, setRows] = useState([]);
    const [requestInfo, setRequestInfo] = useState({
        state: 'PENDING',
        requestForm: 'All'
    });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { state, requestForm } = requestInfo;

    const onChangeRequestInfo = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        setRequestInfo({ ...requestInfo, [name]: value });
    };

    useEffect(() => {
        contentAllRequest();
    }, []);
    function contentAllRequest() {
        axios
            .get('http://se337.duckdns.org:80/api/request', {})
            .then((res) => {
                console.log(res.data.data.content);
                setRows(res.data.data.content);
                //데이터 저장
            })
            .catch((err) => console.log(err));
    }
    const onSubmitRequestForm = (e) => {
        e.preventDefault();
        axios
            .get('http://se337.duckdns.org:80/api/request', {
                params: {
                    type: requestForm === 'All' ? null : requestForm,
                    status: state,
                    startDate: dayjs(startDate).format('YYYY-MM-DD'),
                    endDate: dayjs(endDate).format('YYYY-MM-DD')
                }
            })
            .then((res) => {
                console.log(res.data.data.content);
                setRows(res.data.data.content);
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
                params: { requestId: Number(selectedPost.id), status: 'APPROVED' }
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
            .post('http://se337.duckdns.org:80/api/request/status', null, {
                params: { requestId: Number(selectedPost.id), status: 'REJECTED' }
            })
            .then((res) => {
                console.log(res);
                alert('거절되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };
    const onSubmitPendingProject = (e) => {
        e.preventDefault();
        axios
            .post('http://se337.duckdns.org:80/api/request/status', null, {
                params: { requestId: Number(selectedPost.id), status: 'PENDING' }
            })
            .then((res) => {
                console.log(res);
                alert('보류되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    function requestFormInfo() {
        axios
            .get('http://se337.duckdns.org:80/api/member/requestform', {
                params: { requestId: Number(selectedPost.id) }
            })
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
                    onSubmitApproveProject={onSubmitApproveProject}
                    onSubmitRejectProject={onSubmitRejectProject}
                    onSubmitPendingProject={onSubmitPendingProject}
                    categoryList={categoryList}
                    requestInfo={requestInfo}
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
                        onSubmitRejectProject={onSubmitRejectProject}
                        categoryList={categoryList}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
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
