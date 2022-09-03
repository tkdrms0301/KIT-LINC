import { Grid, TableContainer, Typography, Table, TableHead, TableRow, TableCell, Paper, Divider } from '@mui/material';
import MainCard from 'components/MainCard';

const ProfessorSelect = () => {
    return (
        <Grid>
            <Grid container spacing={3} sx={{ width: '80%', margin: 'auto' }}>
                <MainCard codeHighlight>
                    <Typography variant="h3" align="center">
                        교수 검색
                    </Typography>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                    <Grid container spacing={3}>
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
                                    {/* <TableBody>
                                        {rows.map((row) => {
                                            const isItemSelected = isSelected(row.id);

                                            return (
                                                <TableRow
                                                    hover
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    onClick={(event) => handleProjectChange(event, row)}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell>{row.projectType}</TableCell>
                                                    <TableCell>{row.projectName}</TableCell>
                                                    <TableCell>{row.companyDetail.companyName}</TableCell>
                                                    <TableCell>{row.createdDate}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody> */}
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default ProfessorSelect;
