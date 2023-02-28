import { Grid, Box, Typography, Divider, Button, Stack, Tabs, Tab } from '@mui/material';
import MainCard from 'components/MainCard';
import { researcherInfo, tagList } from './dummy';
import ReseacherPatentTable from './ResearcherPatentTable';
import ResearcherTaskTable from './ResearcherTaskTable';
const ResearcherInfo = () => {
    const Tag = ({ tag }) => {
        return (
            <Box>
                {tagList.map((tags, index) =>
                    tags.tagName === tag ? (
                        <Box
                            key={index}
                            sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, bgcolor: tags.color, border: 0, color: tags.text }}
                        >
                            <Box sx={{ fontSize: 14 }}>{tag}</Box>
                        </Box>
                    ) : null
                )}
            </Box>
        );
    };
    const PatentView = ({ patent }) => {
        return (
            <>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>특허명</Typography>
                        <Grid>{patent.patentName}</Grid>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>특허업종</Typography>
                        <Grid>
                            <Tag tag={patent.patentBusinessType} />
                        </Grid>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography>특허번호</Typography>
                        <Grid>{patent.patentNumber}</Grid>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography>특허등록일</Typography>
                        <Grid>{patent.patentRegistrationDate}</Grid>
                    </Stack>
                </Stack>
            </>
        );
    };
    const TaskView = ({ task }) => {
        return (
            <>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>참여과제명</Typography>
                        <Grid>{task.taskName}</Grid>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>참여과제업종</Typography>
                        <Grid>
                            <Box>
                                <Tag tag={task.taskBusinessType} />
                            </Box>
                        </Grid>
                    </Stack>
                </Stack>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 1, my: 2 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Typography>참여과제기간</Typography>
                        <Grid>{task.taskTerm}</Grid>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography>참여과제금액</Typography>
                        <Grid>{task.taskAmount}</Grid>
                    </Stack>
                </Stack>
            </>
        );
    };
    return (
        <>
            <MainCard title="연구자 상세정보" sx={{ my: 3 }}>
                <Grid>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="h5">연구자명</Typography>
                            <Typography>{researcherInfo.researcherName}</Typography>
                        </Stack>
                    </Stack>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Typography variant="h5">관심분야</Typography>
                            </Grid>
                            {researcherInfo.intersts.map((interst, index) => (
                                <Grid item key={index}>
                                    <Tag tag={interst} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Typography variant="h5">기타관심분야</Typography>
                            </Grid>
                            {researcherInfo.etcIntersts.map((etcInterst, index) => (
                                <Grid item key={index}>
                                    <Tag tag={etcInterst} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                    <Stack sx={{ my: 2 }}>
                        <Typography variant="h5">참여과제</Typography>
                    </Stack>
                    <Stack>
                        <ResearcherTaskTable participationTasks={researcherInfo.takses} />
                    </Stack>
                    <Stack sx={{ my: 2 }}>
                        <Typography variant="h5">특허</Typography>
                    </Stack>
                    <Stack>
                        <ReseacherPatentTable patents={researcherInfo.patents} />
                    </Stack>
                </Grid>
            </MainCard>
        </>
    );
};
export default ResearcherInfo;
