<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import Cards from "../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const contributors = [
        { name: "Rajko", position: "DevOps", imageURL: "images/contributors/rajko-zschiegner.jpg" },
        { name: "Lukas", position: "Partnership & Community", imageURL: "images/contributors/lukas-mocek.jpg"},
        { name: "David", position: "Developer", imageURL: "images/contributors/david-lackovic.jpg"},
        { name: "Pierre-Jean", position: "Data Viz & Partnerhsip FR", imageURL: "images/contributors/pierre-jean-gueno.jpg"}
    ]
</script>

<svelte:head>
    <title>{i18n.t('contributors:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('contributors:metaTitle')}/>
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
                        {i18n.t('contributors:h1')}</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    {i18n.t('contributors:description')}
                    <br>
                </p>
                <span class="text-center text-gray-600 mt-10">
                   {i18n.t('contributors:contactBottom')}
                </span>
            </div>
            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team" loading="lazy"></div>
        </div>

        <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal text-center md:text-left">
            {i18n.t('contributors:meetTeam')}</h2>

        <div>
            <div class="mx-auto max-w-screen-xl">
                    <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4">
                        {#each contributors as contributor}
                            <li>
                                <div class="space-y-4">
                                    <div class="relative pb-2/3">
                                        <img class="object-cover h-full w-full shadow-xs rounded-lg" src={contributor.imageURL} alt="" loading="lazy">
                                    </div>

                                    <div class="space-y-2">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h4>{contributor.name}</h4>
                                            <p class="text-teal-600">{contributor.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
            </div>
        </div>
    </div>
</section>

<Contact/>


