import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'

const routeer = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
    ],
});