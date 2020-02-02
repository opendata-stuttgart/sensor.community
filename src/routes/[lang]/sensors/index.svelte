<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Contact from "../../../components/Contact.svelte"
</script>

<svelte:head>
    <title>About</title>

    <meta property="og:title" content={$_('index.metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="lf-padding container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10">
        <h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal text-center md:text-left">
            Choose your sensor</h2>
        <div class="w-full flex">
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                            <div class="mb-1 text-4xl text-gray-700">Basic</div>
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
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">49.99 €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                            <div class="mb-1 text-4xl text-gray-700">Basic</div>
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
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">49.99 €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                <div class="bg-white">
                    <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
                         alt="">
                    <div class="flex items-center px-6">
                            <div class="mb-1 text-4xl text-gray-700">Basic</div>
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
                                <span class="px-4 text-gray-700 text-3xl text-lg ml-3">49.99 €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Contact/>