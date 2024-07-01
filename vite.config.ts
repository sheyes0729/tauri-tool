import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import legacy from '@vitejs/plugin-legacy'
import eslintPlugin from 'vite-plugin-eslint'
import vueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({}),
		eslintPlugin(),
		autoImport({
			imports: ['vue', 'vue-router', '@vueuse/core'],
			resolvers: [ElementPlusResolver()],
			dts: 'src/typings/auto-imports.d.ts',
			eslintrc: {
				enabled: false,
			},
		}),
		vueComponents({
			dts: 'src/typings/components.d.ts',
			dirs: ['src/components'],
			resolvers: [ElementPlusResolver()],
			version: 3,
		}),
	],
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		watch: {
			ignored: ['**/src-tauri/**'],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	css: {
		postcss: {
			plugins: [
				postcssPresetEnv({
					stage: 2,
					autoprefixer: {
						grid: true,
					},
					features: {
						'logical-properties-and-values': false,
						'prefers-color-scheme-query': false,
						'gap-properties': false,
						'custom-properties': false,
						'place-properties': false,
						'not-pseudo-class': false,
						'focus-visible-pseudo-class': false,
						'focus-within-pseudo-class': false,
						'color-functional-notation': false,
					},
				}),
			],
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/style/_mixins.scss";`,
			},
		},
	},
	envPrefix: ['VITE_', 'TAURI_'],
	esbuild: {
		drop: ['console', 'debugger'],
	},
	define: {
		'process.env.TAURI_DEBUG': process.env.TAURI_DEBUG,
	},
	build: {
		target: ['es2021', 'chrome100', 'safari13'],
		assetsDir: 'assets',
		assetsInlineLimit: 8192,
		minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
		sourcemap: !!process.env.TAURI_DEBUG,
		rollupOptions: {
			input: path.resolve(__dirname, 'index.html'),
			output: {
				chunkFileNames: 'js/[name]-chunk.[hash].js',
				entryFileNames: 'js/[name]-entry.[hash].js',
				manualChunks: {
					Vue: ['vue'],
					VueRouter: ['vue-router'],
					ElementPlus: ['element-plus'],
					Lodash: ['lodash-es'],
					VueUse: ['@vueuse/core'],
				},
			},
		},
	},
})
