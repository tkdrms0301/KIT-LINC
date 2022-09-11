import {
    Grid,
    Tabs,
    Tab,
    Typography,
    Box,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Radio,
    Button,
    Stack,
    RadioGroup,
    Divider
} from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { useRef, useState } from 'react';
import BusinessNumber from './BusinessNumber';
import EnterpriseInfo from './EnterpriseInfo';
import CheckList from './CheckList';
import Upload from './Upload';
const EnterpriseSignup = () => {
    const businessNumberRef = useRef();
    const businessType1Ref = useRef();
    const businessType2Ref = useRef();
    const checkListEtc1Ref = useRef();
    const checkListEtc2Ref = useRef();
    const checkListRequiredRef = useRef();
    const [value, setValue] = useState(2);
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
        setBusinessNumber(businessNumberRef.current.value);
        console.log(businessNumberRef.current.value);
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
                            <EnterpriseInfo businessType1Ref={businessType1Ref} businessType2Ref={businessType2Ref}></EnterpriseInfo>
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
