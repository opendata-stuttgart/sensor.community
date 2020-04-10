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
        {flag(`{lang}`)}
    </button>
    <div class="shadow-md absolute right-0 mt-2 py-2 w-24 bg-white rounded-lg shadow-xl { menu.open ? 'block' : 'hidden' }">
        <a href="{`en/${pathWithoutLang}`}" class="uppercase block px-2 text-gray-700 font-semibold rounded hover:bg-teal-500" class:selected="{lang === 'en' ? 'selected' : ''}"> {flag('usa')} en</a>
        <a href="{`de/${pathWithoutLang}`}" class="uppercase block px-2 text-gray-700 font-semibold rounded hover:bg-teal-500" class:selected="{lang === 'de' ? 'selected' : ''}"> {flag('de')} de</a>
    </div>
</div>
