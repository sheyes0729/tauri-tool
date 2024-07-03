import { VXETable, Table, Column, Grid, Colgroup, Tooltip, Icon } from 'vxe-table'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import 'vxe-table/lib/style.css'
import XEUtils from 'xe-utils'
import { App } from 'vue'

VXETable.setConfig({
	zIndex: 3000,
	size: 'mini',
	i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args),
})

export default {
	install(app: App) {
		app.use(Grid).use(Table).use(Column).use(Colgroup).use(Tooltip).use(Icon)
	},
}
