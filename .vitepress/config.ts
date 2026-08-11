// oxlint-disable import/no-nodejs-modules
import type { ThemeConfig } from 'vitepress-theme-trito';
import { resolve } from 'node:path';
import canvas from 'vite-plugin-json-canvas';
import { defineConfig } from 'vitepress';

function p(path: string) {
	return resolve(__dirname, '..', path);
}

export default defineConfig<ThemeConfig>({
	cleanUrls: true,
	head: [
		['link', { href: '/favicon.ico', rel: 'icon' }],
		['meta', { content: 'dark light', name: 'color-scheme' }],
	],
	lastUpdated: true,
	locales: {
		root: {
			description:
				"Hēsperus' (hesprs) portfolio, including information about Hēsperus' personalities, hobbies, and project introductions and demos.",
			head: [
				[
					'meta',
					{
						content: 'hesprs,hesperus,pointeract,projects,portfolio,json canvas viewer',
						name: 'keywords',
					},
				],
			],
			label: 'English',
			lang: 'en',
			themeConfig: {
				footer: {
					copyright: 'Copyright © 2025-2026 Hēsperus',
					message:
						'All content licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> License.',
				},
				nav: [
					{ link: '/', text: 'Home' },
					{
						items: [
							{ link: '/projects/pointeract', text: 'Pointeract' },
							{ link: '/projects/json-canvas-viewer', text: 'JSON Canvas Viewer' },
							{ link: '/projects/trito', text: 'Trito' },
							{
								link: '/projects/sync-engine',
								text: 'Sync Engine',
							},
						],
						text: 'Projects',
					},
					{
						items: [{ link: '/researches/synthkernel', text: 'SynthKernel' }],
						text: 'Researches',
					},
				],
			},
			title: 'HESPERI',
		},
		'zh-Hans': {
			description:
				'Hēsperus（hesprs）的作品集，包含有关 Hēsperus 的个性、爱好以及项目介绍和演示。',
			head: [
				[
					'meta',
					{
						content: 'hesprs,hesperus,pointeract,projects,portfolio,json canvas viewer',
						name: 'keywords',
					},
				],
			],
			label: '简体中文',
			lang: 'zh-Hans',
			themeConfig: {
				footer: {
					copyright: '版权所有 © 2025-2026 Hēsperus',
					message:
						'所有内容依据 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 许可证授权。',
				},
				nav: [
					{ link: '/zh-Hans/', text: '首页' },
					{
						items: [
							{ link: '/zh-Hans/projects/pointeract', text: 'Pointeract' },
							{
								link: '/zh-Hans/projects/json-canvas-viewer',
								text: 'JSON Canvas Viewer',
							},
							{ link: '/zh-Hans/projects/trito', text: 'Trito' },
							{
								link: '/zh-Hans/projects/sync-engine',
								text: 'Sync Engine',
							},
						],
						text: '项目',
					},
					{
						items: [{ link: '/zh-Hans/researches/synthkernel', text: 'SynthKernel' }],
						text: '研究',
					},
				],
			},
			title: '赫斯珀里',
		},
	},
	markdown: {
		image: { lazyLoading: true },
	},
	outDir: p('dist'),
	rewrites: { 'en/:rest*': ':rest*' },
	sitemap: { hostname: 'https://hesprs.github.io' },
	srcDir: p('pages'),
	themeConfig: {
		aside: 'left',
		logo: { alt: 'Website logo', src: '/logo-flat.svg' },
		logoLarge: { alt: 'Website large logo', dark: '/logo-dark.svg', light: '/logo.svg' },
		search: { provider: 'local' },
		socialLinks: [
			{ icon: 'npm', link: 'https://www.npmjs.com/~hesprs' },
			{ icon: 'github', link: 'https://github.com/hesprs' },
			{ icon: 'x', link: 'https://x.com/Hesprs' },
		],
	},
	vite: {
		plugins: [canvas()],
		publicDir: p('public'),
		resolve: {
			alias: {
				$: p('pages'),
				'@': p('.vitepress/theme'),
			},
		},
		ssr: {
			noExternal: ['vitepress-theme-trito'],
		},
	},
});
