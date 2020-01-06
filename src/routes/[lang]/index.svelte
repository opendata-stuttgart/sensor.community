<script>
    import {_} from 'svelte-i18n'
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
</script>
<style>
    * {
        -webkit-tab-highlight-color: transparent;
    }

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
</svelte:head>

<section>
    <div id="particles-js"></div>

    <div class="bg-gray-200 md:overflow-hidden">

        <div class="px-4 py-10">
            <div class="relative md:max-w-2xl md:mx-auto text-center">
                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-sm">
                        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Donate</span>
                        <a href="https://www.betterplace.org/de/projects/38071-fur-das-projekt-luftdaten-info-feinstaub-sensor-spenden"
                           target="_blank" rel="noopener, noreferrer, nofollow">
                            <span class="inline-flex px-2">Help us keep the network alive by donating a small amount 👉 here. 💓</span>
                        </a>
                    </div>
                </div>

                <!--            <h1 class="font-bold text-gray-700 text-xl md:text-4xl leading-tight mb-6">-->

                <!--                {$_('index.h1')}-->
                <!--            </h1>-->
                <!--			<div class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>-->
                <!--			<div class="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div>-->
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
    <div class="w-3/4 mx-auto bg-white shadow-lg relative z-20 hidden md:block"
         style="margin-top: -23rem; border-radius: 15px;">
        <!--	<div class="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"-->
        <!--			style="z-index: -1;">-->
        <!--	</div>-->

        <!--	<div class="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"-->
        <!--			style="z-index: -1;">-->
        <!--	</div>-->

        <div class="flex" style="height: 600px;">
            <iframe src="https://maps.sensor.community/?selection=PM25&nooverlay=true"
                    style="width: 96%; height: 95%; margin: auto; overflow: hidden;"
                    scrolling="no"></iframe>
        </div>
    </div>
    <div class="px-4 py-16">
        <div class="relative md:max-w-2xl md:mx-auto text-center">
            <h1 class="font-bold text-gray-700 text-xl md:text-4xl leading-tight mb-6">
                {$_('index.h1')}</h1>
        </div>
    </div>
</section>

<div class="px-4 md:hidden">
    <div class="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
         style="border-radius: 20px;">
        <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
        <iframe src="https://maps.sensor.community/?selection=PM25" style="width: 100%; border: none; overflow: hidden;"
                scrolling="no"></iframe>
    </div>
</div>

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


<section>
    <div class="relative md:max-w-2xl md:mx-auto text-center pt-12">
        <h2 class="font-bold text-gray-700 text-xl md:text-4xl leading-tight mb-6">
            {$_('index.section1')}
        </h2>
    </div>

    <div class="flex flex-wrap mb-2 max-w-6xl mx-auto">
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
            <div class="bg-green-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right">
                        <h5 class="text-white">Total Sensor worldwide</h5>
                        <h3 class="text-white text-3xl">13.249<span class="text-green-400"><i
                                class="fas fa-caret-down"></i></span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
            <div class="bg-blue-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right">
                        <h5 class="text-white">Countries</h5>
                        <h3 class="text-white text-3xl">69 <span class="text-blue-400"><i
                                class="fas fa-caret-up"></i></span></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
            <div class="bg-orange-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right pr-1">
                        <h5 class="text-white">% Worldwide</h5>
                        <h3 class="text-white text-3xl">36% <span class="text-orange-400"><i
                                class="fas fa-caret-up"></i></span></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
            <div class="bg-purple-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right">
                        <h5 class="text-white">Server Uptime</h5>
                        <h3 class="text-white text-3xl">76 days</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
            <div class="bg-red-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right">
                        <h5 class="text-white">Core Team</h5>
                        <h3 class="text-white text-3xl">7</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
            <div class="bg-pink-600 border rounded shadow p-2">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pl-1 pr-4"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                    <div class="flex-1 text-right">
                        <h5 class="text-white">Github Commits</h5>
                        <h3 class="text-white text-3xl">1.343 <span class="text-pink-400"><i
                                class="fas fa-caret-up"></i></span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="-m-2 text-center">
        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-teal-600 rounded-full p-2 shadow text-teal text-sm">
                <span class="inline-flex bg-teal-600 text-white rounded-full h-6 px-3 justify-center items-center">Build</span>
                <span class="inline-flex px-2">Build your own sensor</span>
            </div>
        </div>
</section>
