/**
 * 获取静态资源
 * @param path
 * @returns
 */
export const getAssetsUrl = (path: string) => {
	return new URL(`../../assets/${path.replace(/^\//, '')}`, import.meta.url).href
}
