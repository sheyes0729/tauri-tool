<script setup lang="ts">
	import DefaultLayoutHeader from '@/layouts/components/header.vue'

	defineOptions({
		name: 'DefaultLayout',
	})
</script>

<template>
	<div class="default-layout">
		<default-layout-header />
		<section class="default-layout-content">
			<router-view />
		</section>
	</div>
</template>

<style scoped lang="scss">
	.default-layout {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--color-bg);

		&-content {
			flex: 1;
			overflow: auto;
			padding: var(--padding-small);
		}
	}
</style>
