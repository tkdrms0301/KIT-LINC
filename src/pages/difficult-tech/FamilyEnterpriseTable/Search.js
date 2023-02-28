// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { companyTypeListSearch, categoryListSearch, growthDegreeListSearch } from './constant';

const Search = ({ selected, onChangeSelected, searchInputRef, requestSearchInput }) => {
    return (
        <Grid container spacing={3} direction="row" justifyContent="flex-end" alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
                <InputLabel>기업유형</InputLabel>
                <FormControl label="기업유형" variant="standard" sx={{ minWidth: 120 }}>
                    <Select name="companyType" value={selected.companyType} onChange={onChangeSelected}>
                        {companyTypeListSearch.map((companyType, index) => (
                            <MenuItem key={index} value={companyType.value}>
                                {companyType.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <InputLabel>업종</InputLabel>
                <FormControl label="업종" variant="standard" sx={{ minWidth: 120 }}>
                    <Select name="category" value={selected.category} onChange={onChangeSelected}>
                        {categoryListSearch.map((category, index) => (
                            <MenuItem key={index} value={category.value}>
                                {category.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <InputLabel>기업성장도</InputLabel>
                <FormControl label="기업성장도" variant="standard" sx={{ minWidth: 120 }}>
                    <Select name="growthDegree" value={selected.growthDegree} onChange={onChangeSelected}>
                        {growthDegreeListSearch.map((growthDegree, index) => (
                            <MenuItem key={index} value={growthDegree.value}>
                                {growthDegree.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <InputLabel>가족회사 이름</InputLabel>
                <TextField
                    id="outlined-name"
                    placeholder="가족회사 이름 검색"
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
            <Grid item sx={{ mt: 1 }}>
                <form onClick={requestSearchInput}>
                    <Button variant="contained">검색</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Search;
