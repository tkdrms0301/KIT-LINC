import { Grid, Box, Container, TextField, Button, Stack, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { useState } from 'react';
import PatentTable from './PatentTable';
import InterestTable from './InterestTable';
import ParticipationTaskTable from './ParticipationTaskTable';
import Search from './Search';
import ResearcherInfo from './ResearcherInfo';
import { researcherInfo } from './dummy';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Container>
                        <Box>{children}</Box>
                    </Container>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

const ResearcherTable = () => {
    const [value, setValue] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [select, setSelect] = useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
    };
    const handleSearchInput = () => {
        console.log(searchInput);
    };
    const handleSelect = (e, id) => {
        console.log(id);
        setSelect(id);
    };
    return (
        <>
            <MainCard title="연구자 정보 조회">
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="특허" />
                                <Tab label="관심분야" />
                                <Tab label="참여 과제" />
                            </Tabs>
                        </Box>
                        <Search searchInput={searchInput} onChangeSearchInput={onChangeSearchInput} handleSearchInput={handleSearchInput} />
                        <TabPanel value={value} index={0}>
                            <PatentTable handleSelect={handleSelect} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <InterestTable handleSelect={handleSelect} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ParticipationTaskTable handleSelect={handleSelect} />
                        </TabPanel>
                    </Grid>
                </Grid>
            </MainCard>
            {select === '' ? null : <ResearcherInfo />}
        </>
    );
};
export default ResearcherTable;
