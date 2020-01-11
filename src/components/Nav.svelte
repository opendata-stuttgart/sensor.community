<script context="module">
	import { waitLocale } from 'svelte-i18n';

	export async function preload() {
		return waitLocale()
	}
</script>

<script>
	import { stores } from '@sapper/app';
	import { _, locale, locales } from 'svelte-i18n';
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

	/* #Mega Menu Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	.mega-menu {
		display: none;
		left: 0;
		position: absolute;
		text-align: left;
		width: 100%;
	}

	/* #hoverable Class Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	/*.hoverable {*/
	/*	position: static;*/
	/*}*/

	/*.hoverable > a:after {*/
	/*	content: "\25BC";*/
	/*	font-size: 10px;*/
	/*	padding-left: 10px;*/
	/*	position: relative;*/
	/*	top: -1px;*/
	/*}*/

	.hoverable:hover .mega-menu {
		display: block;
	}
</style>

<div class="border-teal-500 border-t-8 z-50">
<nav class="relative bg-white border-b-2 border-gray-300 text-gray-700 z-50">
	<div class="container mx-auto flex justify-between">
		<div class="relative block p-4 lg:p-4 text-xl text-teal-600">Logo</div>
		<ul class="flex text-gray-700">
			<li><a class="relative block py-6 px-2 lg:p-5 text-sm lg:text-base font-bold"
				   class:selected="{segment === `/${locale}` ? 'selected' : ''}" href='{$locale}'>{$_('nav.home')}</a></li>
			<li><a class="relative block py-6 px-2 lg:p-5 text-sm lg:text-base font-bold" rel=prefetch
				   class:selected="{segment === `/${locale}/blog` ? 'selected' : ''}"
				   href='{$locale}/blog'>{$_('nav.blog')}</a></li>

			<li class="hoverable hover:bg-teal-500 hover:text-white">
				<a href='{$locale}/docs' class:selected="{segment === `/${locale}/docs` ? 'selected' : ''}" class="relative block py-6 px-4 lg:p-5 text-sm lg:text-base font-bold hover:bg-teal-500 hover:text-white">{$_('nav.docs')}</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-500">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<div class="w-full text-white mb-8">
							<h2 class="font-bold text-2xl text-white">Assembly guides</h2>
							<p>Here is an overview of our multiple assembly guides for Sensor Community</p>
						</div>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Particular Matter Sensor</h3>
							</div>
							<p class="text-gray-100 text-sm">Measure air quality yourself</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Noise Measuring Sensor</h3>
							</div>
							<p class="text-gray-100 text-sm">Our newest project, we are measuring noise!</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Additional Sensor</h3>
							</div>
							<p class="text-gray-100 text-sm">Using another sensor, figure out what we support and how to configure?</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">How to contribute</h3>
							</div>
							<p class="text-gray-100 text-sm">You want to help? Here is a start guide!</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
					</div>
				</div>
			</li>

<!--			<li><a href="" class="relative block py-6 px-2 lg:p-5 text-sm lg:text-base font-bold text-pink-600">Donate</a></li>-->

			<div class="border-r"></div>
			<li><a class="relative block py-6 px-2 lg:p-5 text-sm lg:text-base font-bold">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
					 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
					<circle cx="12" cy="12" r="5"></circle>
					<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
				</svg>
			</a>
			</li>

			<li class="hoverable hover:bg-teal-500 hover:text-white">
				<a class="relative block py-6 px-4 lg:p-5 text-sm lg:text-base font-bold uppercase hover:bg-teal-500 hover:text-white">{$locale}</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-500">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<ul>
							{#each $locales as item}
								<li>
									<a class="a block p-3 hover:bg-white-600 text-gray-300 hover:text-white"
									   class:selected={$locale.includes(item)}
									   href={item}{`/${pathWithoutLang}`}
									   on:click={() => ($locale = item)}>
										{item}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</li>

			<li class="border-r"></li>
			<li class="hoverable hover:bg-teal-500 hover:text-white">
				<a href="https://github.com/opendata-stuttgart/" target="_blank" rel="noopener noreferrer nofollow" class="relative block py-6 px-4 lg:p-5 text-sm lg:text-base font-bold hover:bg-teal-500 hover:text-white">
					<img src="icons/github.svg" width="22px" height="22px" alt="">
				</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-500">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<div class="w-full text-white mb-8">
							<h2 class="font-bold text-2xl text-white">Our main projects</h2>
							<p>Here is an overview of our multiple projects for Sensor Community</p>
						</div>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Core Repository</h3>
							</div>
							<p class="text-white text-sm">Here is our core repo where all our open source project are stored on Github.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="https://github.com/opendata-stuttgart/" class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Sensor Firmware</h3>
							</div>
							<p class="text-white text-sm">The source code for our airrohr firmware for the NodeMCU.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>

						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Firmware Flasher</h3>
							</div>
							<p class="text-white text-sm">Our firmware flasher for the NodeMCU makes it easy to install our firmware.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="https://github.com/opendata-stuttgart/" target="_blank" rel="noopener nofollow noreferrer" class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Luftdaten Map</h3>
							</div>
							<p class="text-white text-sm">Code for our sensor (like particulate matter, noise,.. ) and community map .</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="https://github.com/opendata-stuttgart/meta/wiki" target="_blank" rel="noopener nofollow noreferrer"  class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">API</h3>
							</div>
							<p class="text-white text-sm">Read who to access the API endpoints for advanced users.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="https://github.com/opendata-stuttgart/meta/wiki/EN-APIs" target="_blank" rel="noopener nofollow noreferrer" class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-white pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Wiki</h3>
							</div>
							<p class="text-white text-sm">Find all information about the project on Github, like our protocolls, additional instructions,...</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="https://github.com/opendata-stuttgart/meta/wiki/" class="text-white bold border-b-2 border-white hover:text-white">Find out more...</a>
							</div>
						</ul>
					</div>
				</div>
			</li>
			<li>
				<a class="relative block py-6 px-2 lg:p-5 text-sm lg:text-base font-bold" href="https://fosstodon.org/@SensorCommunity" target="_blank" rel="noopener nofollow noreferrer">
					<img src="icons/mastodon.svg" width='21px' height="21px" alt="follow senosr.community on mastodon">
				</a>
			</li>
		</ul>
	</div>
</nav>
</div>
<!--</nav>-->
<!--<nav>-->
<!--	<ul>-->
<!--		<li><a class:selected="{segment === `/${locale}` ? 'selected' : ''}" href='.'>{$_('nav.home')}</a></li>-->
<!--		<li><a class:selected="{segment === `/${locale}/about` ? 'selected' : ''}" href='{$locale}/about'>{$_('nav.docs')}</a></li>-->

<!--		&lt;!&ndash; for the blog link, we're using rel=prefetch so that Sapper prefetches-->
<!--		     the blog data when we hover over the link or tap it on a touchscreen &ndash;&gt;-->
<!--		<li><a rel=prefetch class:selected="{segment === `/${locale}/blog` ? 'selected' : ''}" href='{$locale}/blog'>{$_('nav.blog')}</a></li>-->
<!--		{#each $locales as item}-->
<!--			<li>-->
<!--				<a class="a"-->
<!--				   class:selected={$locale.includes(item)}-->
<!--				   href={item}{`/${pathWithoutLang}`}-->
<!--				   on:click={() => ($locale = item)}>-->
<!--					{item}-->
<!--				</a>-->
<!--			</li>-->
<!--		{/each}-->
<!--	</ul>-->
<!--</nav>-->
