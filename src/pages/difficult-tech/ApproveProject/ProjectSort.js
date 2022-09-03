import { TextField, Box, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
const ProjectSort = ({
    requestInfo,
    onChangeRequestInfo,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onSubmitRequestForm,
    onSubmitSearch,
    categoryList
}) => {
    const { state, requestForm } = requestInfo;
    const stateList = [
        {
            label: '승인대기',
            value: 'PENDING'
        },
        {
            label: '승인완료',
            value: 'APPROVED'
        },
        {
            label: '승인거절',
            value: 'REJECTED'
        }
    ];

    return (
        <Grid container>
            <Box sx={{ p: 1, pb: 3 }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>진행상태</InputLabel>
                    <Select name="state" value={state} onChange={onChangeRequestInfo} label="진행상태">
                        {stateList.map((states, index) => (
                            <MenuItem key={index} value={states.value}>
                                {states.label}
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
                            <MenuItem key={index} value={category.value}>
                                {category.label}
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
                        onChange={(newValue) => {
                            setStartDate(newValue);
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
            </Box>
            <Box sx={{ p: 1, pb: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="마지막 날짜"
                        inputFormat="yyyy/MM/dd"
                        name="endDate"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
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
                <form onSubmit={onSubmitRequestForm}>
                    <Button variant="contained" type="submit">
                        검색
                    </Button>
                </form>
            </Box>
        </Grid>
    );
};

export default ProjectSort;
