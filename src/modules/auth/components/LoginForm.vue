<template>
  <form @submit.prevent="handleLogin" class="space-y-8">
    <!-- Username Field -->
    <div class="space-y-4">
      <label for="username" class="text-base font-semibold text-slate-700">
        Tên đăng nhập
      </label>
      <input
        id="username"
        v-model="form.username"
        type="text"
        :disabled="loading"
        class="flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base placeholder:text-slate-400 focus:outline-none focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        placeholder="Nhập tên đăng nhập"
      />
    </div>

    <!-- Password Field -->
    <div class="space-y-4">
      <label for="password" class="text-base font-semibold text-slate-700">
        Mật khẩu
      </label>
      <div class="relative">
        <input
          id="password"
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          :disabled="loading"
          class="flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base placeholder:text-slate-400 focus:outline-none focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors pr-14"
          placeholder="Nhập mật khẩu"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
        >
          <svg v-if="showPassword" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="rounded-2xl border border-red-200 bg-red-50 p-5">
      <div class="flex items-start">
        <svg class="h-6 w-6 text-red-500 mt-0.5 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-base text-red-700 flex-1">{{ error }}</p>
        <button
          @click="clearError"
          class="text-red-400 hover:text-red-600 transition-colors ml-3 p-1"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Login Button -->
    <button
      type="submit"
      :disabled="loading"
      class="inline-flex w-full items-center justify-center rounded-2xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 h-14 px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
    >
      <svg v-if="loading" class="mr-4 h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <svg v-else class="mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
      </svg>
      {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
    </button>

    <!-- Remember Me & Forgot Password -->
    <div class="flex items-center justify-between pt-4">
      <div class="flex items-center space-x-4">
        <input
          id="remember"
          v-model="form.rememberMe"
          type="checkbox"
          :disabled="loading"
          class="h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
        />
        <label for="remember" class="text-base text-slate-600">
          Ghi nhớ đăng nhập
        </label>
      </div>
      <button
        type="button"
        :disabled="loading"
        class="text-base font-medium text-purple-600 hover:text-purple-700 transition-colors"
      >
        Quên mật khẩu?
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useAuthStore } from '../stores/auth'

// Store
const authStore = useAuthStore()

// Form data
const form = reactive({
  username: '',
  password: '',
  rememberMe: false
})

// UI state
const showPassword = ref(false)
const loading = computed(() => authStore.loading)
const error = computed(() => authStore.error)

import { useRouter } from 'vue-router'

// Router
const router = useRouter()

// Methods
const handleLogin = async () => {
  // Simple validation
  if (!form.username || !form.password) {
    authStore.setError('Vui lòng nhập đầy đủ thông tin')
    return
  }
  
  try {
    await authStore.login(form)
    // Redirect to dashboard after successful login
    router.push('/')
  } catch (error) {
    // Error is already handled in store
    console.error('Login failed:', error)
  }
}

const clearError = () => {
  authStore.setError(null)
}
</script> 