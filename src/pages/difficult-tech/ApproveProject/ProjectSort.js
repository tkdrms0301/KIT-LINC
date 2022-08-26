import { TextField, Box, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
const ProjectSort = ({ requestInfo, onChangeRequestInfo, onSubmitRequestForm, categoryList }) => {
    const { state, requestForm, startDate, endDate } = requestInfo;
    const stateList = ['승인대기', '승인완료', '승인거절'];

    return (
        <Grid container>
            <Box sx={{ p: 1, pb: 3 }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>진행상태</InputLabel>
                    <Select name="state" value={state} onChange={onChangeRequestInfo} label="진행상태">
                        {stateList.map((states, index) => (
                            <MenuItem key={index} value={states}>
                                {states}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ p: 1, pb: 3 }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>지원요청서</InputLabel>
                    <Select name="requestForm" value={requestForm} onChange={onChangeRequestInfo} label="지원요청서">
                        {categoryList.map((category, index) => (
                            <MenuItem key={index} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ p: 1, pb: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="처음 날짜"
                        inputFormat="yyyy/MM/dd"
                        name="startDate"
                        value={startDate}
                        onChange={onChangeRequestInfo}
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
            </Box>
            <Box sx={{ p: 1, pb: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="마지막 날짜"
                        inputFormat="yyyy/MM/dd"
                        name="endDate"
                        value={endDate}
                        onChange={onChangeRequestInfo}
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
            </Box>
        </Grid>
    );
};

export default ProjectSort;
