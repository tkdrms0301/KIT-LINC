import { Grid, Tabs, Tab, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { useRef, useState } from 'react';
import BusinessNumber from './BusinessNumber';
import EnterpriseInfo from './EnterpriseInfo';
import CheckList from './CheckList';
import Upload from './Upload';
import axios from 'axios';
const EnterpriseSignup = () => {
    const businessNumberRef = useRef();
    const businessType1Ref = useRef();
    const businessType2Ref = useRef();
    const workingHourOfDay = useRef();
    const workingHourOfWeek = useRef();
    const workingDayOfWeek = useRef();
    const eiDepartmentRef = useRef();
    const eiNameRef = useRef();
    const eiPositionRef = useRef();
    const eiContactRef = useRef();
    const eiPhoneNumberRef = useRef();
    const eiEmailRef = useRef();
    const eiFaxRef = useRef();
    const checkListEtc1Ref = useRef();
    const checkListEtc2Ref = useRef();
    const checkListRequiredRef = useRef();
    const [value, setValue] = useState(1);
    const [businessNumber, setBusinessNumber] = useState('');

    const [fileImage, setFileImage] = useState('');
    const [fileImageName, setFileImageName] = useState('');

    function TabPanel(props) {
        const { children, value, index } = props;

        return <Grid>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</Grid>;
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };

    const handlePageChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                setValue(newValue);
                return;
            case 1:
                if (newValue === 1 && businessNumber) {
                    setValue(newValue);
                } else {
                    alert('사업자 등록번호를 입력하세요');
                    setValue(newValue - 1);
                }
                return;
            case 2:
                setValue(newValue);
                return;
            case 3:
                setValue(newValue);
                return;
            case 4:
                setValue(newValue);
                return;
        }
    };
    const handleBusinessNumber = () => {
        // businessNumberRef.current.value 값 전송 -> 성공, 실패

        if (true) {
            //성공시
            setBusinessNumber(businessNumberRef.current.value);
            console.log(businessNumberRef.current.value);
        } else {
            //실패시
            alert('존재하지 않는 사업자 등록번호 입니다.');
        }
    };

    const [enterpriseSortation, setEnterpriseSortation] = useState('');
    const onChangeEnterpriseSortation = (e) => {
        console.log(e.target.value);
        setEnterpriseSortation(e.target.value);
    };
    const [enterpriseIsListed, setEnterpriseIsListedList] = useState([]);
    const onChangeEnterpriseIsListed = (checked, item) => {
        if (checked) {
            setEnterpriseIsListedList([...enterpriseIsListed, item]);
        } else {
            setEnterpriseIsListedList(enterpriseIsListed.filter((el) => el !== item));
        }
    };
    const [dayOfWeek, setDayOfWeek] = useState([]);
    const onChangeDayOfWeek = (checked, item) => {
        if (checked) {
            setDayOfWeek([...dayOfWeek, item]);
        } else {
            setDayOfWeek(dayOfWeek.filter((el) => el !== item));
        }
    };
    const [enterpriseInfo, setEnterpriseInfo] = useState({
        enterpriseBusinessType1: '', // 사업의 종류(업태) 1
        enterpriseBusinessType2: '', // 사업의 종류(업태) 2
        hourOfDay: '', // 1일 기준 시간
        hourOfWeek: '', // 1주 기준 시간
        dayOfWeek: '', // 1주 기준 일주
        eiDepartment: '', // 부서명
        eiName: '', // 성명
        eiPosition: '', // 직위
        eiContact: '', // // 연락처
        eiPhoneNumber: '', // 휴대폰
        eiEmail: '', // 이메일
        eiFax: '' // 팩스
    });
    const onBlurEnterpriseInfo = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setEnterpriseInfo({
            ...enterpriseInfo,
            [name]: value
        });
    };
    const handleEnterpriseInfo = () => {
        const info = {
            enterpriseSortation: enterpriseSortation,
            enterpriseIsListed: enterpriseIsListed,
            enterpriseBusinessType1: enterpriseInfo.enterpriseBusinessType1,
            enterpriseBusinessType2: businessType2Ref?.current.value,
            dayOfWeek: dayOfWeek,
            eiDepartment: eiDepartmentRef?.current.value,
            eiName: eiNameRef?.current.value,
            eiPosition: eiPositionRef?.current.value,
            eiContact: eiContactRef?.current.value,
            eiPhoneNumber: eiPhoneNumberRef?.current.value,
            eiEmail: eiEmailRef?.current.value,
            eiFax: eiFaxRef?.current.value
        };
        console.log(info);
    };
    const handleFile = (e) => {
        setFileImage(e.target.files[0]);
        setFileImageName(e.target.files[0].name);
        console.log(e.target.files[0].name);
    };
    const onSubmitEnterpriseInfo = () => {
        console.log(fileImage);
    };
    return (
        <Grid>
            <MainCard title="기업 회원 가입" codeHighlight sx={{ width: '80%', margin: 'auto' }}>
                <Grid>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value}>
                                <Tab label="사업자 등록정보" />
                                <Tab label="기업 정보" />
                                <Tab label="자체 점검표" />
                                <Tab label="업로드 자료" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <BusinessNumber
                                businessNumberRef={businessNumberRef}
                                businessNumber={businessNumber}
                                handleBusinessNumber={handleBusinessNumber}
                            ></BusinessNumber>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <EnterpriseInfo
                                businessNumber={businessNumber}
                                enterpriseSortation={enterpriseSortation}
                                onChangeEnterpriseSortation={onChangeEnterpriseSortation}
                                enterpriseIsListed={enterpriseIsListed}
                                onChangeEnterpriseIsListed={onChangeEnterpriseIsListed}
                                dayOfWeek={dayOfWeek}
                                onChangeDayOfWeek={onChangeDayOfWeek}
                                businessType1Ref={businessType1Ref}
                                businessType2Ref={businessType2Ref}
                                workingHourOfDay={workingHourOfDay}
                                workingHourOfWeek={workingHourOfWeek}
                                workingDayOfWeek={workingDayOfWeek}
                                eiDepartmentRef={eiDepartmentRef}
                                eiNameRef={eiNameRef}
                                eiPositionRef={eiPositionRef}
                                eiContactRef={eiContactRef}
                                eiPhoneNumberRef={eiPhoneNumberRef}
                                eiEmailRef={eiEmailRef}
                                eiFaxRef={eiFaxRef}
                                enterpriseInfo={enterpriseInfo}
                                onBlurEnterpriseInfo={onBlurEnterpriseInfo}
                            ></EnterpriseInfo>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <CheckList
                                checkListEtc1Ref={checkListEtc1Ref}
                                checkListEtc2Ref={checkListEtc2Ref}
                                checkListRequiredRef={checkListRequiredRef}
                            ></CheckList>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Upload fileImageName={fileImageName} handleFile={handleFile}></Upload>
                        </TabPanel>
                        <Grid container direction={value !== 0 ? 'row' : 'row-reverse'} justifyContent="space-between" sx={{ mt: 3 }}>
                            {value !== 0 ? (
                                <form onClick={(e) => handlePageChange(e, value - 1)}>
                                    <Button variant="contained">이전</Button>
                                </form>
                            ) : null}
                            {value === 1 ? (
                                <form onClick={handleEnterpriseInfo}>
                                    <Button variant="contained">저장</Button>
                                </form>
                            ) : null}
                            {value === 2 ? (
                                <form>
                                    <Button variant="contained">저장</Button>
                                </form>
                            ) : null}
                            {value !== 3 ? (
                                <form onClick={(e) => handlePageChange(e, value + 1)}>
                                    <Button variant="contained">다음</Button>
                                </form>
                            ) : null}
                            {value === 3 ? (
                                <form onClick={onSubmitEnterpriseInfo}>
                                    <Button variant="contained">제출</Button>
                                </form>
                            ) : null}
                        </Grid>
                    </Box>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default EnterpriseSignup;
