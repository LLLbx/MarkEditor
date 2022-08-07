import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './router'
import { createPinia } from 'pinia' 
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(route).use(pinia).mount('#app')
