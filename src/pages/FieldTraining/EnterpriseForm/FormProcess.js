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
import { LocalizationProvider, DesktopDatePicker, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dayjs from 'dayjs';
const FormProecess = ({ yearWorking, setYearWorking, startDate, setStartDate, endDate, setEndDate, requestInfo, onChangeRequestInfo }) => {
    const workingProcessList = [
        { label: '방학과정', value: '1' },
        { label: '방학과정', value: '2' },
        { label: '방학과정/학기과정', value: '3' }
    ];
    const studentTerms = [
        { label: '1학기', value: '1' },
        { label: '여름학기', value: '2' },
        { label: '2학기', value: '3' },
        { label: '겨울학기', value: '4' }
    ];
    const trainingTerms = [
        { label: '4주', value: '4' },
        { label: '8주', value: '8' },
        { label: '12주', value: '12' },
        { label: '15주', value: '15' }
    ];
    const workingSemesters = [
        { label: '직무체험형', value: '1' },
        { label: '채용연계형', value: '2' }
    ];
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const ftExistList = [
        { label: '현장실습없음', value: '1' },
        { label: '상황별 실시', value: '2' },
        { label: '주기적/상시적 실시', value: '3' }
    ];
    const insurance = '참여 학생에 대한 산재보험 가입은 법적 의무임을 확인합니다.';
    const insuranceCheck = '(미가입시 운영 불가)';
    const etcContracts = [
        { label: '체결함', value: '1' },
        { label: '체결안함', value: '2' }
    ];
    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h5">운영과정</Typography>
                    <Grid>
                        <RadioGroup name="workingProcess" value={requestInfo.workingProcess} onChange={onChangeRequestInfo}>
                            <Grid container>
                                {workingProcessList.map((workProcess, index) => (
                                    <Grid item key={index}>
                                        <FormControlLabel value={workProcess.value} control={<Radio />} label={workProcess.label} />
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
                                {workingSemesters.map((semester, index) => (
                                    <Grid item key={index}>
                                        <FormControlLabel value={semester.value} control={<Radio />} label={semester.label} />
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
                                            <MenuItem value={studentTerm.value} key={index}>
                                                {studentTerm.label}
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
                                        value={requestInfo.trainingTerm}
                                        onChange={onChangeRequestInfo}
                                    >
                                        {trainingTerms.map((trainingTerm, index) => (
                                            <MenuItem value={trainingTerm.value} key={index}>
                                                {trainingTerm.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
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
                            <FormControlLabel name="insuranceChecked" control={<Checkbox />} label={insurance} />
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
                        <RadioGroup name="etcContract" value={requestInfo.etcContract} onChange={onChangeRequestInfo}>
                            <Grid container spacing={3}>
                                {etcContracts.map((etcContract, index) => (
                                    <Grid item key={index}>
                                        <FormControlLabel value={etcContract.value} control={<Radio />} label={etcContract.label} />
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
                        defaultValue={requestInfo.etcContractElse}
                        onBlur={onChangeRequestInfo}
                        fullWidth
                        type="text"
                        variant="standard"
                        label="근로계약 시 관련사항 및 기타 특이사항"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormProecess;
