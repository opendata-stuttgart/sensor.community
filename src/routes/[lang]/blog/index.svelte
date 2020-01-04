<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`{$locale}/blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import { _, locale, locales } from 'svelte-i18n';
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		{#if $locale === post.lang}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='{$locale}/blog/{post.slug}'>{post.title}</a></li>
		{/if}
	{/each}
</ul>
