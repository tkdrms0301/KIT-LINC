import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const DocumentManage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard title="" codeHighlight>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h1>Serach</h1>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DocumentManage;
