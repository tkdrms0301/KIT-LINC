import { Button, Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import ProfessorMatch from './ProfessorMatch';
import ProjectMatch from './ProjectMatch';

const professor = ['교수1', '교수2', '교수3', '교수4', '교수5', '교수6', '교수7'];

const project = [
    '프로젝트 이름1',
    '프로젝트 이름2',
    '프로젝트 이름3',
    '프로젝트 이름4',
    '프로젝트 이름5',
    '프로젝트 이름6',
    '프로젝트 이름7',
    '프로젝트 이름8',
    '프로젝트 이름9',
    '프로젝트 이름10',
    '프로젝트 이름11',
    '프로젝트 이름12'
];

const ProjectMatching = () => {
    const [projects, setProject] = useState();
    const [professors, setProfessor] = useState();

    const onClickTest = () => {
        console.log(projects);
        console.log(professors);
    };
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ProjectMatch projectList={project} setProject={setProject} />
                </Grid>
                <Grid item xs={6}>
                    <ProfessorMatch professorList={professor} setProfessor={setProfessor} />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" onClick={onClickTest}>
                            Matching
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default ProjectMatching;
