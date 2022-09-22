import { Grid, Button, Tabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { useState } from 'react';
import dayjs from 'dayjs';

// component
import FormProcess from './FormProcess';
import FormTrainingSupport from './FormTrainingSupport';
import FormModel from './FormModel';
import FormManager from './FormManager';
import FormPractice from './FormPractice';
import FormStudent from './FormStudent';
import FormUpload from './FormUpload';
const EnterpriseForm = () => {
    function TabPanel(props) {
        const { children, value, index } = props;

        return <Grid>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</Grid>;
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };
    const [value, setValue] = useState(0);
    const [yearWorking, setYearWorking] = useState(dayjs(new Date()).format('YYYY'));
    const [startDate, setStartDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [requestInfo, setRequestInfo] = useState({
        workingProcess: '1',
        workingStudentTerm: '1',
        trainingTerm: '4',
        workingSemester: '1',
        ftExist: '1',
        // insuranceChecked: 'reject',
        etcContract: '1',
        etcContractElse: '',
        txRegularTrainingSelect: '월',
        txRegularMoney: '',
        txPaymentSelect: '당월',
        txPaymentDate: '21',
        txExtension: ''
    });
    const [managerInfo, setManagerInfo] = useState({
        miDepartment: '',
        miName: '',
        miPosition: '',
        miContact: '',
        miPhoneNum: '',
        miEmail: ''
    });
    const [practiceInfo, setPracticeInfo] = useState({
        jpDepartment: '',
        jpJob: '',
        jpAddress: '',
        jobGoal: '',
        operationGuidancePlan: '',
        jobSummary: ''
    });
    const [modelInfo, setModelInfo] = useState({
        selectionMethod: '1',
        selectionMethodEtc: '',
        tpDeadlineDateRadio: 'select',
        tpInterviewDateRadio: 'select',
        tpFinalSelectionDateRadio: 'select',
        tpReferenceSchedule: ''
    });
    const [studentInfo, setStudentInfo] = useState({
        studentMajor: '',
        studentRecruit: '0',
        studentGrade: '1',
        studentCredit: '',
        studentEtc: ''
    });

    const onChangeManagerInfo = (e) => {
        const { name, value } = e.target;
        setManagerInfo({ ...managerInfo, [name]: value });
    };
    const onChangePracticeInfo = (e) => {
        const { name, value } = e.target;
        setPracticeInfo({ ...practiceInfo, [name]: value });
    };
    const onChangeModelInfo = (e) => {
        const { name, value } = e.target;
        console.log(modelInfo);
        setModelInfo({ ...modelInfo, [name]: value });
    };
    const onChangeStudentInfo = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setStudentInfo({ ...studentInfo, [name]: value });
    };
    const [etcResourceCheck, setEtcResourceCheck] = useState([]);
    const [tpDeadlineDate, setTpDeadlineDate] = useState(dayjs(new Date()).format('YYYY-MM-DD hh:mm a'));
    const [tpInterviewDate, setTpInterviewDate] = useState(dayjs(new Date()).format('YYYY-MM-DD hh:mm a'));
    const [tpFinalSelectionDate, setTpFinalSelectionDate] = useState(dayjs(new Date()).format('YYYY-MM-DD hh:mm a'));
    const handleChangePage = (e, newValue) => {
        setValue(newValue);
    };
    const onChangeRequestInfo = (e) => {
        const { name, value } = e.target;
        setRequestInfo({ ...requestInfo, [name]: value });
    };
    const onChangeEtcResource = (checked, item) => {
        if (checked) {
            setEtcResourceCheck([...etcResourceCheck, item]);
        } else {
            setEtcResourceCheck(etcResourceCheck.filter((el) => el !== item));
        }
    };
    const handlePageChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                setValue(newValue);
                return;
            case 1:
                setValue(newValue);
                return;
            case 2:
                setValue(newValue);
                return;
            case 3:
                setValue(newValue);
                return;
            case 4:
                setValue(newValue);
                return;
            case 5:
                setValue(newValue);
                return;
            case 6:
                setValue(newValue);
                return;
        }
    };
    return (
        <Grid>
            <MainCard codeHighlight title="현장실습 신청(기업)" sx={{ width: '80%', margin: 'auto' }}>
                <Grid>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChangePage}>
                                <Tab label="운영 정보" />
                                <Tab label="실습 지원" />
                                <Tab label="전형" />
                                <Tab label="현장 교육담당자" />
                                <Tab label="실습 직무" />
                                <Tab label="학생 요건" />
                                <Tab label="업로드 자료" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <FormProcess
                                yearWorking={yearWorking}
                                setYearWorking={setYearWorking}
                                startDate={startDate}
                                setStartDate={setStartDate}
                                endDate={endDate}
                                setEndDate={setEndDate}
                                startTime={startTime}
                                setStartTime={setStartTime}
                                endTime={endTime}
                                setEndTime={setEndTime}
                                requestInfo={requestInfo}
                                onChangeRequestInfo={onChangeRequestInfo}
                            ></FormProcess>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <FormTrainingSupport
                                requestInfo={requestInfo}
                                onChangeRequestInfo={onChangeRequestInfo}
                                onChangeEtcResource={onChangeEtcResource}
                                etcResourceCheck={etcResourceCheck}
                            ></FormTrainingSupport>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <FormModel
                                modelInfo={modelInfo}
                                onChangeModelInfo={onChangeModelInfo}
                                tpDeadlineDate={tpDeadlineDate}
                                setTpDeadlineDate={setTpDeadlineDate}
                                tpInterviewDate={tpInterviewDate}
                                setTpInterviewDate={setTpInterviewDate}
                                tpFinalSelectionDate={tpFinalSelectionDate}
                                setTpFinalSelectionDate={setTpFinalSelectionDate}
                            ></FormModel>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <FormManager managerInfo={managerInfo} onChangeManagerInfo={onChangeManagerInfo}></FormManager>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <FormPractice practiceInfo={practiceInfo} onChangePracticeInfo={onChangePracticeInfo}></FormPractice>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <FormStudent studentInfo={studentInfo} onChangeStudentInfo={onChangeStudentInfo}></FormStudent>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <FormUpload></FormUpload>
                        </TabPanel>
                        <Grid container direction={value !== 0 ? 'row' : 'row-reverse'} justifyContent="space-between" sx={{ mt: 3 }}>
                            {value !== 0 ? (
                                <form onClick={(e) => handlePageChange(e, value - 1)}>
                                    <Button variant="contained">이전</Button>
                                </form>
                            ) : null}

                            {value === 5 ? (
                                <form>
                                    <Button variant="contained">저장 및 출력</Button>
                                </form>
                            ) : null}
                            {value !== 5 && value !== 6 ? (
                                <form onClick={(e) => handlePageChange(e, value + 1)}>
                                    <Button variant="contained">다음</Button>
                                </form>
                            ) : null}
                            {value === 6 ? (
                                <form>
                                    <Button variant="contained">제출</Button>
                                </form>
                            ) : null}
                        </Grid>
                    </Box>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default EnterpriseForm;
