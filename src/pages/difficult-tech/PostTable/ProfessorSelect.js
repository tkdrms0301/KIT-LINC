import {
    Grid,
    TableContainer,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    Divider,
    TableBody,
    TextField,
    Button
} from '@mui/material';
import MainCard from 'components/MainCard';
import ProfessorInfo from './ProfessorInfo';

const ProfessorSelect = ({
    professorRows,
    handleProfessorChange,
    selectedProfessor,
    searchProfessorInputRef,
    onSubmitSearchProfessorInput
}) => {
    return (
        <Grid>
            <Grid container sx={{ my: 3 }}>
                <Grid item xs={12}>
                    <MainCard codeHighlight>
                        <Grid
                            container
                            spacing={3}
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Grid item xs={6}>
                                <Typography variant="h5">교수 검색</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    inputRef={searchProfessorInputRef}
                                    placeholder="교수 이름 검색"
                                ></TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <form onClick={onSubmitSearchProfessorInput}>
                                    <Button variant="contained">검색</Button>
                                </form>
                            </Grid>
                        </Grid>

                        <Divider sx={{ background: 'primary.main', my: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>교번</TableCell>
                                                <TableCell>교수명</TableCell>
                                                <TableCell>학과</TableCell>
                                                <TableCell>주연구명</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {professorRows.map((professorRow, index) => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        onClick={(event) => handleProfessorChange(event, professorRow)}
                                                    >
                                                        <TableCell>{professorRow.professorNumber}</TableCell>
                                                        <TableCell>{professorRow.professorName}</TableCell>
                                                        <TableCell>{professorRow.professorMajor}</TableCell>
                                                        <TableCell>{professorRow.professorStudy}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        {selectedProfessor ? <ProfessorInfo selectedProfessor={selectedProfessor}></ProfessorInfo> : null}
                    </MainCard>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfessorSelect;
