// material-ui
import { Grid, FormControl, TextField, InputAdornment, Button, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const Search = ({ selected, onChangeSelected, searchInputRef, onSubmitSearchInput }) => {
    const businessTypeList = ['All', 'IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화확', '비금속', '운송장비'];

    return (
        <Grid container spacing={3} direction="row" justifyContent="flex-end" alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
                <InputLabel>업종</InputLabel>
                <FormControl label="업종" variant="standard" sx={{ minWidth: 120 }}>
                    <Select name="selectedConsultingField" value={selected} onChange={onChangeSelected}>
                        {businessTypeList.map((businessType, index) => (
                            <MenuItem key={index} value={businessType}>
                                {businessType}
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
