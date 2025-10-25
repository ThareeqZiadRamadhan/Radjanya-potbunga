// src/main.ts (BARU)
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fontsource/poppins/400.css' // Regular
import '@fontsource/poppins/500.css' // Medium
import '@fontsource/poppins/600.css' // Semi-Bold
import '@fontsource/poppins/700.css' // Bold
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
import App from './App.vue'
import router from './Router' 
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router) // <-- 2. Beri tahu Vue untuk menggunakan router

app.mount('#app')