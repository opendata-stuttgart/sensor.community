<script context="module">

	import { _, locale, locales,  isLoading, waitLocale } from 'svelte-i18n';

	export async function preload() {
		return waitLocale()
	}
</script>

<script>
	import { stores } from '@sapper/app';

	export let segment;
	const { page } = stores();
	$: path = $page.path;
	export let path;

	$: pathWithoutLang = path
			.split("/")
			.slice(2)
			.join("/");
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class:selected="{segment === `/${locale}` ? 'selected' : ''}" href='.'>{$_('nav.home')}</a></li>
		<li><a class:selected="{segment === `/${locale}/about` ? 'selected' : ''}" href='{$locale}/about'>{$_('nav.docs')}</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected="{segment === `/${locale}/blog` ? 'selected' : ''}" href='{$locale}/blog'>blog</a></li>
		{#each $locales as item}
			<li>
				<a class="a"
				   class:selected={$locale.includes(item)}
				   href={item}{`/${pathWithoutLang}`}
				   on:click={() => ($locale = item)}>
					{item}
				</a>
			</li>
		{/each}
	</ul>
</nav>
