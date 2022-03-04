import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import AppLink from '@/components/AppLink.vue'
import NavLink from '@/components/NavLink.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './app.scss'

const app = createApp(App)

.component('AppLink', AppLink)
.component('NavLink', NavLink)

//.component('NavLink', NavLink)

app.use(router)

app.mount('#app')
