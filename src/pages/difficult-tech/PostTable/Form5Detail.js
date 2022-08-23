// material-ui
import { Grid, Stack, Box, Typography, Divider } from '@mui/material';
import MainCard from 'components/MainCard';
const Form5Detail = () => {
    return (
        <>
            <Grid item xs={12}>
                <MainCard codeHighlight>
                    <Typography variant="h3" align="center" sx={{ my: 3 }}>
                        지원서 상세정보 form 5
                    </Typography>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                </MainCard>
            </Grid>
        </>
    );
};

export default Form5Detail;
