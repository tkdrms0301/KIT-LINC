// material-ui
import { Grid, Box, Pagination } from '@mui/material';

// project import
import { useState, useRef, useEffect } from 'react';
import SideFilter from './SideFilter';
import TechPost from './TechPost';
import Search from './Search';

// dummy data
import post from './dummy.js';
import { useRecoilState } from 'recoil';
import loadingState from 'state/Loading';
import axios from '../../../../node_modules/axios/index';
const PostTable = () => {
    // loading
    const [loading, setLoading] = useRecoilState(loadingState);

    // posts
    // const [post, setPost] = useState([]);
    // search, category, pagination

    // side filter
    const [selected, setSelected] = useState({
        selectedConsultingField: 'All',
        selectedRequstForm: 'All',
        selectedStatus: 'All'
    });

    const { selectedConsultingField, selectedRequstForm, selectedStatus } = selected;

    const onChangeSelected = (e) => {
        const { name, value } = e.target;
        setSelected({
            ...selected,
            [name]: value
        });
        console.log(selected);
    };

    const getProjectList = (projectConsultingField, projectRequestForm, projectStatus) => {
        console.log(projectConsultingField);
        console.log(projectRequestForm);
        console.log(projectStatus);
        // axios
        //     .get('url', {
        //         params: { consultingField: projectConsultingField, requestForm: projectRequestForm, status: projectStatus }
        //     })
        //     .then((res) => {
        //         console.log(res.data.data);
        //         setPost(res.data.data)
        //     });
    };

    // search

    // 프로젝트 이름 입력후 검색 버튼*
    const searchInputRef = useRef();
    const onSubmitSearchInput = (e) => {
        console.log(searchInputRef.current?.value);
        // axios
        //     .get('url', {
        //         params: { searchInput: searchInputRef.current?.value }
        //     })
        //     .then((res) => {
        //         console.log(res.data.data);
        //     });
    };

    // detail

    // pagination
    const LAST_PAGE = post.length % 10 === 0 ? parseInt(post.length / 10) : parseInt(post.length / 10) + 1;

    const [page, setPage] = useState(1);
    const [data, setData] = useState(post.slice(0, 10));

    useEffect(() => {
        getProjectList(selectedConsultingField, selectedRequstForm, selectedStatus);
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 1500);

        // TODO: 수정필요
        // let filteredPost = post;

        // if (selectedConsultingField !== 'All') {
        //     filteredPost = filteredPost.filter((item) => item.field.includes(selectedConsultingField));
        // }

        // if (selectedRequstForm !== 'All') {
        //     filteredPost = filteredPost.filter((item) => item.requestForm.includes(selectedRequstForm));
        // }

        // if (selectedstatus !== 'All') {
        //     filteredPost = filteredPost.filter((item) => item.tags[0].includes(selectedstatus));
        // }

        // if (page === LAST_PAGE) {
        //     setData(filteredPost.slice(10 * (page - 1)));
        // } else {
        //     setData(filteredPost.slice(10 * (page - 1), 10 * (page - 1) + 10));
        // }
        console.log(data);
    }, [selected, page]);

    const handlePage = (event) => {
        const nowPageInt = parseInt(event.target.outerText);
        setPage(nowPageInt);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Grid sx={{ maxWidth: '1000px', width: '1000px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Search searchInputRef={searchInputRef} onSubmitSearchInput={onSubmitSearchInput} />
                            </Grid>
                            <Grid item xs={3}>
                                <SideFilter selected={selected} onChangeSelected={onChangeSelected} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container spacing={2}>
                                    {data.map((post, index) => (
                                        <TechPost key={index} project={post} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Pagination
                                count={LAST_PAGE}
                                defaultPage={1}
                                boundaryCount={2}
                                color="primary"
                                variant="outlined"
                                shape="rounded"
                                size="large"
                                sx={{ margin: 2 }}
                                onChange={(e) => handlePage(e)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default PostTable;
