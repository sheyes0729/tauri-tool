<script setup lang="ts">
	import { VxeTableDefines, VxeTableInstance } from 'vxe-table'
	import { get } from 'lodash-es'

	defineOptions({
		name: 'XTable',
	})

	export interface XTableColumnOptions extends VxeTableDefines.ColumnOptions {
		slot?: string
	}

	export interface XTablePropInterface {
		name?: string
		data: unknown[]
		columns: XTableColumnOptions[]
	}

	withDefaults(defineProps<XTablePropInterface>(), {
		name: '',
	})

	const defaultOptions = {
		border: true,
		stripe: true,
		showOverflow: 'tooltip',
		maxHeight: 400,
		align: 'center',
		scrollY: {
			enabled: true,
			gt: 50,
		},
		columnConfig: {
			resizable: true,
		},
	}
	const attrs = useAttrs()
	const tableOptions = computed(() => {
		const maxHeight = attrs['max-height'] as string
		const extra: Record<string, unknown> = {}
		if (maxHeight) {
			// 处理max-height使用calc的情况
			if (maxHeight.includes('calc')) {
				const div = document.createElement('div')
				document.body.appendChild(div)
				div.style.position = 'absolute'
				div.style.top = '-9999999px'
				div.style.left = '-9999999px'
				div.style.height = maxHeight
				div.style.width = '1px'
				extra['max-height'] = getComputedStyle(div).height.replace('px', '')
				div.remove()
			}
		}
		return Object.assign({}, defaultOptions, attrs, extra)
	})

	const tableRef = shallowRef<VxeTableInstance>()
</script>

<template>
	<el-card shadow="never">
		<vxe-table ref="tableRef" :data="data" v-bind="tableOptions" style="width: 100%">
			<template v-for="column in columns" :key="column.title">
				<vxe-column v-bind="column">
					<template #default="scope" v-if="!column.type">
						<slot v-if="column.slot" :name="column.slot" v-bind="scope"></slot>
						<span v-else>{{ get(scope.row, column.field) }}</span>
					</template>
				</vxe-column>
			</template>
		</vxe-table>
	</el-card>
</template>

<style scoped lang="scss"></style>
