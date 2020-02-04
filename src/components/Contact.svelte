<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
</script>

<section class="lf-padding container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap">
            <h2 class="w-full py-4 md:py-8 text-gray-700 text-5xl md:text-5xl font-lf-bold leading-normal text-center">
                {i18n.t('contact:title')}</h2>
            <div class="mx-auto flex text-gray-700">
                <div class="w-1/4 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                    <a href="mailto:contact@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-5xl">{i18n.t('contact:general')}</span>
                            <div class="flex justify-between">
                                <span class="block text-4xl"> ️🧐 {i18n.t('contact:tech-subtitle')}</span>
                            </div>
                        </div>
                    </a>

                </div>
                <div class="w-1/4 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                    <a href="mailto:partnership@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-5xl">{i18n.t('contact:partnership')}</span>
                            <div class="flex justify-between">
                                <span class="block text-4xl">️💌 {i18n.t('contact:partnership-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/4 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                    <a href="mailto:press@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-5xl">{i18n.t('contact:press')}</span>
                            <div class="flex justify-between">
                                <span class="block text-4xl">️📰 {i18n.t('contact:press-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/4 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                    <a href="mailto:tech@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-5xl">{i18n.t('contact:tech')}</span>
                            <div class="flex justify-between">
                                <span class="block text-4xl">️💻 {i18n.t('contact:tech-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <!--		<h1 class="font-medium">Questions?</h1>-->
            <!--		<a href="https://forum.sensor.community" target="_blank"><p class="text-gray-700 mt-2 mb-6">💬 Connect with the communitiy</p></a>-->
        </div>
    </div>
</section>
