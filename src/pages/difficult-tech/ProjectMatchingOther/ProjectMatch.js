// material-ui
import { Button, Grid, Stack, Box, Typography, Avatar, FormControlLabel, FormGroup } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Checkbox from '@mui/material/Checkbox';
import ProjectSearch from './ProjectSearch';

const ProjectCheck = ({ project, setProject }) => {
    const projectTest = () => {
        setProject((prevState) => {
            let state;
            prevState === null ? (state = project) : prevState === project ? (state = null) : (state = project);
            return state;
        });
    };
    return <FormControlLabel control={<Checkbox onClick={projectTest} />} label={project}></FormControlLabel>;
};

const ProjectMath = ({ projectList, setProject }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="" codeHighlight>
                        <Typography variant="h3" component="p">
                            프로젝트
                        </Typography>
                        <ProjectSearch />
                        <FormGroup>
                            {projectList.map((project) => (
                                <ProjectCheck project={project} setProject={setProject} />
                            ))}
                        </FormGroup>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained">프로젝트 추가</Button>
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};
export default ProjectMath;
