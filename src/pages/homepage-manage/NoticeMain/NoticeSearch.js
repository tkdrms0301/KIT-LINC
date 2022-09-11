import { Grid, Button, TextField, FormControl, Select, InputLabel, MenuItem, Paper, Divider, TableBody, Pagination } from '@mui/material';
const NoticeSearch = ({ noticeSearchForm, noticeSearchRef, onChangeNoticeSearchForm, onSubmitSearch }) => {
    const noticeSearchList = ['전체', '제목', '내용'];
    return (
        <Grid container spacing={3} sx={{ justifyContent: 'flex-end', mb: 2 }}>
            <Grid item>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>검색 범위</InputLabel>
                    <Select label="검색 범위" value={noticeSearchForm} onChange={onChangeNoticeSearchForm}>
                        {noticeSearchList.map((noticeSearch, index) => (
                            <MenuItem key={index} value={noticeSearch}>
                                {noticeSearch}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextField id="outlined-name" label="프로젝트 이름 검색" inputRef={noticeSearchRef} variant="standard" fullWidth />
            </Grid>
            <Grid item sx={{ mt: 1 }}>
                <form onClick={onSubmitSearch}>
                    <Button variant="contained">검색</Button>
                </form>
            </Grid>
        </Grid>
    );
};
export default NoticeSearch;
