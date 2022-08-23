// material-ui
import { Grid, Box, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import { useState } from 'react';
import SideFilter from './SideFilter';
import TechPost from './TechPost';
import Search from './Search';

// dummy data
import post from './dummy.js';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import loadingState from 'state/Loading';
const PostTable = () => {
    // loading
    const [loading, setLoading] = useRecoilState(loadingState);

    // posts
    // const [posts, setPosts] = useState([]);
    // search, category, pagination

    // side filter
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // search
    const [searchInput, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // detail
    const [selectedConsultingField, setSelectedConsultingField] = useState('모두');
    const [selectedRequstForm, setSelectedRequestForm] = useState('All');

    const onChangeSelectedConsultingField = (e) => {
        setSelectedConsultingField(e.target.value);
        console.log(selectedConsultingField);
    };
    const onChangeSelectedRequestForm = (e) => {
        setSelectedRequestForm(e.target.value);
        console.log(selectedRequstForm);
    };

    // pagination
    const LAST_PAGE = post.length % 10 === 0 ? parseInt(post.length / 10) : parseInt(post.length / 10) + 1;

    const [page, setPage] = useState(1);
    const [data, setData] = useState(post.slice(0, 10));

    useEffect(() => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 1500);

        // TODO: 수정필요
        let filteredPost = post;
        if (selectedConsultingField !== '모두') {
            filteredPost = filteredPost.filter((item) => item.field.includes(selectedConsultingField));
        }

        if (selectedRequstForm !== 'All') {
            filteredPost = filteredPost.filter((item) => item.requestForm.includes(selectedRequstForm));
        }

        if (page === LAST_PAGE) {
            setData(filteredPost.slice(10 * (page - 1)));
        } else {
            setData(filteredPost.slice(10 * (page - 1), 10 * (page - 1) + 10));
        }
        console.log(data);
    }, [page, selectedConsultingField, selectedRequstForm]);

    const handlePage = (event) => {
        const nowPageInt = parseInt(event.target.outerText);
        setPage(nowPageInt);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Search search={searchInput} handleChange={handleSearchChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <SideFilter
                                selectedConsultingField={selectedConsultingField}
                                onChangeSelectedConsultingField={onChangeSelectedConsultingField}
                                selectedRequstForm={selectedRequstForm}
                                onChangeSelectedRequestForm={onChangeSelectedRequestForm}
                            />
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
                </Box>
            </Box>
        </>
    );
};

export default PostTable;
