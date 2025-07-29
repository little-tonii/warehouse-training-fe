<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <div class="mx-auto flex w-full flex-col justify-center space-y-10 sm:w-[420px] lg:w-[450px]">
      <!-- 404 Icon -->
      <div class="flex flex-col space-y-4 text-center">
        <div class="mx-auto w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mb-4 shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <div class="text-9xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">404</div>
        <div class="h-1 w-20 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full"></div>
      </div>

      <!-- Content -->
      <div class="bg-white/90 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl p-8 sm:p-10">
        <div class="flex flex-col space-y-4 text-center">
          <h1 class="text-3xl font-bold text-slate-800">
            Trang không tồn tại
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển đến địa chỉ khác.
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col space-y-4 mt-8">
          <button
            @click="goHome"
            class="inline-flex items-center justify-center rounded-2xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 h-14 px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg class="mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Về trang chủ
          </button>

          <button
            @click="goBack"
            class="inline-flex items-center justify-center rounded-2xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 h-14 px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg class="mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Quay lại
          </button>
        </div>

        <!-- Help Links -->
        <div class="flex justify-center space-x-6 mt-8 pt-6 border-t border-slate-200">
          <button
            @click="goToLogin"
            class="text-base font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Đăng nhập
          </button>
          <button
            @click="refreshPage"
            class="text-base font-medium text-slate-600 hover:text-slate-700 transition-colors"
          >
            Làm mới trang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNotFoundStore } from '../stores/notFound'

const router = useRouter()
const route = useRoute()
const notFoundStore = useNotFoundStore()

// Methods
const goHome = () => {
  router.push('/login')
}

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    goHome()
  }
}

const goToLogin = () => {
  router.push('/login')
}

const refreshPage = () => {
  window.location.reload()
}

// Initialize store
onMounted(() => {
  notFoundStore.init(route.fullPath)
})
</script> 