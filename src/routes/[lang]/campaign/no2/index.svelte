<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    function delayMap() {
        if (process.browser) {
            setTimeout(function () {
                document.getElementById('map-frame').src = 'https://no2.maps.sensor.community';
            }, 900);
        }
    }
</script>

<svelte:head>
    <title>{i18n.t('campaign:no2-metaTitle')}</title>
    <meta property="og:title" content="{i18n.t('campaign:no2-metaTitle')}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="container mx-auto mt-10 mb-10">
        <div class="container mx-auto md:px-16 mx-auto md:pt-12 md:w-4/5">
            <div class="px-4 text-center">
                <h1 class="leading-lf font-black text-3xl md:text-6xl">
                    #NO2</h1>
                <p class="text-gray-700 text-2xl mt-6">{i18n.t('campaign:no2')}<p>
            </div>
            <div class="text-gray-700 text-xl p-8">
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase1')} </span>{i18n.t('campaign:no2-phase1')} ✔</p>
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase2')} </span>{i18n.t('campaign:no2-phase2')} ️️✔️</p>
                <p class="pb-4"><span class="font-bold">{i18n.t('campaign:phase3')} </span>{i18n.t('campaign:no2-phase3')}</p>
            </div>
        </div>

        <div class="relative z-20 md:block mx-auto md:bg-white md:shadow-lg z-10 mb-10">
            <div class="flex" style="height: 40em;">
                <iframe scrolling="no" class="z-10" id="map-frame" onLoad="{delayMap()}"
                        src=""
                        style="width: 97%; height: 95%; margin: auto; "
                        title="sensor.community particulate matter map"></iframe>
            </div>
        </div>
    </section>
</div>
