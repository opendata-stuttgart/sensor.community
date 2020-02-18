<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../components/Contact.svelte"
    import Cards from "../../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);


    const sensors = [
        { link: "/sensors/airrohr/", title: "Sensor Kit #1", description: "NodeMCU <br> SDS011", imageUrl: "images/nodemcu-sds011.jpg", hasPrice: true, price: "~ 49.99 €" },
        { link: "", title: "Sensor Kit #2", description: "NodeMCU <br> SDS011", imageUrl: "images/nodemcu-sds011.jpg", hasPrice: true, price: "-- €"},
        { link: "", title: "Sensor Kit #3", description: "NodeMCU <br> SDS011", imageUrl: "images/nodemcu-sds011.jpg", hasPrice: true, price: "-- €"}
    ]
</script>

<svelte:head>
    <title>{i18n.t('sensor:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('sensor:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>


<section class="container mx-auto">
    <div class="flex flex-row flex-wrap mt-10 mx-6">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-black leading-tight">
                        Sensor Kits</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Find our guides️ for your sensor<br>
                </p>
            </div>
<!--            <div class="w-full md:w-1/2 my-12"><img src="images/team.jpg" alt="sensor community team"></div>-->
        </div>

        {#each sensors as sensor}
            <div class="w-full md:w-1/3">
                <div class="mr-6 mb-6 hover:shadow-lg">
                    <Cards
                            link={lang}{sensor.link}
                            title={sensor.title}
                            subtitle={sensor.subtitle}
                            description={sensor.description}
                            imageUrl={sensor.imageUrl}
                            country={sensor.country}
                            type={sensor.type}
                            hasPrice={sensor.hasPrice}
                            price={sensor.price}
                    />
                </div>
            </div>
        {/each}

    </div>

<!--    <div class="container mx-6 mx-auto">-->
<!--        <div class="flex flex-wrap">-->
<!--            <div class="w-full md:w-1/3 ">-->
<!--                <div class="mr-6 mb-6">-->
<!--                    <a href="/en/sensors/airrohr/">-->

<!--                    <div class="relative rounded-lg shadow-md hover:shadow-lg">-->
<!--                        <div class="relative flex items-center justify-center">-->
<!--                            <img class="h-auto w-full" src="images/nodemcu-sds011.jpg" alt="">-->
<!--                        </div>-->
<!--                        <div class="relative  px-6 pb-6 mt-6">-->
<!--                            <div class="flex justify-between">-->
<!--                                <span class="block font-bold text-xl">Sensor Kit 1</span>-->
<!--                                <span class="block bg-white rounded-full text-white bg-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">~ 49.99 €</span>-->
<!--                            </div>-->
<!--                            <span class="block">NodeMCU</span>-->
<!--                            <span class="block">SDS011</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="w-full md:w-1/3">-->
<!--                <div class="mr-6 mb-6">-->
<!--                    <div class="relative rounded-lg shadow-md opacity-50">-->
<!--                        <div class="relative flex items-center justify-center">-->
<!--                            <img class="h-auto w-full" src="images/nodemcu-sds011.jpg" alt="">-->
<!--                        </div>-->
<!--                        <div class="relative px-6 pb-6 mt-6">-->
<!--                            <div class="flex justify-between">-->
<!--                                <span class="block font-semibold text-xl">Sensor Kit 2</span>-->
<!--                                <span class="block bg-white rounded-full text-white bg-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">&#45;&#45; €</span>-->
<!--                            </div>-->
<!--                            <span class="block">ESP32</span>-->
<!--                            <span class="block">SDS011</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="w-full md:w-1/3">-->
<!--                <div class="mr-6 mb-6">-->
<!--                    <div class="relative rounded-lg shadow-md opacity-50">-->
<!--                        <div class="relative flex items-center justify-center">-->
<!--                            <img class="h-auto w-full" src="images/nodemcu-sds011.jpg" alt="">-->
<!--                        </div>-->
<!--                        <div class="relative px-6 pb-6 mt-6">-->
<!--                            <div class="flex justify-between">-->
<!--                                <span class="block font-semibold text-xl">Sensor Kit 3</span>-->
<!--                                <span class="block bg-white rounded-full text-white bg-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">&#45;&#45; €</span>-->
<!--                            </div>-->
<!--                            <span class="block">ESP32</span>-->
<!--                            <span class="block">-</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->



<!--        </div>-->
<!--    </div>-->
</section>


<Contact/>