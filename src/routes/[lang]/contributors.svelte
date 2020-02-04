<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('contributors:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('contributors:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="lf-padding container mx-auto mt-10">
    <div class="flex flex-row flex-wrap mt-10">
        <div class="w-full flex flex-wrap my-8">
            <div class="w-full text-center md:text-left md:w-1/2">
                <div class="md:w-4/5 md:pr-20 pb-2 pl-0">
                    <h1 class="py-4 md:py-8 md:pb-8 text-4xl md:text-6xl font-lf-extra-bold leading-tight">
                        Hello from the team👋</h1>
                </div>
                <p class="text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Meet the team who is working behind the scenes to harness the power of Sensor.Community.<br>
                </p>
                <a href="#contact">
                    <span class="text-center text-gray-600 mt-10">
						📮Please use the contact options at the bottom of the page.
					</span>
                </a>
            </div>
            <div class="w-full md:w-1/2 my-12"><img src="team.jpg" alt="sensor community team"></div>
        </div>

        <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-lf-bold leading-normal text-center md:text-left">
            Meet the team</h2>
        <div class="flex flex-wrap md:-mx-8 sm:-mx-0 p-8">
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                            <div class="text-2xl font-bold font-lf-regular">Rajko <span class="font-thin">DevOps
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                            <div class="text-2xl font-bold font-lf-regular">Lukas <span class="font-thin">Partnership
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                            <div class="text-2xl font-bold font-lf-regular">David <span class="font-thin">Software Dev
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Rajko <span class="font-thin">DevOps
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Lukas <span class="font-thin">Partnership
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">David <span class="font-thin">Software Dev
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Rajko <span class="font-thin">DevOps
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Lukas <span class="font-thin">Partnership
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">David <span class="font-thin">Software Dev
                            </span></div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/mail.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="block h-auto w-full"
                         src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-3 border-b">
                        <div class="text-2xl font-bold font-lf-regular">Want to help
                            us? </div>
                    </div>
                    <div class="block flex flex-wrap w-full">
                        <button class="justify-center border-r p-5 flex w-1/2">
                            <img class="w-5 mr-1" src="icons/github.svg" alt=""></button>
                        <button class="justify-center p-5 flex w-1/2"><img src="icons/mastodon.svg" class="w-5 mr-1"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Contact/>


