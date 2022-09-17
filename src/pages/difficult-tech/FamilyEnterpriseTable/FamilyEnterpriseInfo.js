import { Box, Grid, Typography, Divider, Stack } from '@mui/material';

const FamilyEnterpriseInfo = () => {
    const enterpriseInfo = {
        categoryList: '1, 2, 3',
        companyName: '회사명',
        companyType: '2, 3',
        endFoundingDate: '2022-09-01T00:00:00.000+00:00',
        endNumberEmployees: '100',
        endYearSales: '1000',
        growthDegree: '1, 2, 3',
        startFoundingDate: '2022-09-01T00:00:00.000+00:00',
        startNumberEmployees: '100',
        startYearSales: '1000'
    };
    return (
        <Grid>
            <Box sx={{ my: 3, mx: 2 }}>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h5">회사명</Typography>
                        <Typography>{enterpriseInfo.companyName}</Typography>
                    </Stack>
                </Stack>
                <Grid container spacing={3}>
                    <Grid item></Grid>
                    <Divider variant="middle" />
                    <Grid item></Grid>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                <Grid container>
                    <Grid item>
                        <Typography variant="h5">회사명</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{enterpriseInfo.companyName}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
export default FamilyEnterpriseInfo;
