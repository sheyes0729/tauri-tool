<script lang="ts" setup>
	import { getAssetsUrl } from '@/lib/utils/assetsUrl'
	import { Windows } from '@/lib/utils/windows'
	import { onBeforeUnmount, onMounted } from 'vue'

	defineOptions({
		name: 'HomeView',
	})

	export interface HomtItemInterface {
		title: string
		icon: string
		url: string
		label: string
	}

	const itemList: Array<HomtItemInterface> = [
		{
			title: '表格数据转换',
			label: 'excel',
			url: '/#/excel',
			icon: getAssetsUrl('img/excel-icon.png'),
		},
		{
			title: 'PDF工具',
			label: 'pdf',
			url: '/#/pdf',
			icon: getAssetsUrl('img/pdf-icon.png'),
		},
		{
			title: 'Markdown编辑',
			label: 'markdown',
			url: '/#/markdown',
			icon: getAssetsUrl('img/markdown-icon.png'),
		},
		{
			title: '坐标转换',
			label: 'coordinates',
			url: '/#/coordinate',
			icon: getAssetsUrl('img/coordinates-icon.png'),
		},
		{
			title: 'Iconfont图标预览',
			label: 'IconFont',
			url: '/#/iconfont',
			icon: getAssetsUrl('img/iconfont-icon.svg'),
		},
		{
			title: '图片处理',
			label: 'image',
			url: '/#/image',
			icon: getAssetsUrl('img/image-icon.png'),
		},
		{
			title: '文本比较',
			label: 'text',
			url: '/#/text',
			icon: getAssetsUrl('img/text-icon.png'),
		},
		{
			title: '代码混淆',
			label: 'code',
			url: '/#/code',
			icon: getAssetsUrl('img/code-icon.png'),
		},
		{
			title: '颜色工具',
			label: 'color',
			url: '/#/color',
			icon: getAssetsUrl('img/color-icon.png'),
		},
		{
			title: '关于',
			label: 'about',
			url: '/#/about',
			icon: getAssetsUrl('img/about-icon.png'),
		},
		{
			title: '设置',
			label: 'settings',
			url: '/#/settings',
			icon: getAssetsUrl('img/settings-icon.png'),
		},
	]

	let pointer: null | HTMLElement = null
	// eslint-disable-next-line no-undef
	let homtItems: null | NodeListOf<HTMLElement> = null

	function handleMouseEnter(e: MouseEvent) {
		if (!pointer) return
		const dom = e.target as HTMLElement
		pointer.style.setProperty('--w', `${dom.clientWidth}px`)
		pointer.style.setProperty('--h', `${dom.clientHeight}px`)
		pointer.style.setProperty('--x', `${dom.offsetLeft}px`)
		pointer.style.setProperty('--y', `${dom.offsetTop}px`)
		pointer.style.display = 'block'
	}

	function handleWindowResize() {
		pointer && (pointer.style.display = 'none')
	}

	onMounted(() => {
		// eslint-disable-next-line no-undef
		homtItems = document.querySelectorAll('.home-item > .item-icon') as NodeListOf<HTMLElement>
		pointer = document.querySelector('.pointer') as HTMLElement
		homtItems.forEach((item) => {
			item.addEventListener('mouseenter', handleMouseEnter)
		})

		window.addEventListener('resize', handleWindowResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', handleWindowResize)
		homtItems &&
			homtItems.forEach((item) => {
				item.removeEventListener('mouseenter', handleMouseEnter)
			})
		pointer = null
		homtItems = null
	})

	let windows: null | Windows = null

	export interface createWindowOptions {
		title: string
		label: string
		url: string
	}

	async function createWindow(options: createWindowOptions) {
		if (!windows) {
			windows = new Windows()
		}
		await windows.createWin({
			label: options.label,
			title: options.title,
			url: options.url,
			width: 640,
			height: 480,
			resizable: true,
			alwaysOnTop: false,
		})
	}

	function onItemClick(item: HomtItemInterface) {
		console.log('click: ', item)
		createWindow({
			label: item.label,
			url: item.url,
			title: item.title,
		})
	}
</script>

<template>
	<div class="home-wrapper">
		<div class="pointer"></div>
		<div class="home-item" v-for="item in itemList" @click="onItemClick(item)">
			<div class="item-icon">
				<img :src="item.icon" alt="" class="item-icon--inner" />
			</div>
			<p class="item-title">{{ item.title }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.home-wrapper {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(5, minmax(166px, 1fr));
		grid-auto-rows: 200px;
		gap: 24px;
		position: relative;
		--iw: 160px;
		--ih: 160px;

		.home-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 6px;

			.item-icon {
				width: var(--iw);
				height: var(--ih);
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				&--inner {
					width: calc(var(--iw) * 2 / 3);
					height: calc(var(--ih) * 2 / 3);
				}
			}

			.item-title {
				font-size: var(--font-small);
			}
		}

		.pointer {
			--l: 15px;
			--d: 3px;
			--g: 8px;
			--w: 120px;
			--h: 120px;
			--x: 0;
			--y: 0;
			position: absolute;
			pointer-events: none;
			width: calc(var(--w) + var(--g) * 2);
			height: calc(var(--h) + var(--g) * 2);
			left: 0;
			top: 0;
			transition: 0.3s;
			display: none;
			transform: translate3d(calc(var(--x) - var(--g)), calc(var(--y) - var(--g)), 0);
			mask: conic-gradient(at var(--l) var(--l), transparent 75%, blue 75% 100%) 0 0 / calc(100% - var(--l))
				calc(100% - var(--l)) repeat;
			border: var(--d) solid var(--el-color-primary);
		}
	}
</style>
