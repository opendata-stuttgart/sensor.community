<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<section class="container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap">
            <h2 class="w-full py-4 md:py-8 text-gray-700 text-5xl font-bold leading-normal text-center flex-col">
                {i18n.t('contact:title')}</h2>

            <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700">
                <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-md max-w-xs shadow-md border bg-gray-200 w-full h-56 md:w-1/5">
                    <a href="mailto:contact@Sensor.Community">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-4xl">{i18n.t('contact:general')}</span>
                            <div class="flex justify-between">
                                <span class="block text-3xl"> ️🧐 {i18n.t('contact:general-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-md max-w-xs shadow-md border bg-gray-200 w-full h-56 md:w-1/5">
                    <a href="mailto:partnership@Sensor.Community">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-4xl">{i18n.t('contact:partnership')}</span>
                            <div class="flex justify-between">
                                <span class="block text-3xl">️💌 {i18n.t('contact:partnership-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-md max-w-xs shadow-md border bg-gray-200 w-full h-56 md:w-1/5">
                    <a href="mailto:press@Sensor.Community">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-4xl">{i18n.t('contact:press')}</span>
                            <div class="flex justify-between">
                                <span class="block text-3xl">️📰 {i18n.t('contact:press-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-md max-w-xs shadow-md border bg-gray-200 w-full h-56 md:w-1/5">
                    <a href="mailto:tech@Sensor.Community">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <span class="block -mb-1 text-4xl">{i18n.t('contact:tech')}</span>
                            <div class="flex justify-between">
                                <span class="block text-3xl">️💻 {i18n.t('contact:tech-subtitle')}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
