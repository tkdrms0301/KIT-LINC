// material-ui
import { Grid, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ProjectSearch = ({ search: searchInput, handleChange }) => {
    return (
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>프로젝트를 검색해주세요.</Box>
                <TextField
                    id="outlined-name"
                    label="프로젝트 검색어"
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

export default ProjectSearch;
