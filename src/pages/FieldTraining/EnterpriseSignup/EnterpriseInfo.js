import { Grid, InputLabel, Typography, TextField, Radio, FormControlLabel, RadioGroup, Checkbox } from '@mui/material';
const EnterpriseInfo = ({ businessType1Ref, businessType2Ref }) => {
    const enterpriseInfoList = [
        {
            label: '기관(법인)명',
            size: 6,
            value: ''
        },
        {
            label: '영문기관명',
            size: 6,
            value: ''
        },
        {
            label: '대표자명',
            size: 4,
            value: ''
        },
        {
            label: '사업자등록번호',
            size: 4,
            value: ''
        },
        {
            label: '개업 연월일',
            size: 4,
            value: ''
        },
        {
            label: '한국표준산업분류코드',
            size: 4,
            value: ''
        },
        {
            label: '종업원 수',
            size: 4,
            value: ''
        },
        {
            label: '매출액',
            size: 4,
            value: ''
        },
        {
            label: '사업장 소재지',
            size: 6,
            value: ''
        },
        {
            label: '홈페이지',
            size: 6,
            value: ''
        }
    ];
    const enterpriseSortationList = [
        { label: '대기업', value: '1' },
        { label: '중견기업', value: '2' },
        { label: '중소기업', value: '3' },
        { label: '공공기업', value: '4' },
        { label: '협회/기타', value: '5' }
    ];
    const enterpriseIsListedList = [
        { label: '코스피', value: '1' },
        { label: '코스닥', value: '2' },
        { label: '비사장', value: '3' }
    ];
    const enterpriseStatus2 = [
        {
            title: '사업의 종류(업태)',
            ref: businessType1Ref
        },
        {
            title: '사업의 종류(업태)',
            ref: businessType2Ref
        }
    ];
    const dayOfWeekList = [
        {
            label: '월',
            value: '1'
        },
        {
            label: ' 화',
            value: '2'
        },
        {
            label: '수',
            value: '3'
        },
        {
            label: '목',
            value: '4'
        },
        {
            label: '금',
            value: '5'
        },
        {
            label: '토',
            value: '6'
        },
        {
            label: '일',
            value: '7'
        }
    ];
    const enterpriseMDList = [
        {
            label: '부서명',
            ref: businessType2Ref
        },
        {
            label: ' 성명',
            ref: businessType2Ref
        },
        {
            label: '직위',
            ref: businessType2Ref
        },
        {
            label: '연락처',
            ref: businessType2Ref
        },
        {
            label: '휴대폰',
            ref: businessType2Ref
        },
        {
            label: '이메일',
            ref: businessType2Ref
        },
        {
            label: 'FAX',
            ref: businessType2Ref
        }
    ];
    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>기업정보</Typography>
                </Grid>
                {enterpriseInfoList.map((enterpriseInfo, index) => (
                    <Grid item key={index} xs={enterpriseInfo.size}>
                        <InputLabel>{enterpriseInfo.label}</InputLabel>
                        <TextField fullWidth placeholder={enterpriseInfo.label} variant="standard"></TextField>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                    <Typography>기관현황</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>구분</Typography>
                        </Grid>
                        <RadioGroup>
                            <Grid container>
                                {enterpriseSortationList.map((enterpriseSortation, index) => (
                                    <Grid item xs={4} key={index}>
                                        <FormControlLabel
                                            value={enterpriseSortation.value}
                                            control={<Radio />}
                                            label={enterpriseSortation.label}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>상장 여부</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                {enterpriseIsListedList.map((enterpriseIsListed, index) => (
                                    <Grid item xs={4} key={index}>
                                        <FormControlLabel
                                            value={enterpriseIsListed.value}
                                            control={<Checkbox />}
                                            label={enterpriseIsListed.label}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {enterpriseStatus2.map((enterpriseStatus, index) => (
                    <Grid item xs={6}>
                        <Grid sx={{ mb: 1 }}>
                            <Typography>{enterpriseStatus.title}</Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                placeholder="사업의 종류(업태)"
                                multiline
                                rows={3}
                                fullWidth
                                inputRef={enterpriseStatus.ref}
                            ></TextField>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                    <Typography>기관현황</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                    <Typography>정규 근로시간</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth placeholder="1일 기준 시간" variant="standard"></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth placeholder="1주 기준 시간" variant="standard"></TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography>정규 근로일수</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={3}>
                            <TextField fullWidth placeholder="1주 기준 일수" variant="standard"></TextField>
                        </Grid>
                        {dayOfWeekList.map((dayOfWeek, index) => (
                            <Grid item xs={9 / 7} key={index}>
                                <FormControlLabel value={dayOfWeek.value} control={<Checkbox />} label={dayOfWeek.label} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography>현장실습 관리부서</Typography>
                </Grid>
                {enterpriseMDList.map((enterpriseMD, index) => (
                    <Grid item xs={3} key={index}>
                        <InputLabel>{enterpriseMD.label}</InputLabel>
                        <TextField fullWidth placeholder={enterpriseMD.label} variant="standard"></TextField>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
export default EnterpriseInfo;
