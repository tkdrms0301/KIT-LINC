import { Grid, Typography, TextField, Radio, FormControlLabel, RadioGroup, Checkbox } from '@mui/material';
import { radio1List, radio2List, radio3List, radio4List, radio5List, radio6List, radio7List } from './constant';
const CheckList = ({ checkList1, checkList2, checkList, onChangeCheckList1, onChangeCheckList2, onBlurCheckList }) => {
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
                                    <FormControlLabel
                                        value={radio1.value}
                                        control={<Checkbox />}
                                        label={radio1.label}
                                        onChange={(e) => onChangeCheckList1(e.target.checked, e.target.value)}
                                        checked={checkList1.includes(radio1.value) ? true : false}
                                    />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField
                                    disabled={checkList1.includes('5') ? false : true}
                                    name="checkList1Etc"
                                    defaultValue={checkList.checkList1Etc}
                                    onBlur={onBlurCheckList}
                                    placeholder="기타"
                                    variant="standard"
                                ></TextField>
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
                                    <FormControlLabel
                                        value={radio2.value}
                                        control={<Checkbox />}
                                        label={radio2.label}
                                        onChange={(e) => onChangeCheckList2(e.target.checked, e.target.value)}
                                        checked={checkList2.includes(radio2.value) ? true : false}
                                    />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField
                                    disabled={checkList2.includes('5') ? false : true}
                                    name="checkList2Etc"
                                    defaultValue={checkList.checkList2Etc}
                                    onBlur={onBlurCheckList}
                                    placeholder="기타"
                                    variant="standard"
                                ></TextField>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생에 대한 실습공간 배정 형태</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup name="checkList3" value={checkList.checkList3} onChange={onBlurCheckList}>
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
                    <RadioGroup name="checkList4" value={checkList.checkList4} onChange={onBlurCheckList}>
                        <Grid container alignItems="center">
                            {radio4List.map((radio4, index) => (
                                <Grid item xs={radio4.value === '3' ? null : 6} key={index}>
                                    <FormControlLabel value={radio4.value} control={<Radio />} label={radio4.label} />
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField
                                    disabled={checkList.checkList4 !== '3'}
                                    name="checkList4Etc"
                                    defaultValue={checkList.checkList4Etc}
                                    onBlur={onBlurCheckList}
                                    placeholder="기타"
                                    variant="standard"
                                ></TextField>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography>학생의 제조 또는 생산 업무에 참여 여부</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup name="checkList5" value={checkList.checkList5} onChange={onBlurCheckList}>
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
                    <RadioGroup name="checkList6" value={checkList.checkList6} onChange={onBlurCheckList}>
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
                    <RadioGroup name="checkList7" value={checkList.checkList7} onChange={onBlurCheckList}>
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
                    <TextField
                        name="checkListEtcAlert"
                        defaultValue={checkList.checkListEtcAlert}
                        onBlur={onBlurCheckList}
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="기타 유의사항"
                    ></TextField>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default CheckList;
