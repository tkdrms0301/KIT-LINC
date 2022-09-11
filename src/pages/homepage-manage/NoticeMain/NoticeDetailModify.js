import {
    Grid,
    Button,
    Typography,
    TextField,
    InputLabel,
    TableRow,
    TableCell,
    Paper,
    Divider,
    TableBody,
    Pagination,
    Stack,
    Item
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createRef, useRef } from 'react';

import MainCard from 'components/MainCard';
import NoticeForm from './NoticeForm';
import AttachmentTag from './AttachmentTag';
const NoticeDetailModify = () => {
    const editorRef = createRef();
    const titleRef = useRef();
    const postData = ` 
창의융합종합설계 주<em>제 제안서</em>

| 작품 명칭 | 금오공대 자물쇠 |
| ----- | -------- |
| 개발기간 | 2022년 09월 01일 ～ 2022년 11월 30일 |
| 책 임 자 | 성 명 | 성세경 |
| 학 년 | 3 | 학 번 | 20180578 |
| 연락처 | E-mail | tprud0997@naver.com |
| 휴대전화 | 010-9174-0997 |
| 참여학생 | 학번 | 이름 | 연락처 (휴대전화) |
| 20180578 | 성세경 | 0109174-0977 |
| 20180661 | 안상근 | 010-5651-5957 |
| 20180670 | 안철민 | 010-3170-5626 |
| 20180977 | 이호진 | 010-8797-7317 |
| 본인은 소프트웨어공학심화프로그램 종합설계에 대한 제안서를 첨부와 같이 제출합니다.<br> <br>첨부 : 종합설계 주제 제안서 (표지 및 목차 제외 4페이지 이상)<br> <br>2022년 09월 01일<br> <br>책임자 성세경 (인)<br> <br> <br> <br> <br>소프트웨어공학심화프로그램 PD 귀하 |`;
    const params = useParams();
    const postDetail = {
        postId: 1,
        title: 'K-기대함 프로젝트',
        attachment: ['url', 'url2'],
        author: '안상근',
        registrationDate: '2022-09-05',
        view: 5
    };
    const navigate = useNavigate();
    const onClickModifyFinish = (e) => {
        console.log('수정 완료');
        console.log(titleRef.current.value);
        console.log(editorRef.current.getInstance().getHTML());
        alert('공지사항 수정이 완료 되었습니다');
        // navigate(`/notice/${params.detail}`);
    };
    const onClickModifyCancel = (e) => {
        console.log('수정 취소');
        alert('공지사항 수정이 취소 되었습니다');
        navigate(`/notice/${params.detail}`);
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
                    <Grid item xs={9} sx={{ mt: 1 }}>
                        <Stack direction="row" spacing={2}>
                            <Typography>첨부</Typography>
                            {console.log(postDetail.attachment)}
                            {postDetail.attachment.map((imageFileName, index) => (
                                <AttachmentTag key={index} imageFileName={imageFileName}></AttachmentTag>
                            ))}
                            <Grid>첨부파일</Grid>
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
                    <NoticeForm editorRef={editorRef} postData={postData}></NoticeForm>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
                    <Grid>
                        <form onClick={onClickModifyFinish}>
                            <Button>수정완료</Button>
                        </form>
                    </Grid>
                    <Grid>
                        <form onClick={onClickModifyCancel}>
                            <Button>수정취소</Button>
                        </form>
                    </Grid>
                </Stack>
            </MainCard>
        </Grid>
    );
};
export default NoticeDetailModify;
