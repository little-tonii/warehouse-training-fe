import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '../modules/auth/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../modules/dashboard/views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../modules/auth/views/Login.vue'),
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const hasToken = authStore.hasAccessToken
  
  // Nếu route yêu cầu auth và không có token
  if (to.meta.requiresAuth && !hasToken) {
    next('/login')
    return
  }
  
  // Nếu đã có token và đang vào trang login
  if (to.path === '/login' && hasToken) {
    next('/')
    return
  }
  
  next()
})

export default router 