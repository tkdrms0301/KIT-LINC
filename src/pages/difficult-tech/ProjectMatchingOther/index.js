import { Button, Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import ProfessorMatch from './ProfessorMatch';
import ProjectMatch from './ProjectMatch';
import Match from './Match';

const professor = ['교수1', '교수2', '교수3', '교수4', '교수5', '교수6', '교수7'];

const project = [
    '프로젝트 이름1',
    '프로젝트 이름2',
    '프로젝트 이름3',
    '프로젝트 이름4',
    '프로젝트 이름5',
    '프로젝트 이름6',
    '프로젝트 이름7'
];

const ProjectMatchingOther = () => {
    const [projects, setProject] = useState('');
    const [professors, setProfessor] = useState([]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ProjectMatch projectList={project} setProject={setProject} />
                </Grid>
                <Grid item xs={6}>
                    <Match selectedProject={projects} selectedProfessor={professors} />
                </Grid>
                <Grid item xs={6}>
                    <ProfessorMatch professorList={professor} setProfessor={setProfessor} />
                </Grid>
            </Grid>
        </>
    );
};
export default ProjectMatchingOther;
