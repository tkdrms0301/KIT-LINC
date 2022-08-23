// material-ui
import { Grid, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const Search = ({ search: searchInput, handleChange }) => {
    return (
        <Grid item xs={12}>
            <MainCard title="" codeHighlight>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>프로젝트를 검색해주세요.</Box>
                    <TextField
                        id="outlined-name"
                        label="프로젝트 이름 검색"
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
            </MainCard>
        </Grid>
    );
};

export default Search;
