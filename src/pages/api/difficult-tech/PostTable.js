import api from '../api';
const familyEnterpriseTable = {
    contentAll: '',
    contentFilter: (filter) => api.post('api/company', filter),
    contentDetail: (companyId) => api.get('api/company', { params: companyId })
};
export default familyEnterpriseTable;
