import api from '../api';
const familyEnterpriseTable = {
    contentFilter: (filter) => api.post('api/company', filter),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }),
    export: (companyIdList) => api.post('api/company/export', { params: companyIdList })
};
export default familyEnterpriseTable;
