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

<header class="py-4 px-6 absolute top-0 left-0 right-0 z-10 border-teal-500 border-t-8">
    <div class="container mx-auto">
        <div class="flex items-center">
            <div class="flex-1">
                <img src="logo.svg" alt="Sensor Community Logo" width="125px" height="125px">
            </div>
            <div class="sm:hidden">
                {#if menu.open}
                    <button on:click={menuToggle}>
                        <svg class="current-fill h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                            <path fill-rule="evenodd"
                                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        </svg>
                    </button>
                {:else}
                    <button on:click={menuToggle}>
                        <svg class="current-fill h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                            <path fill-rule="evenodd"
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                {/if}
            </div>
            <nav class="lg:flex items-center { menu.open ? 'block' : 'hidden' }" >
                <a href="{lang}/" class="px-6 py-3 font-bold uppercase text-primary border-b-2 border-primary"
                   class:selected="{segment === `/{lang}/` ? 'selected' : ''}">{i18n.t('nav:home')}</a>
                <a href="{lang}/sensors/" class="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
                   class:selected="{segment === `/{lang}` ? 'selected' : ''}">{i18n.t('nav:sensor')}</a>
                <a href='https://forum.sensor.community'
                   class="px-6 py-3 font-bold uppercase text-secondary hover:text-primary">{i18n.t('nav:forum')}</a>
                <a href='{lang}/donate/' class="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
                   class:selected="{segment === `/{lang}/donate/` ? 'selected' : ''}">{i18n.t('nav:donate')}
                    <img src="/icons/heart.svg" class="-mt-1" width='20px' height="20px"
                         alt="donate sensor.community"></a>
                <a href={`en/${pathWithoutLang}`}
                   class="px-2 py-3 font-bold uppercase text-secondary hover:text-primary {lang === 'en' ? 'selected' : ''}">en</a>
                <span>|</span>
                <a href={`de/${pathWithoutLang}`}
                   class="px-2 py-3 font-bold uppercase bg-primary hover:bg-primary-400 text-secondary rounded {lang === 'de' ? 'selected' : ''}">de</a>
            </nav>
        </div>
    </div>
</header>

