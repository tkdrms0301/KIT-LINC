import { Grid, InputLabel, Typography, TextField, Radio, FormControlLabel, RadioGroup, Checkbox } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
const EnterpriseInfo = ({
    businessNumber,
    enterpriseSortation,
    onChangeEnterpriseSortation,
    enterpriseIsListed,
    onChangeEnterpriseIsListed,
    dayOfWeek,
    onChangeDayOfWeek,
    businessType1Ref,
    businessType2Ref,
    workingHourOfDay,
    workingHourOfWeek,
    workingDayOfWeek,
    eiDepartmentRef,
    eiNameRef,
    eiPositionRef,
    eiContactRef,
    eiPhoneNumberRef,
    eiEmailRef,
    eiFaxRef,
    enterpriseInfo,
    onBlurEnterpriseInfo
}) => {
    // let enterpriseInfo;
    useEffect(() => {
        console.log(businessNumber);
        //axios 사용 사업자등록번호(businessNumber) => 기업정보 값 가져오기
        // enterpriseInfo 에 값 저장
    }, []);
    const enterpriseInfoList = [
        // enterpriseInfo 값을 value에 각각 저장하기
        {
            label: '기관(법인)명',
            size: 6,
            value: '기관'
        },
        {
            label: '영문기관명',
            size: 6,
            value: 'enterprise'
        },
        {
            label: '대표자명',
            size: 4,
            value: '대표자'
        },
        {
            label: '사업자등록번호',
            size: 4,
            value: businessNumber
        },
        {
            label: '개업 연월일',
            size: 4,
            value: '2022-01-01'
        },
        {
            label: '한국표준산업분류코드',
            size: 4,
            value: 'K1234'
        },
        {
            label: '종업원 수',
            size: 4,
            value: '100'
        },
        {
            label: '매출액',
            size: 4,
            value: '1000억'
        },
        {
            label: '사업장 소재지',
            size: 6,
            value: '구미시'
        },
        {
            label: '홈페이지',
            size: 6,
            value: 'https://www.kumoh.ac.kr'
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
            ref: eiDepartmentRef
        },
        {
            label: '성명',
            ref: eiNameRef
        },
        {
            label: '직위',
            ref: eiPositionRef
        },
        {
            label: '연락처',
            ref: eiContactRef
        },
        {
            label: '휴대폰',
            ref: eiPhoneNumberRef
        },
        {
            label: '이메일',
            ref: eiEmailRef
        },
        {
            label: 'FAX',
            ref: eiFaxRef
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
                            defaultValue={enterpriseInfo.value}
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
                        <RadioGroup value={enterpriseSortation} onChange={onChangeEnterpriseSortation}>
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
                                {enterpriseIsListedList.map((enterpriseIsListeds, index) => (
                                    <Grid item xs={4} key={index}>
                                        {console.log('checkbox')}
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
                {enterpriseStatus2.map((enterpriseStatus, index) => (
                    <Grid item xs={6} key={index}>
                        <Grid sx={{ mb: 1 }}>
                            <Typography>{enterpriseStatus.title}</Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                placeholder="사업의 종류(업태)"
                                name="enterpriseBusinessType1"
                                defaultValue={enterpriseInfo.enterpriseBusinessType1}
                                onBlur={onBlurEnterpriseInfo}
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
                    <Typography>기관 근로형태</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                    <Typography>정규 근로시간</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth placeholder="1일 기준 시간" variant="standard" inputRef={workingHourOfDay}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth placeholder="1주 기준 시간" variant="standard" inputRef={workingHourOfWeek}></TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography>정규 근로일수</Typography>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={3}>
                            <TextField fullWidth placeholder="1주 기준 일수" variant="standard" inputRef={workingDayOfWeek}></TextField>
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
                        <TextField fullWidth placeholder={enterpriseMD.label} variant="standard" inputRef={enterpriseMD.ref}></TextField>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
export default EnterpriseInfo;
