import highlights from '@/lib/constant/highlight.ts'
import themes from '@/lib/constant/themes.ts'
import type { BytemdPlugin } from 'bytemd'

const themeIcon =
	'<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/></svg>'
const highlightIcon =
	'<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 44L6 25H12V17H36V25H42V44H6Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M17 17V8L31 4V17" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
export default function markdownTheme(): BytemdPlugin {
	return {
		viewerEffect({ file }) {
			// eslint-disable-next-line
			const theme = (file.frontmatter as any)?.theme ?? 'juejin'
			// eslint-disable-next-line
			const highlight = (file.frontmatter as any)?.highlight ?? 'default'

			const $style = document.createElement('style')
			$style.innerHTML = `${themes[theme]?.style} ${highlights[highlight]?.style}`
			document.head.appendChild($style)
			return () => {
				$style.remove()
			}
		},
		actions: [
			{
				title: '主题配置',
				icon: themeIcon,
				handler: {
					type: 'dropdown',
					actions: Object.keys(themes).map((key) => {
						return {
							title: key,
							handler: {
								type: 'action',
								click({ editor }) {
									let value = editor.getValue()
									const reg = /^---\n(.|\n)*?---\n/
									if (value.match(reg)) {
										const result = value.match(reg)?.[0]
										const regexp = /theme:\s*(.*?)\n/
										const matches = result?.match(regexp)
										if (matches) {
											value = value.replace(result!, result!.replace(matches[1], key))
										} else {
											value = value.replace(result!, result!.replace('---\n', `---\ntheme: ${key}\n`))
										}
									} else {
										const text = `---\ntheme: ${key}\n---\n`
										value = text + value
									}
									editor.setValue(value)
									editor.focus()
								},
							},
						}
					}),
				},
			},
			{
				title: '高亮配置',
				icon: highlightIcon,
				handler: {
					type: 'dropdown',
					actions: Object.keys(highlights).map((key) => {
						return {
							title: key,
							handler: {
								type: 'action',
								click({ editor }) {
									let value = editor.getValue()
									const reg = /^---\n(.|\n)*?---\n/
									if (value.match(reg)) {
										const result = value.match(reg)?.[0]
										const regexp = /highlight:\s*(.*?)\n/
										const matches = result?.match(regexp)
										if (matches) {
											value = value.replace(result!, result!.replace(matches[1], key))
										} else {
											value = value.replace(
												result!,
												result!.replaceAll('---\n', function ($1: string, index: number) {
													if (index === 0) return $1
													return `highlight: ${key}\n${$1}`
												}),
											)
										}
									} else {
										const text = `---\nhighlight: ${key}\n---\n`
										value = text + value
									}
									editor.setValue(value)
									editor.focus()
								},
							},
						}
					}),
				},
			},
		],
	}
}
