<script lang="ts" setup>
import 'vue3-carousel/carousel.css';
import type { CarouselConfig } from 'vue3-carousel';
import { VPLink } from 'vitepress-theme-trito';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

const carouselConfig: Partial<CarouselConfig> = {
	autoplay: 8000,
	gap: 600,
	itemsToShow: 0.5,
	mouseDrag: false,
	transition: 600,
	transitionEasing: 'cubic-bezier(.3,0,.3,1)',
	wrapAround: true,
};
const { projects } = defineProps<{
	projects: Array<{
		title: string;
		logo: string;
		description: string;
		descriptionShort: string;
		link: string;
	}>;
}>();
</script>

<template>
	<Carousel class="lower carousel" v-bind="carouselConfig">
		<Slide v-for="(project, index) in projects" :key="index">
			<VPLink :href="project.link" class="carousel__item">
				<img class="logo" :src="project.logo" :alt="`${project.title} Logo`" />
				<h2 class="title">{{ project.title }}</h2>
				<p class="description">{{ project.description }}</p>
				<p class="description-short">{{ project.descriptionShort }}</p>
			</VPLink>
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>

<style lang="scss" scoped>
.lower {
	margin-bottom: 48px;
	@media (min-width: 640px) {
		margin-bottom: 64px;
	}
}

.carousel {
	--carousel-height: 300px;
	--image-text-padding: 40px;
	--carousel-item-margin: 140px;
	--title-size: 50px;
	--description-size: 18px;
	@media (max-width: 1260px) {
		--carousel-item-margin: 100px;
		--carousel-height: 270px;
		--title-size: 40px;
		--image-text-padding: 30px;
		--description-size: 16px;
	}
	@media (max-width: 900px) {
		--carousel-item-margin: 30px;
	}
	@media (max-width: 768px) {
		--image-text-padding: 0;
		--carousel-item-margin: 10px;
		--carousel-height: fit-content;
	}
	height: var(--carousel-height);
}

.carousel__item {
	display: grid;
	grid-template-areas:
		'logo title'
		'logo description';
	grid-template-columns:
		calc(var(--carousel-height) + var(--image-text-padding))
		1fr;
	grid-template-rows: 2fr 3fr;
	margin: 0 var(--carousel-item-margin);
	.logo {
		grid-area: logo;
		margin: auto 0;
		width: 90%;
		aspect-ratio: 1/1;
	}
	.title {
		color: var(--vp-c-brand-1);
		grid-area: title;
		border: none;
		font-size: var(--title-size);
		font-weight: 800;
		line-height: 1;
		margin-top: auto;
		font-family: var(--vp-font-family-serif);
	}
	.description {
		grid-area: description;
		color: var(--vp-c-text-2);
		font-weight: normal;
		font-size: var(--description-size);
		margin-top: 1rem;
		line-height: 1.5;
	}
	.description-short {
		color: var(--vp-c-text-2);
		font-size: var(--description-size);
		display: none;
		font-weight: normal;
		text-align: center;
		margin: 1rem auto 0;
	}
	@media (max-width: 768px) {
		display: block;
		.logo,
		.title {
			margin-left: auto;
			margin-right: auto;
		}
		.description {
			display: none;
		}
		.description-short {
			display: block;
		}
		.title {
			text-align: center;
			margin-top: 20px;
		}
		.logo {
			max-width: 300px;
		}
		.title,
		.description-short {
			max-width: calc(200px + 40vw);
		}
	}
}
</style>
