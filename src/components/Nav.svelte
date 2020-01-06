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

			<!--Hoverable Link-->
			<li class="hoverable hover:bg-teal-500 hover:text-white">
				<a href='{$locale}/docs' class:selected="{segment === `/${locale}/docs` ? 'selected' : ''}" class="relative block py-6 px-4 lg:p-5 text-sm lg:text-base font-bold hover:bg-teal-500 hover:text-white">{$_('nav.docs')}</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-500">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<div class="w-full text-white mb-8">
							<h2 class="font-bold text-2xl"></h2>
							<p></p>
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
				<a href='{$locale}/docs' class:selected="{segment === `/${locale}/docs` ? 'selected' : ''}" class="relative block py-6 px-4 lg:p-5 text-sm lg:text-base font-bold hover:bg-teal-500 hover:text-white">{$_('nav.docs')}</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-500">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<div class="w-full text-white mb-8">
							<h2 class="font-bold text-2xl"></h2>
							<p></p>
						</div>
						<ul >
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
<!--<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 216.4144 232.00976">-->
<!--				<path fill="#2b90d9" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>-->
<!--				<path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>-->
<!--			</svg>-->
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
