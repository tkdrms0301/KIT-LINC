// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';
import { statusList, businessTypeListForSearch, requestFormList } from './constant';

const Search = ({ selected, onChangeSelected, searchInputRef, onSubmitSearchInput }) => {
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
                                {businessTypeListForSearch.map((businessType, index) => (
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
                    <Grid item xs={4}>
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
