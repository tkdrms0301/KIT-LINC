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
    const handleEnterpriseChange = (event, rows) => {
        setSelectedCompanyId(rows.companyId);
        requestCompanyInfo(rows.companyId);
    };
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
        console.log('test' + String(selectedCompanyId));
        familyEnterpriseTable
            .export()
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
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
                        selectedCompanyId={selectedCompanyId}
                        enterpriseRows={enterpriseRows}
                        handleEnterpriseChange={handleEnterpriseChange}
                    ></EnterpriseTable>
                </MainCard>
                {enterpriseInfo !== null ? (
                    <MainCard sx={{ mt: 3 }} title="가족회사 세부조회">
                        <FamilyEnterpriseInfo
                            enterpriseInfo={enterpriseInfo}
                            onClickExportExcelFile={onClickExportExcelFile}
                        ></FamilyEnterpriseInfo>
                    </MainCard>
                ) : null}
            </Grid>
        </Grid>
    );
};
export default FamilyEnterpriseTable;
