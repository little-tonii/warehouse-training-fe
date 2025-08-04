import axios from 'axios';
import { useAuthStore } from '@/modules/auth/stores/auth';
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    timeout: 10000,
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        const authStore = useAuthStore();
        if (error.response?.status === 401) {
            authStore.clearAccessToken();
            window.location.href = '/';
        }

        console.error(
            'API Error:',
            error.response?.data?.message || error.message
        );

        return Promise.reject(error);
    }
);

export default api;
