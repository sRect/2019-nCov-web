import axiosInstance from './config';

const api = {
	getUuid: () => axiosInstance.get('https://httpbin.org/uuid'),
	getListByCountryTypeService2true: ({ continents, orderQuery, pageNum, pageSize }) =>
		axiosInstance.post('/api/getListByCountryTypeService2true', {
			continents,
			orderQuery,
			pageNum,
			pageSize,
		}),
	getAreaStat: () => axiosInstance.get('/api/getAreaStat'),
	refresh: () => axiosInstance.get('/refresh'),
};

export default api;
