import axios, { InternalAxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

const instancesData = {
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const privateAxiosInstance = axios.create(instancesData);
export const publicAxiosInstance = axios.create(instancesData);

privateAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem('token')
	if (token && config.headers) {
		config.headers.Authorization = `${token}`;
	}
	return config;
});
