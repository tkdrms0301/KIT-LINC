// material-ui
import { Grid, Stack, Box, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useLocation } from 'react-router';

const TechPostDetail = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '80%' }}>
                    <Grid item xs={12}>
                        <MainCard title="" codeHighlight>
                            <Box>
                                <Typography variant="h3" component="p">
                                    TechPostDetail
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" component="p">
                                    2022-08-14 author
                                </Typography>
                            </Box>
                        </MainCard>
                        <MainCard title="" codeHighlight>
                            <Box>
                                <Typography variant="subtitle1" component="p">
                                    TechPostDetailSubtitle
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" component="p">
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
                                    quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                                    deleniti? Eum quasi quidem quibusdam.
                                </Typography>
                            </Box>
                        </MainCard>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default TechPostDetail;
