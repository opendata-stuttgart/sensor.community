<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
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

<div class="relative">
    <button on:click={menuToggle} class="uppercase block px-2 text-gray-700 font-semibold rounded">
        {#if flag(`${lang}`) != undefined}
            {flag(`${lang}`)}
        {:else}
            {flag('gb')}
        {/if}
    </button>
    <div class="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl border { menu.open ? 'block' : 'hidden' } z-50">
        <a on:click={menuToggle} href="{`en/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'en' ? 'selected' : ''}"> {flag('gb')} en</a>
        <a on:click={menuToggle} href="{`de/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'de' ? 'selected' : ''}"> {flag('de')} de</a>
        <a on:click={menuToggle} href="{`fr/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'fr' ? 'selected' : ''}"> {flag('fr')} fr</a>
        <a on:click={menuToggle} href="{`it/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'it' ? 'selected' : ''}"> {flag('it')} it</a>
        <a on:click={menuToggle} href="{`sk/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'sk' ? 'selected' : ''}"> {flag('sk')} sk</a>
        <a on:click={menuToggle} href="{`ru/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'ru' ? 'selected' : ''}"> {flag('ru')} ru</a>
        <a on:click={menuToggle} href="{`cz/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'cz' ? 'selected' : ''}"> {flag('cz')} cz</a>
       <a on:click={menuToggle} href="{`bg/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'bg' ? 'selected' : ''}"> {flag('bg')} bg</a>
       <a on:click={menuToggle} href="{`nl/${pathWithoutLang}`}"
           class="uppercase block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
           class:selected="{lang === 'nl' ? 'selected' : ''}"> {flag('nl')} nl</a>
    </div>
</div>
