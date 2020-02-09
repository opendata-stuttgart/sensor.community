<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('sensor:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('sensor:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="lf-padding container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap my-12">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-lf-extra-bold leading-tight">
                        Sensor Kits</h1>
                </div>
            </div>
        </div>
        <div class="w-full flex">
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                        <div class="mb-1 text-4xl text-gray-700">Sensor Kit 1</div>
                    </div>
                    <div>
                        <ul>
                            <li class="items-center border-b border-t pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">NodeMCU</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">SDS011</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">~ 49.99 €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md opacity-50">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                        <div class="mb-1 text-4xl text-gray-700">Sensor Kit 2</div>
                    </div>
                    <div>
                        <ul>
                            <li class="items-center border-b border-t pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">ESP 32</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">SDS011</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">- €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md opacity-50">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                        <div class="mb-1 text-4xl text-gray-700">Sensor Kit 3</div>
                    </div>
                    <div>
                        <ul>
                            <li class="items-center border-b border-t pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">ESP 32</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">-</span>
                            </li>
                            <li class="items-center border-b pt-2 pb-2">
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">- €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Contact/>