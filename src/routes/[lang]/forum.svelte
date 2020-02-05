<script>
    import initI18n from "../../utils/initI18n";
    import { stores } from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('donate:metaTitle')}</title>
    <meta property="og:title" content={i18n.t('donate:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="lf-padding container mx-auto mt-10">
        <div class="flex flex-row flex-wrap mt-10">
            <div class="w-full flex flex-wrap my-12">
                <div class="w-full text-center md:text-left md:w-1/2">
                    <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                        <h1 class="py-4 md:py-8 md:pb-8 text-grey-darkest text-4xl md:text-6xl font-lf-extra-bold leading-tight">
                            Forum</h1>
                    </div>
                    <p class="text-grey-darkest text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                        soon we will offer you a forum. If you're interested please write us an email.
                        <br>
                    </p>

                </div>
                <div class="w-full md:w-1/2">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player
                            src="https://assets5.lottiefiles.com/packages/lf20_YLDmvx.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"autoplay >
                    </lottie-player>
                </div>
            </div>

            <h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal text-center md:text-left">
               Ways to support</h2>

            <div class="w-1/2 p-6">
                <h3 class="text-gray-800 font-medium py-4 text-2xl">Current Campaign</h3>
                <div class="leading-loose">
                    <div class="max-w-xl m-4 p-10 bg-white border-r ">
                        <div id="betterplace_donation_iframe" style="background: transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat;"><iframe style="max-width: 600px; max-height: none; width: 100%; background-color: transparent; overflow: hidden; height: 994px;" src="https://www.betterplace.org/de/projects/38071/iframe_donations/new?background_color=ffffff&amp;color=4ecac2&amp;donation_amount=100&amp;bottom_logo=true&amp;recurring_interval=single&amp;utm_campaign=external_donation_forms&amp;utm_source=domain: luftdaten.info&amp;utm_medium=project_38071&amp;utm_content=luftdaten.info&amp;" id="iFrameResizer0" scrolling="no" width="100%" height="1200" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 p-6">
                <h3 class="text-gray-800 font-medium py-4 text-2xl">Direct Donations</h3>
                <div class="leading-loose">
                    <div class="max-w-xl m-4 p-10 bg-white ">
                        <div class="">
                            <p class="block text-sm text-gray-600">Account holder</p>
                            <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">Open Knowledge Foundation
                                Germany e.V.</p>
                        </div>
                        <div class="mt-2">
                            <p class="block text-sm text-gray-600">IBAN</p>
                            <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">EN 36 4306 0967 1173 8932
                                00</p>
                        </div>
                        <div class="mt-2">
                            <p class=" block text-sm text-gray-600">BIC</p>
                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GENODEM1GLS</p>
                        </div>
                        <div class="mt-2">
                            <p class=" block text-sm text-gray-600">Bank</p>
                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GLS Community Bank</p>
                        </div>
                        <div class="mt-2">
                            <p class=" block text-sm text-gray-600">Intended use</p>
                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">OK Lab Stuttgart</p>
                        </div>
                        <div class="mt-2">
                            <p class=" block text-sm text-gray-600">The Open Knowledge Foundation Germany is recognised
                                as a non-profit organisation.</p>
                        </div>
                    </div>
                </div>
            </div>
<!--            <div class="w-1/3 m-6">-->
<!--                <h3 class="text-gray-800 font-medium py-4 text-2xl">Patreon / Open Collective</h3>-->
<!--                <div class="leading-loose">-->
<!--                    <div class="max-w-xl m-4 p-10 bg-white rounded shadow-md">-->
<!--                        <div class="">-->
<!--                            <p class="block text-sm text-gray-600">Account holder</p>-->
<!--                            <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">Open Knowledge Foundation-->
<!--                                Germany e.V.</p>-->
<!--                        </div>-->
<!--                        <div class="mt-2">-->
<!--                            <p class="block text-sm text-gray-600">IBAN</p>-->
<!--                            <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">EN 36 4306 0967 1173 8932-->
<!--                                00</p>-->
<!--                        </div>-->
<!--                        <div class="mt-2">-->
<!--                            <p class=" block text-sm text-gray-600">BIC</p>-->
<!--                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GENODEM1GLS</p>-->
<!--                        </div>-->
<!--                        <div class="mt-2">-->
<!--                            <p class=" block text-sm text-gray-600">Bank</p>-->
<!--                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GLS Community Bank</p>-->
<!--                        </div>-->
<!--                        <div class="mt-2">-->
<!--                            <p class=" block text-sm text-gray-600">Intended use</p>-->
<!--                            <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">OK Lab Stuttgart</p>-->
<!--                        </div>-->
<!--                        <div class="mt-2">-->
<!--                            <p class=" block text-sm text-gray-600">The Open Knowledge Foundation Germany is recognised-->
<!--                                as a non-profit organisation.</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </section>

    <Contact/>

</div>
