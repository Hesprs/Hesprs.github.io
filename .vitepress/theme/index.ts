import type { App } from 'vue';
import '@/styles.scss';
import Theme from 'vitepress-theme-trito';
import ProjectPage from '@/ProjectPage.vue';

const theme = {
	enhanceApp({ app }: { app: App }) {
		app.component('Project', ProjectPage);
	},
	extends: Theme,
};

export default theme;
