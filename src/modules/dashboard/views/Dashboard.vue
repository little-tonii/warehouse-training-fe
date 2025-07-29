<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-6">
            Dashboard
          </h1>
          
          <div class="mb-6">
            <p class="text-gray-600 mb-4">
              Chào mừng bạn đến với Warehouse Training Dashboard!
            </p>
            <p class="text-sm text-gray-500">
              Access Token: {{ maskedToken }}
            </p>
          </div>
          
          <div class="flex space-x-4">
            <v-btn
              color="primary"
              @click="handleLogout"
              :loading="loading"
            >
              <v-icon left>mdi-logout</v-icon>
              Đăng xuất
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const loading = computed(() => authStore.loading)
const accessToken = computed(() => authStore.getAccessToken())

// Mask token for display
const maskedToken = computed(() => {
  const token = accessToken.value
  if (!token) return 'No token'
  return token.substring(0, 10) + '...' + token.substring(token.length - 10)
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script> 