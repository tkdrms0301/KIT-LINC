import { Grid, Tabs, Tab, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { useState } from 'react';
import EnterpriseInfo from './EnterpriseInfo';
import CheckList from './CheckList';
import Upload from './Upload';
import axios from 'axios';
const EnterpriseSignup = () => {
    const [value, setValue] = useState(1);
    const [fileImage, setFileImage] = useState();
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
                if (
                    newValue === 1 &&
                    enterpriseIsListed.length !== 0 &&
                    dayOfWeek.length !== 0 &&
                    enterpriseInfo.enterpriseBusinessType1 &&
                    enterpriseInfo.enterpriseBusinessType2 &&
                    enterpriseInfo.hourOfDay &&
                    enterpriseInfo.hourOfWeek &&
                    enterpriseInfo.dayOfWeek &&
                    enterpriseInfo.eiDepartment &&
                    enterpriseInfo.eiName &&
                    enterpriseInfo.eiPosition &&
                    enterpriseInfo.eiContact &&
                    enterpriseInfo.eiPhoneNumber &&
                    enterpriseInfo.eiEmail &&
                    enterpriseInfo.eiFax
                ) {
                    setValue(newValue);
                } else {
                    alert('기업정보를 입력하세요');
                    setValue(newValue - 1);
                }
                return;
            case 2:
                setValue(newValue);
                return;
        }
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
        const { name, value } = e.target;
        setEnterpriseInfo({
            ...enterpriseInfo,
            [name]: value
        });
    };
    const [checkList1, setCheckList1] = useState([]);
    const [checkList2, setCheckList2] = useState([]);
    const [checkList, setCheckList] = useState({
        checkList1Etc: '',
        checkList2Etc: '',
        checkList3: '',
        checkList4: '',
        checkList4Etc: '',
        checkList5: '',
        checkList6: '',
        checkList7: '',
        checkListEtcAlert: ''
    });
    const [fileInfo, setFileInfo] = useState({
        id: '',
        url: ''
    });

    const onChangeCheckList1 = (checked, item) => {
        if (checked) {
            setCheckList1([...checkList1, item]);
        } else {
            setCheckList1(checkList1.filter((el) => el !== item));
        }
    };

    const onChangeCheckList2 = (checked, item) => {
        if (checked) {
            setCheckList2([...checkList2, item]);
        } else {
            setCheckList2(checkList2.filter((el) => el !== item));
        }
    };

    const onBlurCheckList = (e) => {
        const { name, value } = e.target;
        setCheckList({
            ...checkList,
            [name]: value
        });
    };

    const handleEnterpriseInfo = () => {
        const info = {
            enterpriseIsListed: enterpriseIsListed,
            enterpriseBusinessType1: enterpriseInfo.enterpriseBusinessType1,
            enterpriseBusinessType2: '',
            dayOfWeek: dayOfWeek,
            eiDepartment: '',
            eiName: '',
            eiPosition: '',
            eiContact: '',
            eiPhoneNumber: '',
            eiEmail: '',
            eiFax: ''
        };
        console.log(info);
    };

    const handleFile = (e) => {
        setFileImage(e.target.files[0]);
        setFileImageName(e.target.files[0].name);
        console.log(e.target.files[0].name);
    };

    const onSubmitEnterpriseInfo = async () => {
        console.log(fileImage);
        const formData = new FormData();
        formData.append('files', fileImage);
        await axios({
            method: 'POST',
            url: 'http://337se.duckdns.org:80/api/file/upload',
            mode: 'cors',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };
    return (
        <Grid>
            <MainCard title="기업 회원 가입" codeHighlight sx={{ width: '80%', margin: 'auto' }}>
                <Grid>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value}>
                                <Tab label="기업 정보" />
                                <Tab label="자체 점검표" />
                                <Tab label="업로드 자료" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <EnterpriseInfo
                                enterpriseIsListed={enterpriseIsListed}
                                onChangeEnterpriseIsListed={onChangeEnterpriseIsListed}
                                dayOfWeek={dayOfWeek}
                                onChangeDayOfWeek={onChangeDayOfWeek}
                                enterpriseInfo={enterpriseInfo}
                                onBlurEnterpriseInfo={onBlurEnterpriseInfo}
                            ></EnterpriseInfo>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CheckList
                                checkList1={checkList1}
                                checkList2={checkList2}
                                checkList={checkList}
                                onChangeCheckList1={onChangeCheckList1}
                                onChangeCheckList2={onChangeCheckList2}
                                onBlurCheckList={onBlurCheckList}
                            ></CheckList>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Upload fileImageName={fileImageName} handleFile={handleFile}></Upload>
                        </TabPanel>
                        <Grid container direction={value !== 0 ? 'row' : 'row-reverse'} justifyContent="space-between" sx={{ mt: 3 }}>
                            {value !== 0 ? (
                                <form onClick={(e) => handlePageChange(e, value - 1)}>
                                    <Button variant="contained">이전</Button>
                                </form>
                            ) : null}
                            {value !== 2 ? (
                                <form onClick={(e) => handlePageChange(e, value + 1)}>
                                    <Button variant="contained">다음</Button>
                                </form>
                            ) : (
                                <form onClick={onSubmitEnterpriseInfo}>
                                    <Button variant="contained">제출</Button>
                                </form>
                            )}
                        </Grid>
                    </Box>
                </Grid>
            </MainCard>
        </Grid>
    );
};
export default EnterpriseSignup;
