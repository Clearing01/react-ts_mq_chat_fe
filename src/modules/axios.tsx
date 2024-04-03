import Axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

export interface HttpResponse<T = unknown> {
	data: T;
	code: string;
	status: string;
	message?: string;
}

const TIMEOUT = 30000;

const api: AxiosInstance = Axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	timeout: TIMEOUT,
});

api.interceptors.response.use(
	(res: AxiosResponse<HttpResponse>) => {
		if (res.data) {
			return res;
		}
		errorStatus(res);
		return Promise.reject(res);
	},
	async (error) => {
		const response = error.response;
		errorStatus(response);
		return await Promise.reject(response);
	}
);
api.interceptors.request.use((req: AxiosRequestConfig): any => {
	req.headers = authHeader(req);
	return req;
});

const authHeader = (req: AxiosRequestConfig): any => {
	const token = localStorage.getItem('id');
	if (token) {
		req.headers!.Authorization = token;
	}
	return req.headers;
};

const errorStatus = (response: AxiosResponse): any => {
	switch (response?.status) {
		case 400:
			break;
		case 401:
			break;
		case 403:
			break;
		case 404:
			break;
		case 405:
			break;
		case 406:
			break;
		case 408:
			break;
		case 409:
			break;
		case 500:
			break;
		case 501:
			break;
		case 502:
			break;
		case 504:
			break;
		default: {
			break;
		}
	}
};

export default api;
