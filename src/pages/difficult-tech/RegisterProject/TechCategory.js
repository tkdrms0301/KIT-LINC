// material-ui
import { FormControl, MenuItem, Grid, InputLabel, Stack, Select } from '@mui/material';

const TechCatergory = ({ view, handleView }) => {
    const categoryList = ['TechCare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5'];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <InputLabel htmlFor="content">지원 요청서</InputLabel>
                    <FormControl fullWidth size="large">
                        <InputLabel id="demo-select-small">지원 요청서</InputLabel>
                        <Select value={view} onChange={handleView}>
                            {categoryList.map((category, index) => (
                                <MenuItem key={index} value={categoryList[index]}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default TechCatergory;
