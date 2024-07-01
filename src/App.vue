<script setup lang="ts">
	import { invoke } from '@tauri-apps/api'
	import { appWindow, UserAttentionType } from '@tauri-apps/api/window'
	import { setTheme } from './lib/utils/themeUtil'
	onMounted(() => {
		const primaryColor = localStorage.primaryColor || '#ec4141'
		setTheme(primaryColor)

		document.addEventListener('contextmenu', (e) => {
			e.preventDefault()
		})
		setTimeout(async () => {
			// close splashscreen
			await invoke('close_splashscreen')
			await appWindow.requestUserAttention(UserAttentionType.Informational)
		}, 1500)
	})
</script>

<template>
	<router-view />
</template>

<style scoped></style>
