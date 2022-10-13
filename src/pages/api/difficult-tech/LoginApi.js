import api from '../api';
import config from '../config';

const loginApi = {
    login: (formData) => api.post('member/login', formData, config),
    logout: () => api.post('member/logout', null, config)
};
export default loginApi;
