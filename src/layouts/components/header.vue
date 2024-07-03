<script setup lang="ts">
	import { getCurrent } from '@tauri-apps/api/window'

	const title = ref<string>('')

	defineOptions({
		name: 'DefaultLayoutHeader',
	})

	enum OperationEnum {
		MINIMIZE = 'minimize',
		MAXIMIZE = 'maximize',
		CLOSE = 'close',
	}

	function operation(ty: OperationEnum) {
		const appWindow = getCurrent()
		switch (ty) {
			case OperationEnum.CLOSE:
				appWindow.hide()
				// appWindow.close()
				break
			case OperationEnum.MAXIMIZE:
				appWindow.toggleMaximize()
				break
			case OperationEnum.MINIMIZE:
				appWindow.minimize()
				break
			default:
				break
		}
	}

	onMounted(async () => {
		title.value = await getCurrent().title()
	})
</script>

<template>
	<div data-tauri-drag-region class="layout-header">
		<div class="layout-header-label">
			<div class="dot"></div>
			<div class="title">{{ title }}</div>
		</div>

		<div class="layout-header-operation">
			<div class="icon">
				<mdi-icon name="remove_circle" color="#ff6257" hover @click="operation(OperationEnum.MINIMIZE)" />
			</div>
			<div class="icon">
				<mdi-icon name="stop_circle" color="#fec030" hover @click="operation(OperationEnum.MAXIMIZE)" />
			</div>
			<div class="icon">
				<mdi-icon name="cancel" color="#3bcf4c" hover @click="operation(OperationEnum.CLOSE)" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.layout-header {
		padding: var(--padding-mini) var(--padding-default);
		display: flex;
		justify-content: space-between;
		align-items: center;
		//background-color: var(--color-header);
		background: linear-gradient(
				to left,
				var(--el-color-primary-light-9) 0%,
				var(--el-color-primary-light-7) 50%,
				var(--el-color-primary-light-5) 100%
			)
			0 0 / 100% 100% no-repeat;

		&-label {
			display: flex;
			align-items: center;
			gap: var(--padding-mini);

			.dot {
				--s: 12px;
				width: var(--s);
				height: var(--s);
				border-radius: 50%;
				background-color: var(--color-primary);
			}

			.title {
				color: var(--color-primary);
				font-size: var(--font-small);
				font-weight: var(--font-weight-600);
			}
		}

		&-operation {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: var(--padding-mini);
		}
	}
</style>
