// material-ui
import { Stack, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const SideFilter = ({ value, handleChange }) => {
    const categoryList = ['프로젝트 태그1', '프로젝트 태그2', '프로젝트 태그3', '프로젝트 태그4', '프로젝트 태그5'];

    return (
        <MainCard title="" codeHighlight>
            <Box sx={{ mt: 1, mb: 2 }}>
                <Typography variant="h5">애로 기술 게시글 필터</Typography>
            </Box>
            <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
            <Stack spacing={3}>
                <Box>
                    <FormControl>
                        <FormLabel id="tech-controlled-radio-buttons-group">분야</FormLabel>
                        <RadioGroup
                            aria-labelledby="tech-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            {categoryList.map((category, index) => (
                                <FormControlLabel key={index} value={category} control={<Radio />} label={category} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel id="tech-controlled-radio-buttons-group">정렬</FormLabel>
                        <RadioGroup
                            aria-labelledby="tech-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Stack>
        </MainCard>
    );
};

export default SideFilter;
