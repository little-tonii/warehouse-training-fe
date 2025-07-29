import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios'
import { useAuthStore } from '@/modules/auth/stores/auth'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
})

api.interceptors.request.use(
  (config: any) => {
    const authStore = useAuthStore()
    const token = authStore.getAccessToken()
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const authStore = useAuthStore()
    if (error.response?.status === 401 || error.response?.status === 403) {
      authStore.clearAccessToken()
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api 