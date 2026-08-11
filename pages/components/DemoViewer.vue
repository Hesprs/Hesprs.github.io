<script lang="ts" setup>
import canvas from '$/assets/json-canvas-viewer.canvas';
import {
	JSONCanvasViewerComponent as Viewer,
	Minimap,
	MistouchPreventer,
	Controls,
} from '@json-canvas-viewer/vue';
import { useData } from 'vitepress';
import Counter from './DemoCounter.vue';

const { isDark } = useData(),
	isPrerendering = import.meta.env.SSR;
</script>

<template>
	<Suspense>
		<Viewer
			:options="{
				loading: 'lazy',
				minimapCollapsed: true,
				preventMistouchAtStart: true,
			}"
			class="canvas-viewer"
			:modules="[Minimap, MistouchPreventer, Controls]"
			:theme="isDark ? 'dark' : 'light'"
			:canvas
			:isPrerendering
		>
			<template #link><Counter /></template>
		</Viewer>
	</Suspense>
</template>
