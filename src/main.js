import { router } from './router'
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import "@fortawesome/fontawesome-free/js/all.js";


import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/100.css"; // Specify weight
import "@fontsource/poppins/200.css"; // Specify weight
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "@fontsource/poppins/500.css"; // Import weight 500
import "@fontsource/poppins/600.css"; // Import weight 600
import "@fontsource/poppins/700.css"; // Import weight 700
import "@fontsource/poppins/800.css"; // Import weight 800

createApp(App).use(router).mount('#app')
