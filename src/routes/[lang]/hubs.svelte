<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"
    import rows from "../../../projects/projects"


    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    const {flag, code, name, countries} = require('country-emoji');
</script>

<svelte:head>
    <title>{i18n.t('hubs:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('hubs:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="lf-padding container mx-auto mt-10">

    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-grey-darkest text-4xl md:text-6xl font-lf-extra-bold leading-tight">
                        Community Hubs</h1>
                </div>
                <p class="text-grey-darkest text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Find communities around the world 💖️<br>
                </p>
<!--                <a href="">-->
<!--                    <span class="text-center text-gray-600 mt-10">-->
<!--						      Have a great project? Share it with the community! <br> <a class="text-teal-600" href="/docs/how-to-contribute/">Submit your project →</a>-->
<!--					</span>-->
<!--                </a>-->
            </div>
            <div class="w-full md:w-1/2 my-12"></div>
        </div>


        {#each rows as row}

            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Stuttgart, Germany</div>
                    </div>
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">750 Sensors
                        </div>
                    </div>
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">75 Meetups
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
<Contact/>
