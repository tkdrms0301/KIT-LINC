import { Box, Grid, Typography, Divider, Stack, Button } from '@mui/material';
import { companyTypeList, categoryList, growthDegreeList } from './constant';
const FamilyEnterpriseInfo = ({ enterpriseInfo, onClickExportExcelFile }) => {
    const convertCompanyTypeList = (number) => {
        return companyTypeList[Number(number) - 2];
    };
    const convertCategoryList = (number) => {
        return categoryList[Number(number) - 2];
    };
    const convertGrowthDegreeList = (number) => {
        return growthDegreeList[Number(number) - 2];
    };

    return (
        <Grid>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid>
                    <Typography variant="h3">{enterpriseInfo.companyName}</Typography>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    <Stack direction="row" spacing={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            규모
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {convertCompanyTypeList(enterpriseInfo.companyType)}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            업종
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {convertCategoryList(enterpriseInfo.categoryList)}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            기업성장도
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {convertGrowthDegreeList(enterpriseInfo.growthDegree)}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    <Stack direction="row" spacing={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            회사 설립일 시작 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.startFoundingDate}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            종업원 수 시작 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.startNumberEmployees}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            연매출 시작 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.startYearSales}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            회사 설립일 종료 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.endFoundingDate}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            종업원 수 종료 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.endNumberEmployees}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            연매출 종료 조건
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                            {enterpriseInfo.endYearSales}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack justifyContent="flex-end" alignItems="center" sx={{ my: 3 }}>
                    <Grid>
                        <Button variant="contained" onClick={onClickExportExcelFile}>
                            엑셀파일 출력
                        </Button>
                    </Grid>
                </Stack>
            </Box>
        </Grid>
    );
};
export default FamilyEnterpriseInfo;
