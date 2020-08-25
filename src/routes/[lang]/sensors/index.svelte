<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../components/Contact.svelte"
    import Cards from "../../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const airSensors = [
        {
            link: "/sensors/airrohr/",
            title: "Sensor Kit #1",
            description: "Sensor Kit #1 <br> NodeMCU <br> SDS011 <br> ~ 50 €",
            imageUrl: "images/nodemcu-sds011.jpg",
            hasPrice: true,
            price: "~ 50 €"

        },
        {
            link: "",
            title: "Sensor Kit #2",
            description: "Sensor Kit #2 <br> ESP32 <br> SDS011 <br> -- €",
            imageUrl: "images/nodemcu-sds011.jpg",
            hasPrice: true,
            price: "-- €",
            deactivate: true,
            opacity: true
        },
        {
            link: "",
            title: "Sensor Kit #3",
            description: "Sensor Kit #3 <br> ESP32 <br> -- <br> -- €",
            imageUrl: "images/nodemcu-sds011.jpg",
            hasPrice: true,
            price: "-- €",
            deactivate: true,
            opacity: true
        }
    ]
    const noiseSensors = [
        {
            link: "/sensors/dnms/",
            title: "Noise Sensor DNMS",
            description: "Sensor Kit <br> NodeMCU <br> Teensy <br> ICS-43434 <br> ~ 90 €",
            imageUrl: "images/dnms.jpg",
            hasPrice: true,
            price: "~ 90 €",
        }
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
                <div class="md:pr-20 pb-2 pl-0">
                    <h1 class="pt-4 text-4xl md:text-6xl font-black leading-tight">
                        {i18n.t('sensor:h1')}</h1>
                </div>
                <p class="text-xl md:text-md mx-auto md:pr-8 mb-4 leading-reading">
                    {i18n.t('sensor:subtitle')}<br>
                </p>
            </div>
        </div>
        <div class="container">
            <h2 class="py-4 md:py-8 md:pb-4 text-4xl md:text-6xl font-black leading-tight">
                {i18n.t('sensor:airSensorTitle')}</h2>
        </div>
        {#each airSensors as sensor}
            <div class="w-full md:w-1/3">
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
                        deactivate={sensor.deactivate}
                        opacity={sensor.opacity}
                />
            </div>
        {/each}

        <div class="container">
            <h2 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-black leading-tight">
                {i18n.t('sensor:noiseSensorTitle')}</h2>
        </div>

        {#each noiseSensors as sensor}
            <div class="w-full md:w-1/3">
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
                        deactivate={sensor.deactivate}
                        opacity={sensor.opacity}
                />
            </div>
        {/each}
    </div>
</section>

<Contact/>