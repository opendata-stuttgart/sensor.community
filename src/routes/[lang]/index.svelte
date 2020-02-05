<script>
  import initI18n from "../../utils/initI18n";
  import {stores} from "@sapper/app";
  import Campaigns from "../../components/Campaigns.svelte";
  import Partnership from "../../components/Partnership.svelte";
  import Contact from "../../components/Contact.svelte";

  const {page} = stores();
  $: lang = $page.params.lang;
  $: path = $page.path;
  $: i18n = initI18n(lang);
  // $: i18n = initI18n($page.params.lang);
</script>

<svelte:head>
  <title>{i18n.t('index:metaTitle')}</title>
  <title>{i18n.t('index:metaDescription')}</title>

  <meta property="og:title" content={i18n.t('index:metaTitle')}/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content=""/>
  <meta property="og:image" content=""/>
</svelte:head>

<section>
  <svg class="fill-current bg-gray-200 text-white mt-15"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 1440 320">
    <path fill-opacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
  <div class="relative z-20 md:block md:w-3/4 mx-auto md:bg-white md:shadow-lg xs:w-full sm:w-full xs:mt-10 md:-mt-64"
       style="border-radius: 15px;">
    <div class="flex" style="height: 40em;">
      <iframe scrolling="no"
              src="https://maps.sensor.community/?selection=PM25&nooverlay=true#2/28.3/-1.1"
              style="width: 97%; height: 95%; margin: auto; overflow: hidden;"
              title="sensor.community particulate matter map"></iframe>
    </div>
  </div>

  <div class="py-16">
    <div class="container mx-auto px-4 pt-4 flex flex-col text-center">
      <h2 class="text-gray-700 text-4xl leading-tight">
          <p class="p-2">{i18n.t('index:message-description')}</p>
          <p class="p-2">{i18n.t('index:message-mission')}</p>
          <p class="p-2">{i18n.t('index:message-hubs')}</p>
      </h2>
    </div>
  </div>

<!--  <div class="py-16">-->
<!--    <div class="relative md:max-w-2xl md:mx-auto text-center">-->
<!--      <h3 class="text-gray-700 font-bold text-4xl leading-tight">-->
<!--        <p class="text-teal-500 p-2">{i18n.t('index:message-description')}</p>-->
<!--        <p class="text-yellow-600 p-2">{i18n.t('index:message-mission')}</p>-->
<!--        <p class="text-blue-500 p-2">{i18n.t('index:message-hubs')}</p>-->
<!--      </h3>-->
<!--    </div>-->
<!--  </div>-->
</section>

<!--<section class="bg-teal-600 py-8">-->
<!--    <a href="{lang}/docs"> <div class="container mx-auto px-4 text-center">-->
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
      {i18n.t('index:inNumbers-title')}</h2>
    <div class="w-full flex py-2 md:pb-16">
      <div class="rounded-lg flex justify-center text-gray-700 items-center">
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg" rel="prefetch"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-500">
              <p class="block -mb-1 text-base text-4xl leading-tight ">{i18n.t('index:inNumbers-activeSensors')}</p>
              <p class="text-4xl font-bold block" id="number_sensors">
                10.249</p>
            </div>
          </a>
        </div>
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="http://stats.sensor.community/scripts/active_sensors.php" rel="prefetch"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-400">
              <p class="text-base text-4xl leading-tight ">{i18n.t('index:inNumbers-countries')}</p>
              <p class="text-4xl font-bold" id="number_countries">69</p>
            </div>
          </a>
        </div>
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="http://api.sensor.community/v1/" target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-300">
              <p class="text-base text-4xl leading-tight ">{i18n.t('index:inNumbers-dataPoints')}</p>
              <p class="text-4xl font-bold" id="number_measurements">6193201195</p>
            </div>
          </a>
        </div>
      </div>
      <div class="rounded-lg flex justify-center text-gray-700 items-center">
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="{lang}/projects/">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-500">
              <p class="text-base text-4xl leading-tight ">{i18n.t('index:inNumbers-communityProjects')}</p>
              <p class="text-4xl font-bold">17</p>
            </div>
          </a>
        </div>
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="{lang}/hubs/">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-400">
              <p class="text-base text-4xl leading-tight ">{i18n.t('index:inNumbers-communityHubs')}</p>
              <p class="text-4xl font-bold" id="number_hubs">13</p>

            </div>
          </a>
        </div>
        <div class="rounded-lg flex justify-center text-gray-700 items-center p-3">
          <a href="https://github.com/opendata-stuttgart/" target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 w-64 p-5 flex flex-col justify-around hover:text-white hover:bg-blue-300">
              <p class="text-base text-4xl leading-tight ">Github Commits</p>
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
         href="{lang}/docs/">{i18n.t('index:h1-build')}</a> {i18n.t('index:h1-become')}<a
            class="bg-yellow-500 text-white px-2 hover:text-yellow-700"
            href="{lang}/community/">{i18n.t('index:h1-civic-tech')}</a></h1>
    <h2 class="font-bold text-gray-700 text-5xl leading-tight mb-6">{i18n.t('index:h1-support')} <a
            class="bg-blue-300 text-white px-2 hover:text-blue-700"
            href="{lang}/contributors/">{i18n.t('index:h1-contributors')}</a></h2>
  </div>
</section>

<section>
  <h2 class="w-full py-4 md:py-8 text-gray-700 text-5xl md:text-5xl font-lf-bold leading-normal text-center">
    Sensor Kits/h2>
  <div class="w-3/4 flex mx-auto">
    <div class="flex w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md">
      <div class="bg-white">
        <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
             alt="">
        <div class="flex items-center px-6">
          <div class="mb-1 text-4xl text-gray-700">Sensor Kit 1</div>
        </div>
        <div>
          <ul>
            <li class="items-center border-b border-t pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">NodeMCU</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">SDS011</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">49.99 €</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md opacity-50">
      <div class="bg-white">
        <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
             alt="">
        <div class="flex items-center px-6">
          <div class="mb-1 text-4xl text-gray-700">Sensor Kit 2</div>
        </div>
        <div>
          <ul>
            <li class="items-center border-b border-t pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">ESP 32</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">SDS011</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">- €</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex w-1/3 m-6 overflow-hidden bg-gray-200 rounded-lg shadow-md opacity-50">
      <div class="bg-white">
        <img class="block h-auto w-full" src="sensors/nodemcu-sds011.jpg"
             alt="">
        <div class="flex items-center px-6">
          <div class="mb-1 text-4xl text-gray-700">Sensor Kit 3</div>
        </div>
        <div>
          <ul>
            <li class="items-center border-b border-t pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">ESP 32</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">-</span>
            </li>
            <li class="items-center border-b pt-2 pb-2">
              <span class="px-4 text-gray-700 text-2xl text-lg ml-3">- €</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</section>

<Campaigns/>
<Partnership/>
<Contact/>

