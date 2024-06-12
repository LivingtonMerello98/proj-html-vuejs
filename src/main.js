import { router } from './router'
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "@fortawesome/fontawesome-free/js/all.js";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

createApp(App).use(router).mount('#app')
