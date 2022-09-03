import MainCard from 'components/MainCard';
import { Paper, Grid, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import EnterpriseFormTable from './EnterpriseFormTable';
import { useState } from 'react';
import StudentFormTable from './StudentFormTable';
const FormManagement = () => {
    const [form, setForm] = useState('enterprise');
    const onChangeForm = (e) => {
        console.log(e.target.value);
        setForm(e.target.value);
    };
    return (
        <Grid>
            <MainCard codeHighlight>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography variant="h2">현장실습 및 현장실습생 관리(관리자)</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <ToggleButtonGroup value={form} onChange={onChangeForm} color="primary" aria-label="Platform">
                            <ToggleButton value="enterprise">기업</ToggleButton>
                            <ToggleButton value="student">학생</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        {form === 'enterprise' ? <EnterpriseFormTable></EnterpriseFormTable> : <StudentFormTable></StudentFormTable>}
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default FormManagement;
