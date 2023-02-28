import axios from 'axios';
import api from '../api';
const EnterpriseSignupApi = {
    contentAll: api.get('api/request'),
    contentFilter: (filter) => api.get('api/request', { params: filter })
};
export default EnterpriseSignupApi;
