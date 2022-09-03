import { Grid, FormControlLabel, Typography, TextField, Radio, RadioGroup } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker, DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const FieldTrainingProcess = ({ title, trainingProcess, onChangeTrainingProcess, tpReferenceScheduleRef }) => {
    return title.dateTitle === '참고일정' ? (
        <Grid>
            <Typography variant="h6">{title.dateTitle}</Typography>
            <Grid container sx={{ my: 2 }}>
                <Grid item>
                    <TextField
                        inputRef={tpReferenceScheduleRef}
                        sx={{ maxWidth: 170 }}
                        multiline
                        rows={4}
                        type="text"
                        placeholder="추가적인 참고일정"
                    ></TextField>
                </Grid>
            </Grid>
        </Grid>
    ) : (
        <Grid>
            <Typography variant="h6">{title.dateTitle}</Typography>
            <Grid container>
                <RadioGroup>
                    <Grid container spacing={3}>
                        <Grid item>
                            <RadioGroup name={title.name} value={title.radioValue} onChange={onChangeTrainingProcess}>
                                <Grid>
                                    <FormControlLabel
                                        name={trainingProcess.name}
                                        value="unSelect"
                                        label="일정 별도 협의"
                                        control={<Radio />}
                                    ></FormControlLabel>
                                </Grid>
                                <Grid>
                                    <FormControlLabel
                                        value="select"
                                        onChange={onChangeTrainingProcess}
                                        label="일정 선택"
                                        control={<Radio />}
                                    ></FormControlLabel>
                                </Grid>
                            </RadioGroup>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                {title.radioValue === 'select' ? (
                                    <DateTimePicker
                                        label="일정 선택"
                                        inputFormat="yyyy/MM/dd hh:mm"
                                        value={title.value}
                                        onChange={(newValue) => {
                                            title.set(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ maxWidth: 170 }}
                                                variant="standard"
                                                InputProps={{
                                                    readOnly: true
                                                }}
                                                {...params}
                                            />
                                        )}
                                    />
                                ) : (
                                    <DateTimePicker
                                        label="일정 선택"
                                        inputFormat="yyyy/MM/dd hh:mm"
                                        value={title.value}
                                        disabled
                                        onChange={(newValue) => {
                                            title.set(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ maxWidth: 170 }}
                                                variant="standard"
                                                InputProps={{
                                                    readOnly: true
                                                }}
                                                {...params}
                                            />
                                        )}
                                    />
                                )}
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </RadioGroup>
            </Grid>
        </Grid>
    );
};
export default FieldTrainingProcess;
