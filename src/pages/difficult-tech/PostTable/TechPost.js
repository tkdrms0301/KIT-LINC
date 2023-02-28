// material-ui
import { Grid, Stack, Box, Typography, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { tagList, fieldTagList } from './constant';
const TechTag = ({ tag }) => {
    return (
        <Box>
            {tagList.map((tags, index) =>
                tags.tagValue === tag ? (
                    <Box
                        key={index}
                        sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, bgcolor: tags.color, border: 0, color: tags.text }}
                    >
                        <Box sx={{ fontSize: 14 }}>{tags.tagName}</Box>
                    </Box>
                ) : null
            )}
        </Box>
    );
};

const FieldTag = ({ fieldTag }) => {
    return (
        <Box>
            <Box sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, borderColor: 'grey.500' }}>
                <Box sx={{ fontSize: 10 }}>{fieldTagList[fieldTag]}</Box>
            </Box>
        </Box>
    );
};

const TechPost = ({ project, index }) => {
    return (
        <>
            {console.log(project)}
            <Grid item xs={12}>
                <Link to={`/difficult-techs/${project.collaboRequest.dtype}/${project.id}`} style={{ textDecoration: 'none' }}>
                    <MainCard title="" codeHighlight>
                        <Box>
                            <Box>
                                <Grid container>
                                    <Grid item sx={{ maxWidth: '500px', height: '50px' }} alignItems="flex-end">
                                        <Typography
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'
                                            }}
                                            variant="h3"
                                        >
                                            {project.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: 'flex', ml: 1 }}>
                                            <TechTag tag={project.status} />
                                            <Typography sx={{ ml: 0, mt: 0.8 }}>{project.collaboRequest.createdAt}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="flex-end">
                                    <Typography variant="subtitle1" component="p" sx={{ mb: 1 }}>
                                        {project.collaboRequest.dtype}
                                    </Typography>
                                    <Box sx={{ display: 'flex', mb: 1, ml: 1 }}>
                                        {project.collaboRequest.company.categoryList.map((fieldTag, index) => (
                                            <FieldTag key={index} fieldTag={fieldTag} />
                                        ))}
                                    </Box>
                                </Grid>
                                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, mb: 1.5 }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ flex: 2, pr: 2 }}>프로젝트 내용</Box>
                                <Box
                                    style={{
                                        paddingLeft: '10px',
                                        borderStyle: 'solid',
                                        borderColor: 'rgba(0, 0, 0, 0.12)',
                                        borderWidth: '0 0 0 2px'
                                    }}
                                />
                                <Box sx={{ flex: 1, pl: 2 }}>
                                    <Stack spacing={2}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Avatar alt="Remy Sharp" />
                                            </Grid>
                                            <Grid item xs={9}>
                                                {project.collaboRequest.company.companyName}
                                            </Grid>
                                        </Grid>
                                        <Box>{project.collaboRequest.company.hoAddress}</Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </MainCard>
                </Link>
            </Grid>
        </>
    );
};

export default TechPost;
