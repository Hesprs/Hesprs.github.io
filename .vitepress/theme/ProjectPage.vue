<script setup lang="ts">
import type Theme from 'vitepress-theme-trito';
import { useData } from 'vitepress';
import { VPDoc } from 'vitepress-theme-trito';
import { provide, shallowRef } from 'vue';
import type { Props } from '@/ProjectCard.vue';
import LinkIconsKey from '@/keys';
import ProjectCard from '@/ProjectCard.vue';

const linkIcons = shallowRef<Props['linkIcons']>({});
const { frontmatter } = useData<typeof Theme>();
provide(LinkIconsKey, (_icons: Props['linkIcons']) => (linkIcons.value = _icons));
</script>

<template>
	<VPDoc>
		<template #content-before>
			<ProjectCard
				:title="frontmatter.title"
				:links="frontmatter.links"
				:linkIcons
				:description="frontmatter.description"
				:logo="frontmatter.logo"
				class="vp-doc"
			/>
		</template>
	</VPDoc>
</template>
