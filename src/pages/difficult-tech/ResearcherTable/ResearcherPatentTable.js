import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@mui/material';

const ReseacherPatentTable = ({ patents }) => {
    return (
        <TableContainer sx={{ borderTop: 2, borderBottom: 2, borderLeft: 0 }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>특허명</TableCell>
                        <TableCell>특허업종</TableCell>
                        <TableCell>특허번호호</TableCell>
                        <TableCell>특허등록일자</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ border: 0 }}>
                    {patents.map((patent, index) => {
                        return (
                            <TableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{patent.patentName}</TableCell>
                                <TableCell>{patent.patentBusinessType}</TableCell>
                                <TableCell>{patent.patentNumber}</TableCell>
                                <TableCell>{patent.patentRegistrationDate}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ReseacherPatentTable;
