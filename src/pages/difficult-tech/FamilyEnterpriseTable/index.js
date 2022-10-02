import { Box, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MainCard from 'components/MainCard';
import EnterpriseTable from './EnterpriseTable';
import Search from './Search';
import FamilyEnterpriseInfo from './FamilyEnterpriseInfo';
import familyEnterpriseTable from '../../api/difficult-tech/FamilyEnterpriseTable';

const FamilyEnterpriseTable = () => {
    const [selectedCompanyId, setSelectedCompanyId] = useState('');
    const handleEnterpriseChange = (e, rows) => {
        setSelectedCompanyId(rows.id);
        requestCompanyInfo(rows.id);
    };
    const [checkList, setCheckList] = useState([]);
    const searchInputRef = useRef();
    const [selected, setSelected] = useState({
        companyType: '1',
        category: '1',
        growthDegree: '1'
    });
    const [enterpriseInfo, setEnterpriseInfo] = useState(null);
    const [enterpriseRows, setEnterpriseRows] = useState([]);
    useEffect(() => requestSearchInput(), []);
    const onChangeSelected = (e) => {
        const { name, value } = e.target;
        setSelected({
            ...selected,
            [name]: value
        });
    };

    const requestSearchInput = () => {
        familyEnterpriseTable
            .contentFilter(selected)
            .then((res) => {
                setEnterpriseRows(res.data.data);
            })
            .catch((err) => console.log(err));
    };
    const requestCompanyInfo = (companyId) => {
        familyEnterpriseTable
            .contentDetail({ companyId: companyId })
            .then((res) => {
                setEnterpriseInfo(res.data.data);
            })
            .catch((err) => console.log(err));
    };
    const onClickExportExcelFile = () => {
        console.log(checkList);
        familyEnterpriseTable
            .export({ companyIdList: checkList })
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    const onChangeAllCheck = (checked) => {
        if (checked) {
            const list = [];
            enterpriseRows.forEach((row) => list.push(row.id));
            setCheckList(list);
        } else {
            setCheckList([]);
        }
    };

    const onChangeSingleCheck = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckList([...checkList, Number(value)]);
        } else {
            setCheckList(checkList.filter((el) => Number(value) !== el));
        }
    };

    return (
        <Grid>
            <Grid>
                <MainCard title="가족회사 조회">
                    <Search
                        searchInputRef={searchInputRef}
                        selected={selected}
                        onChangeSelected={onChangeSelected}
                        requestSearchInput={requestSearchInput}
                    ></Search>
                    <EnterpriseTable
                        onClickExportExcelFile={onClickExportExcelFile}
                        onChangeAllCheck={onChangeAllCheck}
                        onChangeSingleCheck={onChangeSingleCheck}
                        checkList={checkList}
                        selectedCompanyId={selectedCompanyId}
                        enterpriseRows={enterpriseRows}
                        handleEnterpriseChange={handleEnterpriseChange}
                    ></EnterpriseTable>
                </MainCard>
                {enterpriseInfo !== null ? (
                    <MainCard sx={{ mt: 3 }} title="가족회사 세부조회">
                        <FamilyEnterpriseInfo enterpriseInfo={enterpriseInfo}></FamilyEnterpriseInfo>
                    </MainCard>
                ) : null}
            </Grid>
        </Grid>
    );
};
export default FamilyEnterpriseTable;
