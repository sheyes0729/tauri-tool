<script setup lang="ts">
	import { ref } from 'vue'
	import { ElMessage } from 'element-plus'

	defineOptions({
		name: 'IconView',
	})

	const iconfontLink = ref<string>('')

	const icons = ref<string[]>([])

	async function getIcons() {
		icons.value = []
		if (!iconfontLink.value) return ElMessage.error('请输入iconfont css链接')
		const linkRef = /^(https?:\/\/|\/\/)(.*)?\.css$/
		if (!linkRef.test(iconfontLink.value)) return ElMessage.error('请输入正确的iconfont css链接')
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

	function getClassName(name: string) {
		return `iconfont icon-${name}`
	}
</script>

<template>
	<div class="iconfont-view">
		<nav-bar title="iconfont预览" />
		<link rel="stylesheet" :href="iconfontLink" v-if="iconfontLink" />
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
		display: grid;
		justify-content: space-around;
		gap: var(--padding-small);
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

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
