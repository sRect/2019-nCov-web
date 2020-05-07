const baseURL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://192.168.0.113:8097';
const statusCode = {
	success: 200,
};

export { baseURL, statusCode };
