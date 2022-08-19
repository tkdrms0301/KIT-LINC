import * as React from 'react';
import { useState } from 'react';

import { Button, Box, Grid, Stack, Typography } from '@mui/material';

// project import
import ProjectTable from './ProjectTable';

const TechTag = ({ tag }) => {
    return (
        <Box sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, borderColor: 'grey.400' }}>
            <Box sx={{ fontSize: 14 }}>{tag}</Box>
        </Box>
    );
};

export default TechTag;
