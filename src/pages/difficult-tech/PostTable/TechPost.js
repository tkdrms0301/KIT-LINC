// material-ui
import { Grid, Stack, Box, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';

const TechTag = ({ tag }) => {
    return (
        <Box sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, borderColor: 'grey.400' }}>
            <Box sx={{ fontSize: 14 }}>{tag}</Box>
        </Box>
    );
};

const TechPost = ({ project }) => {
    return (
        <>
            <Grid item xs={12}>
                <MainCard title="" codeHighlight>
                    <Box>
                        <Box>
                            <Grid container sx={{ mb: 3 }}>
                                <Grid item container xs={12} alignItems="flex-end">
                                    <Typography variant="h3" component="p">
                                        <Link to="/difficult-techs/detail">{project.title}</Link>
                                    </Typography>
                                    <Typography sx={{ mx: 1 }}>{project.date}</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', mb: 3 }}>
                                {project.tags.map((tag) => (
                                    <>
                                        <TechTag tag={tag} />
                                    </>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ flex: 2, pr: 2 }}>{project.content}</Box>
                            <Box
                                style={{
                                    paddingLeft: '10px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgba(0, 0, 0, 0.12)',
                                    borderWidth: '0 0 0 1px'
                                }}
                            />
                            <Box sx={{ flex: 1, pl: 2 }}>
                                <Stack spacing={2}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </Grid>
                                        <Grid item xs={9}>
                                            {project.company.name}
                                        </Grid>
                                    </Grid>
                                    <Box>{project.company.address} </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </MainCard>
            </Grid>
        </>
    );
};

export default TechPost;
