<script setup lang="ts">
	defineOptions({
		name: 'NotFoundView',
	})
</script>

<template>
	<div class="not-found-view flex align-center justify-center">
		<el-empty description="404页面找不到">
			<el-button type="primary" @click="$router.push('/')">
				<mdi-icon name="home" class="m-r-6" />
				<span>返回首页</span>
			</el-button>
		</el-empty>
	</div>
</template>

<style scoped lang="scss">
	.not-found-view {
		width: 100%;
		height: 100%;
	}
</style>
