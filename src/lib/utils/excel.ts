import { read, writeFile, utils, WorkSheet } from 'xlsx'

export interface ReadFileResult {
	name: string
	data: Array<Record<string, number | string>>
}

export class ExcelUtil {
	/**
	 * 读取Excel文件
	 * @param file
	 */
	static readFile(file: Uint8Array): Array<ReadFileResult> {
		const wb = read(file, {
			cellDates: true,
		})
		return wb.SheetNames.map((name, index) => {
			return {
				name,
				data: utils.sheet_to_json(wb.Sheets[wb.SheetNames[index]], {
					defval: '',
					raw: true,
				}),
			}
		})
	}

	/**
	 * 写入Excel文件
	 * @param fileName
	 * @param list
	 */
	static writeFile(fileName: string, list: Array<ReadFileResult>) {
		const sheetNames: string[] = []
		const sheets: Record<string, WorkSheet> = {}

		for (const item of list) {
			const { name, data } = item
			const jsonWorkSheet = utils.json_to_sheet(data)
			sheetNames.push(name)
			sheets[name] = jsonWorkSheet
		}

		const workBook = {
			SheetNames: sheetNames,
			Sheets: sheets,
		}
		writeFile(workBook, fileName)
	}
}
