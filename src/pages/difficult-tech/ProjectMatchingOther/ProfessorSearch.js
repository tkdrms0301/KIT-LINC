// material-ui
import { Grid, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const ProfessorSearch = ({ search: searchInput, handleChange }) => {
    return (
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>교수를 검색해주세요.</Box>
                <TextField
                    id="outlined-name"
                    label="교수 검색어"
                    value={searchInput}
                    onChange={handleChange}
                    variant="standard"
                    sx={{
                        width: '50%'
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </Grid>
    );
};

export default ProfessorSearch;
