<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

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
    img {
        display: inline;
    }
</style>
<div class="border-teal-500 border-t-8 z-50"></div>
<header class="py-2 z-50 shadow">
    <div class="container mx-auto">
        <div class="flex items-center">
            <div class="flex-1">
                <a href="{lang}/">
                <img src="logo.svg" alt="Sensor Community Logo" width="125px" height="125px">
                </a>
            </div>
            <div class="sm:hidden">
                {#if menu.open}
                    <button on:click={menuToggle} type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <svg class="h-6 w-6 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                            <path fill-rule="evenodd"
                                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        </svg>
                    </button>
                {:else}
                    <button on:click={menuToggle}>
                        <svg class="h-6 w-6 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                            <path fill-rule="evenodd"
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                {/if}
            </div>
            <nav class="lg:flex items-center { menu.open ? 'block' : 'hidden' } sm:flex sm:p-0" >
                <a href="{lang}/" class="block px-6 py-3 font-bold uppercase text-primary"
                   class:selected="{segment === `/{lang}/` ? 'selected' : ''}">{i18n.t('nav:home')}</a>
                <a href="{lang}/sensors/" class="block px-6 py-3 font-bold uppercase text-secondary"
                   class:selected="{segment === `/{lang}` ? 'selected' : ''}">{i18n.t('nav:sensor')}</a>
                <a href='{lang}/forum/'
                   class="block px-6 py-3 font-bold uppercase text-secondary">{i18n.t('nav:forum')}</a>
                <a href='{lang}/donate/' class="block px-6 py-3 font-bold uppercase text-secondary"
                   class:selected="{segment === `/{lang}/donate/` ? 'selected' : ''}">{i18n.t('nav:donate')}<svg class="inline-block px-2" width="35" height="35" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ff2e87" d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
                </a>
                <a href={`en/${pathWithoutLang}`}
                   class="px-2 py-3 font-bold uppercase text-secondary {lang === 'en' ? 'selected' : ''}">en</a>
                <span>|</span>
                <a href={`de/${pathWithoutLang}`}
                   class="px-2 py-3 font-bold uppercase bg-primary hover:bg-primary-400 text-secondary rounded {lang === 'de' ? 'selected' : ''}">de</a>
            </nav>
        </div>
    </div>
</header>

