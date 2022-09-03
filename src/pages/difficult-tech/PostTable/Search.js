// material-ui
import { Grid, Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// project import
import MainCard from 'components/MainCard';

const Search = ({ searchInputRef, onSubmitSearchInput }) => {
    return (
        <Grid item xs={12}>
            <MainCard title="" codeHighlight>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>프로젝트를 검색해주세요.</Box>
                    <TextField
                        id="outlined-name"
                        label="프로젝트 이름 검색"
                        inputRef={searchInputRef}
                        variant="standard"
                        sx={{ width: '50%' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <form onClick={onSubmitSearchInput}>
                        <Button variant="contained">검색</Button>
                    </form>
                </Box>
            </MainCard>
        </Grid>
    );
};

export default Search;
