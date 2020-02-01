<script>
	import { onMount } from 'svelte';
	import GuideContents from './GuideContents.svelte';
	import Icon from './Icon.svelte';
	import { getFragment } from '../utils/navigation';

	import { _, locale, locales} from 'svelte-i18n';

	export let owner = ' ohheyitsdave';
	export let project = 'sensor.community';
	// export let path = `{$locale}`;
	export let dir = 'docs';
	export let edit_title = 'edit this section';
	export let sections;
	let active_section;

	let container;
	let aside;
	let show_contents = false;

	onMount(() => {
		// don't update `active_section` for headings above level 4, see _sections.js
		const anchors = container.querySelectorAll('[id]:not([data-scrollignore])');

		let positions;

		const onresize = () => {
			const { top } = container.getBoundingClientRect();
			positions = [].map.call(anchors, anchor => {
				return anchor.getBoundingClientRect().top - top;
			});
		}

		let last_id = getFragment();

		const onscroll = () => {
			const top = -window.scrollY;

			let i = anchors.length;
			while (i--) {
				if (positions[i] + top < 40) {
					const anchor = anchors[i];
					const { id } = anchor;

					if (id !== last_id) {
						active_section = id;
						last_id = id;
					}

					return;
				}
			}
		};

		window.addEventListener('scroll', onscroll, true);
		window.addEventListener('resize', onresize, true);

		// wait for fonts to load...
		const timeouts = [
			setTimeout(onresize, 1000),
			setTimeout(onscroll, 5000)
		];

		onresize();
		onscroll();

		return () => {
			window.removeEventListener('scroll', onscroll, true);
			window.removeEventListener('resize', onresize, true);

			timeouts.forEach(timeout => clearTimeout(timeout));
		};
	});
</script>

<style>
	aside {
		position: fixed;
		margin-top: 1rem;
		left: 0.8rem;
		bottom: 0.8rem;
		width: 2em;
		height: 2em;
		overflow: hidden;
		border: 1px solid #eee;
		transition: width 0.2s, height 0.2s;
	}

	aside button {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3.4rem;
		height: 3.4rem;
	}

	aside.open {
		width: 100vw;
		height: 100vh;
	}

	aside.open::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 2rem);
		height: 2em;
		pointer-events: none;
		z-index: 2;
	}

	aside::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1.9em;
		width: calc(100% - 2rem);
		height: 2em;
		pointer-events: none;
	}

	.sidebar {
		position: absolute;
		overflow-y: auto;
		width: 100%;
		height: 100%;
		padding: 4em 1.6rem 2em 3.2rem;
		bottom: 2em;
	}

	.content {
		width: 90%;
		margin: 0;
		padding: var(--side-nav);
		tab-size: 2;
		-moz-tab-size: 2;
	}

	@media (min-width: 832px) {
		aside {
			display: block;
			width: var(--sidebar-w);
			height: 100vh;
			top: 0;
			left: 2em;
			overflow: hidden;
			box-shadow: none;
			border: none;
			color: #1a202c;
		}

		aside.open::before {
			display: none;
		}

		/*aside::after {*/
		/*	content: '';*/
		/*	bottom: 0;*/
		/*	height: var(--top-offset);*/
		/*	background: linear-gradient(to bottom, rgba(103,103,120,0) 0%, rgba(103,103,120,0.7) 50%, rgba(103,103,120,1) 100%);*/
		/*}*/

		aside button {
			display: none;
		}

		.sidebar {
			padding: var(--top-offset) 20px 6.4rem 3.2rem;
			overflow-y: auto;
			height: 100%;
			bottom: auto;
			width: 100%;
		}

		.content {
			padding-left: calc(var(--sidebar-w) + var(--side-nav));
		}

		.content :global(.side-by-side) {
			display: grid;
			grid-template-columns: calc(50% - 1em) calc(50% - 1em);
			grid-gap: 1em;
		}

		.content :global(.side-by-side) :global(.code) {
			padding: 1em 0;
		}
	}

	.content h2 {
		color: inherit;
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 1.46978rem;
		line-height: 1.1;
		margin: 1em 0 1.6rem 0 ;
	}

	.content section:first-of-type > h2 {
		margin-top: 0;
	}

	.content :global(h3) {
		margin: 1em 0;
		font-size: 1.4em;
	}
	.content :global(h4) {
		font-size: 1.2em;
		margin: 1em 0 0.5em 0.5em;
	}

	.content h3,
	.content h3 > code {
		margin: 6.4rem 0 0 0;
		padding: 2rem 1.6rem 2.6rem .2rem;
		font-size: 	var(--h4);
		border-top: var(--border-w) solid #6767781f; /* based on --second */
		background: transparent;
		line-height: 1;
	}

	.content h3:first-of-type {
		border: none;
		margin: 0;
	}

	/* avoid doubled border-top */
	.content h3 > code {
		border-radius: 0 0 0 0;
		border: none;
		font-size: inherit;
	}

	.content h4,
	.content h4 > code {
		font-family: inherit;
		font-weight: 600;
		font-size: 2rem;
		margin: 6.4rem 0 1.6rem 0;
		/*padding-left: 0;*/
		background: transparent;
		line-height: 1;
		padding: 0;
		top: 0;
	}

	.content :global(h4 > em) {
		opacity: 0.7;
	}

	.content :global(h5) {
		font-size: 2.4rem;
		margin: 2em 0 0.5em 0;
	}

	.content :global(code) {
		padding: .3rem .8rem .3rem;
		margin: 0 0.2rem;
		top: -.1rem;
		background: #eff8ff;
	}

	.content :global(pre) :global(code) {
		padding: 0;
		margin: 0;
		top: 0;
		background: transparent;
	}

	.content :global(pre) {
		margin: 0 0 2em 0;
		width: 100%;
		max-width: 100%;
	}

	.content :global(.icon) {
		width: 2rem;
		height: 2rem;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}

	.content :global(table) {
		margin: 0 0 2em 0;
	}

	section > :global(.code-block) > :global(pre) {
		display: inline-block;
		background: #eff8ff;
		color: white;
		padding: .3rem .8rem;
		margin: 0;
		max-width: 100%;
	}

	section > :global(.code-block)> :global(pre.language-markup) {
		padding: .3rem .8rem .2rem;
		background: var(--back-api);
	}

	section :global(p) {
		margin: 1em 0;
	}

	small {
		font-size: 0.7rem;
		float: right;
		letter-spacing: 0.1em;
		margin: 5px;
	}

</style>

<div bind:this={container} class="content listify">
	{#each sections as section}
		<section data-id={section.slug}>
			<h2>
				<span id={section.slug}></span>

				<!-- svelte-ignore a11y-missing-content -->
				<a href="{$locale}/docs#{section.slug}" class="anchor" aria-hidden></a>

				{@html section.metadata.title}
				<small>
					<a href="https://github.com/{owner}/{project}/edit/master/{$locale}/{dir}/{section.file}" title="{$_('docs.editOnGithub')}">
						<Icon name='edit' />{$_('docs.editOnGithub')}
					</a>
				</small>
			</h2>

			{@html section.html}
		</section>
	{/each}
</div>

<aside bind:this={aside} class:open={show_contents}>
	<div class="sidebar" on:click="{() => show_contents = false}">
		<GuideContents {sections} {active_section} {show_contents} />
	</div>

	<button on:click="{() => show_contents = !show_contents}">
		<Icon name="{show_contents? 'close' : 'menu'}"/>
	</button>
</aside>
