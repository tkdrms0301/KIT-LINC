import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { patents } from './dummy';

const PatentTable = ({ handleSelect }) => {
    return (
        <TableContainer sx={{ borderTop: 2, borderBottom: 2, borderLeft: 0 }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>연구자명</TableCell>
                        <TableCell>특허명</TableCell>
                        <TableCell>특허업종</TableCell>
                        <TableCell>특허번호호</TableCell>
                        <TableCell>특허등록일자</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ border: 0 }}>
                    {patents.map((patent, index) => {
                        return (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={(event) => handleSelect(event, patent.id)}
                            >
                                <TableCell>{patent.id}</TableCell>
                                <TableCell>{patent.researcherName}</TableCell>
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
export default PatentTable;
