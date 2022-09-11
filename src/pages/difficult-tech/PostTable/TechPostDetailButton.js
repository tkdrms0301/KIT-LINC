import { Grid, Button, Stack, Box, Typography, Divider, TextField, Radio, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import MainCard from 'components/MainCard';

const TechPostDetailButton = ({ onSubmitApprove }) => {
    return (
        <Grid>
            <MainCard>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <form onSubmit={onSubmitApprove}>
                            <Button variant="contained">프로젝트 생성</Button>
                        </form>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default TechPostDetailButton;
