<script setup lang="ts">
	import DefaultLayoutHeader from '@/layouts/components/header.vue'

	defineOptions({
		name: 'DefaultLayout',
	})

	const defaultLayoutContent = shallowRef<HTMLElement>()

	const { y } = useScroll(defaultLayoutContent)

	function backToTop() {
		defaultLayoutContent.value?.scroll({
			behavior: 'smooth',
			top: 0,
			left: 0,
		})
	}
</script>

<template>
	<div class="default-layout">
		<default-layout-header />
		<section class="default-layout-content" ref="defaultLayoutContent">
			<router-view />
		</section>
		<div class="back-to-top" v-if="y >= 460">
			<el-button type="primary" size="large" circle @click="backToTop">
				<mdi-icon name="arrow_drop_up" />
			</el-button>
		</div>
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

		.back-to-top {
			position: fixed;
			right: 40px;
			bottom: 40px;
		}
	}
</style>
