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
import { intersts } from './dummy';

const InterestTable = ({ handleSelect }) => {
    return (
        <TableContainer sx={{ borderTop: 2, borderBottom: 2, borderLeft: 0 }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>연구자명</TableCell>
                        <TableCell>관심분야</TableCell>
                        <TableCell>기타관심분야</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ border: 0 }}>
                    {intersts.map((interst, index) => {
                        return (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={(event) => handleSelect(event, interst.id)}
                            >
                                <TableCell>{interst.id}</TableCell>
                                <TableCell>{interst.researcherName}</TableCell>
                                <TableCell>{interst.intersts}</TableCell>
                                <TableCell>{interst.etcIntersts}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default InterestTable;
