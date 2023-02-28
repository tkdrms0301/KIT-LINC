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
const FormPractice = ({ practiceInfo, onChangePracticeInfo }) => {
    const jobPracticeList = [
        {
            name: 'jpDepartment',
            label: '부서명',
            default: practiceInfo.jpDepartment
        },
        {
            name: 'jpJob',
            label: '직무명',
            default: practiceInfo.jpJob
        },
        {
            name: 'jpAddress',
            label: '주소',
            default: practiceInfo.jpAddress
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

    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3">실습 직무</Typography>
                    <Grid container spacing={3}>
                        {jobPracticeList.map((jobPractice, index) => (
                            <Grid item key={index} xs={jobPractice.name === 'jpAddress' ? 12 : 6}>
                                <TextField
                                    name={jobPractice.name}
                                    defaultValue={jobPractice.default}
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    label={jobPractice.label}
                                    onBlur={onChangePracticeInfo}
                                ></TextField>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">교육 목표</Typography>
                    <TextField
                        name="jobGoal"
                        defaultValue={practiceInfo.jobGoal}
                        onBlur={onChangePracticeInfo}
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
                        defaultValue={practiceInfo.operationGuidancePlan}
                        onBlur={onChangePracticeInfo}
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
                        defaultValue={practiceInfo.jobSummary}
                        onBlur={onChangePracticeInfo}
                        fullWidth
                        type="text"
                        multiline
                        rows={5}
                        placeholder={eduSummary}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormPractice;
