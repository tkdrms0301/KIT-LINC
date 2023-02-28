import api from '../api';
import config from '../config';
const registerProjectApi = {
    contentSubmit: (form) => api.post('api/request/care365', form, config),
    contentForm: () => api.get('api/member/requestform', null, config),
    companyInfo: () => api.get('api/member/requestform', null, config),
    contentFilter: (filter) => api.post('api/company', filter, config),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }, config)
};
export default registerProjectApi;
