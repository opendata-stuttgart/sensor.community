<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Contact from "../../components/Contact.svelte"
    import Campaign from "../../components/Campaigns.svelte"
    import Partnership from "../../components/Partnership.svelte"


    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', 'particles.json', function () {
    //     console.log('callback - particles.js config loaded');
    // });
</script>

<style>
    /** {*/
    /*    -webkit-tab-highlight-color: transparent;*/
    /*}*/

    /*#particles-js {*/
    /*    position: absolute;*/
    /*    width: 100%;*/
    /*    height: 45rem;*/
    /*    z-index: 0;*/
    /*    !*background-size: cover;*!*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*}*/
</style>

<svelte:head>
    <title>{$_('index.metaTitle')}</title>

    <meta property="og:title" content={$_('index.metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="md:block hidden">
<!--    <div id="particles-js"></div>-->

    <div class="bg-gray-200">
<!--        <div class="px-4 py-10">-->
<!--            <div class="relative md:max-w-2xl md:mx-auto text-center">-->
<!--                <div class="p-2">-->
<!--                    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-sm">-->
<!--                        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Donate</span>-->
<!--                        <a href="{$locale}/donate"-->
<!--                           target="_blank" rel="noopener, noreferrer, nofollow">-->
<!--                            <span class="inline-flex px-2">Help us keep the network alive by donating a small amount 💓</span>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


        <svg class="fill-current bg-gray-200 text-white pt-10"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320">
            <path fill-opacity="1"
                  d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
        </svg>
        </div>
    <div class="w-3/4 mx-auto bg-white shadow-lg relative z-20 hidden md:block"
         style="margin-top: -15em; border-radius: 15px;">
        <div class="flex" style="height: 30rem;">
            <iframe scrolling="no"
                    src="https://maps.sensor.community/?selection=PM25&nooverlay=true#2/28.3/-1.1"
                    style="width: 97%; height: 95%; margin: auto; overflow: hidden;"
                    title="sensor.community particulate matter map"></iframe>
        </div>
    </div>

    <div class="px-4 py-16">
        <div class="relative md:max-w-2xl md:mx-auto text-center">
            <h1 class="font-bold text-gray-700 text-xl md:text-4xl leading-tight mb-6">
                <a href="{$locale}/docs/">{$_('index.h1-build')}</a> {$_('index.h1-become')}<a href="{$locale}/community">{$_('index.h1-civic-tech')}</a>{$_('index.h1-support')} <a href="{$locale}/contributors">{$_('index.h1-contributors')}</a>
            </h1>
        </div>
    </div>
</section>

<section class="xs:block hidden">
    <div class="bg-gray-200">
        <div class="px-4 py-10">
            <div class="relative md:max-w-2xl md:mx-auto text-center">
                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-sm">
                        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Donate</span>
                        <a href="{$locale}/donate"
                           target="_blank" rel="noopener, noreferrer, nofollow">
                            <span class="inline-flex px-2">Help us keep the network alive by donating a small amount 💓</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <svg class="fill-current bg-gray-200 text-white hidden md:block"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320">
            <path fill-opacity="1"
                  d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
        </svg>

    </div>
    <div class="px-4 ">
        <div class="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
             style="margin-top: -8rem; height:600px">
            <div class="bg-white rounded-t-lg border-b border-gray-100"></div>
            <iframe scrolling="no" src="https://maps.sensor.community/?selection=PM25"
                    style="width: 100%; height: 100%; border: none; overflow: hidden;"
                    title="sensor.community particulate matter map"></iframe>
        </div>
    </div>
    <div class="px-4 py-16">
        <div class="relative md:max-w-2xl md:mx-auto text-center">
            <h1 class="font-bold text-gray-700 text-xl md:text-4xl leading-tight mb-6">
                {$_('index.h1')}</h1>
        </div>
    </div>
</section>



<!--<section class="bg-teal-600 py-8">-->
<!--    <a href="{$locale}/docs"> <div class="container mx-auto px-4 text-center">-->
<!--        <p class="text-xl md:text-2xl max-w-md mx-auto leading-normal mb-8 text-white">Build your own sensor.</p>-->
<!--    </div>-->
<!--    </a>-->
<!--</section>-->

<!--<p class="text-center p-4 text-gray-600 mt-10">-->
<!--    Created your own DIY particulate matter sensor or noise senor with our-->
<!--    <a class="border-b text-blue-500" href="" target="_blank">guide</a>.<br>-->
<!--    <a href="#" class="cursor-pointer bg-teal-600 hover:bg-teal-500 shadow-xl px-5 py-2 inline-block text-teal-100 hover:text-white rounded">Build</a>-->

<!--</p>-->


<section class="relative">
    <div class="container mx-auto px-4 pt-4 flex flex-col">
        <h2 class="w-full py-4 md:py-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal text-center">
            Sensor.Community in numbers</h2>
        <div class="md:flex relative md:flex-row md:flex-row-reverse items-center">

            <div class="left_block w-full text-left py-2 md:py-16">
<!--                <h2 class="text-grey-darkest text-4xl md:text-5xl font-lf-extra-bold  mx-auto leading-snug md:pr-4">-->
<!--                    Sensor.Community in numbers</h2>-->

<!--                <h3 class="text-grey-darkest font-normal text-xl font-lf-regular md:text-md mx-auto md:pr-16 mt-4 mb-4 leading-reading">-->
<!--                    lorem ipsum bllaaaa-->
<!--                </h3>-->

                <div class="">
                    <div class="rounded flex justify-center items-center">
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="http://stats.sensor.community/images/stats_active_sensors.svg" target="_blank">
                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-teal-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Active sensors worldwide</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">13.249</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="http://stats.sensor.community/scripts/active_sensors.php">
                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-teal-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Countries</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">69</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="">
                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-teal-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Data Points</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">8.150.109.409</p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="rounded flex justify-center items-center">
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="{$locale}/projects" target="_blank">

                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-blue-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Community Projects</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">17</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="">
                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-blue-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Community Hubs</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">13</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rounded flex justify-center items-center p-3">
                            <a href="https://github.com/opendata-stuttgart/" target="_blank">
                                <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around hover:text-white hover:bg-blue-500">
                                    <div>
                                        <p class="text-base text-grey-dark text-sm">Github Commits</p>
                                    </div>
                                    <div>
                                        <p class="text-2xl text-grey-darker font-bold">1.343</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ae_block" class="w-full md:w-2/3 h-full text-center md:py-16 md:pr-8">
                <div class="flex justify-center items-center"
                     style="width: 100%; height: 100%; overflow: hidden; margin: 0px auto; cursor: default;">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

                    <lottie-player
                            src="https://assets4.lottiefiles.com/packages/lf20_WKNlGw.json" background="transparent"
                            speed="1" style="width: 300px; height: 300px;" loop autoplay>
                    </lottie-player>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="relative bg-gray-200">
    <div class="container mx-auto px-12 py-8 flex flex-col">
        <div class="md:flex relative md:flex-row md:flex-row-reverse items-center">
            <div class="left_block w-full text-left py-2 md:py-4">
                <h3 class="text-grey-darkest text-3xl md:text-5xl font-lf-extra-bold  mx-auto leading-snug md:pr-4">
                    Open Data </h3>
                <p class="text-grey-darkest font-normal font-lf-regular md:text-md mx-auto md:pr-16 mt-4 mb-4 leading-reading">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
                </p>
                <a href="http://archive.sensor.community/" target="_blank"
                   class="text-primary font-semibold  py-2 text-teal-500">
                    Take a look into the data >
                </a>
            </div>
            <div id="ae_block" class="w-full md:w-1/3 h-full text-center md:py-8 md:pr-4">
                <div class="flex justify-center items-center"
                     style="width: 100%; height: 100%; overflow: hidden; margin: 0px auto; cursor: default;">
                    <lottie-player
                            src="https://assets4.lottiefiles.com/packages/lf20_WKNlGw.json" background="transparent"
                            speed="1" style="width: 150px; height: 150px;" loop autoplay>
                    </lottie-player>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 flex flex-col">
            <div class="md:flex relative md:flex-row items-center">
                <div class="left_block w-full text-left py-2 py-8 pl-24">
                    <h3 class="text-grey-darkest text-3xl md:text-5xl font-lf-extra-bold  mx-auto leading-snug md:pr-4">Worldwide community </h3>
                    <p class="text-grey-darkest font-normal font-lf-regular md:text-md mx-auto md:pr-16 mt-4 mb-4 leading-reading">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
                    </p>
                    <a href="{$locale}/community"
                       class="text-primary font-semibold  py-2 text-teal-500">
                        browse the community >
                    </a>
                </div>
                <div id="ae_block" class="w-full md:w-1/3 h-full text-center md:py-8 md:pr-4">
                    <div class="flex justify-center items-center"
                         style="width: 100%; height: 100%; overflow: hidden; margin: 0px auto; cursor: default;">
                        <lottie-player
                                src="https://assets4.lottiefiles.com/packages/lf20_WKNlGw.json" background="transparent"
                                speed="1" style="width: 150px; height: 150px;" loop autoplay>
                        </lottie-player>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:flex relative md:flex-row md:flex-row-reverse items-center">
            <div class="left_block w-full text-left py-2 md:pb-16">
                <h3 class="text-grey-darkest text-3xl md:text-5xl font-lf-extra-bold  mx-auto leading-snug md:pr-4">
                    Open Source </h3>
                <p class="text-grey-darkest font-normal font-lf-regular md:text-md mx-auto md:pr-16 mt-4 mb-4 leading-reading">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
                </p>
                <a href="https://github.com/opendata-stuttgart/" target="_blank"
                   class="text-primary font-semibold  py-2 text-teal-500">
                    Check out our GitHub >
                </a>
            </div>
            <div id="ae_block" class="w-full md:w-1/3 h-full text-center py-2 md:pb-16">
                <div class="flex justify-center items-center"
                     style="width: 100%; height: 100%; overflow: hidden; margin: 0px auto; cursor: default;">
                    <lottie-player
                            src="https://assets4.lottiefiles.com/packages/lf20_WKNlGw.json" background="transparent"
                            speed="1" style="width: 150px; height: 150px;" loop autoplay>
                    </lottie-player>
                </div>
            </div>
        </div>
    </div>
</section>

<Partnership/>
<section class="relative bg-gray-200 py-8">
    <Campaign/>

</section>



<!--    <div class="-m-2 text-center">-->
<!--        <div class="p-2">-->
<!--            <div class="inline-flex items-center bg-white leading-none text-teal-600 rounded-full p-2 shadow text-teal text-sm">-->
<!--                <span class="inline-flex bg-teal-600 text-white rounded-full h-6 px-3 justify-center items-center">Build</span>-->
<!--                <span class="inline-flex px-2">Build your own sensor</span>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<Contact/>

<section class="relative bg-gray-200">
    <div class="container mx-auto px-12 py-8 flex flex-col">
        <div class="lg:flex shadow border border-gray-400 w-1/3 mx-auto mb-8">
            <div class="block overflow-hidden bg-white text-center w-24">
                <div class="bg-red-600 text-white py-1">Feb</div>
                <div class="pt-1 border-l border-r">
                    <span class="text-4xl font-bold">1</span>
                </div>
                <div class="pb-2 px-2 border-l border-r border-b rounded-b flex">
                    <span class="text-xs font-bold">2020</span>
                </div>
            </div>
            <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                <div class="flex flex-row lg:justify-start justify-center">
                    <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                        Organiser : IHC
                    </div>
                </div>
                <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    FOSDEM 2020
                </div>

                <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    <a href="https://fosdem.org/2020/">FOSDEM</a>
                </div>
            </div>
            <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">

            </div>
        </div>
        <div class="lg:flex shadow border border-gray-400 w-1/3 mx-auto mb-8">
            <div class="block overflow-hidden bg-white text-center w-24">
                <div class="bg-red-600 text-white py-1">Feb</div>
                <div class="pt-1 border-l border-r">
                    <span class="text-4xl font-bold">1</span>
                </div>
                <div class="pb-2 px-2 border-l border-r border-b rounded-b flex">
                    <span class="text-xs font-bold">2020</span>
                </div>
            </div>
            <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                <div class="flex flex-row lg:justify-start justify-center">
                    <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                        Organiser : IHC
                    </div>
                </div>
                <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    FOSDEM 2020
                </div>

                <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    <a href="https://fosdem.org/2020/">FOSDEM</a>
                </div>
            </div>
            <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">

            </div>
        </div>
        <div class="lg:flex shadow border border-gray-400 w-1/3 mx-auto mb-8">
            <div class="block overflow-hidden bg-white text-center w-24">
                <div class="bg-red-600 text-white py-1">Feb</div>
                <div class="pt-1 border-l border-r">
                    <span class="text-4xl font-bold">1</span>
                </div>
                <div class="pb-2 px-2 border-l border-r border-b rounded-b flex">
                    <span class="text-xs font-bold">2020</span>
                </div>
            </div>
            <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                <div class="flex flex-row lg:justify-start justify-center">
                    <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                        Organiser : IHC
                    </div>
                </div>
                <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    FOSDEM 2020
                </div>

                <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    <a href="https://fosdem.org/2020/">FOSDEM</a>
                </div>
            </div>
            <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">

            </div>
        </div>

        </div>
</section>
