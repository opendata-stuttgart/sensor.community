<script context="module">
    export function preload({params, query}) {
        return this.fetch(`{lang}/blog.json`).then(r => r.json()).then(posts => {
            return {posts};
        });
    }
</script>

<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import {flag} from "country-emoji"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    export let posts;
</script>


<svelte:head>
    <title>{i18n.t('blog:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('blog:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>


<section class="container mx-auto">
    <div class="flex flex-row flex-wrap mt-10 mx-6">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-black leading-tight">
                        {i18n.t('blog:h1')}</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    {i18n.t('blog:description')}<br>
                </p>
            </div>
            <!--            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team" loading="lazy"></div>-->
        </div>

        <div class="mx-6 mx-auto justify-center">

            {#each posts as post, index}
            <!-- `rel=prefetch` attribute to load the data for the page as soon as  the user hovers over the link or taps it, instead of waiting for the 'click' event -->
                <article class="hover:shadow-lg m-8 rounded-md w-1/2 border-r-8 border-teal-500">
                    <a href="{lang}/blog/{post.slug}">
                        <div class="flex flex-col bg-white rounded p-8 shadow-md mb-4 md:mb-auto">
                            <h2 class="font-bold text-2xl pb-4">{post.title}</h2>
                            <p class="text-gray-600">
                                {post.excerpt}
                            </p>
                            <div class="flex justify-between pt-4">
                                <div class="pill bg-gray-400 rounded-full px-4 text-xs mr-2 py-1">
                                    {post.printDate} - {flag(`${post.lang}`)}
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            {/each}

        </div>
    </div>
</section>