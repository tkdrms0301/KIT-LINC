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
import dayjs from 'dayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FieldTrainingProcess from './FieldTrainingProcess';

const FormModel = ({
    modelInfo,
    onChangeModelInfo,
    requestInfo,
    titleList,
    tpDeadlineDate,
    setTpDeadlineDate,
    tpInterviewDate,
    setTpInterviewDate,
    tpFinalSelectionDate,
    setTpFinalSelectionDate,
    onChangeRequestInfo,
    onChangeTrainingProcess
}) => {
    const selectMethods = [
        { label: '서류선발', value: '1' },
        { label: '면접선발', value: '2' },
        { label: '학교추천선발', value: '3' },
        { label: '기타', value: '4' }
    ];

    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">전형방법</Typography>
                    <Grid>
                        <RadioGroup name="selectionMethod" value={modelInfo.selectionMethod} onChange={onChangeModelInfo}>
                            <Grid container alignItems="center">
                                {selectMethods.map((selectMehtod, index) => (
                                    <Grid item key={index}>
                                        <FormControlLabel value={selectMehtod.value} control={<Radio />} label={selectMehtod.label} />
                                    </Grid>
                                ))}
                                <Grid item>
                                    <TextField
                                        variant="standard"
                                        label="기타 전형방법"
                                        placeholder="기타 전형방법"
                                        name="selectionMethodEtc"
                                        defaultValue={modelInfo.selectionMethodEtc}
                                        onBlur={onChangeModelInfo}
                                        disabled={modelInfo.selectionMethod === '4' ? false : true}
                                        InputProps={modelInfo.selectionMethod === '4' ? null : { readOnly: true }}
                                    ></TextField>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </Grid>
                </Grid>

                <Grid item xs={3}>
                    <Typography>접수마감일자</Typography>
                    <RadioGroup name="tpDeadlineDateRadio" value={modelInfo.tpDeadlineDateRadio} onChange={onChangeModelInfo}>
                        <Grid>
                            <FormControlLabel value="select" label="일정 선택" control={<Radio />}></FormControlLabel>
                        </Grid>
                        <Grid>
                            <FormControlLabel value="unSelect" label="일정 별도 협의" control={<Radio />}></FormControlLabel>
                        </Grid>
                    </RadioGroup>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {modelInfo.tpDeadlineDateRadio === 'select' ? (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpDeadlineDate}
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        ) : (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpDeadlineDate}
                                disabled
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        )}
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={3}>
                    <Typography>면접일자</Typography>
                    <RadioGroup name="tpInterviewDateRadio" value={modelInfo.tpInterviewDateRadio} onChange={onChangeModelInfo}>
                        <Grid>
                            <FormControlLabel value="select" label="일정 선택" control={<Radio />}></FormControlLabel>
                        </Grid>
                        <Grid>
                            <FormControlLabel value="unSelect" label="일정 별도 협의" control={<Radio />}></FormControlLabel>
                        </Grid>
                    </RadioGroup>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {modelInfo.tpInterviewDateRadio === 'select' ? (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpInterviewDate}
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        ) : (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpInterviewDate}
                                disabled
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        )}
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={3}>
                    <Typography>최종선발일자</Typography>
                    <RadioGroup name="tpFinalSelectionDateRadio" value={modelInfo.tpFinalSelectionDateRadio} onChange={onChangeModelInfo}>
                        <Grid>
                            <FormControlLabel value="select" label="일정 선택" control={<Radio />}></FormControlLabel>
                        </Grid>
                        <Grid>
                            <FormControlLabel value="unSelect" label="일정 별도 협의" control={<Radio />}></FormControlLabel>
                        </Grid>
                    </RadioGroup>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {modelInfo.tpFinalSelectionDateRadio === 'select' ? (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpFinalSelectionDate}
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        ) : (
                            <DateTimePicker
                                label="일정 선택"
                                inputFormat="yyyy/MM/dd hh:mm"
                                value={tpFinalSelectionDate}
                                disabled
                                onChange={(newValue) => setTpDeadlineDate(dayjs(newValue).format('YYYY-MM-DD hh:mm a'))}
                                renderInput={(params) => <TextField sx={{ maxWidth: 170 }} variant="standard" {...params} />}
                            />
                        )}
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">참고일정</Typography>
                    <Grid container sx={{ my: 2 }}>
                        <Grid item>
                            <TextField
                                name="tpReferenceSchedule"
                                defaultValue={modelInfo.tpReferenceSchedule}
                                onBlur={onChangeModelInfo}
                                sx={{ maxWidth: 170 }}
                                multiline
                                rows={4}
                                type="text"
                                placeholder="추가적인 참고일정"
                            ></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormModel;
