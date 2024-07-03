<script setup lang="ts">
	import { createPatch } from 'diff'
	import { html } from 'diff2html'
	import { LineMatchingType, OutputFormatType } from 'diff2html/lib-esm/types'
	import 'diff2html/bundles/css/diff2html.min.css'

	defineOptions({
		name: 'TextView',
	})

	const originText = ref('')
	const compareText = ref('')

	const textContent = shallowRef<HTMLDivElement>()

	function clearText() {
		originText.value = ''
		compareText.value = ''
		compare()
	}

	const configuration = {
		drawFileList: false,
		matching: 'lines' as LineMatchingType,
		outputFormat: 'side-by-side' as OutputFormatType,
	}

	function compare() {
		const unifiedDiff = createPatch('文本对比', originText.value, compareText.value)
		const htmlStr = html(unifiedDiff, configuration)
		console.log(htmlStr)
		textContent.value!.innerHTML = htmlStr
	}
</script>

<template>
	<div class="text-view">
		<nav-bar title="文本差异对比" />

		<div class="text-view-input m-t-8">
			<el-input v-model="originText" type="textarea" :rows="12" placeholder="原始文本" />
			<el-input v-model="compareText" type="textarea" :rows="12" placeholder="对比文本" />
		</div>

		<el-space class="m-t-8">
			<el-button type="primary" plain @click="compare">
				<mdi-icon name="check" class="m-r-6" />
				对比
			</el-button>
			<el-button type="danger" plain @click="clearText">
				<mdi-icon name="delete" class="m-r-6" />
				清空
			</el-button>
		</el-space>

		<div class="text-view-content m-t-8" ref="textContent"></div>
	</div>
</template>

<style scoped lang="scss">
	.text-view {
		height: 100%;
		width: 100%;

		&-input {
			display: flex;
			gap: var(--padding-small);
		}

		&-content {
			position: relative;
		}
	}
</style>
