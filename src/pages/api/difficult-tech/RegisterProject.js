import api from '../api';
const registerProjectApi = {
    companyInfo: api.get('api/member/requestform', null),
    contentFilter: (filter) => api.post('api/company', filter),
    contentDetail: (companyId) => api.get('api/company', { params: companyId })
};
export default registerProjectApi;
