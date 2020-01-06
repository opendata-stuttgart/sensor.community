<script context="module">
	export async function preload() {
		const sections = await this.fetch(`{$locale}/docs.json`).then(r => r.json());
		return { sections };
	}
</script>

<script>
	import { _ } from 'svelte-i18n'

	import { Docs } from '@sveltejs/site-kit'

	export let sections;
</script>

<style>
	/* lists ---------------------------------- */
	.listify ol, .listify ul {
		--list-padding: 2.9rem;
		list-style: none;
		color: currentColor;
		margin-left: var(--list-padding);
	}
	.listify ol > li, .listify ul > li {
		max-width: calc(var(--linemax) - var(--list-padding));
		line-height: 1.5;
		margin: 0 0 0.4rem 0;
	}
	.listify ul > li:before {
		content: '';
		position: absolute;
		margin-top: 1.1rem;
		margin-left: -1.8rem;
		background-color: var(--second);
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 2px;
		opacity: 0.7;
	}
	.listify ol {
		list-style: decimal;
	}
	.content {
		margin-top: 2rem;
	}

</style>

<svelte:head>
	<title>{$_('docs.metaTitle')}</title>
	<meta name="Description" content={$_('docs.metaDescription')}>

	<meta name="twitter:title" content={$_('docs.metaTitle')}>
	<meta name="twitter:description" content={$_('docs.metaDescription')}>
</svelte:head>

<Docs {sections} project="sapper" class="mt-10"/>
