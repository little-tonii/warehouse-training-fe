import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/modules/auth/stores/auth';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../modules/auth/views/Login.vue'),
        meta: { public: true },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/DashboardView.vue'),
    },
    {
        path: '/inbound',
        name: 'Inbound',
        component: () => import('../modules/inbound/views/InboundView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../modules/not-found/views/NotFound.vue'),
        meta: { requiresAuth: false },
    },
    {
        path: '/profile/edit',
        name: 'EditProfile',
        component: () => import('../modules/profile/EditProfileView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    const isLoggedIn = !!authStore.getAccessToken();
    const isPublic = to.meta.public === true;

    console.log('to.path:', to.path);
    console.log('isLoggedIn:', isLoggedIn);
    console.log('isPublic:', isPublic);

    if (to.name === 'Login' && isLoggedIn) {
        next('/dashboard');
    } else if (!isLoggedIn && !isPublic) {
        next('/');
    } else {
        next();
    }
});

export default router;
