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
            <h2 class="w-full py-4 md:py-8 text-gray-700 text-5xl md:text-5xl font-bold leading-normal text-center">
                {i18n.t('campaigns:title')}</h2>

            <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700">
                <a href="{lang}/campaign">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">#Sensor2Library</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Sensor.Community</span>
                        </div>
                    </div>
                </a>
                <a href="{lang}/campaign">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#NO2</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Sensor.Community</span>
                        </div>
                    </div>
                </a>
                <a href="{lang}/campaign">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#Sensor@RefS</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Sensor.Community</span>
                        </div>
                    </div>
                </a>
                <a href="{lang}/campaign">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#zero200</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Sensor.Community</span>
                        </div>
                    </div>
                </a>
                <a href="https://sustainabledevelopment.un.org/?menu=1300" target="_blank">
                    <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700 ">
                        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                            <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                                <div class="flex justify-between">
                                    <span class="text-4xl flex">#GlobalGoals</span>
                                </div>
                                <span class="opacity-75 text-3xl -mb-1">United Nations SDG</span>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.earthday.org/earth-day-2020/" target="_blank">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#EC2020</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Wilson Center & EPA</span>
                        </div>
                    </div>
                </a>
                <a href="https://cleanairday.eu/" target="_blank">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#CAD2020</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Clean Air Day </span>
                        </div>
                    </div>
                </a>
                <a href="{lang}/campaign">
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 h-64 w-128">
                        <div class="relative px-6 pb-6 mt-6 hover:text-teal-700">
                            <div class="flex justify-between">
                                <span class="text-4xl flex">️#Sensor2School</span>
                            </div>
                            <span class="opacity-75 text-3xl -mb-1">Sensor.Community</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
