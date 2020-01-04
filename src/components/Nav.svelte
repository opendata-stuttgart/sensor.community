<script context="module">
	import { waitLocale } from 'svelte-i18n';

	export async function preload() {
		return waitLocale()
	}
</script>

<script>
	import { stores } from '@sapper/app';
	import { _, locale, locales,  isLoading } from 'svelte-i18n';
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

	.hoverable > a:after {
		content: "\25BC";
		font-size: 10px;
		padding-left: 10px;
		position: relative;
		top: -1px;
	}

	.hoverable:hover .mega-menu {
		display: block;
	}


	/* #toggle Class Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

	.toggleable > label:after {
		content: "\25BC";
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

	.toggle-input {
		display: none;
	}
	.toggle-input:not(checked) ~ .mega-menu {
		display: none;
	}

	.toggle-input:checked ~ .mega-menu {
		display: block;
	}

	.toggle-input:checked + label {
		color: white;
		background: #2c5282; /*@apply bg-blue-800 */
	}

	.toggle-input:checked ~ label:after {
		content: "\25B2";
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

</style>
<div class="border-teal-500 border-t-8">
<nav class="relative bg-white border-b-2 border-gray-300 text-gray-900 z-50">
	<div class="container mx-auto flex justify-between">
		<div class="relative block p-4 lg:p-6 text-xl text-teal-600 font-bold">Logo</div>
		<ul class="flex">

			<li><a class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
				   class:selected="{segment === `/${locale}` ? 'selected' : ''}" href='.'>{$_('nav.home')}</a></li>
			<li><a class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
				   class:selected="{segment === `/${locale}/about` ? 'selected' : ''}"
				   href='{$locale}/about'>{$_('nav.docs')}</a></li>
			<li><a class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold" rel=prefetch
				   class:selected="{segment === `/${locale}/blog` ? 'selected' : ''}"
				   href='{$locale}/blog'>{$_('nav.blog')}</a></li>


			<!--Toggleable Link-->
			<li class="toggleable hover:bg-teal-600 hover:text-white">
				<input type="checkbox" value="selected" id="toggle-one" class="toggle-input">
				<label for="toggle-one" class="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Lang</label>
				<div role="toggle" class="p-6 mega-menu sm:mb-0 shadow-xl bg-blue-800">
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
			</li>

			<!--Hoverable Link-->
			<li class="hoverable hover:bg-blue-800 hover:text-white">
				<a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">Hover</a>
				<div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
					<div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
						<div class="w-full text-white mb-8">
							<h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
							<p>Sub-hero message, not too long and not too short. Make it just right!</p>
						</div>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
							</div>
							<p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
							</div>
							<p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
							</div>
							<p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
						<ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
							<div class="flex items-center">
								<svg class="h-8 mb-3 mr-3 fill-current text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
								</svg>
								<h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
							</div>
							<p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
							<div class="flex items-center py-3">
								<svg class="h-6 pr-3 fill-current hover:text-white"
									 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
								</svg>
								<a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-white">Find out more...</a>
							</div>
						</ul>
					</div>
				</div>
			</li>

			<li class="hoverable hover:bg-teal-500 hover:text-white">
				<a href="https://github.com/opendata-stuttgart/" target="_blank" rel="noopener noreferrer nofollow" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-teal-500 hover:text-white">
					<svg width="25px" height="22px" viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
						<g>
							<path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
						</g>
					</svg>
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
			<li><a class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold" href="https://fosstodon.org/@SensorCommunity
" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 216.4144 232.00976">
				<path fill="#2b90d9" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
				<path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
			</svg></a>
			</li>
			<li><a href="" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold text-pink-600">Donate</a>
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
