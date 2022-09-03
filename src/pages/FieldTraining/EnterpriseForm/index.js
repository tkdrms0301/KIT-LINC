import {
    Grid,
    FormControlLabel,
    Checkbox,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Radio,
    Button,
    Stack,
    RadioGroup
} from '@mui/material';
import { LocalizationProvider, DesktopDatePicker, DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MainCard from 'components/MainCard';
import { useState, useRef } from 'react';
import FieldTrainingProcess from './FieldTrainingProcess';
import { useReactToPrint } from 'react-to-print';
import dayjs from 'dayjs';

const EnterpriseForm = () => {
    const [yearWorking, setYearWorking] = useState(dayjs(new Date()).format('YYYY'));
    const [startDate, setStartDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [tpDeadlineDate, setTpDeadlineDate] = useState();
    const [tpInterviewDate, setTpInterviewDate] = useState();
    const [tpFinalSelectionDate, setTpFinalSelectionDate] = useState();
    const [trainingProcess, setTrainingProcess] = useState({
        tpDeadlineDateRadio: 'select',
        tpInterviewDateRadio: 'select',
        tpFinalSelectionDateRadio: 'select',
        tpReferenceSchedule: ''
    });

    const { tpDeadlineDateRadio, tpInterviewDateRadio, tpFinalSelectionDateRadio, tpReferenceSchedule } = trainingProcess;
    const [requestInfo, setRequestInfo] = useState({
        workingProcess: '방학과정',
        workingStudentTerm: '1학기',
        trainingTerm: '4주',
        workingSemester: '직무체험형',
        ftExist: '',
        insuranceChecked: 'reject',
        etcContract: 'argree',
        etcContractElse: '',
        ftpReferenceSchedul: '',
        txRegularTrainingSelect: '월',
        txPaymentSelect: '당월',
        selectionMethod: '',
        jpAddress: '',
        studentRecruit: '0',
        studentGrade: '1학년'
    });

    const {
        workingProcess,
        workingStudentTerm,
        trainingTerm,
        workingSemester,
        ftExist,
        insuranceChecked,
        etcContract,
        etcContractElse,
        txRegularTrainingSelect,
        txPaymentSelect,
        selectionMethod,
        studentRecruit,
        studentGrade
    } = requestInfo;
    const [fileImage, setFileImage] = useState('');

    const etcContractElseRef = useRef();
    const txExtensionRef = useRef();
    const txRegularMoneyRef = useRef();
    const txPaymentDateRef = useRef();
    const selectionMethodEtcRef = useRef();
    const tpReferenceScheduleRef = useRef();
    const printComponent = useRef();
    const miDepartmentRef = useRef();
    const miNameRef = useRef();
    const miPositionRef = useRef();
    const miContactRef = useRef();
    const miPhoneNumRef = useRef();
    const miEmailRef = useRef();
    const jpDepartmentRef = useRef();
    const jpJobRef = useRef();
    const jpAddressRef = useRef();
    const jobGoalRef = useRef();
    const operationGuidancePlanRef = useRef();
    const jobSummaryRef = useRef();
    const studentMajorRef = useRef();
    const studentRecruitRef = useRef();
    const studentCreditRef = useRef();
    const studentRequirementRef = useRef();
    const studentEtcRef = useRef();

    const workingProcessList = ['방학과정', '학기과정', '방학과정/학기과정'];
    const studentTerms = ['1학기', '2학기'];
    const trainingTerms = ['4주', '8주', '12주', '15주'];
    const workingsemester = ['직무체험형', '채용연계형'];
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const ftExistList = ['현장실습없음', '상황별 실시', '주기적/상시적 실시'];
    const insurance = '참여 학생에 대한 산재보험 가입은 법적 의무임을 확인합니다.';
    const insuranceCheck = '(미가입시 운영 불가)';
    const etcContracts = ['체결함', '체결안함'];
    const etcResources = ['식사', '교통', '기숙사'];
    const selectMethods = ['서류선발', '면접선발', '학교추천선발', '기타'];
    const titleList = [
        {
            name: 'tpDeadlineDateRadio',
            dateTitle: '접수마감일자',
            value: tpDeadlineDate,
            radioValue: trainingProcess.tpDeadlineDateRadio,
            set: (newValue) => setTpDeadlineDate(newValue)
        },
        {
            name: 'tpInterviewDateRadio',
            dateTitle: '면접일자',
            value: tpInterviewDate,
            radioValue: trainingProcess.tpInterviewDateRadio,
            set: (newValue) => setTpInterviewDate(newValue)
        },
        {
            name: 'tpFinalSelectionDateRadio',
            dateTitle: '최종선발일자',
            value: tpFinalSelectionDate,
            radioValue: trainingProcess.tpFinalSelectionDateRadio,
            set: (newValue) => setTpFinalSelectionDate(newValue)
        },
        {
            name: 'tpReferenceSchedule',
            dateTitle: '참고일정',
            value: null,
            radioValue: trainingProcess.tpReferenceSchedule,
            set: null
        }
    ];

    const managerInfos = [
        {
            name: 'miDepartment',
            ref: miDepartmentRef,
            label: '부서명'
        },
        {
            name: 'miName',
            ref: miNameRef,
            label: '성명'
        },
        {
            name: 'miPosition',
            ref: miPositionRef,
            label: '직위'
        },
        {
            name: 'miContact',
            ref: miContactRef,
            label: '연락처'
        },
        {
            name: 'miPhoneNum',
            ref: miPhoneNumRef,
            label: '휴대폰'
        },
        {
            name: 'miEmail',
            ref: miEmailRef,
            label: '이메일'
        }
    ];

    const jobPracticeList = [
        {
            name: 'jpDepartment',
            ref: jpDepartmentRef,
            label: '부서명'
        },
        {
            name: 'jpJob',
            ref: jpJobRef,
            label: '직무명'
        },
        {
            name: 'jpAddress',
            ref: jpAddressRef,
            label: '주소'
        }
    ];
    const eduGoal = 'Co-op 직무 수행을 통해 학생이 얻게 되는 교육성과 측면 기술';
    const eduSummary =
        '무엇을, 왜(목적, 이유), 어떻게(방법) 어디까지(범위)하는지 구체적으로 기술\n' +
        '실제로 해당 기관에서 실시할 내용으로 만 기입\n' +
        '실제와 달리 형식적으로 작성되었거나, 단순반복적 직무 수행이 확인될 경우\n' +
        '근로 등의 민원 및 문제가 발생될 수 있으므로 학교에서는 관련 직무 사항을 확인하고\n' +
        '검토해야 함';
    const eduPlan = '실습기간에 따른 주차별 또는 직무개요별 운영/지도계획 기술';
    const studentRequirements = [
        {
            name: 'studentMajor',
            ref: studentMajorRef,
            label: '전공분야(구체적 대상 전공 또는 계열 특정)'
        },
        {
            name: 'studentRecruit',
            ref: studentRecruitRef,
            label: '모집인원'
        }
    ];
    const grades = ['1학년', '2학년', '3학년', '4학년'];
    const requireAbility = 'Co-op 참여 학생에게 요구되는\n' + 'CA역량, 외국어 역량, 지식/기술 역량, 전공과목 이수여부 등 기입';
    const [etcResourceCheck, setEtcResourceCheck] = useState([]);
    const onChangeEtcResource = (checked, item) => {
        if (checked) {
            setEtcResourceCheck([...etcResourceCheck, item]);
        } else {
            setEtcResourceCheck(etcResourceCheck.filter((el) => el !== item));
        }
        console.log(etcResourceCheck);
    };
    const onChangeRequestInfo = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setRequestInfo({ ...requestInfo, [name]: value });
    };
    const onChangeTrainingProcess = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setTrainingProcess({ ...trainingProcess, [name]: value });
    };

    const handlePrint = useReactToPrint({
        content: () => printComponent.current,
        documentTitle: '현장실습 신청서(기업용)'
    });
    const onSubmitSave = (e) => {
        console.log(workingProcess);
        console.log(workingSemester);
        console.log(yearWorking);
        console.log(workingStudentTerm);
        console.log(trainingTerm);
        console.log(startDate);
        console.log(endDate);
        console.log(dayjs(startTime).format('HH-mm A'));
        console.log(dayjs(endTime).format('HH-mm A'));
        console.log(); // 실습요일
        console.log(ftExist);
        console.log(insuranceChecked);
        console.log(etcContract);
        console.log(etcContractElseRef.current.value);
        console.log(txRegularTrainingSelect);
        console.log(txPaymentSelect);
        console.log(txExtensionRef.current.value);
        console.log(txRegularMoneyRef.current.value);
        console.log(txPaymentDateRef.current.value);
        console.log(etcResourceCheck);
        console.log(selectionMethod);
        console.log(selectionMethodEtcRef.current.value);
        console.log(tpDeadlineDateRadio);
        console.log(tpInterviewDateRadio);
        console.log(tpFinalSelectionDateRadio);
        console.log(tpReferenceScheduleRef.current.value);
        console.log(miDepartmentRef.current.value);
        console.log(miNameRef.current.value);
        console.log(miPositionRef.current.value);
        console.log(miContactRef.current.value);
        console.log(miPhoneNumRef.current.value);
        console.log(miEmailRef.current.value);
        console.log(jpDepartmentRef.current.value);
        console.log(jpJobRef.current.value);
        console.log(jpAddressRef.current.value);
        console.log(jobGoalRef.current.value);
        console.log(operationGuidancePlanRef.current.value);
        console.log(jobSummaryRef.current.value);
        console.log(studentMajorRef.current.value);
        console.log(studentRecruitRef.current.value);
        console.log(studentGrade);
        console.log(studentCreditRef.current.value);
        console.log(studentRequirementRef.current.value);
        console.log(studentEtcRef.current.value);
    };
    const handleFile = (e) => {
        var fileInput = document.getElementsByClassName('ex_file');
        for (var i = 0; i < fileInput.length; i++) {
            if (fileInput[i].files.length > 0) {
                for (var j = 0; j < fileInput[i].files.length; j++) {
                    setFileImage(fileInput[i].files[j].name); // 파일명 출력
                }
            }
        }
    };
    return (
        <Grid>
            <Grid ref={printComponent}>
                <MainCard codeHighlight sx={{ width: '80%', margin: 'auto' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2">현장실습 신청(기업)</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">운영과정</Typography>
                            <Grid>
                                <RadioGroup name="workingProcess" value={workingProcess} onChange={onChangeRequestInfo}>
                                    <Grid container>
                                        {workingProcessList.map((workProcess, index) => (
                                            <Grid item key={index}>
                                                <FormControlLabel value={workProcess} control={<Radio />} label={workProcess} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">운영유형</Typography>
                            <Grid container>
                                <RadioGroup name="workingSemester" value={requestInfo.workingSemester} onChange={onChangeRequestInfo}>
                                    <Grid container>
                                        {workingsemester.map((semester, index) => (
                                            <Grid item key={index}>
                                                <FormControlLabel value={semester} control={<Radio />} label={semester} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid>
                                <Grid>
                                    <Typography variant="h5">운영학기</Typography>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                name="workingYear"
                                                value={yearWorking}
                                                onChange={(newValue) => {
                                                    setYearWorking(dayjs(newValue).format('YYYY'));
                                                }}
                                                views={['year']}
                                                label="년도 선택"
                                                renderInput={(params) => (
                                                    <TextField
                                                        variant="standard"
                                                        InputProps={{
                                                            readOnly: true
                                                        }}
                                                        {...params}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                            <InputLabel>학기 선택</InputLabel>
                                            <Select
                                                label="학기 선택"
                                                name="workingStudentTerm"
                                                value={requestInfo.workingStudentTerm}
                                                onChange={onChangeRequestInfo}
                                            >
                                                {studentTerms.map((studentTerm, index) => (
                                                    <MenuItem value={studentTerm} key={index}>
                                                        {studentTerm}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                            <InputLabel>실습 구분</InputLabel>
                                            <Select
                                                label="실습 구분"
                                                name="trainingTerm"
                                                value={trainingTerm}
                                                onChange={onChangeRequestInfo}
                                            >
                                                {trainingTerms.map((trainingTerm, index) => (
                                                    <MenuItem value={trainingTerm} key={index}>
                                                        {trainingTerm}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <Grid>
                                <Typography variant="h5">실습기간</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                label="시작 날짜"
                                                inputFormat="yyyy/MM/dd"
                                                name="startDate"
                                                value={startDate}
                                                onChange={(newValue) => {
                                                    setStartDate(dayjs(newValue).format('YYYY-MM-DD'));
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        InputProps={{
                                                            readOnly: true
                                                        }}
                                                        variant="standard"
                                                        {...params}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                label="마지막 날짜"
                                                inputFormat="yyyy/MM/dd"
                                                name="endDate"
                                                value={endDate}
                                                onChange={(newValue) => {
                                                    setEndDate(newValue);
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        InputProps={{
                                                            readOnly: true
                                                        }}
                                                        variant="standard"
                                                        {...params}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Typography variant="h5">정규실습 시간</Typography>
                                    </Grid>
                                    <Grid item color="red">
                                        <Typography variant="h6">휴계시간 1시간 포함하여 작성</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <TimePicker
                                                label="시작 시간"
                                                name="startTime"
                                                value={startTime}
                                                onChange={(newValue) => {
                                                    setStartTime(newValue);
                                                }}
                                                renderInput={(params) => <TextField variant="standard" {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <TimePicker
                                                label="종료 시간"
                                                name="endTime"
                                                value={endTime}
                                                onChange={(newValue) => {
                                                    setEndTime(newValue);
                                                }}
                                                renderInput={(params) => <TextField variant="standard" {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h5">실습요일</Typography>
                            <Grid container>
                                {days.map((day, index) => (
                                    <Grid item xs={12 / 7} key={index}>
                                        <FormControlLabel control={<Checkbox />} label={day} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h5">현장실습 여부</Typography>
                            <Grid container>
                                <RadioGroup name="ftExist" value={requestInfo.ftExist} onChange={onChangeRequestInfo}>
                                    <Grid container>
                                        {ftExistList.map((ftExists, index) => (
                                            <Grid item key={index}>
                                                <FormControlLabel value={ftExists} control={<Radio />} label={ftExists} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant="h5">산재보험가입</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="red">
                                        {insuranceCheck}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid container>
                                    <FormControlLabel
                                        name="insuranceChecked"
                                        value={requestInfo.insuranceChecked === 'reject' ? 'agree' : 'reject'}
                                        onChange={onChangeRequestInfo}
                                        control={<Checkbox />}
                                        label={insurance}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant="h5">기타사항</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="red">
                                        (운영 과정에 대한 별도의 근로계약 체결 여부)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <RadioGroup name="etcContract" value={etcContract} onChange={onChangeRequestInfo}>
                                    <Grid container spacing={3}>
                                        {etcContracts.map((etcContract, index) => (
                                            <Grid item key={index}>
                                                <FormControlLabel value={etcContract} control={<Radio />} label={etcContract} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">기타 특이사항</Typography>
                            <TextField
                                name="etcContractElse"
                                inputRef={etcContractElseRef}
                                fullWidth
                                type="text"
                                variant="standard"
                                label="근로계약 시 관련사항 및 기타 특이사항"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3">실습지원비</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">정규실습시간</Typography>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                        <InputLabel>월/주 선택</InputLabel>
                                        <Select
                                            label="실습 구분"
                                            name="txRegularTrainingSelect"
                                            value={requestInfo.txRegularTrainingSelect}
                                            onChange={onChangeRequestInfo}
                                        >
                                            <MenuItem value={'월'}>월</MenuItem>
                                            <MenuItem value={'주'}>주</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="txRegularMoney"
                                        inputRef={txRegularMoneyRef}
                                        type="text"
                                        variant="standard"
                                        label="지급기준/원"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">지급예정일</Typography>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                        <InputLabel>당월/익월 선택</InputLabel>
                                        <Select
                                            label="당월/익월 선택"
                                            name="txPaymentSelect"
                                            value={requestInfo.txPaymentSelect}
                                            onChange={onChangeRequestInfo}
                                        >
                                            <MenuItem value={'당월'}>당월</MenuItem>
                                            <MenuItem value={'익월'}>익월</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="txPaymentDate"
                                        defaultValue="21"
                                        inputRef={txPaymentDateRef}
                                        type="text"
                                        variant="standard"
                                        label="일"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid>
                                <Typography variant="h5">연장실습시간</Typography>
                                <Grid>
                                    <TextField
                                        name="txExtension"
                                        inputRef={txExtensionRef}
                                        type="text"
                                        variant="standard"
                                        label="지급기준/원"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">기타 지원 사항</Typography>
                            <Grid container>
                                {etcResources.map((etcResource, index) => (
                                    <Grid item xs={4} key={index}>
                                        <FormControlLabel
                                            value={etcResource}
                                            onChange={(e) => onChangeEtcResource(e.target.checked, e.target.value)}
                                            control={<Checkbox />}
                                            label={etcResource}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h5">전형방법</Typography>
                            <Grid>
                                <RadioGroup name="selectionMethod" value={selectionMethod} onChange={onChangeRequestInfo}>
                                    <Grid container>
                                        {selectMethods.map((selectMehtod, index) => (
                                            <Grid item key={index}>
                                                <FormControlLabel value={selectMehtod} control={<Radio />} label={selectMehtod} />
                                            </Grid>
                                        ))}
                                        <Grid item>
                                            <TextField
                                                variant="standard"
                                                label="기타 전형방법"
                                                placeholder="기타 전형방법"
                                                name="selectionMethodEtc"
                                                inputRef={selectionMethodEtcRef}
                                                disabled={selectionMethod === '기타' ? false : true}
                                                InputProps={selectionMethod === '기타' ? null : { readOnly: true }}
                                            ></TextField>
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid>
                                <Typography variant="h5">전형절차 및 일정</Typography>
                                <Grid container sx={{ my: 3, mx: 2 }}>
                                    {titleList.map((title, index) => (
                                        <Grid item xs={3} key={index}>
                                            <FieldTrainingProcess
                                                title={title}
                                                trainingProcess={trainingProcess}
                                                onChangeTrainingProcess={onChangeTrainingProcess}
                                                tpReferenceScheduleRef={tpReferenceScheduleRef}
                                            ></FieldTrainingProcess>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h3">현장교육 담당자</Typography>
                            <Grid container spacing={3}>
                                {managerInfos.map((mangerInfo, index) => (
                                    <Grid item xs={4} key={index}>
                                        <TextField
                                            required
                                            name={mangerInfo.name}
                                            inputRef={mangerInfo.ref}
                                            fullWidth
                                            type="text"
                                            variant="standard"
                                            label={mangerInfo.label}
                                        ></TextField>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h3">실습 직무</Typography>
                            <Grid container spacing={3}>
                                {jobPracticeList.map((jobPractice, index) => (
                                    <Grid item key={index} xs={jobPractice.name === 'jpAddress' ? 12 : 6}>
                                        <TextField
                                            name={jobPractice.name}
                                            inputRef={jobPractice.ref}
                                            fullWidth
                                            type="text"
                                            variant="standard"
                                            label={jobPractice.label}
                                        ></TextField>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">교육 목표</Typography>
                            <TextField
                                name="jobGoal"
                                inputRef={jobGoalRef}
                                fullWidth
                                type="text"
                                multiline
                                rows={3}
                                placeholder={eduGoal}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">운영/지도 계획</Typography>
                            <TextField
                                name="operationGuidancePlan"
                                inputRef={operationGuidancePlanRef}
                                fullWidth
                                type="text"
                                multiline
                                rows={3}
                                placeholder={eduPlan}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">직무 개요</Typography>
                            <TextField
                                name="jobSummary"
                                inputRef={jobSummaryRef}
                                fullWidth
                                type="text"
                                multiline
                                rows={5}
                                placeholder={eduSummary}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3">학생 요건</Typography>
                        </Grid>
                        {studentRequirements.map((studentRequirement, index) => (
                            <Grid item xs={studentRequirement.name === 'studentMajor' ? 4 : 2} key={index}>
                                <TextField
                                    name={studentRequirement.name}
                                    inputRef={studentRequirement.ref}
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    label={studentRequirement.label}
                                ></TextField>
                            </Grid>
                        ))}
                        <Grid item>
                            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                <InputLabel>학년 선택</InputLabel>
                                <Select
                                    name="studentGrade"
                                    value={requestInfo.studentGrade}
                                    onChange={onChangeRequestInfo}
                                    label="학년 선택"
                                >
                                    {grades.map((grade, index) => (
                                        <MenuItem value={grade} key={index}>
                                            {grade}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                name="studentCredit"
                                inputRef={studentCreditRef}
                                fullWidth
                                type="text"
                                variant="standard"
                                label="평점 / 4.5"
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">요구 역량</Typography>
                            <TextField
                                name="studentRequirement"
                                inputRef={studentRequirementRef}
                                fullWidth
                                type="text"
                                multiline
                                rows={2}
                                placeholder={requireAbility}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">기타 사항</Typography>
                            <TextField fullWidth type="text" inputRef={studentEtcRef} multiline rows={2} placeholder="기타 사항" />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item xs={2}>
                                    <Stack direction="row" spacing={2}>
                                        <form onClick={onSubmitSave}>
                                            <Button variant="contained">저장</Button>
                                        </form>
                                        <form>
                                            <Button variant="outlined">신청</Button>
                                        </form>
                                        <form onClick={handlePrint}>
                                            <Button variant="outlined">출력</Button>
                                        </form>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>

            <Grid>
                <MainCard>
                    <Grid container spacing={3} align="center">
                        <Grid item>
                            <Typography variant="h3">계획서 업로드</Typography>
                        </Grid>
                        <Grid item>
                            <TextField value={fileImage} variant="standard" fullWidth type="text" placeholder="선택된 파일없음" />
                        </Grid>
                        <Grid item>
                            <form>
                                <input className="ex_file" accept="video" type="file" onChange={handleFile} />
                            </form>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography variant="h1">그림</Typography>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default EnterpriseForm;
