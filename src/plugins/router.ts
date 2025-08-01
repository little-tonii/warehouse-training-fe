import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../modules/auth/views/Login.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
