<script setup lang="ts">
	import { coordinate, CoordinateItemInterface } from '@/lib/constant/coordinates'
	import { CascaderProps, ElLoading, ElMessage, TabPaneName } from 'element-plus'
	import * as proj4 from 'proj4'
	import { open } from '@tauri-apps/api/shell'
	import { CoordinateTransformer } from '@/lib/utils/coordinateTransformer'

	defineOptions({
		name: 'CoordinateView',
	})

	const selectList: Array<{ label: string; value: number }> = [
		{
			label: 'WGS84 - 国际通用',
			value: 0,
		},
		{
			label: 'GCJ02 - 高德、QQ地图',
			value: 1,
		},
		{
			label: 'BD09 - 百度地图',
			value: 2,
		},
	]

	const inputCoordinate = ref<number>(4326)
	const outputCoordinate = ref<number>(4326)
	const inputType = ref<number>(0)
	const outputType = ref<number>(0)

	const selectOptions = coordinate as never

	const allOptions: Array<CoordinateItemInterface> = coordinate.map((e) => e.list).flat(2)

	const cascaderProps: CascaderProps = {
		value: 'code',
		label: 'remark',
		children: 'list',
		emitPath: false,
	}

	// 测试用例：106.51193629413287, 29.64724693110072
	const inputArea = ref<string>('')
	const outputArea = ref<string>('')

	const activeName = ref<string>('first')

	function onTabChange(tab: TabPaneName) {
		console.log('tab: ', tab)
		clear()
	}

	function clear() {
		inputArea.value = ''
		outputArea.value = ''
	}

	function transferCoord() {
		if (!inputArea.value.trim()) return ElMessage.warning('请先输入坐标！')
		const loadingInstance = ElLoading.service({
			text: '转换中...',
		})
		try {
			const coordArr = inputArea.value.split(/\n/).map((e) => e.split(',').map((e) => parseFloat(e)))
			if (activeName.value === 'first') {
				if (inputType.value === outputType.value) {
					outputArea.value = inputArea.value
					return
				}
				const arr = []
				for (const coord of coordArr) {
					if (inputType.value === 0) {
						if (outputType.value === 1) {
							arr.push(CoordinateTransformer.WGS84ToGCJ02(coord))
						} else {
							arr.push(CoordinateTransformer.WGS84ToBD09(coord))
						}
					} else if (inputType.value === 1) {
						if (outputType.value === 0) {
							arr.push(CoordinateTransformer.GCJ02ToWGS84(coord))
						} else {
							arr.push(CoordinateTransformer.GCJ02ToBD09(coord))
						}
					} else {
						if (outputType.value === 1) {
							arr.push(CoordinateTransformer.BD09ToGCJ02(coord))
						} else {
							arr.push(CoordinateTransformer.BD09ToWGS84(coord))
						}
					}
				}
				outputArea.value = arr.map((e) => e.join(',')).join('\n')
			} else {
				if (inputCoordinate.value === outputCoordinate.value) {
					outputArea.value = inputArea.value
					return
				}
				const inputOption = allOptions.find((e) => e.code === inputCoordinate.value)
				const outputOption = allOptions.find((e) => e.code === outputCoordinate.value)
				const arr = []
				for (const coord of coordArr) {
					arr.push(proj4(inputOption!.defs, outputOption!.defs, coord))
				}
				outputArea.value = arr.map((e) => e.join(',')).join('\n')
			}
		} catch (e) {
			console.error('e: ', e)
			ElMessage.error('转换失败！')
		} finally {
			loadingInstance.close()
		}
	}

	function openUrl(url: string) {
		open(url)
	}
</script>

<template>
	<div class="coordinate-view">
		<nav-bar title="地图坐标转换" />

		<el-card header="选择坐标系" class="m-t-8">
			<el-tabs v-model="activeName" @tab-change="onTabChange">
				<el-tab-pane label="坐标转换" name="first">
					<el-form inline>
						<el-form-item label="输入坐标系">
							<el-select v-model="inputType" placeholder="请选择" style="width: 200px">
								<el-option v-for="coord in selectList" :label="coord.label" :value="coord.value" :key="coord.value" />
							</el-select>
						</el-form-item>

						<el-form-item label="输出坐标系">
							<el-select v-model="outputType" placeholder="请选择" style="width: 200px">
								<el-option v-for="coord in selectList" :label="coord.label" :value="coord.value" :key="coord.value" />
							</el-select>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="投影坐标转换" name="second">
					<el-form inline>
						<el-form-item label="输入坐标系">
							<el-cascader
								v-model="inputCoordinate"
								:show-all-levels="false"
								:options="selectOptions"
								:props="cascaderProps"
							>
								<template #default="{ node, data }">
									<span>{{ data.remark }}</span>
									<span v-if="node.isLeaf"> (EPSG:{{ data.code }}) </span>
								</template>
							</el-cascader>
						</el-form-item>

						<el-form-item label="输出坐标系">
							<el-cascader
								v-model="outputCoordinate"
								:show-all-levels="false"
								:options="selectOptions"
								:props="cascaderProps"
							>
								<template #default="{ node, data }">
									<span>{{ data.remark }}</span>
									<span v-if="node.isLeaf"> (EPSG:{{ data.code }}) </span>
								</template>
							</el-cascader>
						</el-form-item>
					</el-form>

					<div class="tips">
						<span> ESPG详细信息查看： </span>
						<strong @click="openUrl('https://epsg.io/?q=')">https://epsg.io/?q=</strong>
					</div>
				</el-tab-pane>
			</el-tabs>

			<el-space>
				<el-button type="success" plain @click="transferCoord">
					<mdi-icon name="transform" class="m-r-6" />
					<span> 转换 </span>
				</el-button>
				<el-button type="primary" plain @click="clear">
					<mdi-icon name="delete_forever" class="m-r-6" />
					<span> 清空 </span>
				</el-button>
			</el-space>
		</el-card>

		<el-card header="输入坐标" class="m-t-8">
			<el-input
				v-model="inputArea"
				type="textarea"
				:rows="6"
				placeholder="请输入浮点数经纬度坐标，经度在前，纬度在后。使用英文逗号分隔。批量转换时每行输入一条记录。"
				clearable
			/>
		</el-card>

		<el-card header="转换结果" class="m-t-8">
			<el-input v-model="outputArea" type="textarea" :rows="6" placeholder="暂无转换结果" clearable />
		</el-card>
	</div>
</template>

<style lang="scss" scoped>
	.coordinate-view {
		width: 100%;
		height: 100%;
		padding: 0 var(--padding-default) var(--padding-default);
	}

	.tips {
		margin-bottom: 8px;
		color: var(--el-color-danger);
		font-size: var(--font-small);

		span {
			font-size: inherit;
		}

		strong {
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
