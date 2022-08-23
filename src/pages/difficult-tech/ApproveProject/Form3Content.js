import * as React from 'react';

import { Button, Box, Grid, Stack, Typography, Divider } from '@mui/material';

import MainCard from 'components/MainCard';

function Form3Content({ selectedPost }) {
    return (
        <Grid item xs={12}>
            <MainCard codeHighlight>
                <Typography variant="h1" align="center">
                    지원서 상세정보
                </Typography>
                <Box>
                    <Grid>지원요청서3</Grid>
                </Box>

                <Grid container justifyContent="flex-end" alignItems="center">
                    <Grid container item xs={2}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large">
                                승인
                            </Button>
                            <Button variant="outlined" size="large">
                                거절
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </MainCard>
        </Grid>
    );
}

export default Form3Content;
