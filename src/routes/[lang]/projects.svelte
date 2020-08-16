<script>
    import initI18n from "../../utils/initI18n";
    import { stores } from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import {flag} from "country-emoji"
    import Cards from "../../components/Cards.svelte"

    const { page } = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const projects = [
        { link: "", title: "Project #2", description: "Project #1", country: "DE", imageUrl: "https://picsum.photos/300/300/?random"},
        { link: "", title: "Project #3", description: "Project #2", country: "UK", imageUrl: "https://picsum.photos/300/300/?random"},
        { link: "", title: "Project #4", description: "Project #3", country: "DE", imageUrl: "https://picsum.photos/300/300/?random"},
        { link: "", title: "Project #5", description: "Project #4", country: "US", imageUrl: "https://picsum.photos/300/300/?random"},
        { link: "", title: "Project #6", description: "Project #5", country: "US", imageUrl: "https://picsum.photos/300/300/?random"}
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
                    {i18n.t('projects:description')}️<br>
                </p>
<!--                <span class="text-center text-gray-600 mt-10">-->
<!--					{i18n.t('projects:submitIdea')}️-->
<!--                     <br> <a class="text-teal-600" href="">{i18n.t('projects:submitProject')}️</a>-->
<!--					</span>-->
            </div>
            <div class="w-full md:w-1/2 my-12"></div>
        </div>




        {#each projects as project}
            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6 hover:shadow-lg">
                    <Cards
                            link={project.link}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            country={project.country}
                            type={project.type}
                            hasCountry={project.hasCountry}
                            hasPrice={project.hasPrice}
                    />
                </div>
            </div>
        {/each}

    </div>
</section>
<Contact/>
