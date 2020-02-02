<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Contact from "../../components/Contact.svelte"
    import Campaign from "../../components/Campaigns.svelte"
    import Partnership from "../../components/Partnership.svelte"

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', 'particles.json', function () {
    //     console.log('callback - particles.js config loaded');
    // });
    async function get_numbers() {
        const data = await this.fetch(`https://stats.sensor.community/numbers.json`).then(r => r.json());
        document.getElementById("number_sensors").innerText = data.numbers.sensors;
        document.getElementById("number_countries").innerText = data.numbers.countries;
        document.getElementById("number_measurements").innerText = data.numbers.measurements;
        document.getElementById("number_commits").innerText = data.numbers.commits;
        document.getElementById("number_hubs").innerText = data.numbers.local_hubs;
    }
    window.addEventListener('load', get_numbers)
</script>

<style>
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
    <title>{$_('index.metaDescription')}</title>

    <meta property="og:title" content={$_('index.metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="md:block hidden">
    <!--    <div id="particles-js"></div>-->
    <div class="bg-gray-200">
        <svg class="fill-current bg-gray-200 text-white pt-10"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320">
            <path fill-opacity="1"
                  d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
        </svg>
    </div>
    <div class="w-3/4 mx-auto bg-white shadow-lg relative z-20 hidden md:block"
         style="margin-top: -18em; border-radius: 15px;">
        <div class="flex" style="height: 40em;">
            <iframe scrolling="no"
                    src="https://maps.sensor.community/?selection=PM25&nooverlay=true#2/28.3/-1.1"
                    style="width: 97%; height: 95%; margin: auto; overflow: hidden;"
                    title="sensor.community particulate matter map"></iframe>
        </div>
    </div>

    <div class="py-16">
        <div class="relative md:max-w-3xl md:mx-auto text-center">
            <h3 class="text-gray-700 text-5xl leading-tight">
                Sensor.Community is a contributors driven global sensor network that creates Open Environmental Data.<br>
                Our mission is to inspire and enrich people’s lives by offering a platform for the collective curiosity in nature that is genuine, joyful and positive.
                Sensor.Community has global hubs in Stuttgart, Sofía, Warsaw, Brussels.
            </h3>
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
    <div class="px-4 -mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
         style="margin-top: -8rem; height:600px">
        <div class="bg-white rounded-t-lg border-b border-gray-100"></div>
        <iframe scrolling="no" src="https://maps.sensor.community/?selection=PM25"
                style="width: 100%; height: 100%; border: none; overflow: hidden;"
                title="sensor.community particulate matter map"></iframe>
    </div>
    <div class="px-4 py-16">
        <h2 class="font-bold text-gray-700 text-5xl md:text-5xl leading-tight mb-6">
            Sensor.Community is a contributors driven global sensor network that creates Open Environmental Data.<br>
            Our mission is to inspire and enrich people’s lives by offering a platform for the collective curiosity in nature that is genuine, joyful and positive.
            Sensor.Community has global hubs in Stuttgart, Sofía, Warsaw, Brussels.
        </h2>
    </div>
</section>

<!--<section class="bg-teal-600 py-8">-->
<!--    <a href="{$locale}/docs"> <div class="container mx-auto px-4 text-center">-->
<!--        <p class="text-4xl md:text-4xl max-w-md mx-auto leading-normal mb-8 text-white">Build your own docs.</p>-->
<!--    </div>-->
<!--    </a>-->
<!--</section>-->

<!--<p class="text-center p-4 text-gray-600 mt-10">-->
<!--    Created your own DIY particulate matter docs or noise senor with our-->
<!--    <a class="border-b text-blue-500" href="" target="_blank">guide</a>.<br>-->
<!--    <a href="#" class="cursor-pointer bg-teal-600 hover:bg-teal-500 shadow-xl px-5 py-2 inline-block text-teal-100 hover:text-white rounded">Build</a>-->

<!--</p>-->

<section>
    <div class="container mx-auto px-4 pt-4 flex flex-col">
        <h2 class="w-full py-4 md:py-8 text-gray-700 text-4xl font-lf-bold leading-normal text-center">
            Sensor.Community in numbers</h2>
        <div class="w-full text-left py-2 md:pb-16">
            <div class="rounded-lg flex justify-center text-gray-700 items-center">
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="http://stats.sensor.community/images/stats_active_sensors.svg" rel="prefetch"
                       target="_blank">
                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-500">
                            <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">Active sensors worldwide</p>
                            <p class="text-4xl font-bold block" id="number_sensors">
                                10.249</p>
                        </div>
                    </a>
                </div>
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="http://stats.sensor.community/scripts/active_sensors.php" rel="prefetch"
                       target="_blank">
                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-400">
                            <p class="text-base text-grey-dark text-4xl leading-tight ">Countries</p>
                            <p class="text-4xl font-bold" id="number_countries">69</p>
                        </div>
                    </a>
                </div>
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="">
                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-300">
                            <p class="text-base text-grey-dark text-4xl leading-tight ">Data Points</p>
                            <p class="text-4xl font-bold" id="number_measurements">6193201195</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rounded-lg flex justify-center text-gray-700 items-center">
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="{$locale}/projects" target="_blank">

                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-500">
                            <p class="text-base text-grey-dark text-4xl leading-tight ">Community Projects</p>
                            <p class="text-4xl font-bold">17</p>
                        </div>
                    </a>
                </div>
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="{$locale}/hubs">
                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-400">
                            <p class="text-base text-grey-dark text-4xl leading-tight ">Community Hubs</p>
                            <p class="text-4xl font-bold" id="number_hubs">13</p>

                        </div>
                    </a>
                </div>
                <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
                    <a href="https://github.com/opendata-stuttgart/" target="_blank">
                        <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-5 flex flex-col justify-around hover:text-white hover:bg-blue-300">
                            <p class="text-base text-grey-dark text-4xl leading-tight ">Github Commits</p>
                            <p class="text-4xl font-bold" id="number_commits">1.343</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container mx-auto px-4 pt-4 flex flex-col text-center">
        <h1 class="font-bold text-gray-700 text-5xl leading-tight">
            <a class="bg-teal-500 text-white px-2 hover:text-teal-800"
               href="{$locale}/docs/">{$_('index.h1-build')}</a> {$_('index.h1-become')}<a
                class="bg-yellow-500 text-white px-2 hover:text-yellow-700"
                href="{$locale}/community">{$_('index.h1-civic-tech')}</a></h1>
        <h2 class="font-bold text-gray-700 text-5xl leading-tight mb-6"><a
                class="bg-blue-300 text-white px-2 hover:text-blue-700"
                href="{$locale}/contributors">{$_('index.h1-support')}{$_('index.h1-contributors')}</a></h2>
    </div>
</section>
<!--<div class="relative md:max-w-2xl md:mx-auto text-center">-->
<!--    <div class="p-2">-->
<!--        <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-sm">-->
<!--            <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Donate</span>-->
<!--            <a href="{$locale}/donate"-->
<!--               target="_blank" rel="noopener, noreferrer, nofollow">-->
<!--                <span class="inline-flex px-2">Help us keep the network alive by donating a small amount 💓</span>-->
<!--            </a>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<Campaign/>
<Partnership/>


<!--    <div class="-m-2 text-center">-->
<!--        <div class="p-2">-->
<!--            <div class="inline-flex items-center bg-white leading-none text-teal-600 rounded-full p-2 shadow text-teal text-sm">-->
<!--                <span class="inline-flex bg-teal-600 text-white rounded-full h-6 px-3 justify-center items-center">Build</span>-->
<!--                <span class="inline-flex px-2">Build your own docs</span>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<Contact/>

