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
    <div class="relative md:max-w-5xl md:mx-auto text-center">
      <h3 class="text-gray-700 text-4xl leading-tight">
        <p class="p-2">{i18n.t('index:message-description')}</p>
        <p class="p-2">{i18n.t('index:message-mission')}</p>
        <p class="p-2">{i18n.t('index:message-hubs')}</p>
      </h3>
    </div>
  </div>
</section>

<!--<section class="bg-teal-600 py-8">-->
<!--    <a href="{lang}/airrohr"> <div class="container mx-auto px-4 text-center">-->
<!--        <p class="text-4xl md:text-4xl max-w-md mx-auto leading-normal mb-8 text-white">Build your own airrohr.</p>-->
<!--    </div>-->
<!--    </a>-->
<!--</section>-->

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
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-700">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-activeSensors')}</p>
              <p class="text-4xl font-bold block" id="number_sensors">{data.numbers.sensors}</p>
            </div>
          </a>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-500">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-countries')}</p>
              <p class="text-4xl font-bold block" id="number_countries">{data.numbers.countries}</p>
            </div>
          </a>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-teal-300">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-dataPoints')}</p>
              <p class="text-4xl font-bold block" id="number_measurements">{data.numbers.measurements}</p>
            </div>
          </a>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-700">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-communityProjects')}</p>
              <p class="text-4xl font-bold block" id="number_sensors">17</p>
            </div>
          </a>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-500">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-communityHubs')}</p>
              <p class="text-4xl font-bold block" id="number_hubs">{data.numbers.local_hubs}</p>
            </div>
          </a>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md border bg-gray-200 w-full md:w-1/3">
          <a href="http://stats.sensor.community/images/stats_active_sensors.svg"
             target="_blank">
            <div class="rounded bg-gray-200 shadow-md h-64 p-6 flex flex-col justify-around hover:text-white hover:bg-blue-300">
              <p class="block -mb-1 text-base text-grey-dark text-4xl leading-tight ">{i18n.t('index:inNumbers-commits')}</p>
              <p class="text-4xl font-bold block" id="number_commits">{data.numbers.commits}</p>
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
<Partnership/>
<Contact/>

