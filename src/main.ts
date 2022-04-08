import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import 'vue-global-api'
import router from './router/index'

const app = createApp(App as any)
app.use(router).mount('#app')
