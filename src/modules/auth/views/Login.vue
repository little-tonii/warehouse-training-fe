<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
        <div
            class="mx-auto flex w-full flex-col justify-center space-y-10 sm:w-[420px] lg:w-[450px]"
        >
            <!-- Header -->
            <div class="flex flex-col space-y-4 text-center">
                <div
                    class="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
                >
                    <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                    </svg>
                </div>
                <h1
                    class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                    Warehouse Training
                </h1>
                <p class="text-lg text-slate-600">
                    Đăng nhập vào hệ thống quản lý
                </p>
            </div>

            <!-- Login Form -->
            <div
                class="bg-white/90 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl p-8 sm:p-10"
            >
                <LoginForm />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
</script>
