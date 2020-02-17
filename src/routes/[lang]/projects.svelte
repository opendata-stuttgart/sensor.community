<script>
    import initI18n from "../../utils/initI18n";
    import { stores } from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import {flag} from "country-emoji"

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    const rows = [
        { "link": "https://play.google.com/store/apps/details?id=pl.tajchert.canary", "title": "Kanarek", "platform": "iOS", "language": "PL", "screenshot": "./platform/appstore.jpg", "type": "closed source"},
        { "link": "https://play.google.com/store/apps/details?id=pl.tajchert.canary", "title": "Kanarek", "platform": "Android", "language": "DE", "screenshot": "./platform/playstore.jpg","type": "closed source"},
        { "link": "https://play.google.com/store/apps/details?id=pl.tajchert.canary", "title": "Kanarek", "platform": "Windows", "language": "PL", "screenshot": "./platform/playstore.jpg","type": "closed source"},
        { "link": "https://play.google.com/store/apps/details?id=pl.tajchert.canary", "title": "Kanarek", "platform": "Windows", "language": "DE", "screenshot": "./platform/playstore.jpg","type": "closed source"},
        { "link": "https://play.google.com/store/apps/details?id=pl.tajchert.canary", "title": "Kanarek", "platform": "Portal", "language": "DE", "screenshot": "./platform/playstore.jpg","type": "closed source"}
    ]

</script>

<svelte:head>
    <title>{i18n.t('projects:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('projects:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10 mx-10">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-black leading-tight">
                        {i18n.t('projects:h1')}</h1>
                </div>
                <p class="text-xl mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Find mobile apps, websites,... from our lovely community 💖️<br>
                </p>
                <span class="text-center text-gray-600 mt-10">
					Have a great project? Share it with the community! <br> <a class="text-teal-600" href="">Submit your project →</a>
					</span>
            </div>
            <div class="w-full md:w-1/2 my-12"></div>
        </div>

        {#each rows as row}

            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6">
                    <a href="{row.link}">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="flex justify-center items-center">
                            <img class="block h-auto w-full"
                                 src="https://picsum.photos/300/300/?random"
                                 alt="">
                        </div>
                        <div class="flex items-center p-6">
                            <div class="flex-1">
                                <div class="mb-1 text-xl font-bold ">{row.title}</div>
                                <div class="mb-1 text-base">{row.platform}</div>
                            </div>
                            <div class="flex align-center">
                                {flag(`${row.language}`)}
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>

        {/each}




    </div>
</section>
<Contact/>
