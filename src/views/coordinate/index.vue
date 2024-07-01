<script setup lang="ts">
	defineOptions({
		name: 'CoordinateView',
	})

	const activeName = ref('single')
</script>

<template>
	<div class="coordinate-view">
		<el-tabs v-model="activeName">
			<el-tab-pane label="单个转换" name="single">User</el-tab-pane>
			<el-tab-pane label="批量转换" name="multiple">Config</el-tab-pane>
		</el-tabs>
	</div>
</template>

<style lang="scss" scoped>
	.coordinate-view {
		width: 100%;
		height: 100%;
		padding: 0 var(--padding-default);
	}
</style>
