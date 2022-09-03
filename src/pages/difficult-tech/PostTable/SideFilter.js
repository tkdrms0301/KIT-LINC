// material-ui
import { Stack, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const SideFilter = ({
    selected,
    onChangeSelected
    // selectedConsultingField,
    // selectedstatus,
    // onChangeSelectedConsultingField,
    // selectedRequstForm,
    // onChangeSelectedRequestForm,
    // onChangeSelectedStatus
}) => {
    const businessTypeList = ['All', 'IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화확', '비금속', '운송장비'];
    const requestFormList = ['All', 'TechCare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5'];
    const statusList = ['All', '진행중', '승인대기중', '모집중', '완료'];

    return (
        <MainCard title="" codeHighlight>
            <Box sx={{ mt: 1, mb: 2 }}>
                <Typography variant="h5">애로 기술 게시글 필터</Typography>
            </Box>
            <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
            <Stack spacing={3}>
                <Box>
                    <FormControl>
                        <FormLabel>진행상태</FormLabel>
                        <RadioGroup name="selectedStatus" value={selected.selectedStatus} onChange={onChangeSelected}>
                            {statusList.map((status, index) => (
                                <FormControlLabel key={index} value={status} control={<Radio />} label={status} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>업종</FormLabel>
                        <RadioGroup name="selectedConsultingField" value={selected.selectedConsultingField} onChange={onChangeSelected}>
                            {businessTypeList.map((businessType, index) => (
                                <FormControlLabel key={index} value={businessType} control={<Radio />} label={businessType} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>지원서</FormLabel>
                        <RadioGroup name="selectedRequstForm" value={selected.selectedRequstForm} onChange={onChangeSelected}>
                            {requestFormList.map((requestForm, index) => (
                                <FormControlLabel key={index} value={requestForm} control={<Radio />} label={requestForm} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Stack>
        </MainCard>
    );
};

export default SideFilter;
