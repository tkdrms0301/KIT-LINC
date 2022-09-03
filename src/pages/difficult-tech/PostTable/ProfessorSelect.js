import { Grid, TableContainer, Typography, Table, TableHead, TableRow, TableCell, Paper, Divider, TableBody } from '@mui/material';
import MainCard from 'components/MainCard';
import ProfessorInfo from './ProfessorInfo';

const ProfessorSelect = ({ professorRows }) => {
    return (
        <Grid>
            <Grid container sx={{ my: 3 }}>
                <Grid item xs={12}>
                    <MainCard codeHighlight>
                        <Typography variant="h5">교수 검색</Typography>
                        <Divider sx={{ background: 'primary.main', my: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>교수명</TableCell>
                                                <TableCell>학과</TableCell>
                                                <TableCell>교번</TableCell>
                                                <TableCell>주연구명</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {professorRows.map((professorRow, index) => {
                                                // const isItemSelected = isSelected(professorRow.id);

                                                return (
                                                    <TableRow
                                                        hover
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        // onClick={(event) => handleProjectChange(event, row)}
                                                        // selected={isItemSelected}
                                                    >
                                                        <TableCell>{professorRow.professorName}</TableCell>
                                                        <TableCell>{professorRow.professorMajor}</TableCell>
                                                        <TableCell>{professorRow.professorNumber}</TableCell>
                                                        <TableCell>{professorRow.professorStudy}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        <ProfessorInfo></ProfessorInfo>
                    </MainCard>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfessorSelect;
