import { WebviewWindow, WindowOptions, getAll } from '@tauri-apps/api/window'
// import { relaunch, exit } from '@tauri-apps/api/process'
// import { emit, listen } from '@tauri-apps/api/event'

interface WindowsOptions extends Partial<WindowOptions> {
	label: string
}

export const defaultConfig: WindowsOptions = {
	label: '', // 窗口唯一label
	title: '', // 窗口标题
	url: '', // 路由地址url
	width: 900, // 窗口宽度
	height: 540, // 窗口高度
	minWidth: 640, // 窗口最小宽度
	minHeight: 360, // 窗口最小高度
	x: 0, // 窗口相对于屏幕左侧坐标
	y: 0, // 窗口相对于屏幕顶端坐标
	center: true, // 窗口居中显示
	resizable: true, // 是否支持缩放
	maximized: false, // 最大化窗口
	decorations: false, // 窗口是否无边框及导航条
	alwaysOnTop: false, // 置顶窗口
}

export class Windows {
	mainWin: WebviewWindow | null

	constructor() {
		this.mainWin = null
	}

	getWin(label: string) {
		return WebviewWindow.getByLabel(label)
	}

	getAllWin() {
		return getAll()
	}

	// 创建新窗口
	async createWin(options: WindowsOptions) {
		console.log('create: ', options)
		const args = Object.assign({}, defaultConfig, options)

		// 判断窗口是否存在
		console.log('existWin: ', WebviewWindow.getByLabel(args.label))
		const existWin = getAll().find((w) => w.label == args.label)
		if (existWin) {
			if (existWin.label.indexOf('main') == -1) {
				await existWin?.unminimize()
				await existWin?.setFocus()
				return
			}
			await existWin?.close()
		}

		// 创建窗口对象
		const win = new WebviewWindow(args.label, args)

		// 是否最大化
		if (args.maximized && args.resizable) {
			await win.maximize()
		}

		// 窗口创建完毕/失败
		await win.once('tauri://created', async () => {
			console.log('window create success!')
		})

		await win.once('tauri://error', async () => {
			console.log('window create error!')
		})
	}

	// 开启主进程监听事件
	// async listen() {
	// 	// 创建新窗体
	// 	await listen('win-create', (event) => {
	// 		console.log(event)
	// 		this.createWin(JSON.parse(event.payload as string))
	// 	})
	//
	// 	// 显示窗体
	// 	await listen('win-show', async () => {
	// 		if (appWindow.label.indexOf('main') == -1) return
	// 		await appWindow.show()
	// 		await appWindow.unminimize()
	// 		await appWindow.setFocus()
	// 	})
	//
	// 	// 隐藏窗体
	// 	await listen('win-hide', async () => {
	// 		if (appWindow.label.indexOf('main') == -1) return
	// 		await appWindow.hide()
	// 	})
	//
	// 	// 退出应用
	// 	await listen('win-exit', async () => {
	// 		await exit()
	// 	})
	//
	// 	// 重启应用
	// 	await listen('win-relaunch', async () => {
	// 		await relaunch()
	// 	})
	//
	// 	// 主/渲染进程传参
	// 	await listen('win-setdata', async (event) => {
	// 		await emit('win-postdata', JSON.parse(event.payload as string))
	// 	})
	// }
}
