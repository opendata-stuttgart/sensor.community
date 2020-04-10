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

    let menu = {open: false};

    function menuToggle() {
        menu.open = !menu.open;
    }
</script>

<style>
    #menu {
        width: 30px;
        position: relative;
        margin-right: 15px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    #menu span {
        background-color: #4a5568;
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        border-radius: 5px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    #menu span:nth-child(1) {
        top: 0px;
    }

    #menu span:nth-child(2) {
        top: 9px;
    }

    #menu span:nth-child(3) {
        top: 18px;
    }

    #menu.open span:nth-child(1) {
        top: 9px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    #menu.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    #menu.open span:nth-child(3) {
        top: 9px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }
</style>


<div class="border-teal-500 border-t-8 z-50"></div>
<div class="bg-white sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3 lg:mx-48 z-50 border-b text-2xl md:text-base ">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
            <a href="{lang}/">
                <img src="logo.svg" alt="Sensor Community Logo" width="125px" height="125px">
            </a>
        </div>
        <div on:click={menuToggle} id="menu" class="sm:hidden { menu.open ? 'open' : 'closed' }">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <nav class="sm:block { menu.open ? 'block' : 'hidden' }">
        <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <a href="{lang}/" class="uppercase block md:px-4 text-gray-700 font-semibold"
               class:selected="{segment === `/{lang}/` ? 'selected' : ''}">{i18n.t('nav:home')}</a>
            <a href="{lang}/sensors/" class="uppercase mt-1 block md:px-4 text-gray-700 font-semibold sm:mt-0 sm:ml-2"
               class:selected="{segment === `/{lang}` ? 'selected' : ''}">{i18n.t('nav:sensor')}</a>
            <a href="{lang}/forum/"
               class="uppercase mt-1 block md:px-4 text-gray-700 font-semibold sm:mt-0 sm:ml-2">{i18n.t('nav:forum')}</a>
            <a href="{lang}/donate/" class="uppercase mt-1 block md:px-4 text-gray-700 font-semibold sm:mt-0 sm:ml-2"
               class:selected="{segment === `/{lang}/donate/` ? 'selected' : ''}">{i18n.t('nav:donate')}
                <svg class="inline-block ml-1" width="16" height="16" viewBox="0 -28 512.00002 512"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ff2e87"
                          d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
                </svg>
            </a>
            <a href="{`en/${pathWithoutLang}`}" class="uppercase md:pl-4 block"
               class:selected="{lang === 'en' ? 'selected' : ''}">{flag('usa')}</a>
            <a href="{`de/${pathWithoutLang}`}" class="uppercase block md:px-2"
               class:selected="{lang === 'de' ? 'selected' : ''}">{flag('de')}</a>
            <!--      <LanguageSwitcher class="hidden sm:block sm:ml-6"/>-->
            <a href="https://github.com/opendata-stuttgart/" class="block md:px-4 text-gray-700 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
        </div>
    </nav>
</div>

