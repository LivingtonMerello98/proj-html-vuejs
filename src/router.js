import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContacts from './pages/AppContacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'about',
            path: '/about',
            component: AppAbout
        },
        {
            name: 'contacts',
            path: '/contacts',
            component: AppContacts
        },
    ],
});

export { router };