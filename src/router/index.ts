import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:meta-layouts'
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
