<script setup>
	import { onBeforeMount, ref } from 'vue'

	defineOptions({
		name: 'IconView',
	})

	const icons = ref([])
	onBeforeMount(async () => {
		const res = await fetch('https://at.alicdn.com/t/c/font_3931718_yx38s10w0hb.css')
		const data = await res.text()
		console.log(data)
		const reg = /\.icon-(\w*):before/g
		const result = data.match(reg)
		result.forEach((ele) => {
			const res = ele.match(/.icon-(\w*):before/)[1]
			icons.value.push(res)
		})
	})

	function getClassName(name) {
		return `iconfont icon-${name}`
	}
</script>

<template>
	<div class="iconfont-view">
		<div class="iconfont-item" v-for="item in icons" :key="item">
			<i :class="getClassName(item)"></i>
			<div>{{ item }}</div>
		</div>
	</div>
</template>

<style scoped>
	@import url('https://at.alicdn.com/t/c/font_3931718_yx38s10w0hb.css');

	.iconfont-view {
		display: flex;

		flex-wrap: wrap;
		gap: 10px;

		.iconfont-item {
			width: 160px;
			height: 160px;

			display: flex;
			flex-direction: column;
			gap: var(--padding-default);
			align-items: center;
		}
	}

	.iconfont {
		font-size: var(--font-extra-large);
	}
</style>
