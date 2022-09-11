import { Grid, Button, Typography, TextField, Divider, Stack, InputLabel } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { createRef, useRef } from 'react';

import MainCard from 'components/MainCard';
import NoticeForm from './NoticeForm';
const NoticeDetailWrite = () => {
    const titleRef = useRef();
    const editorRef = createRef();
    const navigate = useNavigate();
    const onClickModifyFinish = (e) => {
        console.log('작성 완료');
        alert('공지사항 작성이 완료 되었습니다');
        console.log(titleRef.current.value);
        console.log(editorRef.current.getInstance().getHTML());
        // navigate('/notice');
    };
    const onClickModifyCancel = (e) => {
        console.log('작성 취소');
        alert('공지사항 작성이 취소 되었습니다');
        navigate('/notice');
    };
    return (
        <Grid>
            <MainCard>
                <Grid>
                    <Grid direction="row" container spacing={2}>
                        <Grid item sx={{ width: '100%' }}>
                            <InputLabel>제목</InputLabel>
                            <TextField variant="standard" inputRef={titleRef} fullWidth></TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Grid container>
                    <Grid item xs={9}>
                        <Stack direction="row" spacing={2}>
                            <Typography>첨부</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} align="end">
                        <Button variant="contained" component="label">
                            업로드
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Grid>
                    <NoticeForm editorRef={editorRef}></NoticeForm>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
                    <Grid>
                        <form onClick={onClickModifyFinish}>
                            <Button>작성완료</Button>
                        </form>
                    </Grid>
                    <Grid>
                        <form onClick={onClickModifyCancel}>
                            <Button>작성취소</Button>
                        </form>
                    </Grid>
                </Stack>
            </MainCard>
        </Grid>
    );
};
export default NoticeDetailWrite;
