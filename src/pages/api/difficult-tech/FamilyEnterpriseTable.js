import api from '../api';
import config from '../config';

const familyEnterpriseTable = {
    contentFilter: (filter) => api.post('api/company', { params: filter }, config),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }, config),
    export: (companyIdList) => api.post('api/company/export', companyIdList, config)
};
export default familyEnterpriseTable;
