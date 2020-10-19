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

    const langauges = [
        "gb", "de", "fr", "it", "es", "nl", "ru", "sk", "cz", "bg",
    ]
</script>

<div class="md:relative z-50">
    <button on:click={menuToggle} type="button"
            class="text-gray-500 inline-flex items-center text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
        <span class="text-xl font-bold">{#if flag(`${lang}`) != undefined}
            {flag(`${lang}`)}
        {:else}
            {flag('gb')}
        {/if}</span>
        {#if !menu.open}
        <svg class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
        </svg>
        {:else}
            <svg class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        {/if}
    </button>
    <div class="absolute transition leading-6 transform -ml-4 inset-x-0 d:max-w-md md:-translate-x-48 { menu.open ? 'block' : 'hidden' }">
        <div class="rounded-lg shadow-xs mt-6 md:w-64">
            <div class="relative bg-white p-6 grid grid-cols-2">
                {#each langauges as lang}
                    <a on:click={menuToggle} href="{`{lang}/${pathWithoutLang}`}"
                       class="uppercase inline-block p-2 text-gray-700 font-semibold rounded hover:bg-teal-500 hover:text-white"
                       class:selected="{lang === {lang} ? 'selected' : ''}">{flag(lang)} {lang}</a>
                {/each}
            </div>
            <div class="hidden rounded-lg md:block bg-gray-50 p-8 bg-gray-100">
                <a href="https://github.com/opendata-stuttgart/meta/wiki/Translations"
                   class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                    <div class="items-center">
                        <div class="-ml-2 py-0.5 rounded-full text-xs font-medium leading-5 bg-teal-100 text-teal-800 mb-2 w-1/2 text-center">
                            Help wanted
                        </div>
                        <div class="text-base text-xs font-medium text-gray-900">
                            Missing your language?
                        </div>
                    </div>
                    <p class="text-sm leading-5 text-gray-500">
                        Provide your translation <br> via GitHub
                    </p>
                </a>
            </div>
        </div>
    </div>
</div>



