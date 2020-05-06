import axiosInstance from './config';

const api = {
	getUuid: () => axiosInstance.get('https://httpbin.org/uuid'),
};

export default api;
