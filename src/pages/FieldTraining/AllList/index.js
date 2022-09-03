import StudentTable from './StudentTable';
import MainCard from 'components/MainCard';
import { Typography, Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
const AllList = () => {
    const [form, setForm] = useState('enterprise');
    const onChangeForm = (e) => {
        console.log(e.target.value);
        setForm(e.target.value);
    };
    return (
        <Grid>
            <MainCard>
                <Grid item xs={12} sx={{ mb: 3 }}>
                    <Typography variant="h2">명단 조회(관리자)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ToggleButtonGroup value={form} onChange={onChangeForm} color="primary" aria-label="Platform">
                        <ToggleButton value="enterprise">기업</ToggleButton>
                        <ToggleButton value="student">학생</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid sx={{ my: 3 }}>{form === 'enterprise' ? <StudentTable></StudentTable> : <StudentTable></StudentTable>}</Grid>
            </MainCard>
        </Grid>
    );
};
export default AllList;
