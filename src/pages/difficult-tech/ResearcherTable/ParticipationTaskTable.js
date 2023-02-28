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
import { participationTasks } from './dummy';

const ParticipationTaskTable = ({ handleSelect }) => {
    return (
        <TableContainer sx={{ borderTop: 2, borderBottom: 2, borderLeft: 0 }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>연구자명</TableCell>
                        <TableCell>참여과제명</TableCell>
                        <TableCell>참여기간</TableCell>
                        <TableCell>참여과제 금액</TableCell>
                        <TableCell>참여과제 업종</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ border: 0 }}>
                    {participationTasks.map((participationTask, index) => {
                        return (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={(event) => handleSelect(event, participationTask.id)}
                            >
                                <TableCell>{participationTask.id}</TableCell>
                                <TableCell>{participationTask.researcherName}</TableCell>
                                <TableCell>{participationTask.taskName}</TableCell>
                                <TableCell>{participationTask.taskTerm}</TableCell>
                                <TableCell>{participationTask.taskAmount}</TableCell>
                                <TableCell>{participationTask.taskBusinessType}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ParticipationTaskTable;
