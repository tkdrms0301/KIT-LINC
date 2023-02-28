import api from '../api';
import config from '../config';
const PostTableApi = {
    contentAll: (page) => api.get('api/project', { params: page }, config),
    contentFilter: (filter) => api.get('api/project', { params: filter }, config),
    contentDetail: (companyId) => api.get('api/company', { params: companyId }, config),
    contentDetailForm: () => api.get('api/member/requestform', null, config),
    contentDetailFormRequestId: (requestId) => api.get('api/request/detail', { params: requestId }, config)
};
export default PostTableApi;
