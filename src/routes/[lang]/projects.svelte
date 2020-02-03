<script>
    import initI18n from "../../utils/initI18n";
    import { stores } from "@sapper/app";

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    import Contact from "../../components/Contact.svelte"

    const fs = require('fs');
    let rows = JSON.parse(fs.readFileSync('./projects/projects.json', 'utf-8'));

    const {flag, code, name, countries} = require('country-emoji');
</script>

<svelte:head>
    <title>{i18n.t('projects:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('projects:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="lf-padding container mx-auto mt-10">

    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-grey-darkest text-4xl md:text-6xl font-lf-extra-bold leading-tight">
                        {i18n.t('projects:h1')}</h1>
                </div>
                <p class="text-grey-darkest text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Find apps, websites,... from our lovely community 💖️<br>
                </p>
                <a href="">
                    <span class="text-center text-gray-600 mt-10">
					Have a great project? Share it with the community! <br> <a class="text-teal-600" href="/docs/how-to-contribute/">Submit your project →</a>
					</span>
                </a>
            </div>
            <div class="w-full md:w-1/2 my-12"></div>
        </div>


        {#each rows as row}

            <div class="m-7 px-1 w-full md:w-1/2 my-4 px-4 lg:w-1/3">
                <article class="overflow-hidden bg-gray-100 rounded-lg shadow-md">
                    <a href="{row.link}">
                        <img alt="" class="block h-auto w-full" src={row.screenshot}>

                        <header class="flex items-center text-2xl justify-between leading-tight p-2 md:p-4">
                            {flag(`${row.language}`)}
                        </header>
                        <footer>

                            <div class="relative px-6 pb-6 mt-6">
                                <span class="block opacity-75 -mb-1 text-sm">{row.platform}</span>
                                <div class="flex justify-between">
                                    <span class="block font-semibold text-xl">{row.title}</span>
                                    <span class="block bg-teal-500 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{row.type}</span>
                                </div>
                            </div>
                        </footer>
                    </a>
                </article>

            </div>
        {/each}
    </div>
</section>
<Contact/>
