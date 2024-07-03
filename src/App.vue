<script setup lang="ts">
	import localeZH from 'element-plus/es/locale/lang/zh-cn'
	import { invoke } from '@tauri-apps/api'
	import { appWindow, UserAttentionType } from '@tauri-apps/api/window'
	import { setTheme } from './lib/utils/themeUtil'

	onMounted(() => {
		const primaryColor = localStorage.primaryColor || '#008c63'
		setTheme(primaryColor)

		if (!process.env.TAURI_DEBUG) {
			document.addEventListener('contextmenu', (e) => {
				e.preventDefault()
			})
		}
		setTimeout(async () => {
			// close splashscreen
			await invoke('close_splashscreen')
			await appWindow.requestUserAttention(UserAttentionType.Informational)
		}, 1500)
	})
</script>

<template>
	<el-config-provider :locale="localeZH">
		<router-view />
	</el-config-provider>
</template>

<style scoped></style>
