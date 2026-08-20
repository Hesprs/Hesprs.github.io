<template>
	<div class="canvas-mount-demo">
		<div class="header-line">
			Now you can mount your own components (Vue, React, Preact) into the canvas!
		</div>

		<div class="counter-container">
			<button @click="decrement" class="counter-btn">−</button>
			<span class="counter-value">{{ count }}</span>
			<button @click="increment" class="counter-btn">+</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped>
.canvas-mount-demo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	font-family:
		system-ui,
		-apple-system,
		sans-serif;
	color: var(--vp-c-text-1);
	border-radius: 8px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	height: 100%;
	width: 100%;
	margin: auto;
}

.header-line {
	font-size: 0.95rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 1.5rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid var(--vp-c-text-3);
	width: 100%;
	max-width: 400px;
	line-height: 1.4;
}

.counter-container {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	max-width: 400px;
}

.counter-value {
	font-size: 3rem;
	font-weight: 700;
	min-width: 3ch;
	text-align: center;
	font-variant-numeric: tabular-nums;
	color: var(--vp-c-text-1);
}

.counter-btn {
	background: var(--vp-c-bg-elv);
	border: 1px solid var(--vp-c-border);
	color: var(--vp-c-text-2);
	width: 48px;
	height: 48px;
	border-radius: 50%;
	font-size: 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: var(--vp-shadow-1);
}

.counter-btn:hover {
	background: var(--vp-c-bg-alt);
	transform: translateY(-1px);
}

.counter-btn:active {
	transform: translateY(0);
	background: var(--vp-c-bg);
}
</style>
