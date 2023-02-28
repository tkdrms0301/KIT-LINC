import { Grid, TextField, Button } from '@mui/material';
const Search = ({ searchInput, onChangeSearchInput, handleSearchInput }) => {
    return (
        <>
            <Grid container justifyContent="right" alignItems="center" spacing={3} sx={{ my: 1 }}>
                <Grid item>
                    <TextField
                        onBlur={onChangeSearchInput}
                        defaultValue={searchInput}
                        variant="standard"
                        placeholder="연구원 이름을 입력하세요"
                        sx={{ width: '250px' }}
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                    ></TextField>
                </Grid>
                <Grid item>
                    <Button onClick={handleSearchInput} variant="contained">
                        검색
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
export default Search;
