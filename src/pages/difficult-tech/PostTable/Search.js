// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';
import { statusList, businessTypeListForSearch, requestFormList } from './constant';

const Search = ({ selected, onChangeSelected, requestProjectList }) => {
    return (
        <Grid item xs={12}>
            <MainCard title="" codeHighlight>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <InputLabel>진행 상태</InputLabel>
                        <FormControl label="진행 상태" variant="standard" sx={{ minWidth: 120 }}>
                            <Select name="selectedStatus" value={selected.selectedStatus} onChange={onChangeSelected}>
                                {statusList.map((status, index) => (
                                    <MenuItem key={index} value={status.value}>
                                        {status.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel>업종</InputLabel>
                        <FormControl label="업종" variant="standard" sx={{ minWidth: 120 }}>
                            <Select name="selectedConsultingField" value={selected.selectedConsultingField} onChange={onChangeSelected}>
                                {businessTypeListForSearch.map((businessType, index) => (
                                    <MenuItem key={index} value={businessType.value}>
                                        {businessType.label}
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
                                    <MenuItem key={index} value={requestForm.value}>
                                        {requestForm.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel>프로젝트 이름</InputLabel>
                        <TextField
                            id="outlined-name"
                            placeholder="프로젝트 이름 검색"
                            name="projectName"
                            defaultValue={selected.projectName}
                            onBlur={onChangeSelected}
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
                        <form onClick={(e) => requestProjectList(e, 1)}>
                            <Button variant="contained">검색</Button>
                        </form>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};

export default Search;
