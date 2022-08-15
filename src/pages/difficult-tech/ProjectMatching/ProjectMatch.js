// material-ui
import { Grid, Stack, Box, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormControl, FormControlLabel, FormGroup } from '../../../../node_modules/@mui/material/index';
import Checkbox from '@mui/material/Checkbox';

const ProjectCheck = ({ project }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label={project}></FormControlLabel>
        </FormGroup>
    );
};

const ProjectMath = ({ projectList }) => {
    {
        console.log(projectList);
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="" codeHighlight>
                        <Typography variant="h3" component="p">
                            프로젝트
                        </Typography>
                        {projectList.map((project) => (
                            <ProjectCheck project={project} />
                        ))}
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};
export default ProjectMath;
