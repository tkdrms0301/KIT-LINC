import api from '../api';
import config from '../config';

const loginApi = {
    login: (formData) => api.post('api/member/login', formData, config),
    logout: () => api.post('api/member/logout', null, config)
};
export default loginApi;
