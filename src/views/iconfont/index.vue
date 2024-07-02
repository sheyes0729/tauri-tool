<script setup lang="ts">
	import { ref } from 'vue'

	defineOptions({
		name: 'IconView',
	})
	//@import url('https://at.alicdn.com/t/c/font_3931718_yx38s10w0hb.css');

	const iconfontLink = ref<string>('https://at.alicdn.com/t/c/font_3931718_yx38s10w0hb.css')

	const icons = ref<string[]>([])

	async function getIcons() {
		icons.value = []
		const res = await fetch(iconfontLink.value)
		const data = await res.text()
		console.log(data)
		const reg = /\.icon-(\w*):before/g
		const result = data.match(reg)
		if (!result) return
		result.forEach((ele) => {
			const res = ele.match(/\.icon-(\w*):before/)?.[1]
			res && icons.value.push(res)
		})
		console.log('result: ', icons.value)
	}

	// function insertOrRemoveLink(link) {
	//   const links = document.querySelector('link')
	// }

	function getClassName(name: string) {
		return `iconfont icon-${name}`
	}
</script>

<template>
	<div class="iconfont-view">
		<nav-bar title="iconfont预览" />
		<div class="iconfont-input">
			<el-space>
				<el-input v-model="iconfontLink" placeholder="输入iconfont css链接" clearable />
				<el-button type="primary" @click="getIcons">
					<mdi-icon name="remove_red_eye" class="m-r-8" />
					<span> 预览 </span>
				</el-button>
			</el-space>
		</div>
		<div class="iconfont-content m-t-8" v-if="icons.length">
			<div class="iconfont-item" v-for="item in icons" :key="item">
				<i :class="getClassName(item)"></i>
				<div class="name text-ellipsis">{{ item }}</div>
			</div>
		</div>

		<el-empty description="暂无图标" v-else />
	</div>
</template>

<style scoped>
	.iconfont-input {
		display: flex;
		justify-content: flex-end;
	}

	.iconfont-content {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 10px;

		.iconfont-item {
			width: 160px;
			height: 160px;

			display: flex;
			flex-direction: column;
			gap: var(--padding-default);
			align-items: center;
			justify-content: center;
			background-color: #ffffff;
			border-radius: var(--radius-default);
			cursor: pointer;

			&:hover {
				box-shadow: 0 0 8px var(--color-border);
			}

			.name {
				width: 96px;
				text-align: center;
			}
		}
	}

	.iconfont {
		font-size: var(--font-extra-large);
	}
</style>
