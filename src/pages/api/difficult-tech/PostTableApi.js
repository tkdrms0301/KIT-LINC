import api from '../api';
const PostTableApi = {
    contentAll: (page) => api.get('api/project', { params: page }),
    contentFilter: (filter) => api.get('api/project', { params: filter }),
    contentDetail: (companyId) => api.get('api/company', { params: companyId })
};
export default PostTableApi;
