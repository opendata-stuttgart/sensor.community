<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('collaborations:metaTitle')}</title>
    <meta property="og:title" content="{i18n.t('collaborations:metaTitle')}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="container mx-auto mt-10">
        <div class="container mx-auto text-center">
            <div class="md:w-4/5 px-4 md:px-16 mx-auto md:py-24 my-12 md:my-14"><h1
                    class="leading-lf font-black text-3xl md:text-6xl">
                {i18n.t('collaborations:h1')}</h1>
                <h2 class="leading-normal text-base md:text-xl mt-6 opacity-75 md:px-10">{i18n.t('collaborations:subtitle')}</h2></div>
        </div>

        <div class="container mx-auto mb-48">
            <div class="container mx-auto text-center">
                <a href="mailto:partnership@sensor.community" class="bg-teal-500 text-center hover:bg-teal-700 hover:text-white mx-auto rounded-lg inline-block shadow px-8 py-6 text-white text-xl">
                    <div>{i18n.t('collaborations:getNotified')}</div>
                </a></div>
        </div>
    </section>
</div>