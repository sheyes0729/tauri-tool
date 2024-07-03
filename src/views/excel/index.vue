<script setup lang="ts">
	import { open } from '@tauri-apps/api/dialog'
	import { readBinaryFile } from '@tauri-apps/api/fs'
	import { ElLoading, ElMessage } from 'element-plus'
	import { ExcelUtil, ReadFileResult } from '@/lib/utils/excel.ts'

	defineOptions({
		name: 'ExcelView',
	})

	const excelData = shallowRef<Array<ReadFileResult>>([])

	async function openDialog() {
		const loadingInstance = ElLoading.service({
			text: '导入中...',
		})
		try {
			const res = await open({
				multiple: false,
				filters: [{ name: 'Excel', extensions: ['xlsx', 'xls'] }],
			})
			if (!res) {
				ElMessage.info('已取消导入！')
			} else {
				const fileData = await readBinaryFile(res as string)
				excelData.value = ExcelUtil.readFile(fileData)
				console.log('excelData: ', excelData.value)
			}
		} catch (e) {
			console.error('e: ', e)
			ElMessage.info('导入失败！')
		} finally {
			loadingInstance.close()
		}
	}

	const activeName = ref('')
</script>

<template>
	<div class="excel-view">
		<nav-bar title="表格数据处理" />
		<el-button type="primary" plain @click="openDialog">
			<mdi-icon name="upload" class="m-r-6" />
			<span>导入数据</span>
		</el-button>

		<el-tabs v-model="activeName">
			<el-tab-pane v-for="excel in excelData" :name="excel.name" :label="excel.name" :key="excel.name">
				<vxe-table> </vxe-table>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<style scoped lang="scss"></style>
