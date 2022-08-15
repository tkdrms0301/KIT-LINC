// material-ui
import { Grid, Stack, Box, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormControl, FormControlLabel, FormGroup } from '../../../../node_modules/@mui/material/index';
import Checkbox from '@mui/material/Checkbox';

const ProfessorCheck = ({ professor, setProfessor }) => {
    const professorTest = () => {
        setProfessor(professor);
    };

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label={professor} onClick={professorTest}></FormControlLabel>
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
                        {professorList.map((professor) => (
                            <ProfessorCheck professor={professor} setProfessor={setProfessor}></ProfessorCheck>
                        ))}
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};
export default ProfessorMatch;
