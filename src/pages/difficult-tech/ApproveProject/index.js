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
import Form6Content from './Form6Content';
import Form7Content from './Form7Content';

function createData(id, formType, name, content, businessType, date) {
    return { id, formType, name, content, businessType, date };
}

const categoryList = ['All', 'Techcare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5', '지원요청서6', '지원요청서7'];

function ApproveProject() {
    const [selectedPost, setSelectedPost] = useState('');
    const [formInfo, setFormInfo] = useState();
    const [requestForm, setRequestForm] = useState('');
    const [rows, setRows] = useState([]);

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
                console.log(rows);
                //데이터 저장
            })
            .catch((err) => console.log(err));
        // const row = [
        //     createData(1, 'TechCare365', '프로젝트 이름 1', '프로젝트 내용1', 'IT', '날짜'),
        //     createData(2, '지원요청서2', '프로젝트 이름 2', '프로젝트 내용2', '전자', '날짜'),
        //     createData(3, '지원요청서3', '프로젝트 이름 3', '프로젝트 내용3', '화공', '날짜'),
        //     createData(4, '지원요청서4', '프로젝트 이름 4', '프로젝트 내용4', '기계', '날짜'),
        //     createData(5, '지원요청서5', '프로젝트 이름 5', '프로젝트 내용5', '금속', '날짜'),
        //     createData(6, '지원요청서6', '프로젝트 이름 6', '프로젝트 내용6', '자동차', '날짜'),
        //     createData(7, '지원요청서7', '프로젝트 이름 7', '프로젝트 내용7', '신소재', '날짜')
        // ];
        // setRows(row);
    }
    const onSubmitRequestForm = (e) => {
        e.preventDefault();
        // axios
        //     .get('http://se337.duckdns.org:80/', {
        //         requestForm: requestForm
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         //데이터 저장
        //     })
        //     .catch((err) => console.log(err));
        const row = [createData(1, requestForm, '프로젝트 이름 1', '프로젝트 내용1', 'IT', '날짜')];
        setRows(row);
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
                    consultingField: ['1', '4', '9', '10'],
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
        setSelectedPost(rows);
        requestFormInfo();
    };

    const onChangeRequestForm = (e) => {
        setRequestForm(e.target.value);
    };

    return (
        <Grid container spacing={3}>
            <ProjectTable
                selectedPost={selectedPost}
                handleProjectChange={handleProjectChange}
                rows={rows}
                requestForm={requestForm}
                onChangeRequestForm={onChangeRequestForm}
                onSubmitRequestForm={onSubmitRequestForm}
                onSubmitApproveProject={onSubmitApproveProject}
                categoryList={categoryList}
            />
            {selectedPost.projectType === categoryList[1] ? (
                <TechCare365Content
                    selectedPost={selectedPost}
                    formInfo={formInfo}
                    onSubmitApproveProject={onSubmitApproveProject}
                    onSubmitRejectProject={onSubmitRejectProject}
                />
            ) : null}
            {selectedPost.projectType === categoryList[2] ? (
                <Form2Content
                    selectedPost={selectedPost}
                    formInfo={formInfo}
                    onSubmitApproveProject={onSubmitApproveProject}
                    onSubmitRejectProject={onSubmitRejectProject}
                />
            ) : null}
            {selectedPost.projectType === categoryList[3] ? (
                <Form3Content
                    selectedPost={selectedPost}
                    formInfo={formInfo}
                    onSubmitApproveProject={onSubmitApproveProject}
                    onSubmitRejectProject={onSubmitRejectProject}
                />
            ) : null}
        </Grid>
    );
}

export default ApproveProject;
