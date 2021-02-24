<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('campaign:refs-metaTitle')}</title>
    <meta property="og:title" content="{i18n.t('campaign:refs-metaTitle')}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="container mx-auto mt-10">
        <div class="container mx-auto md:px-16 mx-auto md:pt-12 md:w-4/5">
            <div class="px-4 text-center">
                <h1 class="leading-lf font-black text-3xl md:text-6xl">
                    #Sensor@RefS</h1>
                <p class="text-gray-700 text-2xl mt-6">{i18n.t('campaign:refs')}</p>
            </div>
            <div class="text-gray-700 text-xl p-8">
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase1')} </span>{i18n.t('campaign:refs-phase1')}</p>
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase2')} </span>{i18n.t('campaign:refs-phase2')}</p>
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase3')} </span>{i18n.t('campaign:refs-phase3')}</p>
            </div>
        </div>


        <div class="container mx-auto mb-48">
            <div class="container mx-auto text-center">
                <a href="mailto:Campaign03@Sensor.Community"
                   class="bg-teal-500 text-center hover:bg-teal-700 hover:text-white mx-auto rounded-lg inline-block shadow px-8 py-6 text-white text-xl">
                    <div>{i18n.t('campaign:getNotified')}</div>
                </a></div>
        </div>
    </section>
</div>
