import MainCard from 'components/MainCard';
import { Paper, Grid, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import StudentManagementFormTable from './StudentManagementFormTable';
import { useState } from 'react';
const StudentManagement = () => {
    return (
        <Grid>
            <MainCard codeHighlight>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography variant="h2">현장실습생 관리(기업)</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <StudentManagementFormTable></StudentManagementFormTable>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default StudentManagement;
