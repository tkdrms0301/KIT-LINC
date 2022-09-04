// material-ui
import { Grid, Button, Stack, Box, Typography, Divider, TextField, Radio, FormControlLabel, FormGroup, Checkbox } from '@mui/material';

import MainCard from 'components/MainCard';
import { useState, useEffect, useRef } from 'react';
import axios from '../../../../node_modules/axios/index';
import ProfessorSelect from './ProfessorSelect';
import TechPostDetailButton from './TechPostDetailButton';
const TechCare365Detail = () => {
    const [selectedProfessor, setSelectedProfessor] = useState();

    const professorRows = [
        {
            professorNumber: '1',
            professorName: '교수1',
            professorMajor: '학과1',
            professorStudy: '연구1'
        },
        {
            professorNumber: '2',
            professorName: '교수2',
            professorMajor: '학과2',
            professorStudy: '연구2'
        },
        {
            professorNumber: '3',
            professorName: '교수3',
            professorMajor: '학과3',
            professorStudy: '연구3'
        },
        {
            professorNumber: '4',
            professorName: '교수4',
            professorMajor: '학과4',
            professorStudy: '연구4'
        },
        {
            professorNumber: '5',
            professorName: '교수5',
            professorMajor: '학과5',
            professorStudy: '연구5'
        },
        {
            professorNumber: '6',
            professorName: '교수6',
            professorMajor: '학과6',
            professorStudy: '연구6'
        },
        {
            professorNumber: '7',
            professorName: '교수7',
            professorMajor: '학과7',
            professorStudy: '연구7'
        }
    ];

    // 프로젝트 내용 확인, 교수 확인 후 승인 버튼
    const onSubmitApprove = () => {
        console.log('test');
    };

    const handleProfessorChange = (e, professorRow) => {
        setSelectedProfessor(professorRow);
    };

    const requestProfessorInfo = () => {
        axios
            .get('url', {
                params: { professorId: selectedProfessor.professorNumber }
            })
            .then((res) => {
                console.log(res.data.data);
            });
    };

    // 교수 검색 버튼*
    const searchProfessorInputRef = useRef();

    const onSubmitSearchProfessorInput = (e) => {
        console.log(searchProfessorInputRef.current?.value);
        // axios
        //     .get('url', {
        //         params: { searchInput: searchProfessorInputRef.current?.value }
        //     })
        //     .then((res) => {
        //         console.log(res.data.data);
        //     });
    };

    useEffect(() => {
        console.log(selectedProfessor);
    }, [selectedProfessor]);

    const formInfo = {
        // companyName: res.data.data.companyName,
        companyName: 'companyName',
        representativeName: 'representativeName',
        companyRegistrationNum: 'companyRegistrationNum',
        faxNum: 'faxNum',
        address: 'address',
        name: 'name',
        departmentAndPosition: 'departmentAndPosition',
        phoneNum: 'phoneNum',
        email: 'email',
        fullTimeWorker: 'fullTimeWorker',
        sales: 'sales',
        growthDegree: '3',
        businessType: ['2', '4', '7'],
        businessTypeEtc: undefined,
        mainService: 'mainService',
        consultantForm: ['0', '4'],
        consultantInfo: ['성명', '소속', '연락처'],
        consultingField: ['1', '4', '9', '10'],
        consultingFieldEtc: '기타',
        detailInfo: '상세내용',
        effectiveness: '기대효과',
        projectName: '프로젝트제목'
    };

    const consultingFormList = ['단기 기술지도', '외부 자문의원 지도', '패키지形', '학기중 장기기술지도', '방학,연구년중 장기기술지도'];

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
        '사업계획서 작성지도'
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
        '운송장비'
    ];

    let formInfoArr;

    if (formInfo !== undefined) {
        formInfoArr = Object.values(formInfo);
    }
    return (
        <Grid sx={{ width: '80%', margin: 'auto', my: 3 }}>
            <Grid container>
                <MainCard codeHighlight>
                    <Typography variant="h5">지원서 상세정보 TechCare365</Typography>
                    <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, my: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
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
                        <Grid item xs={12} justifyContent="center" alignItems="center">
                            <Box component="form" noValidate autoComplete="off">
                                <Grid container spacing={1}>
                                    {applicantInfoList.map((applicantInfo, index) => (
                                        <Grid key={index} item xs={index === 4 ? 6 : 3}>
                                            <Box>
                                                <Typography variant="body2">{applicantInfo}</Typography>
                                            </Box>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                variant="standard"
                                                defaultValue={applicantInfo}
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
                                <Typography variant="body2">기업 성장 단계</Typography>
                            </Box>
                            <Grid container>
                                <Grid item xs={6}>
                                    <FormControlLabel control={<Radio checked />} label={growthDegreeList[Number(formInfo.growthDegree)]} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="body2">업종</Typography>
                            </Box>
                            <FormGroup>
                                <Grid container>
                                    {formInfo.businessType.map((businessTypes, index) => (
                                        <Grid item xs={3} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={businessTypeList[Number(businessTypes)]}
                                            />
                                        </Grid>
                                    ))}
                                    {formInfo.businessTypeEtc !== undefined ? (
                                        <Grid item xs={3}>
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
                                <Typography variant="body2">지도/자문 형태</Typography>
                            </Box>
                            <FormGroup>
                                <Grid container>
                                    {formInfo.consultantForm.map((consultingForms, index) => (
                                        <Grid item xs={3} key={index}>
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
                                <Typography variant="body2">지도/자문 분야</Typography>
                            </Box>
                            <FormGroup>
                                <Grid container>
                                    {formInfo.consultingField.map((consultingFields, index) => (
                                        <Grid item xs={3} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={consultingFieldList[Number(consultingFields)]}
                                            />
                                        </Grid>
                                    ))}
                                    {formInfo.consultingFieldEtc !== undefined ? (
                                        <Grid item>
                                            <FormControlLabel control={<Checkbox checked />} label="기타" />
                                            <TextField
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
                                <Typography variant="body2">희망지도/자문위원</Typography>
                            </Box>
                            <Grid container spacing={4}>
                                {formInfo.consultantInfo.map((consultingFields, index) => (
                                    <Grid item xs={3} key={index}>
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
                                <Typography variant="body2">지원요청의 상세내용</Typography>
                            </Box>
                            <Box>
                                <Grid container sx={{ my: 1 }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            type="text"
                                            multiline
                                            value={formInfo.detailInfo}
                                            rows={4}
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
                                <Typography variant="body2">기대 효과</Typography>
                            </Box>
                            <Box>
                                <Grid container sx={{ my: 1 }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            type="text"
                                            multiline
                                            value={formInfo.effectiveness}
                                            rows={4}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <ProfessorSelect
                professorRows={professorRows}
                handleProfessorChange={handleProfessorChange}
                selectedProfessor={selectedProfessor}
                searchProfessorInputRef={searchProfessorInputRef}
                onSubmitSearchProfessorInput={onSubmitSearchProfessorInput}
            ></ProfessorSelect>
            <TechPostDetailButton onSubmitApprove={onSubmitApprove}></TechPostDetailButton>
        </Grid>
    );
};

export default TechCare365Detail;
