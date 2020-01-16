<script>
	import { _, locale, locales} from 'svelte-i18n';
</script>

<svelte:head>
	<title>Presskit</title>
</svelte:head>

<div class="bg-white">
	<section class=" container w-1/2 mx-auto mt-10 items-center">
		<div class="flex flex-row flex-wrap items-center">

			<h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal items-center">
				Presskit</h2>

			The OK Lab Stuttgart is part of the program Code for Germany of the Open Knowledge Foundation Germany. The
			aim of the program is to promote developments in the areas of transparency, Open Data and Citizen Science.
			Regional groups consisting of designers, developers, journalists and others meet regularly in Labs. They
			develop apps that inform, positively shape and support society and make the work of administrations and
			authorities more transparent.
			<br>
			<strong>code a difference</strong>: Use your skills to improve your city!

			<hr>
			<h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal items-center">
				Logo</h2>
			<div class="flex flex-wrap">
				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
					<div class="relative p-20 px-10 flex items-center justify-center">
						<img class="relative" src="logo.svg" alt="">
					</div>
				</div>

				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-black rounded-lg max-w-xs shadow-lg">
					<div class="relative p-20 px-10 flex items-center justify-center">
						<img class="relative" src="logo-sw.svg" alt="">
					</div>
				</div>
			</div>

			<hr>

			<h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal items-center">
				Colors</h2>
			<div class="flex flex-wrap">
				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-900 rounded-lg max-w-xs shadow-lg">
					<div class="relative p-20 px-20 flex items-center justify-center text-white">
						#00A672
					</div>
				</div>

				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg">
					<div class="relative p-20 px-20 flex items-center justify-center text-white">
						#00835C
					</div>
				</div>

				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-300 rounded-lg max-w-xs shadow-lg">
					<div class="relative p-20 px-20 flex items-center justify-center text-white">
						#0d2538
					</div>
				</div>
			</div>
			<h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal items-center">
				Pictures</h2>

			<img src="https://exchange.sensor.community/index.php/s/6FWx7MGZZ89CXrt/preview" alt="">
			<img src="https://exchange.sensor.community/index.php/core/preview?fileId=3901&x=3440&y=1440&a=true" alt="">
		</div>
	</section>

	<section class="text-center my-8 px-8">
		<h1 class="font-medium">Questions?</h1>
		<a href="{$locale}" target="_blank"><p class="text-gray-700 mt-2 mb-6">💬 Connect with the communitiy</p></a>
		<a href="mailto:technic@sensor.community" target="_blank">
		<p class="text-gray-700 mt-2 mb-6">✉️ Write us an email</p></a>
	</section>
</div>
