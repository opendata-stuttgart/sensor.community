<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import Cards from "../../components/Cards.svelte"

    import {flag} from "country-emoji"

    const projects = [
        { link: "/test", title: "Stuttgart", description: "8274 Sensors <br> 1525 Meetups", country: "PL", imageUrl: "https://picsum.photos/300/300/?random", type: "closed source"},
        { link: "/test", title: "Brussel", description: "2342 Sensors <br> 124 Meetups", country: "DE", imageUrl: "https://picsum.photos/300/300/?random",type: "closed source"},
        { link: "/test", title: "China", description: "234 Sensors <br> 12 Meetups", country: "UK", imageUrl: "https://picsum.photos/300/300/?random",type: "closed source"},
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
            <!--            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team"></div>-->
        </div>


        {#each projects as project}
            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6">
                    <Cards
                            link={lang}{project.link}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            country={project.country}
                            type={project.type}
                    />
                </div>
            </div>
        {/each}
    </div>


</section>
<Contact/>
