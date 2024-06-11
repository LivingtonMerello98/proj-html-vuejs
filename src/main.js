import { router } from './router'

import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all.js';
createApp(App).use(router).mount('#app')
