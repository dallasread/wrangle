import { createApp } from 'vue'
import App from './app/component.vue'
import './registerServiceWorker.js'
import router from './app/router/index.js'

createApp(App).use(router).mount('#app')
