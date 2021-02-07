<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../components/Contact.svelte"
    import Cards from "../../../components/Cards.svelte"

    import {flag} from "country-emoji"

    const projects = [
        { link: "", title: "Stuttgart", description: "Stuttgart <br >754 Sensors <br> 5 Contributors", country: "PL", imageUrl: "https://picsum.photos/300/300/?random", deactivate: true},
        { link: "", title: "Brussel", description: "Brussel <br> 560 Sensors <br> 2 Contributors", country: "DE", imageUrl: "https://picsum.photos/300/300/?random",deactivate: true},
        { link: "", title: "China", description: "Bejing <br> 14 Sensors <br> 4 Contributors", country: "UK", imageUrl: "https://picsum.photos/300/300/?random",deactivate: true},
    ]

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('hubs:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('hubs:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="container mx-auto">
    <div class="flex flex-row flex-wrap mt-10 mx-10">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-black leading-tight">
                        {i18n.t('hubs:h1')}</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    {i18n.t('hubs:description')}️<br>
                </p>
            </div>
            <!--            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team" loading="lazy"></div>-->
        </div>


        {#each projects as project}
            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6">
                    <Cards
                            link={lang}{project.link}
                            subtitle={project.subtitle}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            country={project.country}
                            type={project.type}
                            deactivate={project.deactivate}
                    />
                </div>
            </div>
        {/each}
    </div>


</section>
<Contact/>
