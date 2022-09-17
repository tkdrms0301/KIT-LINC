import { Grid, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
const EnterpriseTable = ({ selectedPost, rows, handleEnterpriseChange, enterpriseRows }) => {
    const isSelected = (id) => selectedPost.enterpriseId === id;
    return (
        <Grid>
            <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>기업 번호</TableCell>
                            <TableCell>회사명</TableCell>
                            <TableCell>업종</TableCell>
                            <TableCell>날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enterpriseRows.map((enterpriseRow, index) => {
                            const isItemSelected = isSelected(enterpriseRow.enterpriseId);
                            return (
                                <TableRow
                                    hover
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={(event) => handleEnterpriseChange(event, enterpriseRow)}
                                    selected={isItemSelected}
                                >
                                    <TableCell>{enterpriseRow.enterpriseId}</TableCell>
                                    <TableCell>{enterpriseRow.enterpriseName}</TableCell>
                                    <TableCell>{enterpriseRow.bussinessType}</TableCell>
                                    <TableCell>{enterpriseRow.date}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
export default EnterpriseTable;
