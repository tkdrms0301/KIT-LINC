import axios from 'axios';
import api from '../api';
const approveProjectApi = {
    contentAll: api.get('api/request'),
    contentFilter: (filter) => api.get('api/request', { params: filter }),
    approve: (status) => api.post('api/request/status', status),
    reject: (status) => api.post('api/request/status', status),
    pending: (status) => api.post('api/request/status', status)
};
export default approveProjectApi;
