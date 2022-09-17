import { Grid, Typography, TextField, Radio, FormControlLabel, RadioGroup } from '@mui/material';
const CheckList = ({ checkListEtc1Ref, checkListEtc2Ref, checkListRequiredRef }) => {
    const radio1List = [
        { label: '일반사무실 형태', value: '1' },
        { label: '연구소 형태', value: '2' },
        { label: '생산/제조 등의 공장 형태', value: '3' },
        { label: '주 사업장 외(건설현장, 자동차/선박/항공 등) 형태', value: '4' },
        { label: '기타', value: '5' }
    ];
    const radio2List = [
        { label: '일반사무실 형태', value: '1' },
        { label: '연구소 형태', value: '2' },
        { label: '생산/제조 등의 공장 형태', value: '3' },
        { label: '주 사업장 외(건설현장, 자동차/선박/항공 등) 형태', value: '4' },
        { label: '기타', value: '5' }
    ];
    const radio3List = [
        {
            label: '소속 근로자와 같은 공간에 배정된다.',
            value: '1'
        },
        { label: '소속 근로자와 분리된 별도의 공간에 배정된다.', value: '2' }
    ];
    const radio4List = [
        { label: '모든 필요 물품 및 비품을 제공한다.', value: '1' },
        { label: '전혀 제공하지 않는다', value: '2' },
        { label: '일부 제공한다.', value: '3' }
    ];
    const radio5List = [
        { label: '물품 제조생산 등의 활동(업무)에 참여하지 않는다', value: '1' },
        { label: '물품 제조생산 등의 활동(업무)에 일부 참여한다.', value: '2' },
        { label: '물품 제조생산 등의 활동(업무)에 주 실습 직무로 참여한다.', value: '3' }
    ];
    const radio6List = [
        { label: '취급하지 않는다.', value: '1' },
        { label: '취급한다.(6-2 문항으로)', value: '2' }
    ];
    const radio7List = [
        { label: '제공된다.', value: '1' },
        { label: '제공되지 않는다.', value: '2' }
    ];
    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>실습기관의 사업장(근무환경) 형태</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container alignItems="center">
                            {radio1List.map((radio1, index) => (
                                <Grid item xs={radio1.value === '5' ? null : 4} key={index}>
                                    <FormControlLabel value={radio1.value} control={<Radio />} label={radio1.label} />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField placeholder="기타" variant="standard"></TextField>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생이 배정될 부서 또는 실습공간의 환경 및 형태</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container alignItems="center">
                            {radio2List.map((radio2, index) => (
                                <Grid item xs={radio2.value === '5' ? null : 4} key={index}>
                                    <FormControlLabel value={radio2.value} control={<Radio />} label={radio2.label} />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField placeholder="기타" variant="standard"></TextField>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생에 대한 실습공간 배정 형태</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container>
                            {radio3List.map((radio3, index) => (
                                <Grid item xs={6} key={index}>
                                    <FormControlLabel value={radio3.value} control={<Radio />} label={radio3.label} />
                                </Grid>
                            ))}
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생에게 실습에 필요한 물품 제공 여부(책상, PC 등)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container alignItems="center">
                            {radio4List.map((radio4, index) => (
                                <Grid item xs={radio4.value === '3' ? null : 6} key={index}>
                                    <FormControlLabel value={radio4.value} control={<Radio />} label={radio4.label} />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField placeholder="기타" variant="standard"></TextField>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생의 제조 또는 생산 업무에 참여 여부</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container>
                            {radio5List.map((radio5, index) => (
                                <Grid item xs={6} key={index}>
                                    <FormControlLabel value={radio5.value} control={<Radio />} label={radio5.label} />
                                </Grid>
                            ))}
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생이 수행할 실습 직무의 화학물질 또는 유해물질 등의 취급 여부</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container>
                            {radio6List.map((radio6, index) => (
                                <Grid item xs={6} key={index}>
                                    <FormControlLabel value={radio6.value} control={<Radio />} label={radio6.label} />
                                </Grid>
                            ))}
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>화학/유해 물질을 취급할 경우 안전보호장비(구) 제공 여부</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Typography color="red">
                            실험/실습 형태 및 화학/유해 물질을 취급하는 경우는 현장교육담당자의 입회하에 실시되어야 함
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup>
                        <Grid container>
                            {radio7List.map((radio7, index) => (
                                <Grid item xs={6} key={index}>
                                    <FormControlLabel value={radio7.value} control={<Radio />} label={radio7.label} />
                                </Grid>
                            ))}
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>기타 유의사항(필요시 작성)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth multiline rows={3} placeholder="기타 유의사항"></TextField>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default CheckList;
