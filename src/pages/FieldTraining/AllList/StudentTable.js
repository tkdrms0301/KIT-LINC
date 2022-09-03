import MainCard from 'components/MainCard';
import { Paper, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import studentRows from './studentDummy';
const StudentTable = () => {
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
                    {studentRows.map((studentRow, index) => {
                        //const isItemSelected = isSelected(row.id);

                        return (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                // onClick={(event) => handleProjectChange(event, row)}
                                // selected={isItemSelected}
                            >
                                <TableCell>{studentRow.id}</TableCell>
                                <TableCell>{studentRow.major}</TableCell>
                                <TableCell>{studentRow.grade}</TableCell>
                                <TableCell>{studentRow.name}</TableCell>
                                <TableCell>{studentRow.isSelected}</TableCell>
                                <TableCell>{studentRow.drop}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default StudentTable;
