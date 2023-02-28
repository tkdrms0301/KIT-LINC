import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import rows from './dummy';
const EnterpriseFormTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>연번</TableCell>
                        <TableCell>학과</TableCell>
                        <TableCell>학년</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>선발여부</TableCell>
                        <TableCell>탈락사유</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        //const isItemSelected = isSelected(row.id);

                        return (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                // onClick={(event) => handleProjectChange(event, row)}
                                // selected={isItemSelected}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.major}</TableCell>
                                <TableCell>{row.grade}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.isSelected}</TableCell>
                                <TableCell>{row.drop}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default EnterpriseFormTable;
