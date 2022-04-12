import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import 'vue-global-api'
import router from './router/index'
import 'utils/nprogress'
import { createPinia } from 'pinia'

const app = createApp(App as any)
app.use(router)
    .use(createPinia()) // 注册状态管理工具pinia
    .mount('#app')
