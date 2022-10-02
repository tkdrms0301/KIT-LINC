// material-ui
import { Grid, Box, Pagination } from '@mui/material';

// project import
import { useState, useRef, useEffect } from 'react';
import TechPost from './TechPost';
import Search from './Search';
import PostTableApi from 'pages/api/difficult-tech/PostTableApi';
import axios from 'axios';

// dummy data
import { post } from './dummy.js';

const PostTable = () => {
    // side filter
    const [selected, setSelected] = useState({
        selectedConsultingField: 0,
        selectedRequstForm: 0,
        selectedStatus: 0,
        projectName: ''
    });

    const [page, setPage] = useState(1);
    const [data, setData] = useState(post.slice(0, 10));

    const onChangeSelected = (e) => {
        const { name, value } = e.target;
        setSelected({
            ...selected,
            [name]: value
        });
    };

    // search
    const requestProjectList = (e, requestPage) => {
        const info = {
            selectedConsultingField: selected.selectedConsultingField === 0 ? null : selected.selectedConsultingField,
            selectedRequstForm: selected.selectedRequstForm === 0 ? null : selected.selectedRequstForm,
            selectedStatus: selected.selectedStatus === 0 ? null : selected.selectedStatus,
            projectName: selected.projectName,
            page: requestPage
        };
        console.log(info);
        axios
            .get('http://337se.duckdns.org:80/api/project', {
                params: info
            })
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    // pagination
    const LAST_PAGE = post.length % 10 === 0 ? parseInt(post.length / 10) : parseInt(post.length / 10) + 1;

    const handlePage = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        let filteredPost = post;
        if (page === LAST_PAGE) {
            setData(filteredPost.slice(10 * (page - 1)));
        } else {
            setData(filteredPost.slice(10 * (page - 1), 10 * (page - 1) + 10));
        }

        // 프로젝트 리스트
        // projectList -> setData에 저장
        // 마지막 페이지
        // lastPage -> Pagination의 count에 저장
        // PostTableApi.contentFilter({
        //     ...selected,
        //     page: 1
        // })
        //     .then((res) => {
        //         console.log(res.data.data);
        //         setData(res.data.data);
        //     })
        //     .catch((err) => console.log(err));
    }, [page]);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Grid sx={{ maxWidth: '1000px', width: '1000px' }}>
                        <Grid container spacing={3} justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Search selected={selected} onChangeSelected={onChangeSelected} requestProjectList={requestProjectList} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {data.map((post, index) => (
                                        <TechPost key={index} project={post} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            {/* 
                            마지막 페이지 count
                            기본 페이지 defaultPage

                            나중에 count만 변경예정
                            */}
                            <Pagination
                                showFirstButton
                                showLastButton
                                count={LAST_PAGE}
                                siblingCount={2}
                                defaultPage={1}
                                boundaryCount={1}
                                color="primary"
                                variant="outlined"
                                shape="rounded"
                                size="large"
                                sx={{ margin: 2 }}
                                onChange={(e, value) => handlePage(e, value)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default PostTable;
