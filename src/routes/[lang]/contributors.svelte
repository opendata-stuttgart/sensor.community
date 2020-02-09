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
                        Hello from the contributors 👋</h1>
                </div>
                <p class="text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
                    Meet the team who is working behind the scenes to harness the power of Sensor.Community.<br>
                </p>
                    <span class="text-center text-gray-600 mt-10">
						📮Please use the contact options at the bottom of the page.
					</span>
            </div>
            <div class="w-full md:w-1/2 my-12"><img src="team.jpg" alt="sensor community team"></div>
        </div>

        <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-lf-bold leading-normal text-center md:text-left">
            Meet the contributors</h2>
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
                        <button class="justify-center mx-auto p-5 flex w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" viewBox="0 0 216.4144 232.00976">
                                <path fill="#495057" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
                                <path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                            </svg>
                            </button>
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
                        <button class="justify-center mx-auto p-5 flex w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" viewBox="0 0 216.4144 232.00976">
                                <path fill="#495057" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
                                <path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                            </svg>
                        </button>
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
                        <button class="justify-center mx-auto p-5 flex w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" viewBox="0 0 216.4144 232.00976">
                                <path fill="#495057" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
                                <path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Contact/>


