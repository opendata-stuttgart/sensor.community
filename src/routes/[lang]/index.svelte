<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Contact from "../../components/Contact.svelte"


    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
</script>
<style>
    /** {*/
    /*    -webkit-tab-highlight-color: transparent;*/
    /*}*/

    #particles-js {
        position: absolute;
        width: 100%;
        height: 45rem;
        z-index: 0;
        /*background-size: cover;*/
        left: 0;
        top: 0;
    }
</style>

<svelte:head>
    <title>{$_('index.metaTitle')}</title>

    <meta property="og:title" content={$_('index.metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="md:block hidden">
    <div id="particles-js"></div>

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
         style="margin-top: -20rem; border-radius: 15px;">

        <div class="flex" style="height: 600px;">
            <iframe scrolling="no"
                    src="https://maps.sensor.community/?selection=PM25&nooverlay=true#2/28.3/-1.1"
                    style="width: 97%; height: 95%; margin: auto; overflow: hidden;"
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



<section class="bg-gray-200 py-8">
    <div class="container mx-auto px-4 text-center">
        <p class="text-xl md:text-2xl max-w-md mx-auto leading-normal mb-8">Created your own DIY particulate matter
            sensor or noise senor with our.</p>
        <a href=""
           class="bg-white px-8 py-2 mx-2 font-semibold text-xl no-underline hover:bg-teal-600 hover:text-white">Build
            your sensor </a>
    </div>
</section>

<!--<p class="text-center p-4 text-gray-600 mt-10">-->
<!--    Created your own DIY particulate matter sensor or noise senor with our-->
<!--    <a class="border-b text-blue-500" href="" target="_blank">guide</a>.<br>-->
<!--    <a href="#" class="cursor-pointer bg-teal-600 hover:bg-teal-500 shadow-xl px-5 py-2 inline-block text-teal-100 hover:text-white rounded">Build</a>-->

<!--</p>-->

<section class="container mx-auto">
    <div class="flex flex-row flex-wrap">
        <h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal text-center">
            Sensor Community in numbers</h2>
        <div class="w-full flex">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="mx-auto">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player
                            src="https://assets4.lottiefiles.com/packages/lf20_WKNlGw.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay >
                    </lottie-player>
                </div>
            </div>
            <div class="w-full md:w-3/4">
                <div class="rounded flex justify-center items-center">
                <div class="rounded flex justify-center items-center p-3">
                    <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                        <div>
                            <p class="text-base text-grey-dark text-sm">Total Sensor worldwide</p>
                        </div>
                        <div>
                            <p class="text-2xl text-grey-darker font-bold">13.249</p>
                        </div>
                        <!--                <div class="text-sm">-->
                        <!--                    <p class="text-green mb-1 flex item-center">-->
                        <!--                        <i class="material-icons">-->
                        <!--                            arrow_drop_up-->
                        <!--                        </i> 5.77%-->

                        <!--                    </p>-->
                        <!--                    <p class="text-grey-dark">Since last month</p>-->
                        <!--                </div>-->
                    </div>
                </div>
                <div class="rounded flex justify-center items-center p-3">
                    <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                        <div>
                            <p class="text-base text-grey-dark text-sm">Countries</p>
                        </div>
                        <div>
                            <p class="text-2xl text-grey-darker font-bold">69</p>
                        </div>
                        <!--                <div class="text-sm">-->
                        <!--                    <p class="text-green mb-1 flex item-center">-->
                        <!--                        <i class="material-icons">-->
                        <!--                            arrow_drop_up-->
                        <!--                        </i> 5.77%-->

                        <!--                    </p>-->
                        <!--                    <p class="text-grey-dark">Since last month</p>-->
                        <!--                </div>-->
                    </div>
                </div>
                <div class="rounded flex justify-center items-center p-3">
                    <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                        <div>
                            <p class="text-base text-grey-dark text-sm">percentage of the world</p>
                        </div>
                        <div>
                            <p class="text-2xl text-grey-darker font-bold">36%</p>
                        </div>
                        <!--                <div class="text-sm">-->
                        <!--                    <p class="text-green mb-1 flex item-center">-->
                        <!--                        <i class="material-icons">-->
                        <!--                            arrow_drop_up-->
                        <!--                        </i> 5.77%-->

                        <!--                    </p>-->
                        <!--                    <p class="text-grey-dark">Since last month</p>-->
                        <!--                </div>-->
                    </div>
                </div>
            </div>
                <div class="rounded flex justify-center items-center">
                    <div class="rounded flex justify-center items-center p-3">
                        <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                            <div>
                                <p class="text-base text-grey-dark text-sm">Server Uptime</p>
                            </div>
                            <div>
                                <p class="text-2xl text-grey-darker font-bold">76 days</p>
                            </div>
                            <!--                <div class="text-sm">-->
                            <!--                    <p class="text-green mb-1 flex item-center">-->
                            <!--                        <i class="material-icons">-->
                            <!--                            arrow_drop_up-->
                            <!--                        </i> 5.77%-->

                            <!--                    </p>-->
                            <!--                    <p class="text-grey-dark">Since last month</p>-->
                            <!--                </div>-->
                        </div>
                    </div>
                    <div class="rounded flex justify-center items-center p-3">
                        <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                            <div>
                                <p class="text-base text-grey-dark text-sm">Core Team</p>
                            </div>
                            <div>
                                <p class="text-2xl text-grey-darker font-bold">9</p>
                            </div>
                            <!--                <div class="text-sm">-->
                            <!--                    <p class="text-green mb-1 flex item-center">-->
                            <!--                        <i class="material-icons">-->
                            <!--                            arrow_drop_up-->
                            <!--                        </i> 5.77%-->

                            <!--                    </p>-->
                            <!--                    <p class="text-grey-dark">Since last month</p>-->
                            <!--                </div>-->
                        </div>
                    </div>
                    <div class="rounded flex justify-center items-center p-3">
                        <div class="rounded bg-gray-200 shadow-md h-48 w-48 p-3 flex flex-col justify-around">
                            <div>
                                <p class="text-base text-grey-dark text-sm">Github Commits</p>
                            </div>
                            <div>
                                <p class="text-2xl text-grey-darker font-bold">1.343</p>
                            </div>
                            <!--                <div class="text-sm">-->
                            <!--                    <p class="text-green mb-1 flex item-center">-->
                            <!--                        <i class="material-icons">-->
                            <!--                            arrow_drop_up-->
                            <!--                        </i> 5.77%-->

                            <!--                    </p>-->
                            <!--                    <p class="text-grey-dark">Since last month</p>-->
                            <!--                </div>-->
                        </div>
                    </div>
                </div></div>
        </div>

    </div>
</section>

<section class="container mx-auto">

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

