import { RadioGroup, FormControlLabel, Radio, Typography, TextField, Grid, Box, Checkbox, Button } from '@mui/material';

import { FormGroup } from '../../../../node_modules/@mui/material/index';

const FormTechCare365 = ({
    consultingForm,
    onChangeConsultingForm,
    consultingField,
    onChangeConsultingField,
    formInfo,
    detailInfo,
    onChangeDetailInfo,
    effectiveness,
    onChangeEffectiveness,
    name,
    onChangeName,
    group,
    onChangeGroup,
    contact,
    onChangeContact,
    etc,
    onChangeEtc,
    etcChecked
}) => {
    const consultingFormList = [
        '단기 기술지도(1일 4시간이상 4회 이내 단기기술지도)',
        '외부 자문의원 지도',
        '패키지形(2개학과이상의 교수 또는 2명이상 교수 및 자문위원으로 구성)',
        '학기중 장기기술지도(기업의 여러가지 애로사항을 주 1~2회, 1일 6H, 이상, 8주이내 정기적으로 방문하여 패키지 형태로 지도)',
        '방학․연구년중 장기기술지도(기업의 여러가지 애로사항을 주 2~3회, 1일 8H, 4주 이내 기업에 상주하면서 패키지 형태로 지도)'
    ];
    const consultingFieldList = [
        '기술지도',
        '법률자문/수출입 지원',
        '경영지도',
        '사업화지도',
        '특허분석',
        '국가공인인증컨설팅 자문',
        '디자인지도',
        '마케팅지도',
        '해외시장 개척',
        '사업화지도',
        '사업계획서 작성지도',
        '기타'
    ];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="기업명"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.companyName}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="대표자명"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.representativeName}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="사업자등록번호"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.CompanyRegistrationNum}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="전화번호 및 팩스번호"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.faxNum}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="주소"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.address}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="작성자 성명"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.name}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="부서/직위"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.departmentAndPosition}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="전화번호"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.phoneNum}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="e-mail"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.email}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="상시근로자 수"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.fullTimeWorker}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="매출액(전년도 말 기준)"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.sales}
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
                    <Typography>기업 성장 단계</Typography>
                </Box>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                    <Grid container>
                        <Grid item xs={6}>
                            <FormControlLabel
                                value="1"
                                control={formInfo.growthDegree === 1 ? <Radio disabled checked /> : <Radio disabled />}
                                label="창업기(1년미만, 5인 이하)"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                value="2"
                                control={formInfo.growthDegree === 2 ? <Radio disabled checked /> : <Radio disabled />}
                                label="초기성장기(3년미만, 50인 이하)"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                value="3"
                                control={formInfo.growthDegree === 3 ? <Radio disabled checked /> : <Radio disabled />}
                                label="성장기(3년이상, 300인 미만)"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                value="4"
                                control={formInfo.growthDegree === 4 ? <Radio disabled checked /> : <Radio disabled />}
                                label="성숙기(5년이상, 300인 이상)"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                value="5"
                                control={formInfo.growthDegree === 5 ? <Radio disabled checked /> : <Radio disabled />}
                                label="업종전환기(동일제품 10년 이상)"
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography>업종</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={formInfo.businessType[0] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="IT분야(전기전자, 통신, 컴퓨터, IT관련 기계장비 등)"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={formInfo.businessType[1] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="그린에너지분야(태양광, 연료전지, 2차전지 등)"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[2] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="음식료"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[3] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="섬유의복"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[4] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="목재종이"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[5] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="석유화학"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[6] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="비금속"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={formInfo.businessType[7] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="운송장비"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel
                                control={formInfo.businessType[8] === 1 ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                label="기타"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="기타"
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.businessType[9]}
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
                            <TextField
                                fullWidth
                                label="주생산품목/서비스(구체적으로 기입)"
                                type="text"
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
                    <Typography>지도/자문 형태</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFormList.map((consultingForms, index) => (
                            <div key={index}>
                                <Grid item xs={12}>
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
                    <Typography>지도/자문 분야</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFieldList.map((consultingFields, index) => (
                            <div key={index}>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value={index} onChange={onChangeConsultingField} />}
                                        label={consultingFields}
                                    />
                                </Grid>
                            </div>
                        ))}
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                label="기타"
                                type="text"
                                variant="standard"
                                disabled={etcChecked ? false : true}
                                onChange={onChangeEtc}
                                value={etc}
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography>희망지도/자문위원</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <TextField fullWidth label="성명" type="text" variant="standard" value={name} onChange={onChangeName} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="소속" type="text" variant="standard" value={group} onChange={onChangeGroup} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="연락처" type="text" variant="standard" value={contact} onChange={onChangeContact} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography>지원요청의 상세내용</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="지원받고자 하는 분야의 상세 내용 기술"
                                type="text"
                                variant="standard"
                                value={detailInfo}
                                onChange={onChangeDetailInfo}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography>기대효과</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="지원을 희망하는 분야의 내용을 정량적으로 수치화하여 작성하고 지원을 통한 객관적이고 정량적인 기대효과를 기술"
                                type="text"
                                variant="standard"
                                value={effectiveness}
                                onChange={onChangeEffectiveness}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained">애로 기술 등록</Button>
                </Box>
            </Grid>
        </Grid>
    );
};
export default FormTechCare365;
