// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const Search = ({ selected, onChangeSelected, searchInputRef, onSubmitSearchInput }) => {
    const companyTypeList = [
        { value: '1', label: 'All' },
        { value: '2', label: '대기업' },
        { value: '3', label: '중소기업' }
    ];
    const categoryList = [
        { value: '1', label: 'All' },
        { value: '2', label: 'IT분야' },
        { value: '3', label: '섬유의복' },
        { value: '4', label: '목제종이' },
        { value: '5', label: '석유화학' },
        { value: '6', label: '비금속' },
        { value: '7', label: '운송장비' }
    ];
    const growthDegreeList = [
        { value: '1', label: 'All' },
        { value: '2', label: '창업기' },
        { value: '3', label: '초기성장기' },
        { value: '4', label: '성장기' },
        { value: '5', label: '성숙기' },
        { value: '6', label: '업종전환기' }
    ];

    return (
        <Grid container spacing={3} direction="row" justifyContent="flex-end" alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
                <InputLabel>기업유형</InputLabel>
                <FormControl label="기업유형" variant="standard" sx={{ minWidth: 120 }}>
                    <Select name="companyType" value={selected.companyType} onChange={onChangeSelected}>
                        {companyTypeList.map((companyType, index) => (
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
                        {categoryList.map((category, index) => (
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
                        {growthDegreeList.map((growthDegree, index) => (
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
                <form onClick={onSubmitSearchInput}>
                    <Button variant="contained">검색</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Search;
