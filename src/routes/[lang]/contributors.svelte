<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import Cards from "../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const contributors = [
        { title: "Rajko", description: "DevOps", imageUrl: "https://picsum.photos/300/300/?random", isFavorite: false },
        { title: "Lukas", description: "Partnership & Community", imageUrl: "https://picsum.photos/300/300/?random", isFavorite: false },
        { title: "David", description: "Developer", imageUrl: "https://picsum.photos/300/300/?random", isFavorite: false }
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
                        Hello from the team 👋</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Meet the team who is working behind the scenes to harness the power of Sensor.Community.<br>
                </p>
                <span class="text-center text-gray-600 mt-10">
                    📮Please use the contact options at the bottom of the page.
                </span>
            </div>
            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team"></div>
        </div>

        <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal text-center md:text-left">
            Meet the team</h2>



        {#each contributors as contributor}
            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6 hover:shadow-lg">
                    <Cards
                            link={contributor.link}
                            title={contributor.title}
                            subtitle={contributor.subtitle}
                            description={contributor.description}
                            imageUrl={contributor.imageUrl}
                            country={contributor.country}
                            type={contributor.type}
                            isFav={contributor.isFavorite}
                    />
                </div>
            </div>
        {/each}

</section>

<Contact/>


