// material-ui
import { Button, Grid, Stack, Box, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormControl, FormControlLabel, FormGroup } from '../../../../node_modules/@mui/material/index';
import Checkbox from '@mui/material/Checkbox';

const Match = ({ selectedProject, selectedProfessor }) => {
    const matchingEvent = () => {
        alert('프로젝트 선택 : ' + selectedProject + '\n' + '교수 선택 : ' + selectedProfessor);
    };
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="" codeHighlight>
                        <Typography variant="h3" component="p">
                            매칭
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            프로젝트 매칭
                        </Typography>
                        <Typography variant="body1" component="p">
                            {selectedProject}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            교수 매칭
                        </Typography>
                        <Typography variant="body1" component="p">
                            {selectedProfessor}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" onClick={matchingEvent}>
                                Matching
                            </Button>
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};
export default Match;
