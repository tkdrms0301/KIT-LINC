import { Box, Grid, Typography, Divider, Stack, Button } from '@mui/material';
import { companyTypeList, categoryList, growthDegreeList } from './constant';
const FamilyEnterpriseInfo = ({ enterpriseInfo }) => {
    const convertCompanyTypeList = (number) => {
        return companyTypeList[Number(number) - 2];
    };
    const convertCategoryList = (number) => {
        return categoryList[Number(number) - 2];
    };
    const convertGrowthDegreeList = (number) => {
        return growthDegreeList[Number(number) - 2];
    };

    const info = (title, content) => {
        return (
            <Stack direction="row" spacing={3}>
                <Typography>{title}</Typography>
                <Typography>{content}</Typography>
            </Stack>
        );
    };

    return (
        <Grid>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid>
                    <Typography variant="h3">{enterpriseInfo.companyName}</Typography>
                </Grid>
                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 3 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('규모', convertCompanyTypeList(enterpriseInfo.companyType))}
                    {info('업종', convertCategoryList(enterpriseInfo.categoryList))}
                    {info('기업성장도', convertGrowthDegreeList(enterpriseInfo.growthDegree))}
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 3 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('사업자번호', enterpriseInfo.businessNumber)}
                    {info('대표자명', enterpriseInfo.ceoName)}

                    {info('팩스번호', enterpriseInfo.faxNumber)}
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 3 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('회사주소', enterpriseInfo.hoAddress)}
                    {info('회사 전화번호', enterpriseInfo.hoTelephone)}
                    {info('회사 설립일', enterpriseInfo.foundingDate)}
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('담당자 이름', enterpriseInfo.officerName)}
                    {info('담당자 전화번호', enterpriseInfo.officerPhone)}
                    {info('담당자 이메일', enterpriseInfo.officerEmail)}
                    {info('담당자 직위', enterpriseInfo.officerPosition)}
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('보유 기술', enterpriseInfo.possessionTech)}
                    {info('주요 아이템', enterpriseInfo.majorItem)}
                    {info('종업원 수', enterpriseInfo.numberEmployees)}
                    {info('연구원 수', enterpriseInfo.numberResearchers)}
                    {info('연매출', enterpriseInfo.yearsSales)}
                </Stack>
                <Divider sx={{ borderBottomWidth: 1, my: 4 }} />
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                    {info('소개', enterpriseInfo.hoAddress)}
                    {info('요약', enterpriseInfo.summary)}
                </Stack>
            </Box>
        </Grid>
    );
};
export default FamilyEnterpriseInfo;
