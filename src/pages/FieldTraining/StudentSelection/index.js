import MainCard from 'components/MainCard';
import { Paper, Grid, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import EnterpriseFormTable from './EnterpriseFormTable';
const StudentSelection = () => {
    return (
        <Grid>
            <MainCard>
                <Grid>
                    <Grid sx={{ mb: 3 }}>
                        <Typography variant="h2">선발내역 접수(관리자)</Typography>
                    </Grid>
                    <Grid sx={{ mb: 3 }}>
                        <EnterpriseFormTable></EnterpriseFormTable>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default StudentSelection;
