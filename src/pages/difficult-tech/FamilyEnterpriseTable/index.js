import { Box, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import MainCard from 'components/MainCard';
import EnterpriseTable from './EnterpriseTable';
import enterpriseRows from './dummy';
import Search from './Search';
import FamilyEnterpriseInfo from './FamilyEnterpriseInfo';
const FamilyEnterpriseTable = () => {
    const [selectedPost, setSelectedPost] = useState('');
    const handleEnterpriseChange = (event, rows) => {
        console.log(rows.enterpriseId); //선택한 post의 ID 배정 이걸로 back에 정보 요청
        setSelectedPost(rows);
    };
    const searchInputRef = useRef();
    const [selected, setSelected] = useState('All');
    const onChangeSelected = (e) => {
        setSelected(e.target.value);
    };
    const onSubmitSearchInput = () => {
        console.log(selected);
        console.log(searchInputRef.current.value);
    };
    return (
        <Grid>
            <Grid>
                <MainCard title="가족회사 조회">
                    <Search
                        searchInputRef={searchInputRef}
                        selected={selected}
                        onChangeSelected={onChangeSelected}
                        onSubmitSearchInput={onSubmitSearchInput}
                    ></Search>
                    <EnterpriseTable
                        selectedPost={selectedPost}
                        enterpriseRows={enterpriseRows}
                        handleEnterpriseChange={handleEnterpriseChange}
                    ></EnterpriseTable>
                </MainCard>
                <MainCard sx={{ mt: 3 }} title="가족회사 조회">
                    <FamilyEnterpriseInfo></FamilyEnterpriseInfo>
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default FamilyEnterpriseTable;
