import api from '../api';
const familyEnterpriseTable = {
    contentFilter: (filter) => api.post('api/company', filter),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }),
    export: (companyId) => api.post('api/company/export', { params: companyId })
};
export default familyEnterpriseTable;
