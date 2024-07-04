<script setup lang="ts">
	import { Editor as MarkdownEditor } from '@bytemd/vue-next'
	import 'bytemd/dist/index.min.css'
	import zhHans from 'bytemd/lib/locales/zh_Hans.json'
	import breaks from '@bytemd/plugin-breaks'
	import frontmatter from '@bytemd/plugin-frontmatter'
	import gemoji from '@bytemd/plugin-gemoji'
	import gfm from '@bytemd/plugin-gfm'
	import gfmZhHans from '@bytemd/plugin-gfm/locales/zh_Hans.json'
	import highlight from '@bytemd/plugin-highlight'
	import highlightSsr from '@bytemd/plugin-highlight-ssr'
	import math from '@bytemd/plugin-math'
	import mathZhHans from '@bytemd/plugin-math/locales/zh_Hans.json'
	import mediumZoom from '@bytemd/plugin-medium-zoom'
	import mermaid from '@bytemd/plugin-mermaid'
	import mermaidZhHans from '@bytemd/plugin-mermaid/locales/zh_Hans.json'
	import themes from '@/lib/plugins/bytemd-plugin-theme.ts'
	import { BytemdPlugin } from 'bytemd'

	defineOptions({
		name: 'MarkdownView',
	})

	const plugins: BytemdPlugin[] = [
		breaks(),
		frontmatter(),
		gemoji(),
		gfm({
			locale: gfmZhHans,
		}),
		highlight(),
		highlightSsr(),
		math({
			locale: mathZhHans,
		}),
		mediumZoom(),
		mermaid({
			locale: mermaidZhHans,
		}),
		themes(),
	]

	const md = ref('')

	function onMdChange(e: string) {
		md.value = e
	}

	function uploadImages(files) {
		// 上传图片
		return [
			{
				title: 'avatar',
				url: 'https://p26-passport.byteacctimg.com/img/user-avatar/f666355bc0dfe23de812045628ffe140~40x40.awebp',
			},
		]
	}
</script>

<template>
	<div class="markdown-view">
		<nav-bar title="markdown编辑器" class="m-b-8" />
		<MarkdownEditor
			:value="md"
			:locale="zhHans"
			:upload-images="uploadImages"
			:plugins="plugins"
			@change="onMdChange"
		/>
	</div>
</template>

<style scoped lang="scss">
	.markdown-view {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

		:deep(.bytemd) {
			height: calc(100vh - 76px);
		}
	}
</style>
