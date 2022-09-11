import { Grid, Button, Typography, Divider, Stack } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link, useNavigate } from 'react-router-dom';
import MainCard from 'components/MainCard';
import PostView from './NoticeFormViewer';
const NoticeDetail = () => {
    const postData = `<p>창의융합종합설계 주<em>제 제안서</em></p><table><thead><tr><th><p>작품 명칭</p></th><th><p>금오공대 자물쇠</p></th></tr></thead><tbody><tr><td><p>개발기간</p></td><td><p>2022년 09월 01일 ～ 2022년 11월 30일</p></td></tr><tr><td><p>책 임 자</p></td><td><p>성 명</p></td></tr><tr><td><p>학 년</p></td><td><p>3</p></td></tr><tr><td><p>연락처</p></td><td><p>E-mail</p></td></tr><tr><td><p>휴대전화</p></td><td><p>010-9174-0997</p></td></tr><tr><td><p>참여학생</p></td><td><p>학번</p></td></tr><tr><td><p>20180578</p></td><td><p>성세경</p></td></tr><tr><td><p>20180661</p></td><td><p>안상근</p></td></tr><tr><td><p>20180670</p></td><td><p>안철민</p></td></tr><tr><td><p>20180977</p></td><td><p>이호진</p></td></tr><tr><td><p>본인은 소프트웨어공학심화프로그램 종합설계에 대한 제안서를 첨부와 같이 제출합니다.</p><p>&nbsp;</p><p>첨부 : 종합설계 주제 제안서 (표지 및 목차 제외 4페이지 이상)</p><p>&nbsp;</p><p>2022년 09월 01일</p><p>&nbsp;</p><p>책임자 성세경 (인)</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>소프트웨어공학심화프로그램 PD 귀하</p></td></tr></tbody></table>`;
    const navigate = useNavigate();
    const onClickDeleteNotice = (e) => {
        console.log('삭제');
        alert('공지사항이 삭제 되었습니다');
        navigate('/notice');
    };
    const postDetail = {
        postId: 1,
        title: 'K-기대함 프로젝트',
        attachment: true,
        author: '안상근',
        registrationDate: '2022-09-05',
        view: 5
    };
    return (
        <Grid>
            <MainCard>
                <Grid>
                    <Typography variant="h5">{postDetail.title}</Typography>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Grid>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Typography>작성자</Typography>
                            <Grid>{postDetail.author}</Grid>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography>작성일</Typography>
                            <Grid>{postDetail.registrationDate}</Grid>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography>조회수</Typography>
                            <Grid>{postDetail.view}</Grid>
                        </Stack>
                    </Stack>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                {postDetail.attachment ? (
                    <Grid>
                        <Stack direction="row" spacing={2}>
                            <Typography>첨부</Typography>
                            <Grid>첨부파일</Grid>
                        </Stack>
                    </Grid>
                ) : null}
                {postDetail.attachment ? <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} /> : null}
                <Grid>
                    <PostView postData={postData}></PostView>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
                    <Grid>
                        <Button>
                            <Link to={`/notice-write/${postDetail.postId}`} style={{ textDecoration: 'none', color: '#1890FF' }}>
                                수정
                            </Link>
                        </Button>
                    </Grid>
                    <Grid>
                        <form onClick={onClickDeleteNotice}>
                            <Button>삭제</Button>
                        </form>
                    </Grid>
                    <Grid>
                        <Button>
                            <Link to={`/notice`} style={{ textDecoration: 'none', color: '#1890FF' }}>
                                목록
                            </Link>
                        </Button>
                    </Grid>
                </Stack>
            </MainCard>
        </Grid>
    );
};
export default NoticeDetail;
