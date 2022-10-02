import { useState, useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import ProjectTable from './ProjectTable';
import TechCare365Content from './TechCare365Content';
import Form2Content from './Form2Content';
import Form3Content from './Form3Content';
import Form4Content from './Form4Content';
import Form5Content from './Form5Content';
import dayjs from 'dayjs';
import axios from '../../../../node_modules/axios/index';
import approveProjectApi from '../../api/difficult-tech/ApproveProjectApi';

function ApproveProject() {
    const [selectedPost, setSelectedPost] = useState('');
    const [formInfo, setFormInfo] = useState(null);
    const [rows, setRows] = useState([]);
    const [requestInfo, setRequestInfo] = useState({
        state: 'PENDING',
        requestForm: 'All'
    });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { state, requestForm } = requestInfo;

    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
    };

    const onChangeRequestInfo = (e) => {
        const { name, value } = e.target;
        setRequestInfo({ ...requestInfo, [name]: value });
    };

    const rejectReasonRef = useRef();

    useEffect(() => {
        contentAllRequest();
    }, []);

    function contentAllRequest() {
        approveProjectApi.contentAll
            .then((res) => {
                setRows(res.data.data.content);
            })
            .catch((err) => console.log(err));
    }

    const onSubmitRequestForm = (e) => {
        e.preventDefault();
        const filter = {
            type: requestForm === 'All' ? null : requestForm,
            status: state,
            startDate: dayjs(startDate).format('YYYY-MM-DD'),
            endDate: dayjs(endDate).format('YYYY-MM-DD')
        };
        approveProjectApi
            .contentFilter(filter)
            .then((res) => {
                setRows(res.data.data.content);
            })
            .catch((err) => console.log(err));
    };

    const onSubmitApproveProject = (e) => {
        e.preventDefault();
        const status = {
            requestId: Number(selectedPost.id),
            status: 'APPROVED',
            comment: ''
        };
        approveProjectApi
            .approve(status)
            .then((res) => {
                alert('승인되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const onSubmitRejectProject = (e) => {
        e.preventDefault();
        const status = {
            requestId: Number(selectedPost.id),
            status: 'REJECTED',
            comment: rejectReasonRef.current.value
        };
        approveProjectApi
            .approve(status)
            .then((res) => {
                alert('거절되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const onSubmitPendingProject = (e) => {
        e.preventDefault();
        const status = {
            requestId: Number(selectedPost.id),
            status: 'PENDING',
            comment: ''
        };
        approveProjectApi
            .pending(status)
            .then((res) => {
                alert('보류되었습니다.');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const requestFormInfo = async () => {
        let companyInfo;
        let additionalInfo;
        await axios
            .get('http://337se.duckdns.org:80/api/member/requestform', {})
            .then((res) => {
                const companyData = res.data.data;
                companyInfo = companyData;
            })
            .catch((err) => console.log(err));
        await axios
            .get('http://337se.duckdns.org:80/api/request/detail', {
                params: {
                    requestId: selectedPost.id
                }
            })
            .then((res) => {
                const additionalData = res.data.data;
                additionalInfo = additionalData;
            });
        setFormInfo({
            ...formInfo,
            ...companyInfo,
            consultantForm: additionalInfo.company.cooperationField,
            consultantInfo: additionalInfo.wishMentor.split('|'),
            consultingField: additionalInfo.supportField,
            consultingFieldEtc: additionalInfo.cooperationTypeEtc, // supportEtc 으로 변경 요청
            detailInfo: additionalInfo.detail,
            effectiveness: additionalInfo.expectEffect,
            projectName: additionalInfo.requestName
        });
    };

    const handleProjectChange = (event, rows) => {
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
                    requestInfo={requestInfo}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    open={open}
                    rejectReasonRef={rejectReasonRef}
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
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </Grid>

                {formInfo !== null
                    ? requestFormList.map((requsetForms, index) =>
                          requsetForms.requestForm === selectedPost.projectType ? <Box key={index}> {requsetForms.template}</Box> : null
                      )
                    : null}
            </Grid>
        </Grid>
    );
}

export default ApproveProject;
