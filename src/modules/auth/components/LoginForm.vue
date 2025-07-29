<template>
  <v-form @submit.prevent="handleLogin" ref="form">
    <!-- Username Field -->
    <v-text-field
      v-model="form.username"
      label="Tên đăng nhập"
      prepend-inner-icon="mdi-account"
      variant="outlined"
      :rules="[rules.required]"
      class="mb-4"
      :disabled="loading"
    />

    <!-- Password Field -->
    <v-text-field
      v-model="form.password"
      label="Mật khẩu"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
      :rules="[rules.required, rules.minLength]"
      class="mb-6"
      :disabled="loading"
    />

    <!-- Error Message -->
    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      class="mb-4"
      closable
      @click:close="clearError"
    >
      {{ error }}
    </v-alert>

    <!-- Login Button -->
    <v-btn
      type="submit"
      color="primary"
      size="large"
      block
      :loading="loading"
      :disabled="loading"
      class="mb-4 font-medium"
    >
      <v-icon left>mdi-login</v-icon>
      Đăng nhập
    </v-btn>

    <!-- Remember Me -->
    <div class="flex items-center justify-between mb-4">
      <v-checkbox
        v-model="form.rememberMe"
        label="Ghi nhớ đăng nhập"
        color="primary"
        hide-details
        :disabled="loading"
      />
      <v-btn
        variant="text"
        color="primary"
        size="small"
        :disabled="loading"
      >
        Quên mật khẩu?
      </v-btn>
    </div>
  </v-form>
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

// Form validation rules
const rules = {
  required: (value: string) => !!value || 'Trường này là bắt buộc',
  minLength: (value: string) => value.length >= 6 || 'Tối thiểu 6 ký tự'
}

// Form reference
const formRef = ref()

// Methods
const handleLogin = async () => {
  const { valid } = await formRef.value?.validate()
  
  if (valid) {
    // Your login logic here
    console.log('Login attempt:', form)
  }
}

const clearError = () => {
  authStore.setError(null)
}
</script> 