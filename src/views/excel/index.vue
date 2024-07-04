<script setup lang="ts">
	import { open } from '@tauri-apps/api/dialog'
	import { readBinaryFile } from '@tauri-apps/api/fs'
	import { ElLoading, ElMessage, TabPaneName } from 'element-plus'
	import { ExcelUtil, ReadFileResult } from '@/lib/utils/excel.ts'
	import { XTableColumnOptions } from '@/components/x-table/index.vue'

	defineOptions({
		name: 'ExcelView',
	})

	const excelData = shallowRef<Array<ReadFileResult>>([])

	const columns = shallowRef<Array<XTableColumnOptions>>([])
	const data = shallowRef<Array<Record<string, number | string>>>([])
	const activeName = ref('')

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
				if (excelData.value.length) {
					activeName.value = excelData.value[0].name
					data.value = excelData.value[0].data
					if (excelData.value[0].data[0]) {
						createColumns(excelData.value[0].data[0])
					}
				} else {
					columns.value = []
				}
			}
		} catch (e) {
			console.error('e: ', e)
			ElMessage.info('导入失败！')
		} finally {
			loadingInstance.close()
		}
	}

	function onTabChange(tab: TabPaneName) {
		const excel = excelData.value.find((item) => item.name === tab)
		data.value = []
		columns.value = []
		if (!excel) return
		data.value = excel.data
		if (excel.data[0]) {
			createColumns(excel.data[0])
		}
	}

	function createColumns(data: Record<string, number | string>) {
		const temp: Array<XTableColumnOptions> = [
			{
				type: 'seq',
				width: 80,
				title: '序号',
			},
		]
		for (const key of Object.keys(data)) {
			temp.push({
				field: key,
				title: key,
				minWidth: key.length * 30,
			})
		}
		columns.value = temp
	}
</script>

<template>
	<div class="excel-view">
		<nav-bar title="表格数据处理" />
		<el-button type="primary" plain @click="openDialog" class="m-t-8">
			<mdi-icon name="upload" class="m-r-6" />
			<span>导入数据</span>
		</el-button>

		<el-tabs v-model="activeName" @tab-change="onTabChange">
			<el-tab-pane v-for="excel in excelData" :name="excel.name" :label="excel.name" :key="excel.name">
				<x-table :columns="columns" :data="data"></x-table>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<style scoped lang="scss"></style>
