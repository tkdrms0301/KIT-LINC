import { Grid, TextField, Typography, Box, TableHead, TableRow, TableCell, Paper, Divider, TableBody } from '@mui/material';

const ProfessorInfo = ({ selectedProfessor }) => {
    const professorInfoList = [
        {
            label: '교번',
            value: selectedProfessor.professorNumber
        },
        {
            label: '교수명',
            value: selectedProfessor.professorName
        },
        {
            label: '학과',
            value: selectedProfessor.professorMajor
        },
        {
            label: '주연구명',
            value: selectedProfessor.professorStudy
        }
    ];
    return (
        <Grid container sx={{ my: 3 }}>
            <Grid item xs={12}>
                <Typography variant="h5">교수 검색</Typography>
                <Divider sx={{ background: 'primary.main', my: 2 }} />
                <Grid container spacing={1}>
                    {professorInfoList.map((professorInfo, index) => (
                        <Grid item xs={3} key={index}>
                            <Box>
                                <Typography variant="body2">{professorInfo.label}</Typography>
                            </Box>
                            <TextField
                                fullWidth
                                type="text"
                                value={professorInfo.value}
                                variant="standard"
                                InputProps={{
                                    readOnly: true
                                }}
                            ></TextField>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfessorInfo;
