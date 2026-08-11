<template>
	<div class="about-content first" style="grid-template-columns: 2fr 3fr">
		<article class="s-card card-enhance hello">
			<span class="title">Hello 👋<br />I am Hēsperus,</span>
			<span class="text">
				High school student • OSS developer
				<br />
				Futuristic visionary • Classics enthusiast
			</span>
		</article>
		<article class="s-card card-enhance about-name img-mask">
			<span class="tip">About My Name</span>
			<br />
			<span class="text">
				<em>Hēsperus</em>, in Greek mythology, is the name of
				<strong> planet Venus</strong> appearing in the twilight.
			</span>
			<span class="text">
				<code>Hesprs</code> is often used as my social media identifiers. While the website
				name <code>Hēsperī</code> means "About Hēsperus".
			</span>
		</article>
	</div>
	<h2 class="upper">See My Projects</h2>
	<LandingCarousel :projects />
	<h2 style="margin-bottom: 24px">More About Me</h2>
	<div class="about-content" style="grid-template-columns: 2fr 3fr">
		<article class="s-card card-enhance personality">
			<span class="tip">Personality</span>
			<br />
			<div class="box">
				<div class="item s-card concave">
					<span class="tip">Enneagram Type</span>
					<span class="title">
						Type
						<span class="title large">5</span>
						<span class="title large" style="font-size: 20px">w4</span>
					</span>
				</div>
				<div class="item s-card concave">
					<span class="tip">MBTI</span>
					<span class="title large"> INTJ<span style="font-size: 20px">-T</span></span>
				</div>
			</div>
			<span class="more">
				Learn more about
				<a href="https://www.enneagraminstitute.com/type-5/" target="_blank">Type-5</a
				>&nbsp;and
				<a href="https://www.16personalities.com/intj-personality" target="_blank">INTJ</a>
			</span>
		</article>
		<article class="s-card card-enhance skills">
			<span class="tip">Skills & Tools</span>
			<br />
			<div class="skills-list">
				<a
					v-for="(item, index) in skills"
					:key="index"
					:style="{ '--color': item.color }"
					:href="item.link"
					class="skills-item"
					target="_blank"
				>
					<component class="skills-logo" :is="item.icon" />
					{{ item.name }}
				</a>
			</div>
		</article>
	</div>
	<div class="about-content" style="grid-template-columns: 3fr 2fr">
		<article class="s-card card-enhance art img-mask">
			<span class="tip">Favorite Art Styles</span>
			<br />
			<span class="title large">Neo-Classicism</span>
			<span class="title">Brutalism / Futurism</span>
		</article>
		<article class="s-card card-enhance perspectives">
			<span class="tip">Perspectives</span>
			<br />
			<div class="skills-list">
				<div
					v-for="(item, index) in perspectives"
					:key="index"
					class="skills-item"
					:title="item.title"
				>
					<component class="icon" :is="item.icon" />
					<span class="skills-name">{{ item.name }}</span>
				</div>
			</div>
		</article>
	</div>
	<div class="about-content" style="grid-template-columns: 1fr 1fr">
		<article class="s-card card-enhance like image era">
			<span class="tip">Favorite Historical Period</span>
			<span class="title large">Victorian Era</span>
			<span class="image-desc">"It was the best of times, it was the worst of times."</span>
		</article>
		<article class="s-card card-enhance like image game">
			<span class="tip">Favorite Game</span>
			<span class="title large">Stellaris</span>
			<span class="image-desc">
				"Our fleets will blot out the sun, as many suns as it takes."
			</span>
		</article>
	</div>
</template>

<script lang="ts" setup>
import LandingCarousel from '$/components/LandingCarousel.vue';
import {
	IconBlendMode,
	IconBrandBlender,
	IconBrandFigma,
	IconBrandGit,
	IconBrandJavascript,
	IconBrandPython,
	IconBrandSass,
	IconBrandTypescript,
	IconBrandVue,
	IconCell,
	IconGenderTransgender,
	IconSettingsBolt,
	IconWorldMap,
	IconBrandReact,
	IconPuzzle,
	IconSnowflake,
	IconRobot,
	IconBrandDeno,
	IconBrandNodejs,
	IconBurger,
	IconFileCode,
	IconCreativeCommons,
	IconCircleDashedLetterT,
} from '@tabler/icons-vue';

const skills = [
		{
			color: '#EFD81C',
			icon: IconBrandJavascript,
			link: 'https://developer.mozilla.org/docs/Web/JavaScript',
			name: 'JavaScript',
		},
		{
			color: '#3178C6',
			icon: IconBrandTypescript,
			link: 'https://www.typescriptlang.org/',
			name: 'TypeScript',
		},
		{
			color: '#CF649A',
			icon: IconBrandSass,
			link: 'https://sass-lang.com/',
			name: 'SCSS',
		},
		{
			color: '#41b883',
			icon: IconBrandVue,
			link: 'https://vuejs.org/',
			name: 'Vue',
		},
		{
			color: '#58c4dc',
			icon: IconBrandReact,
			link: 'https://react.dev/',
			name: 'React',
		},
		{
			color: '#3776AB',
			icon: IconBrandPython,
			link: 'https://www.python.org/',
			name: 'Python',
		},
		{
			color: '#F05032',
			icon: IconBrandGit,
			link: 'https://git-scm.com/',
			name: 'Git',
		},
		{
			color: '#0C8CE9',
			icon: IconBrandFigma,
			link: 'https://www.figma.com',
			name: 'Figma',
		},
		{
			color: '#F4792B',
			icon: IconBrandBlender,
			link: 'https://www.blender.org/',
			name: 'Blender',
		},
		{
			color: '#000000',
			icon: IconRobot,
			link: 'https://agentskills.io/',
			name: 'Agent Harness',
		},
		{
			color: '#67d55e',
			icon: IconPuzzle,
			link: 'https://wxt.dev/',
			name: 'Browser Extension',
		},
		{
			color: '#f37726',
			icon: IconFileCode,
			link: 'https://jupyter.org/',
			name: 'Jupyter Notebook',
		},
		{
			color: '#4d6fb7',
			icon: IconSnowflake,
			link: 'https://nixos.org/',
			name: 'NixOS',
		},
		{
			color: '#417e38',
			icon: IconBrandNodejs,
			link: 'https://nodejs.org/',
			name: 'Node.js',
		},
		{
			color: '#f472b6',
			icon: IconBurger,
			link: 'https://bun.com/',
			name: 'Bun',
		},
		{
			color: '#70ffaf',
			icon: IconBrandDeno,
			link: 'https://deno.com/',
			name: 'Deno',
		},
		{
			color: '#ff1e56',
			icon: IconCircleDashedLetterT,
			link: 'https://turborepo.dev/',
			name: 'Turborepo',
		},
		{
			color: '#ff1e56',
			icon: IconCircleDashedLetterT,
			link: 'https://turborepo.dev/',
			name: 'Turborepo',
		},
	],
	perspectives = [
		{
			icon: IconWorldMap,
			name: 'Cosmopolitanism',
			title: 'A home world with unified goals, and the path open to the stars.',
		},
		{
			icon: IconCreativeCommons,
			name: 'Free Culture Movement',
			title: 'Intellectual creations should not be enclosed by walls, everyone should have the autonomy to access, modify, and share.',
		},
		{
			icon: IconGenderTransgender,
			name: 'LGBT Rights',
			title: 'Nothing can be worse than seeing a person being shackled by what is "born to be".',
		},
		{
			icon: IconBlendMode,
			name: 'Equality of Opportunity',
			title: 'The heirs of kings, the kids from slums, all have a equal start.',
		},
		{
			icon: IconCell,
			name: 'Anti-Racism',
			title: 'All races are hallucinations, we share the same identity - the humans.',
		},
		{
			icon: IconSettingsBolt,
			name: 'Techno-Progressivism',
			title: 'Since the beginning of time, our universe has been destined onto an eternal odyssey of progress.',
		},
	],
	projects = [
		{
			description:
				'Sync Engine is the next-generation plugin for Obsidian that syncs your vault with your own infrastructure. It is the first Obsidian plugin that allows custom modules to extend its core functionality.',
			descriptionShort: 'The fast and extensible engine for Obsidian vault synchronization.',
			link: '/projects/sync-engine',
			logo: 'https://github.com/hesprs/sync-engine/raw/refs/heads/main/docs/public/logo.svg',
			title: 'Sync Engine',
		},
		{
			description:
				'A front-end library that ships an extensible viewer for JSON Canvas, with easy integration with any existing frameworks and paradigms.',
			descriptionShort: 'View JSON canvas directly in your browser.',
			link: '/projects/json-canvas-viewer',
			logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg',
			title: 'JSON Canvas Viewer',
		},
		{
			description:
				'A tiny (1KB core), tree-shakable TypeScript library for robust human gesture detection. Supports mouse, touch, touchpad, and wheel events. A modern, extensible alternative to Hammer.js.',
			descriptionShort: 'Lightweight & extensible human gesture recognizer.',
			link: '/projects/pointeract',
			logo: 'https://pointeract.consensia.cc/logo.svg',
			title: 'Pointeract',
		},
		{
			description:
				'A novel architecture for modular monolith development in TypeScript. It leverages the power of type orchestration and runtime dynamics to deliver a type-safe, scalable, and highly modular software paradigm.',
			descriptionShort:
				'A novel TypeScript software architecture that aims to redefine modularity practices.',
			link: '/researches/synthkernel',
			logo: 'https://github.com/hesprs/synthkernel/raw/main/assets/logo.svg',
			title: 'SynthKernel',
		},
		{
			description:
				"A visually refurbished, drop-in replacement for the VitePress default theme. Enhance your static site's UI/UX with unique aesthetics, minimal API intrusion, and robust TypeScript support. Stand out from generic VitePress sites.",
			descriptionShort: 'Visually refurbished VitePress default theme.',
			link: '/projects/trito',
			logo: 'https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/logo.svg',
			title: 'Trito',
		},
	];
</script>

<style lang="scss" scoped>
h2 {
	font-size: 2rem;
	line-height: 1.2em;
	font-weight: 600;
	&.upper {
		margin-top: 48px;
		margin-bottom: 16px;
		@media (min-width: 640px) {
			margin-top: 64px;
		}
	}
}

code {
	border-radius: 4px;
	padding: 3px 6px;
	background-color: var(--vp-code-bg);
	transition:
		color 0.25s,
		background-color 0.5s;
}

.about-content {
	display: grid;
	grid-template-columns: auto auto;
	gap: 20px;
	margin-bottom: 20px;
	article {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.2rem 2rem;
		overflow: hidden;
		line-height: normal;
		gap: 12px;
		--title: 32px;
		--title-large: 50px;
		@media (max-width: 960px) {
			padding-left: 20px;
			padding-right: 20px;
			--title: 24px;
			--title-large: 42px;
		}
		> * {
			z-index: 2;
		}
		.tip {
			font-size: 14px;
			opacity: 0.8;
			line-height: 1;
		}
		.title {
			font-size: var(--title);
			font-weight: bold;
			line-height: 1.2;
			&.large {
				color: var(--vp-c-brand-1);
				font-size: var(--title-large);
				font-family: var(--vp-font-family-serif);
			}
		}
		.text {
			line-height: 1.5;
		}
		&.child {
			background-color: transparent;
			border: none;
			box-shadow: none;
			padding: 0;
			gap: 20px;
			.s-card {
				height: 100%;
			}
		}
		&.hello {
			justify-content: center;
			padding: 2rem;
			color: #fff;
			background-image: linear-gradient(120deg, #5b27ff 0%, #00d4ff 100%);
			background-size: 200% 200%;
			animation: gradientFlow 6s ease infinite;
			@media (max-width: 768px) {
				padding: 1.2em;
				align-items: center;
				.text,
				.title {
					text-align: center;
				}
			}
		}
		&.about-name {
			padding-right: 30%;
			&::before {
				background-image: url('/hesprs.jpg');
			}
		}
		&.personality {
			.more {
				margin-top: auto;
				font-size: 14px;
				color: var(--vp-c-text-2);
				a {
					color: var(--vp-c-text-2);
					text-decoration: underline;
					&:hover {
						color: var(--color);
					}
				}
			}
			.box {
				display: flex;
				gap: 12px;
				flex-direction: column;
				@media (max-width: 767px) {
					flex-direction: row;
				}
				.item {
					padding-left: 24px;
					padding-right: 24px;
					position: relative;
					width: 100%;
					padding: 1.2rem 2rem;
					gap: 12px;
					@media (max-width: 767px) {
						padding-left: 16px;
						padding-right: 16px;
					}
					display: flex;
					flex-direction: column;
				}
			}
		}
		&.skills,
		&.perspectives {
			.skills-list {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 10px;
				.skills-item {
					display: flex;
					align-items: center;
					text-decoration: none;
					padding: 8px 12px 8px 8px;
					background-color: var(--vp-c-bg);
					border: 1px solid var(--vp-c-border);
					box-shadow: 0 8px 12px -4px var(--main-border-shadow);
					color: var(--vp-c-text);
					&:hover {
						color: var(--vp-c-brand-1);
					}
					transition:
						background-color 0.3s,
						color 0.3s;
					.skills-logo {
						width: 32px;
						height: 32px;
						padding: 4px;
						overflow: visible;
						margin-right: 8px;
						border-radius: 50%;
						background-color: var(--color);
						color: #fff;
					}
				}
			}
		}
		&.skills .skills-item {
			font-weight: bold;
			border-radius: 40px;
			&:hover {
				background-color: var(--main-card-background);
			}
		}
		&.perspectives .skills-list {
			gap: 8px;
			.skills-item {
				padding: 4px 6px 4px 4px !important;
				font-size: small;
				font-weight: normal !important;
				border-radius: 10px;
				> .icon {
					margin-right: 6px;
				}
			}
		}
		&.art::before {
			background-image: url('https://img1.tucang.cc/api/image/show/e9287e92d561e0a07289663a3076bcbc');
		}
		&.like {
			--height: 400px;
			@media (max-width: 768px) {
				--height: 300px;
			}
			height: var(--height);
		}
		&.image {
			.image-desc {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: auto;
			}
			&::before {
				content: '';
				background-position: center;
				background-size: cover;
				position: absolute;
				width: 100%;
				bottom: 0;
				box-shadow:
					inset 0 -70px 204px 10px var(--color),
					inset 0 0 12px 5px rgba(0, 0, 0, 0.8);
				height: calc(var(--height) - var(--title-large) - 64px);
				left: 0;
				z-index: 0;
			}
		}
		&.era {
			--color: #ffc6b2;
			.dark & {
				--color: #4b2c15;
			}
			&::before {
				background-image: url('https://img1.tucang.cc/api/image/show/992f6c6b1d0c3bc21924edce390a4832');
			}
		}
		&.game {
			--color: #afb7ff;
			.dark & {
				--color: #0c0e20;
			}
			&::before {
				background-image: url('https://img1.tucang.cc/api/image/show/1deb77598a40d934d3f3adef3fd53913');
			}
		}
	}
	&:last-child {
		margin-bottom: 0;
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
}
.first {
	margin-top: 48px;
	@media (min-width: 640px) {
		margin-top: 64px;
	}
}
.img-mask::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	background-size: cover;
	background-position: center;
	mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent);
	pointer-events: none;
	z-index: 1;
}
</style>
