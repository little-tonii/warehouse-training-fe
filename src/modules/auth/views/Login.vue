<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <v-card class="w-full max-w-md mx-auto shadow-2xl rounded-2xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center">
        <h1 class="text-2xl font-bold text-white mb-2">
          Warehouse Training
        </h1>
        <p class="text-blue-100 text-sm">
          Đăng nhập vào hệ thống
        </p>
      </div>

      <!-- Login Form -->
      <div class="px-8 py-6">
        <LoginForm />

        <!-- Demo Credentials -->
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="text-sm font-medium text-gray-700 mb-2">
            Demo Credentials:
          </h3>
          <div class="text-xs text-gray-600 space-y-1">
            <p><strong>Username:</strong> admin</p>
            <p><strong>Password:</strong> password</p>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
</script> 