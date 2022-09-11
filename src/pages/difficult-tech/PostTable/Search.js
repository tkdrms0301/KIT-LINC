// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const Search = ({ selected, onChangeSelected, searchInputRef, onSubmitSearchInput }) => {
    const statusList = ['All', '진행중', '승인대기중', '모집중', '완료'];
    const businessTypeList = ['All', 'IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화확', '비금속', '운송장비'];
    const requestFormList = ['All', 'TechCare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5'];

    return (
        <Grid item xs={12}>
            <MainCard title="" codeHighlight>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <InputLabel>진행 상태</InputLabel>
                        <FormControl label="진행 상태" variant="standard" sx={{ minWidth: 120 }}>
                            <Select name="selectedStatus" value={selected.selectedStatus} onChange={onChangeSelected}>
                                {statusList.map((status, index) => (
                                    <MenuItem key={index} value={status}>
                                        {status}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel>업종</InputLabel>
                        <FormControl label="업종" variant="standard" sx={{ minWidth: 120 }}>
                            <Select name="selectedConsultingField" value={selected.selectedConsultingField} onChange={onChangeSelected}>
                                {businessTypeList.map((businessType, index) => (
                                    <MenuItem key={index} value={businessType}>
                                        {businessType}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel>지원서</InputLabel>
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                            <Select name="selectedRequstForm" value={selected.selectedRequstForm} onChange={onChangeSelected}>
                                {requestFormList.map((requestForm, index) => (
                                    <MenuItem key={index} value={requestForm}>
                                        {requestForm}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid itme xs={4} sx={{ mt: 3 }}>
                        <InputLabel>프로젝트 이름</InputLabel>
                        <TextField
                            id="outlined-name"
                            placeholder="프로젝트 이름 검색"
                            inputRef={searchInputRef}
                            variant="standard"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{ mt: 1 }}>
                        <form onClick={onSubmitSearchInput}>
                            <Button variant="contained">검색</Button>
                        </form>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};

export default Search;
