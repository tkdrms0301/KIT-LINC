import api from '../api';
import config from '../config';

const approveProjectApi = {
    contentAll: () => api.get('api/request', null, config),
    contentFilter: (filter) => api.get('api/request', { params: filter }, config),
    approve: (status) => api.post('api/request/status', status, config),
    reject: (status) => api.post('api/request/status', status, config),
    pending: (status) => api.post('api/request/status', status, config)
};
export default approveProjectApi;
