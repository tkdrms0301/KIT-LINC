import {
    Grid,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
    Checkbox,
    Button,
    Chip,
    Stack
} from '@mui/material';
import { list } from './constant';

const EnterpriseTable = ({
    selectedCompanyId,
    handleEnterpriseChange,
    enterpriseRows,
    checkList,
    onChangeAllCheck,
    onChangeSingleCheck,
    onClickExportExcelFile
}) => {
    const categoryChip = ({ category }) => {
        return <Chip lable={category} variant="outlined"></Chip>;
    };
    const isSelected = (id) => selectedCompanyId.enterpriseId === id;
    const convertCompanyTypeList = (number) => {
        return list.companyTypeList[Number(number) - 2];
    };
    const convertCategoryList = (number) => {
        return list.categoryList[number - 1];
    };
    const convertGrowthDegreeList = (number) => {
        return list.growthDegreeList[Number(number) - 1];
    };
    return (
        <Grid>
            <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox
                                    checked={enterpriseRows.length === checkList.length}
                                    onChange={(e) => onChangeAllCheck(e.target.checked)}
                                ></Checkbox>
                            </TableCell>
                            <TableCell>번호</TableCell>
                            <TableCell>회사명</TableCell>
                            <TableCell>회사 유형</TableCell>
                            <TableCell>업종</TableCell>
                            <TableCell>기업 성장도</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enterpriseRows.map((enterpriseRow, index) => {
                            const isItemSelected = isSelected(enterpriseRow.id);
                            return (
                                <TableRow
                                    hover
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={(event) => handleEnterpriseChange(event, enterpriseRow)}
                                    selected={isItemSelected}
                                >
                                    <TableCell>
                                        <Checkbox
                                            value={enterpriseRow.id}
                                            onChange={(e) => onChangeSingleCheck(e)}
                                            checked={checkList.includes(enterpriseRow.id) ? true : false}
                                        ></Checkbox>
                                    </TableCell>
                                    <TableCell>{enterpriseRow.id}</TableCell>
                                    <TableCell>{enterpriseRow.name}</TableCell>
                                    <TableCell>{convertCompanyTypeList(enterpriseRow.companyType)}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={3}>
                                            {enterpriseRow.categoryList.map((category) => convertCategoryList(category))}
                                        </Stack>
                                        {/* {enterpriseRow.categoryList.map((category) =>
                                                categoryChip(convertCategoryList(String(category)))
                                            )} */}
                                    </TableCell>
                                    <TableCell>{convertGrowthDegreeList(enterpriseRow.growthDegree)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid sx={{ mt: 3 }}>
                <Button variant="contained" onClick={onClickExportExcelFile}>
                    엑셀파일 출력
                </Button>
            </Grid>
        </Grid>
    );
};
export default EnterpriseTable;
