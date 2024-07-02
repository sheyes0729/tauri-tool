<script setup lang="ts">
	defineOptions({
		name: 'NavBar',
	})

	export interface NavBarPropInterface {
		title?: string
	}

	withDefaults(defineProps<NavBarPropInterface>(), {
		title: 'Title',
	})
</script>

<template>
	<div class="nav-bar">
		<el-page-header @back="$router.go(-1)">
			<template #icon>
				<mdi-icon name="arrow_back_ios" hover style="color: var(--color-primary)" />
			</template>
			<template #content>
				<span class="text-large font-600 mr-3"> {{ title }} </span>
			</template>
		</el-page-header>
	</div>
</template>

<style scoped lang="scss"></style>
