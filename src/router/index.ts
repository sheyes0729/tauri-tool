import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/home/index.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/about/index.vue'),
	},
	{
		path: '/coordinate',
		name: 'Coordinate',
		component: () => import('../views/coordinate/index.vue'),
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('../views/notfound/index.vue'),
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404',
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
