import {
    Grid,
    Table,
    Typography,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    Divider,
    TableBody,
    Pagination,
    Button
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MainCard from 'components/MainCard';
import posts from './dummy';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const NoticeManagement = () => {
    const [noticeSearchForm, setNoticeSearchForm] = useState('제목');
    const noticeSearchRef = useRef();
    const onChangeNoticeSearchForm = (e) => {
        setNoticeSearchForm(e.target.value);
    };
    const onSubmitSearch = (e) => {
        console.log(noticeSearchForm);
        console.log(noticeSearchRef.current.value);
    };
    return (
        <Grid>
            <MainCard>
                <Typography variant="h5">공지사항</Typography>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper} sx={{ borderTop: 2, borderBottom: 2, borderLeft: 0 }}>
                            <Table stickyHeader aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>번호</TableCell>
                                        <TableCell>제목</TableCell>
                                        <TableCell>첨부</TableCell>
                                        <TableCell>작성자</TableCell>
                                        <TableCell>등록일</TableCell>
                                        <TableCell>조회</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ border: 0 }}>
                                    {posts.map((postRow, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                // onClick={(event) => handleProfessorChange(event, professorRow)}
                                            >
                                                <TableCell>{postRow.postId}</TableCell>
                                                <TableCell>
                                                    <Link
                                                        to={`/notice/${postRow.postId}`}
                                                        style={{ textDecoration: 'none', color: 'black' }}
                                                    >
                                                        {postRow.title}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    {postRow.attachment ? (
                                                        <AttachFileIcon fontSize="small" color="action"></AttachFileIcon>
                                                    ) : null}
                                                </TableCell>
                                                <TableCell>{postRow.author}</TableCell>
                                                <TableCell>{postRow.registrationDate}</TableCell>
                                                <TableCell>{postRow.view}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid container sx={{ justifyContent: 'end', mt: 2 }}>
                            <Button variant="contained">
                                <Link to={'/notice-write'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                    공지사항 작성
                                </Link>
                            </Button>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', mt: 2 }}>
                            <Pagination size="large" variant="outlined" shape="rounded" />
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};

export default NoticeManagement;
