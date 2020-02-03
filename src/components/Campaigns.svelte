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
                {i18n.t('campaigns:title')}</h2>

            <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700 ">
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="mailto:contact@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">#Sensor2Library</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Sensor.Community</span>
                        </div>
                    </a>
                </div>

                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="mailto:press@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#NO2</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Sensor.Community</span>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="mailto:tech@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#S@Rets</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Sensor.Community</span>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="mailto:tech@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#zero200</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Sensor.Community</span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700 ">
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="https://sustainabledevelopment.un.org/?menu=1300" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">#GlobalGoals</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">United Nations SDG</span>
                        </div>
                    </a>

                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="https://www.earthday.org/earth-day-2020/" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#EC2020</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Wilson Center & EPA</span>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="https://cleanairday.eu/" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#CAD2020</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Clean Air Day</span>
                        </div>
                    </a>
                </div>
                <div class="flex-shrink-0 m-6 relative overflow-hidden h-28 rounded-lg max-w-xs shadow-md border bg-gray-200">
                    <a href="mailto:tech@Sensor.Community" target="_blank">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="block text-5xl">️#Sensor2School</span>
                            </div>
                            <span class="block opacity-75 text-4xl -mb-1">Sensor.Community</span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section>
