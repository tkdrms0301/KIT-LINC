// material-ui
import { Button, Grid, Stack, Box, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormControl, FormControlLabel, FormGroup } from '../../../../node_modules/@mui/material/index';
import Checkbox from '@mui/material/Checkbox';
import ProfessorSearch from './ProfessorSearch';

const ProfessorCheck = ({ professor, setProfessor }) => {
    const professorTest = () => {
        setProfessor((prevState) => {
            let state = [];
            prevState.find((p) => p === professor)
                ? (state = prevState.filter((p) => p !== professor))
                : (state = [professor, ...prevState]);
            console.log(state);
            return state;
        });
    };

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox onClick={professorTest} />} label={professor}></FormControlLabel>
        </FormGroup>
    );
};

const ProfessorMatch = ({ professorList, setProfessor }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="" codeHighlight>
                        <Typography variant="h3" component="p">
                            교수
                        </Typography>
                        <ProfessorSearch />
                        {professorList.map((professor) => (
                            <ProfessorCheck professor={professor} setProfessor={setProfessor}></ProfessorCheck>
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained">교수 추가</Button>
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};
export default ProfessorMatch;
