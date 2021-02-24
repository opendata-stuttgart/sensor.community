<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
    import LanguageSwitcher from './LanguageSwitcher.svelte'
    import {flag} from "country-emoji"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");

    export let segment;

    $: menu = {open: false};

    function menuToggle() {
        menu.open = !menu.open;
    }
</script>

<div class="border-teal-500 border-t-4"></div>
<div class="relative lg:mx-20 bg-white z-50 sticky top-0">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-200 py-3 md:justify-start md:space-x-10 font-semibold text-gray-700">
            <div class="lg:w-0 lg:flex-1">
                <a href="{lang}/" class="block uppercase hover:text-teal-500">
                    <span class="font-black">sensor</span><span class="font-light">.community</span>
                </a>
            </div>
            <div class="md:hidden block">
                <LanguageSwitcher/>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" on:click={menuToggle}
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300 transition duration-150 hover:text-teal-500 ease-in-out">
                    {#if !menu.open}
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    {:else}
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    {/if}
                </button>
            </div>
            <nav class="hidden md:flex space-x-10 uppercase">
                <a href="{lang}/" on:click={menuToggle}
                   class="text-base leading-6 transition ease-in-out duration-150 hover:text-teal-500">
                    {i18n.t('nav:home')}
                </a>

                <a href="{lang}/sensors/" on:click={menuToggle}
                   class="text-base leading-6 transition ease-in-out duration-150 hover:text-teal-500">
                    {i18n.t('nav:sensor')}
                </a>

                <a href="https://forum.sensor.community/" target="_blank" on:click={menuToggle}
                   class="text-base leading-6 transition ease-in-out duration-150 hover:text-teal-500">
                    {i18n.t('nav:forum')}
                </a>

                <a href="{lang}/donate/" on:click={menuToggle}
                   class="whitespace-no-wrap font-semibold leading-6">
                    {i18n.t('nav:donate')}
                    <svg class="inline-block ml-1" width="16" height="16" viewBox="0 5 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ff2e87"
                              d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
                    </svg>
                </a>
            </nav>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                <LanguageSwitcher class="sm:hidden"/>
                <span class="inline-flex">
                    <a href="https://github.com/opendata-stuttgart/" class="block md:px-4 text-gray-700 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>

<!--Mobile menu-->
<div class="absolute z-50 inset-x-0 transition transform origin-top-right md:hidden { menu.open ? 'block opacity-100 translate-y-0 ease-out' : 'hidden opacity-0 -translate-y-1 ease-in' } transition  duration-200">
    <div class="rounded-lg shadow-lg bg-white">
        <div class="divide-y-2 divide-gray-50">
            <div class="pb-6 mt-4 px-5 space-y-6">
                <nav class="grid gap-y-8 { menu.open ? 'open' : 'closed' }">
                    <a href="{lang}/" on:click={menuToggle}
                       class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-300 transition ease-in-out duration-150 hover:text-teal-500">
                        <svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>

                        <div class="text-base leading-6 font-medium text-gray-900">
                            {i18n.t('nav:home')}
                        </div>
                    </a>
                    <a href="{lang}/sensors/" on:click={menuToggle}
                       class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-300 transition ease-in-out duration-150 hover:text-teal-500">
                        <svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                        </svg>
                        <div class="text-base leading-6 font-medium text-gray-900">
                            {i18n.t('nav:sensor')}
                        </div>
                    </a>
                    <a href="{lang}/forum/" on:click={menuToggle}
                       class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-300 transition ease-in-out duration-150 hover:text-teal-500">
                        <svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                        </svg>
                        <div class="text-base leading-6 font-medium text-gray-900">
                            {i18n.t('nav:forum')}
                        </div>
                    </a>
                    <a href="{lang}/donate/" on:click={menuToggle}
                       class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-300 transition ease-in-out duration-150 hover:text-teal-500">
                        <svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                            <path fill="#ff2e87" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        <div class="text-base leading-6 font-medium text-gray-900">
                            {i18n.t('nav:donate')}
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</div>


