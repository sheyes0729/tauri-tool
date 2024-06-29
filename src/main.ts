import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import 'normalize.css'
import './style/global.scss'
import './style/elementplus.scss'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
	app.mount('#app')
})
