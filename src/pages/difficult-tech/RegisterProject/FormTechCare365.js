import { RadioGroup, FormControlLabel, Radio, Typography, TextField, Grid, Box, Checkbox, Button, FormGroup } from '@mui/material';
import { consultingFormList, consultingFieldList, applicantInfoList, growthDegreeList, businessTypeList } from './constant';
const FormTechCare365 = ({
    projectNameRef,
    consultingForm,
    onChangeConsultingForm,
    consultingField,
    onChangeConsultingField,
    formInfo,
    detailInfoRef,
    effectivenessRef,
    nameRef,
    groupRef,
    contactRef,
    etcRef,
    etcChecked,
    onSubmit
}) => {
    let formInfoArr = Object.values(formInfo);

    let checkedBusinessType = ['0', '0', '0', '0', '0', '0', '0', '0'];
    for (var i = 0; i < formInfo.businessType.length; i++) {
        checkedBusinessType[Number(formInfo.businessType[i])] = '1';
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={1}>
                        {applicantInfoList.map((applicantInfo, index) => (
                            <Grid item xs={index === 4 ? 8 : 4} key={index}>
                                <Typography variant="body2"> {applicantInfo}</Typography>
                                <TextField
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    defaultValue={formInfoArr[index]}
                                    InputProps={{
                                        disabled: true
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">기업 성장 단계</Typography>
                </Box>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                    <Grid container>
                        {growthDegreeList.map((growthDegrees, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={Number(formInfo.growthDegree) === index ? <Radio disabled checked /> : <Radio disabled />}
                                    label={growthDegrees}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">업종</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {businessTypeList.map((businessTypes, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={checkedBusinessType[index] === '1' ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                    label={businessTypes}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={4}>
                            <Typography variant="body2"> 기타</Typography>
                            <TextField
                                fullWidth
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.businessTypeEtc}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h5">주생산품목/서비스</Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="주생산품목/서비스"
                                variant="standard"
                                defaultValue={formInfo.mainService}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">프로젝트 제목</Typography>
                </Box>
                <Grid>
                    <TextField fullWidth type="text" placeholder="프로젝트 제목" variant="standard" inputRef={projectNameRef} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지도/자문 형태</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFormList.map((consultingForms, index) => (
                            <div key={index}>
                                <Grid item xs={12} key={index}>
                                    <FormControlLabel
                                        control={<Checkbox value={index} onChange={onChangeConsultingForm} />}
                                        label={consultingForms}
                                    />
                                </Grid>
                            </div>
                        ))}
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지도/자문 분야</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFieldList.map((consultingFields, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={<Checkbox value={index} onChange={onChangeConsultingField} />}
                                    label={consultingFields}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={3}>
                            <TextField fullWidth label="기타" type="text" variant="standard" inputRef={etcRef} />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">희망지도/자문위원</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <TextField fullWidth label="성명" type="text" variant="standard" inputRef={nameRef} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="소속" type="text" variant="standard" inputRef={groupRef} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="연락처" type="text" variant="standard" inputRef={contactRef} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지원요청의 상세내용</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                multiline
                                placeholder="지원받고자 하는 분야의 상세 내용 기술"
                                inputRef={detailInfoRef}
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">기대효과</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="지원을 희망하는 분야의 내용을 정량적으로 수치화하여 작성하고 지원을 통한 객관적이고 정량적인 기대효과를 기술"
                                type="text"
                                multiline
                                rows={4}
                                inputRef={effectivenessRef}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={onSubmit}>
                        <Button variant="contained" type="submit">
                            애로 기술 등록
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};
export default FormTechCare365;
