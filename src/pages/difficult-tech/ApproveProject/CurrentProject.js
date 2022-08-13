import * as React from 'react';

import { Button, Box, Grid, Stack, Typography, Divider } from '@mui/material';

import MainCard from 'components/MainCard';
import TechTag from './TechTag';

function ProjectContent({ name, value }) {
    return (
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 1 }} />
            </Grid>
            <Grid container item xs={12} alignItems="center" sx={{ my: 2 }}>
                <Grid item xs={4} align="center">
                    <Box sx={{ fontSize: '1.5rem' }}>{name}</Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ fontSize: '1.2rem' }}>{value}</Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

function CurrentProject({ selectedPost }) {
    return (
        <Grid item xs={12}>
            <MainCard title="프로젝트 상세정보" codeHighlight>
                <Grid container justifyContent="center" alignItems="flex-start">
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex' }}>
                            {selectedPost.tags.map((tag) => (
                                <>
                                    <TechTag tag={tag} />
                                </>
                            ))}
                        </Box>
                    </Grid>
                    <Grid container item xs={2}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined">승인</Button>
                            <Button variant="outlined">거절</Button>
                            <Button variant="outlined">프로젝트 생성</Button>
                        </Stack>
                    </Grid>
                </Grid>

                <Box>
                    <Grid container spacing={3}>
                        <Grid container item xs={6} alignItems="center" sx={{ my: 2 }}>
                            <ProjectContent name="프로젝트 이름" value={selectedPost.name} />
                            <ProjectContent name="프로젝트 내용" value={selectedPost.content} />
                            <ProjectContent name="프로젝트 날짜" value={selectedPost.date} />
                        </Grid>
                        <Grid xs={1} />
                        <Grid container item xs={5} alignItems="center" sx={{ my: 2 }}>
                            <h1>추천 학과, 교수</h1>
                        </Grid>
                    </Grid>
                </Box>
            </MainCard>
        </Grid>
    );
}

export default CurrentProject;
