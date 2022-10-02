import { Checkbox, TextField, FormControlLabel, Radio, Button, Box, Grid, Stack, Typography, FormGroup } from '@mui/material';
import MainCard from 'components/MainCard';
import FormDialog from './FormDialog';
import {
    consultingFormList,
    consultantInfoList,
    consultingFieldList,
    applicantInfoList,
    growthDegreeList,
    businessTypeList
} from './constant';
const TechCare365Content = ({
    selectedPost,
    formInfo,
    onSubmitApproveProject,
    onSubmitRejectProject,
    onSubmitPendingProject,
    handleOpen,
    handleClose,
    open,
    rejectReasonRef
}) => {
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
                        {selectedPost.status === 'PENDING' ? (
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <form onSubmit={onSubmitApproveProject}>
                                        <Button variant="contained" type="submit">
                                            승인
                                        </Button>
                                    </form>
                                    <form>
                                        <Button variant="outlined" type="submit" onClick={handleOpen}>
                                            거절
                                        </Button>
                                        <FormDialog
                                            open={open}
                                            handleClose={handleClose}
                                            rejectReasonRef={rejectReasonRef}
                                            onSubmitRejectProject={onSubmitRejectProject}
                                        ></FormDialog>
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
