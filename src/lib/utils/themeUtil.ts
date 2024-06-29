// 生成色阶
export const colorMix = (color1: string, color2: string, weight: number) => {
	weight = Math.max(Math.min(Number(weight), 1), 0)
	const r1 = parseInt(color1.substring(1, 3), 16)
	const g1 = parseInt(color1.substring(3, 5), 16)
	const b1 = parseInt(color1.substring(5, 7), 16)
	const r2 = parseInt(color2.substring(1, 3), 16)
	const g2 = parseInt(color2.substring(3, 5), 16)
	const b2 = parseInt(color2.substring(5, 7), 16)
	let r: string | number = Math.round(r1 * (1 - weight) + r2 * weight)
	let g: string | number = Math.round(g1 * (1 - weight) + g2 * weight)
	let b: string | number = Math.round(b1 * (1 - weight) + b2 * weight)
	r = ('0' + (r || 0).toString(16)).slice(-2) as string
	g = ('0' + (g || 0).toString(16)).slice(-2) as string
	b = ('0' + (b || 0).toString(16)).slice(-2) as string
	return '#' + r + g + b
}

export const setTheme = (themeColor: string) => {
	const colorObj: Record<string, string> = {}
	const prefix = '--el-color-primary'
	for (let i = 0; i < 10; i++) {
		if (i === 2) {
			colorObj[`${prefix}-dark-2`] = colorMix('#000000', themeColor, 1)
		} else {
			colorObj[`${prefix}-light-${10 - i}`] = colorMix('#ffffff', themeColor, i * 0.1)
		}
	}
	document.documentElement.style.setProperty(prefix, themeColor)
	Object.keys(colorObj).map((item) => {
		document.documentElement.style.setProperty(item, colorObj[item])
	})
	localStorage.primaryColor = themeColor
}
