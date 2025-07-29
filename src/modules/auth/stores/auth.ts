import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    isAuthenticated: false,
    loading: false,
    error: null as string | null
  }),
  
  getters: {
    // Add your getters here
  },
  
  actions: {
    // Add your login logic here
    async login(credentials: { username: string; password: string }) {
      // Your login implementation
    },
    
    logout() {
      // Your logout implementation
    },
    
    setLoading(loading: boolean) {
      this.loading = loading
    },
    
    setError(error: string | null) {
      this.error = error
    }
  }
}) 