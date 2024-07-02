import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended'
import parserVue from 'vue-eslint-parser'
import aotuImport from './eslint-auto-import.cjs'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	// recommanded
	pluginJs.configs.recommended,
	// typescript
	...tseslint.configs.recommended,
	// vue3
	...pluginVue.configs['flat/essential'],
	// prettier 默认推荐规则
	pluginPrettierRecommendedConfigs,
	// 全局变量
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2020,
				...globals.node,
				...aotuImport.globals,
			},
			ecmaVersion: 2020,
			parser: parserVue,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		rules: {
			'vue/require-v-for-key': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
]
