import { Grid, TextField, Select, Typography, InputLabel, MenuItem, FormControl } from '@mui/material';
const FormStudent = ({ studentInfo, onChangeStudentInfo }) => {
    const studentRequirements = [
        {
            name: 'studentMajor',
            label: '전공분야(구체적 대상 전공 또는 계열 특정)',
            value: studentInfo.studentMajor
        },
        {
            name: 'studentRecruit',
            label: '모집인원',
            value: studentInfo.studentRecruit
        }
    ];
    const grades = [
        { value: '1', label: '1학년' },
        { value: '2', label: '2학년' },
        { value: '3', label: '3학년' },
        { value: '4', label: '4학년' }
    ];
    const requireAbility = 'Co-op 참여 학생에게 요구되는\n' + 'CA역량, 외국어 역량, 지식/기술 역량, 전공과목 이수여부 등 기입';
    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3">학생 요건</Typography>
                </Grid>
                {studentRequirements.map((studentRequirement, index) => (
                    <Grid item xs={studentRequirement.name === 'studentMajor' ? 4 : 2} key={index}>
                        <TextField
                            name={studentRequirement.name}
                            defaultValue={studentRequirement.value}
                            onBlur={onChangeStudentInfo}
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
                        <Select name="studentGrade" value={studentInfo.studentGrade} onChange={onChangeStudentInfo} label="학년 선택">
                            {grades.map((grade, index) => (
                                <MenuItem value={grade.value} key={index}>
                                    {grade.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        name="studentCredit"
                        defaultValue={studentInfo.studentCredit}
                        onBlur={onChangeStudentInfo}
                        fullWidth
                        type="text"
                        variant="standard"
                        label="평점 / 4.5"
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">요구 역량</Typography>
                    <TextField
                        name="studentRequirement"
                        value={studentInfo.studentRequirement}
                        onBlur={onChangeStudentInfo}
                        fullWidth
                        type="text"
                        multiline
                        rows={2}
                        placeholder={requireAbility}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">기타 사항</Typography>
                    <TextField
                        name="studentEtc"
                        defaultValue={studentInfo.studentEtc}
                        onBlur={onChangeStudentInfo}
                        fullWidth
                        type="text"
                        multiline
                        rows={2}
                        placeholder="기타 사항"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormStudent;
