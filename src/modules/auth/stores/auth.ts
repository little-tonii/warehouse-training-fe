import axios from 'axios';
import { defineStore } from 'pinia';

const baseURL = import.meta.env.VITE_API_BASE_URL;
export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: null as string | null,
        loading: false,
        error: null as string | null,
    }),

    getters: {
        isAuthenticated: state => !!state.accessToken,
        hasAccessToken: state => !!state.accessToken,
    },

    actions: {
        setAccessToken(token: string) {
            this.accessToken = token;
            // Lưu vào localStorage để persist
            localStorage.setItem('accessToken', token);
        },

        getAccessToken(): string | null {
            // Ưu tiên lấy từ state, nếu không có thì lấy từ localStorage
            if (this.accessToken) return this.accessToken;

            const token = localStorage.getItem('accessToken');
            if (token) {
                this.accessToken = token;
                return token;
            }

            return null;
        },

        clearAccessToken() {
            this.accessToken = null;
            localStorage.removeItem('accessToken');
        },

        async login(credentials: { username: string; password: string }) {
            this.setLoading(true);
            this.setError(null);

            try {
                const response = axios.post(
                    `${baseURL}/auth/login`,
                    credentials
                );

                const token = (await response).data.access_token;
                if (token) {
                    this.setAccessToken(token);
                }
            } catch (error) {
                this.setError('Đăng nhập thất bại');
                throw error;
            } finally {
                this.setLoading(false);
            }
        },

        logout() {
            this.clearAccessToken();
        },

        setLoading(loading: boolean) {
            this.loading = loading;
        },

        setError(error: string | null) {
            this.error = error;
        },

        // Initialize auth state from localStorage
        initAuth() {
            const token = localStorage.getItem('access_token');
            if (token) {
                this.accessToken = token;
            }
        },
    },
});
