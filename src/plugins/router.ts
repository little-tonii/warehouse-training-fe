import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '../modules/auth/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../modules/auth/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../modules/not-found/views/NotFound.vue'),
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
  
  // Skip auth check for 404 page - always accessible
  if (to.name === 'NotFound') {
    next()
    return
  }
  
  // Nếu route yêu cầu auth và không có token
  if (to.meta.requiresAuth && !hasToken) {
    next('/login')
    return
  }
  
  // Nếu đã có token và đang vào trang login, redirect về dashboard (sẽ tạo sau)
  if ((to.path === '/login' || to.path === '/') && hasToken) {
    // TODO: Redirect to dashboard when created
    // next('/dashboard')
    next()
    return
  }
  
  next()
})

export default router 