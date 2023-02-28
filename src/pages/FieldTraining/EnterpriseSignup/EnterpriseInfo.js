import { Grid, InputLabel, Typography, TextField, Radio, FormControlLabel, RadioGroup, Checkbox } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { enterpriseInfoList, enterpriseSortationList, enterpriseIsListedList, dayOfWeekList } from './constant';
import { useState } from 'react';
const EnterpriseInfo = ({
    enterpriseIsListed,
    onChangeEnterpriseIsListed,
    dayOfWeek,
    onChangeDayOfWeek,
    workingHourOfDay,
    workingHourOfWeek,
    workingDayOfWeek,
    enterpriseInfo,
    onBlurEnterpriseInfo
}) => {
    // const [enterpriseInfoList, setEnterpriseInfoList] = useState({
    //     companyName: '',
    //     eiName: '',
    //     eiPosition: '',
    //     eiContact: '',
    //     eiPhoneNumber: '',
    //     eiEmail: '',
    //     eiFax: ''
    // });
    const enterpriseMDList = [
        {
            label: '부서명',
            name: 'eiDepartment',
            default: enterpriseInfo.eiDepartment
        },
        {
            label: '성명',
            name: 'eiName',
            default: enterpriseInfo.eiName
        },
        {
            label: '직위',
            name: 'eiPosition',
            default: enterpriseInfo.eiPosition
        },
        {
            label: '연락처',
            name: 'eiContact',
            default: enterpriseInfo.eiContact
        },
        {
            label: '휴대폰',
            name: 'eiPhoneNumber',
            default: enterpriseInfo.eiPhoneNumber
        },
        {
            label: '이메일',
            name: 'eiEmail',
            default: enterpriseInfo.eiEmail
        },
        {
            label: 'FAX',
            name: 'eiFax',
            default: enterpriseInfo.eiFax
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
                        <TextField
                            fullWidth
                            placeholder={enterpriseInfo.label}
                            variant="standard"
                            value={enterpriseInfo.value}
                            disabled
                        ></TextField>
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
                        <RadioGroup defaultValue={1}>
                            <Grid container>
                                {enterpriseSortationList.map((enterpriseSortation, index) => (
                                    <Grid item xs={4} key={index}>
                                        <FormControlLabel
                                            value={enterpriseSortation.value}
                                            control={<Radio disabled />}
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
                                {enterpriseIsListedList.map((enterpriseIsListeds, index) => (
                                    <Grid item xs={4} key={index}>
                                        <FormControlLabel
                                            value={enterpriseIsListeds.value}
                                            control={<Checkbox />}
                                            onChange={(e) => onChangeEnterpriseIsListed(e.target.checked, e.target.value)}
                                            label={enterpriseIsListeds.label}
                                            checked={enterpriseIsListed.includes(enterpriseIsListeds.value) ? true : false}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid sx={{ mb: 1 }}>
                        <Typography>사업의 종류(업태) 1</Typography>
                    </Grid>
                    <Grid>
                        <TextField
                            placeholder="사업의 종류(업태) 1"
                            name="enterpriseBusinessType1"
                            defaultValue={enterpriseInfo.enterpriseBusinessType1}
                            onBlur={onBlurEnterpriseInfo}
                            multiline
                            rows={3}
                            fullWidth
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid sx={{ mb: 1 }}>
                        <Typography>사업의 종류(업태) 2</Typography>
                    </Grid>
                    <Grid>
                        <TextField
                            placeholder="사업의 종류(업태) 2"
                            name="enterpriseBusinessType2"
                            defaultValue={enterpriseInfo.enterpriseBusinessType2}
                            onBlur={onBlurEnterpriseInfo}
                            multiline
                            rows={3}
                            fullWidth
                        ></TextField>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                    <Typography>기관 근로형태</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                    <Typography>정규 근로시간</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                name="hourOfDay"
                                defaultValue={enterpriseInfo.hourOfDay}
                                onBlur={onBlurEnterpriseInfo}
                                fullWidth
                                placeholder="1일 기준 시간"
                                variant="standard"
                                inputRef={workingHourOfDay}
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="hourOfWeek"
                                defaultValue={enterpriseInfo.hourOfWeek}
                                onBlur={onBlurEnterpriseInfo}
                                fullWidth
                                placeholder="1주 기준 시간"
                                variant="standard"
                                inputRef={workingHourOfWeek}
                            ></TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography>정규 근로일수</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                                name="dayOfWeek"
                                defaultValue={enterpriseInfo.dayOfWeek}
                                onBlur={onBlurEnterpriseInfo}
                                fullWidth
                                placeholder="1주 기준 일수"
                                variant="standard"
                                inputRef={workingDayOfWeek}
                            ></TextField>
                        </Grid>
                        {dayOfWeekList.map((dayOfWeeks, index) => (
                            <Grid item xs={9 / 7} key={index}>
                                <FormControlLabel
                                    value={dayOfWeeks.value}
                                    control={<Checkbox />}
                                    label={dayOfWeeks.label}
                                    onChange={(e) => onChangeDayOfWeek(e.target.checked, e.target.value)}
                                    checked={dayOfWeek.includes(dayOfWeeks.value) ? true : false}
                                />
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
                        <TextField
                            name={enterpriseMD.name}
                            defaultValue={enterpriseMD.default}
                            onBlur={onBlurEnterpriseInfo}
                            fullWidth
                            placeholder={enterpriseMD.label}
                            variant="standard"
                        ></TextField>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
export default EnterpriseInfo;
