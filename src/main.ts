import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import 'normalize.css'
import './style/global.scss'
import './style/elementplus.scss'

import vxeTable from '@/lib/utils/vxeTable'

const app = createApp(App)

app.use(router)

app.use(vxeTable)

router.isReady().then(() => {
	app.mount('#app')
})
