import xlsx from 'xlsx'

export interface ReadFileResult {
	name: string
	data: Array<Record<string, number | string>>
}

export class ExcelUtil {
	/**
	 * 读取Excel文件
	 * @param file
	 */
	static readFile(file: File): Promise<Array<ReadFileResult> | null> {
		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
				const data = e.target?.result
				if (!data) resolve(null)
				const wb = xlsx.read(data, {
					cellDates: true,
				})
				resolve(
					wb.SheetNames.map((name, index) => {
						return {
							name,
							data: xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[index]], {
								defval: '',
								raw: true,
							}),
						}
					}),
				)
			})

			reader.readAsArrayBuffer(file)
		})
	}

	/**
	 * 写入Excel文件
	 * @param fileName
	 * @param list
	 */
	static writeFile(fileName: string, list: Array<ReadFileResult>) {
		const sheetNames: string[] = []
		const sheets: Record<string, xlsx.WorkSheet> = {}

		for (const item of list) {
			const { name, data } = item
			const jsonWorkSheet = xlsx.utils.json_to_sheet(data)
			sheetNames.push(name)
			sheets[name] = jsonWorkSheet
		}

		const workBook = {
			SheetNames: sheetNames,
			Sheets: sheets,
		}
		xlsx.writeFile(workBook, fileName)
	}
}
