// material-ui
import { Grid, Box, Pagination } from '@mui/material';

// project import
import { useState, useRef, useEffect } from 'react';
import TechPost from './TechPost';
import Search from './Search';
import PostTableApi from 'pages/api/difficult-tech/PostTableApi';
import axios from 'axios';

const PostTable = () => {
    // side filter
    const [selected, setSelected] = useState({
        selectedConsultingField: 0,
        selectedRequstForm: 0,
        selectedStatus: 0,
        projectName: ''
    });

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [data, setData] = useState([]);

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
            businessTypeIds: selected.selectedConsultingField === 0 ? null : selected.selectedConsultingField,
            requestForm: selected.selectedRequstForm === 0 ? null : selected.selectedRequstForm,
            status: selected.selectedStatus === 0 ? null : selected.selectedStatus,
            projectName: selected.projectName,
            page: requestPage - 1,
            size: 10
        };
        console.log(info);
        PostTableApi.contentAll()
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    const handlePage = (event, value) => {
        const info = {
            businessTypeIds: selected.selectedConsultingField === 0 ? null : selected.selectedConsultingField,
            requestForm: selected.selectedRequstForm === 0 ? null : selected.selectedRequstForm,
            status: selected.selectedStatus === 0 ? null : selected.selectedStatus,
            projectName: selected.projectName,
            page: value - 1,
            size: 10
        };
        PostTableApi.contentAll(info)
            .then((res) => {
                console.log(res.data.data.content);
                console.log(res.data.data.pageable);
                setPage(res.data.data.pageable.pageNumber + 1);
                setData(res.data.data.content);
            })
            .catch((err) => console.log(err));
        setPage(value);
    };

    useEffect(() => {
        const info = {
            businessTypeIds: selected.selectedConsultingField === 0 ? null : selected.selectedConsultingField,
            requestForm: selected.selectedRequstForm === 0 ? null : selected.selectedRequstForm,
            status: selected.selectedStatus === 0 ? null : selected.selectedStatus,
            projectName: selected.projectName,
            page: 0,
            size: 10
        };
        PostTableApi.contentAll(info)
            .then((res) => {
                console.log(res.data.data);
                setPage(res.data.data.pageable.offset + 1);
                setLastPage(res.data.data.pageable.pageNumber + 1);
                setData(res.data.data.content);
            })
            .catch((err) => console.log(err));
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
                                    {data.map((project, index) => (
                                        <TechPost key={index} project={project} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Pagination
                                showFirstButton
                                showLastButton
                                count={lastPage}
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
