import { Box, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MainCard from 'components/MainCard';
import EnterpriseTable from './EnterpriseTable';
import enterpriseRows from './dummy';
import Search from './Search';
import FamilyEnterpriseInfo from './FamilyEnterpriseInfo';
import axios from 'axios';
import familyEnterpriseTable from '../../api/difficult-tech/FamilyEnterpriseTable';

const FamilyEnterpriseTable = () => {
    const [selectedCompanyId, setSelectedCompanyId] = useState('');
    const handleEnterpriseChange = (e, rows) => {
        setSelectedCompanyId(rows.companyId);
        requestCompanyInfo(rows.companyId);
    };
    const [checkList, setCheckList] = useState([]);
    const searchInputRef = useRef();
    const [selected, setSelected] = useState({
        companyType: '1',
        category: '1',
        growthDegree: '1'
    });
    const [enterpriseInfo, setEnterpriseInfo] = useState(null);
    // const [enterpriseRows, setEnterpriseRows] = useState();

    const onChangeSelected = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setSelected({
            ...selected,
            [name]: value
        });
    };

    const onSubmitSearchInput = () => {
        const filter = {
            companyType: selected.companyType,
            category: selected.category,
            growthDegree: selected.growthDegree,
            compnayName: searchInputRef.current.value
        };
        familyEnterpriseTable
            .contentFilter(filter)
            .then((res) => {
                console.log(res);
                //setEnterpriseRows(res.data.data)
            })
            .catch((err) => console.log(err));
    };
    const requestCompanyInfo = (companyId) => {
        console.log(companyId);
        familyEnterpriseTable
            .contentDetail(companyId)
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
        const enterpriseInfo = {
            categoryList: '2',
            companyName: '회사명',
            companyType: '2',
            growthDegree: '2',

            startFoundingDate: '2022-09-01T00:00:00.000+00:00',
            startNumberEmployees: '100',
            startYearSales: '1000',
            endFoundingDate: '2022-09-01T00:00:00.000+00:00',
            endNumberEmployees: '100',
            endYearSales: '1000'
        };
        setEnterpriseInfo(enterpriseInfo);
    };
    const onClickExportExcelFile = () => {
        let enterpriseList = [];
        enterpriseRows.map((row, index) => (checkList.includes(String(index)) ? enterpriseList.push(row.companyId) : null));
        console.log(enterpriseList);
        familyEnterpriseTable
            .export(enterpriseList)
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    const onChangeAllCheck = (e) => {
        const { value, checked } = e.target;
        let list = [];
        if (checked) {
            enterpriseRows.map((row, i) => (list[i] = String(i)));
        }
        setCheckList(list);
    };

    const onChangeSingleCheck = (e) => {
        const { value, checked } = e.target;
        let updateCheckList = [...checkList];
        if (checked) {
            updateCheckList = [...checkList, value];
        } else {
            updateCheckList.splice(checkList.indexOf(value), 1);
        }
        setCheckList(updateCheckList);
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
