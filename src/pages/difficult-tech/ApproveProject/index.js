import * as React from 'react';
import { useState } from 'react';

import { Button, Box, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ProjectTable from './ProjectTable';
import CurrentProject from './CurrentProject';

function createData(id, name, content, tags, date) {
    return { id, name, content, tags, date };
}

const rows = [
    createData(1, '프로젝트 이름 1', '프로젝트 내용1', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(2, '프로젝트 이름 2', '프로젝트 내용2프로젝트 내용2프로젝트 내용2', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(3, '프로젝트 이름 3', '프로젝트 내용3', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(4, '프로젝트 이름 4', '프로젝트 내용4', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(5, '프로젝트 이름 5', '프로젝트 내용5', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(6, '프로젝트 이름 6', '프로젝트 내용6', ['프로젝트 태그1', '프로젝트 태그1'], '날짜'),
    createData(7, '프로젝트 이름 7', '프로젝트 내용7', ['프로젝트 태그1', '프로젝트 태그1'], '날짜')
];

function ApproveProject() {
    const [selectedPost, setSelectedPost] = useState(rows[0]);

    const handleProjectChange = (event, row) => {
        console.log(row);
        setSelectedPost(row);
    };

    return (
        <Grid container spacing={3}>
            <ProjectTable selectedPost={selectedPost} handleProjectChange={handleProjectChange} rows={rows} />
            <CurrentProject selectedPost={selectedPost} />
        </Grid>
    );
}

export default ApproveProject;
