<script>
  import initI18n from "../../utils/initI18n";
  import {stores} from "@sapper/app";
  import Campaigns from "../../components/Campaigns.svelte";
  import Partnership from "../../components/Partnership.svelte";
  import Contact from "../../components/Contact.svelte";
  import { onMount } from "svelte";

  const {page} = stores();
  $: lang = $page.params.lang;
  $: path = $page.path;
  $: i18n = initI18n(lang);
  // $: i18n = initI18n($page.params.lang);


  const fetchNumbers = (async () => {
    const response = await fetch('https://stats.sensor.community/numbers.json')
    return await response.json()
  })()

  function formatNumber(n) {
   return String(n).replace(/\d+?(?=(?:\d{3})+$)/img, "$&.");
  }


  function delayMap() {
	if (process.browser) {
      setTimeout(function(){
        document.getElementById('map-frame').src='https://maps.sensor.community/?selection=PM25&nooverlay=true#2/28.3/-1.1';
      },900);
    }
  };
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
  <div class="relative z-20 md:block md:w-3/4 mx-auto md:bg-white md:shadow-lg mt-10 z-10">
    <div class="flex" style="height: 40em;">
      <iframe scrolling="no" class="z-10" id="map-frame" onLoad="{delayMap()}"
              src=""
              style="width: 97%; height: 95%; margin: auto; "
              title="sensor.community particulate matter map"></iframe>
    </div>
  </div>

  <div class="py-16">
    <div class="relative md:max-w-5xl md:mx-auto text-center">
      <h3 class="text-gray-700 text-4xl leading-tight">
        <p class="p-2">{i18n.t('index:message-description')}</p>
        <p class="p-2">{i18n.t('index:message-mission')}</p>
<!--        <p class="p-2">{i18n.t('index:message-hubs')}</p>-->
      </h3>
    </div>
  </div>
</section>


<!--<p class="text-center p-4 text-gray-600 mt-10">-->
<!--    Created your own DIY particulate matter airrohr or noise senor with our-->
<!--    <a class="border-b text-blue-500" href="" target="_blank">guide</a>.<br>-->
<!--    <a href="#" class="cursor-pointer bg-teal-600 hover:bg-teal-500 shadow-xl px-5 py-2 inline-block text-teal-100 hover:text-white rounded">Build</a>-->

<!--</p>-->

<section class="container mx-auto mt-10">
  <div class="flex flex-row flex-wrap mt-10">
    <div class="w-full flex flex-wrap">
      <h2 class="w-full py-4 md:py-8 text-gray-700 text-5xl font-bold leading-normal text-center flex-col">
        {i18n.t('index:inNumbers-title')}</h2>

      {#await fetchNumbers}
          <p>{i18n.t('index:inNumbers-fetching')}</p>
      {:then data}

      <div class="mx-auto flex flex-wrap items-center justify-center text-gray-700">
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-700">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-activeSensors')}</p>
              <p class="text-4xl font-bold block" id="number_sensors">{formatNumber(data.numbers.sensors)}</p>
            </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-500">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-countries')}</p>
              <p class="text-4xl font-bold block" id="number_countries">{formatNumber(data.numbers.countries)}</p>
            </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-300">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-dataPoints')}</p>
              <p class="text-4xl font-bold block" id="number_measurements">{formatNumber(data.numbers.measurements)}</p>
            </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="{lang}/projects/">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-700">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-communityProjects')}</p>
              <p class="text-4xl font-bold block" id="number_sensors"></p>
            </div>
          </a>
        </div>

        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">

            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-500">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-communityHubs')}</p>
              <p class="text-4xl font-bold block" id="number_hubs">{data.numbers.local_labs}</p>
            </div>

        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="https://github.com/opendata-stuttgart/"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-300">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-commits')}</p>
              <p class="text-4xl font-bold block" id="number_commits">{formatNumber(data.numbers.commits)}</p>
            </div>
          </a>
        </div>
      </div>
      {:catch error}
      <p>{i18n.t('index:inNumbers-error')}</p>
    {/await}
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mx-10 my-32 flex flex-col text-center">
    <h1 class="font-bold text-gray-700 text-5xl leading-tight">
      <a class="bg-teal-500 text-white px-2 hover:text-teal-800"
         href="{lang}/sensors/">{i18n.t('index:h1-build')}</a> {i18n.t('index:h1-become')}<br>
      <a class="bg-yellow-500 text-white px-2 hover:text-yellow-700"
         href="{lang}/hubs/">{i18n.t('index:h1-civic-tech')}</a>
    </h1>
    <h2 class="font-bold text-gray-700 text-5xl leading-tight mb-6">{i18n.t('index:h1-support')} <a
            class="bg-blue-300 text-white px-2 hover:text-blue-700"
            href="{lang}/contributors/">{i18n.t('index:h1-contributors')}</a></h2>
  </div>
</section>

<Campaigns/>
<Contact/>

