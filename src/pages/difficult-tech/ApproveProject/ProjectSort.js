import { Box, Grid, Button, FormControl, InputLabel, Select, Stack, MenuItem } from '@mui/material';

const ProjectSort = ({ requestForm, onChangeRequestForm, onSubmitRequestForm, categoryList }) => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item>
                    <Box sx={{ display: 'flex', alignContent: 'center' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">지원요청서</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={requestForm}
                                onChange={onChangeRequestForm}
                                label="지원요청서"
                            >
                                {categoryList.map((category, index) => (
                                    <MenuItem key={index} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <form onSubmit={onSubmitRequestForm}>
                            <Button variant="contained" type="submit">
                                검색
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProjectSort;
