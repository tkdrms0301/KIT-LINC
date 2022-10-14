// material-ui
import { Grid, Box, Typography, Divider, TextField, Radio, FormControlLabel, FormGroup, Checkbox } from '@mui/material';

import MainCard from 'components/MainCard';
import { useState, useEffect, useRef } from 'react';
import axios from '../../../../node_modules/axios/index';
import ProfessorSelect from './ProfessorSelect';
import TechPostDetailButton from './TechPostDetailButton';
import { professorRows } from './dummy';
import { useParams } from 'react-router-dom';
import { consultingFormList, consultantInfoList, consultingFieldList, growthDegreeList, businessTypeListForTechCare365 } from './constant';
import PostTableApi from 'pages/api/difficult-tech/PostTableApi';
const TechCare365Detail = () => {
    const params = useParams();
    const [selectedProfessor, setSelectedProfessor] = useState();
    const [formInfo, setFormInfo] = useState({
        companyName: '',
        representativeName: '',
        companyRegistrationNum: '',
        faxNum: '',
        address: '',
        name: '',
        departmentAndPosition: '',
        phoneNum: '',
        email: '',
        fullTimeWorker: '',
        sales: '',
        growthDegree: '',
        businessType: [],
        businessTypeEtc: '',
        mainService: '',
        consultantForm: [],
        consultantInfo: [],
        consultingField: [],
        consultingFieldEtc: '',
        detailInfo: '',
        effectiveness: '',
        projectName: ''
    });

    const applicantInfoList = [
        { label: '기업명', value: formInfo.companyName },
        { label: '대표자명', value: formInfo.representativeName },
        { label: '시업자등록번호', value: formInfo.companyRegistrationNum },
        { label: '전화번호 및 팩스번호', value: formInfo.faxNum },
        { label: '주소', value: formInfo.departmentAndPosition },
        { label: '작성자 성명', value: formInfo.name },
        { label: '부서/직위', value: formInfo.departmentAndPosition },
        { label: '전화번호', value: formInfo.phoneNum },
        { label: 'e-mail', value: formInfo.email },
        { label: '상시 근로자 수', value: formInfo.fullTimeWorker },
        { label: '매출액(전년도 말 기준)', value: formInfo.sales }
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
    const requestInfo = async () => {
        let companyInfo;
        let additionalInfo;
        await PostTableApi.contentDetailForm()
            .then((res) => {
                const companyData = res.data.data;
                console.log(companyData);
                companyInfo = companyData;
            })
            .catch((err) => console.log(err));
        await PostTableApi.contentDetailFormRequestId({
            requestId: params.detail
        }).then((res) => {
            const additionalData = res.data.data;
            console.log(additionalData);
            additionalInfo = additionalData;
        });
        setFormInfo({
            ...formInfo,
            ...companyInfo,
            consultantForm: additionalInfo.company.cooperationField,
            // consultantInfo: additionalInfo.wishMentor.split('|'),
            consultantInfo: ['성명', '성명', '성명'], // dd
            consultingField: additionalInfo.supportField, //dd
            consultingFieldEtc: additionalInfo.companyCategoryEtc, // supportEtc 으로 변경 요청
            detailInfo: additionalInfo.detail,
            effectiveness: additionalInfo.expectEffect,
            projectName: additionalInfo.requestName
        });
    };

    useEffect(() => {
        requestInfo();
    }, []);

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
                                    value={formInfo.projectName}
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
                                                <Typography variant="body2">{applicantInfo.label}</Typography>
                                            </Box>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                variant="standard"
                                                value={applicantInfo.value}
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
                                                label={businessTypeListForTechCare365[businessTypes]}
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
                                                value={formInfo.businessTypeEtc}
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
                                    {/* {formInfo.consultingField.map((consultingFields, index) => (
                                        <Grid item xs={3} key={index}>
                                            <FormControlLabel
                                                control={<Checkbox checked />}
                                                label={consultingFieldList[Number(consultingFields)]}
                                            />
                                        </Grid>
                                    ))} */}
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
