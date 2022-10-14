import api from '../api';
import config from '../config';
const registerProjectApi = {
    companyInfo: () => api.get('api/member/requestform', null, config),
    contentFilter: (filter) => api.post('api/company', filter, config),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }, config)
};
export default registerProjectApi;
