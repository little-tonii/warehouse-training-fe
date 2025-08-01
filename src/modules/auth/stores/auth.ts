import axios from 'axios';
import { defineStore } from 'pinia';

const api = import.meta.env.VITE_API_BASE_URL;
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as any,
        isAuthenticated: false,
        loading: false,
        error: null as string | null,
    }),

    getters: {
        // Add your getters here
    },

    actions: {
        // Add your login logic here
        async login(credentials: { username: string; password: string }) {
            // Your login implementation
            this.setLoading(true);
            this.setError(null);
            try {
                const { username, password } = credentials;
                const response = await axios.post(`${api}/auth/login`, {
                    username,
                    password,
                });

                const token = response.data.access_token;
                localStorage.setItem('token', token);
                this.isAuthenticated = true;

                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${token}`;
            } catch (err: any) {
                this.setError(
                    err.response?.data?.message || 'Đăng nhập thất bại'
                );
            } finally {
                this.setLoading(false);
            }
        },

        logout() {
            // Your logout implementation
            localStorage.removeItem('token');
            this.user = null;
            this.isAuthenticated = false;
            delete axios.defaults.headers.common['Authorization'];
        },

        setLoading(loading: boolean) {
            this.loading = loading;
        },

        setError(error: string | null) {
            this.error = error;
        },
    },
});
