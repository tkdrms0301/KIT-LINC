import api from '../api';
const familyEnterpriseTable = {
    contentFilter: (filter) => api.post('api/company', { params: filter }),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }),
    export: (companyIdList) => api.post('api/company/export', companyIdList)
};
export default familyEnterpriseTable;
