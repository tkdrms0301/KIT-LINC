import React, { useState, useEffect } from 'react';

import { Checkbox, TextField, RadioGroup, FormControlLabel, Radio, Button, Box, Grid, Stack, Typography, Divider } from '@mui/material';
import { FormControl, FormGroup } from '../../../../node_modules/@mui/material/index';

import MainCard from 'components/MainCard';

const TechCare365Content = ({
    selectedPost,
    formInfo,
    onSubmitApproveProject,
    onSubmitRejectProject,
    onSubmitPendingProject,
    requestInfo
}) => {
    const consultingFormList = [
        '단기 기술지도(1일 4시간이상 4회 이내 단기기술지도)',
        '외부 자문의원 지도',
        '패키지形(2개학과이상의 교수 또는 2명이상 교수 및 자문위원으로 구성)',
        '학기중 장기기술지도(기업의 여러가지 애로사항을 주 1~2회, 1일 6H, 이상, 8주이내 정기적으로 방문하여 패키지 형태로 지도)',
        '방학․연구년중 장기기술지도(기업의 여러가지 애로사항을 주 2~3회, 1일 8H, 4주 이내 기업에 상주하면서 패키지 형태로 지도)'
    ];

    const consultantInfoList = ['성명', '소속', '연락처'];

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

    const applicantInfoList = [
        '기업명',
        '대표자명',
        '시업자등록번호',
        '전화번호 및 팩스번호',
        '주소',
        '작성자 성명',
        '부서/직위',
        '전화번호',
        'e-mail',
        '상시 근로자 수',
        '매출액(전년도 말 기준)'
    ];
    const growthDegreeList = [
        '창업기(1년미만, 5인 이하)',
        '초기성장기(3년미만, 50인 이하)',
        '성장기(3년이상, 300인 미만)',
        '성숙기(5년이상, 300인 이상)',
        '업종전환기(동일제품 10년 이상)'
    ];

    const businessTypeList = [
        'IT분야(전기전자, 통신, 컴퓨터, IT관련 기계장비 등)',
        '그린에너지분야(태양광, 연료전지, 2차전지 등)',
        '음식료',
        '섬유의복',
        '목제종이',
        '석유화확',
        '비금속',
        '운송장비',
        '기타'
    ];

    let formInfoArr;

    if (formInfo !== undefined) {
        formInfoArr = Object.values(formInfo);
    }

    return (
        <Grid item xs={12}>
            {formInfoArr !== undefined ? (
                <MainCard codeHighlight sx={{ width: '80%', margin: 'auto' }}>
                    <Typography variant="h1" align="center" sx={{ my: 3 }}>
                        지원서 상세정보
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} justifyContent="center" alignItems="center">
                            <Box component="form" noValidate autoComplete="off">
                                <Grid container spacing={1}>
                                    {applicantInfoList.map((applicantInfo, index) => (
                                        <Grid item xs={index === 4 ? 8 : 4} key={index}>
                                            <Box>
                                                <Typography variant="h5">{applicantInfo}</Typography>
                                            </Box>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                variant="standard"
                                                defaultValue={formInfoArr[index]}
                                                InputProps={{
                                                    readOnly: true
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
                            <Grid container>
                                <Grid item xs={6}>
                                    <FormControlLabel control={<Radio checked />} label={growthDegreeList[Number(formInfo.growthDegree)]} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5">업종</Typography>
                            </Box>
                            <FormGroup>
                                <Grid container>
                                    {formInfo.businessType.map((businessTypes, index) => (
                                        <Grid item xs={4} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={businessTypeList[Number(businessTypes)]}
                                            />
                                        </Grid>
                                    ))}
                                    {formInfo.businessTypeEtc !== null ? (
                                        <Grid item>
                                            <TextField
                                                fullWidth
                                                label="기타"
                                                type="text"
                                                variant="standard"
                                                defaultValue={formInfo.businessTypeEtc}
                                                InputProps={{
                                                    readOnly: true
                                                }}
                                            />
                                        </Grid>
                                    ) : null}
                                </Grid>
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Box>
                                    <Typography variant="h5">주 생산품목</Typography>
                                </Box>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            type="text"
                                            variant="standard"
                                            defaultValue={formInfo.mainService}
                                            InputProps={{
                                                readOnly: true
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
                                <TextField
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    defaultValue={formInfo.projectName}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5">지도/자문 형태</Typography>
                            </Box>
                            <FormGroup>
                                <Grid container>
                                    {formInfo.consultantForm.map((consultingForms, index) => (
                                        <Grid item xs={6} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={consultingFormList[Number(consultingForms)]}
                                            />
                                        </Grid>
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
                                    {formInfo.consultingField.map((consultingFields, index) => (
                                        <Grid item xs={4} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={consultingFieldList[Number(consultingFields)]}
                                            />
                                        </Grid>
                                    ))}
                                    {formInfo.consultingFieldEtc !== null ? (
                                        <Grid item>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                variant="standard"
                                                defaultValue={formInfo.consultingFieldEtc}
                                                InputProps={{
                                                    readOnly: true
                                                }}
                                            />
                                        </Grid>
                                    ) : null}
                                </Grid>
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ my: 1 }}>
                                <Typography variant="h5">희망지도/자문위원</Typography>
                            </Box>
                            <Grid container spacing={4}>
                                {formInfo.consultantInfo.map((consultingFields, index) => (
                                    <Grid item xs={4} key={index}>
                                        <TextField
                                            fullWidth
                                            label={consultantInfoList[index]}
                                            type="text"
                                            variant="standard"
                                            value={consultingFields}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
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
                                            rows={4}
                                            value={formInfo.detailInfo}
                                            InputProps={{
                                                readOnly: true
                                            }}
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
                                            type="text"
                                            multiline
                                            rows={4}
                                            value={formInfo.effectiveness}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" sx={{ my: 3 }}>
                        {console.log(formInfo)}
                        {selectedPost.status === 'PENDING' ? (
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <form onSubmit={onSubmitApproveProject}>
                                        <Button variant="contained" type="submit">
                                            승인
                                        </Button>
                                    </form>
                                    <form onSubmit={onSubmitRejectProject}>
                                        <Button variant="outlined" type="submit">
                                            거절
                                        </Button>
                                    </form>
                                </Stack>
                            </Grid>
                        ) : null}
                        {selectedPost.status === 'APPROVED' ? (
                            <Grid>
                                <Stack direction="row" spacing={2}>
                                    <form onSubmit={onSubmitPendingProject}>
                                        <Button variant="contained" type="submit">
                                            승인취소
                                        </Button>
                                    </form>
                                </Stack>
                            </Grid>
                        ) : null}
                        {selectedPost.status === 'REJECTED' ? (
                            <Grid>
                                <Stack direction="row" spacing={2}>
                                    <form onSubmit={onSubmitPendingProject}>
                                        <Button variant="contained" type="submit">
                                            보류
                                        </Button>
                                    </form>
                                </Stack>
                            </Grid>
                        ) : null}
                    </Grid>
                </MainCard>
            ) : null}
        </Grid>
    );
};

export default TechCare365Content;
