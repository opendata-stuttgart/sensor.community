<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="xl:col-span-1">
                <img class="h-10 text-gray-500 text-2xl" src=""
                     alt="Sensor.Community" loading="lazy"/>
                <p class="mt-8 text-gray-500 text-base leading-6">
                    {i18n.t('footer:mission')}
                </p>
                <div class="mt-8 flex">
                    <a href="https://fosstodon.org/@SensorCommunity"
                       class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Mastodon</span>
                        <svg class="w-7 mr-2" viewBox="0 0 216 232"
                             xmlns="http://www.w3.org/2000/svg"
                             height="30" width="30">
                            <path d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"
                                  fill="currentColor"></path>
                            <path d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"
                                  fill="#fff"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/opendata-stuttgart/"
                       class="ml-6 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-8 w-7" fill="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"
                             height="30" width="30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="mailto:contact@sensor.community"
                       class="ml-6 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Mail</span>
                        <svg class="h-8 w-7" fill="currentColor" viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg" stroke-width="1" height="40" width="40"
                             xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                            <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
             C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
              M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
             L338.213,256L482,112.212V399.787z"></path>
                        </svg>
                    </a>
                </div>            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            {i18n.t('footer:importantLinks')}
                        </h4>
                        <ul class="mt-4">
                            <li>
                                <a href="https://maps.sensor.community/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Maps
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://api.sensor.community/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    API
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://archive.sensor.community/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Archive
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://devices.sensor.community/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Devices
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            Support
                        </h4>
                        <ul class="mt-4">
                            <li class="mt-4">
                                <a href="https://forum.sensor.community/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Forum
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="{lang}/sensors/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Guides
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="{lang}/donate/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {i18n.t('footer:donate')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            {i18n.t('footer:sitemap')}
                        </h4>
                        <ul class="mt-4">
                            <li>
                                <a href="{lang}/contributors/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {i18n.t('footer:contributors')}
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="{lang}/projects/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {i18n.t('footer:communityProjects')}
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="{lang}/hubs/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {i18n.t('footer:communityHubs')}
                                </a>
                            </li>
                            <!--                            <li class="mt-4">-->
                            <!--                                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">-->
                            <!--                                    Press-->
                            <!--                                </a>-->
                            <!--                            </li>-->
                        </ul>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            {i18n.t('footer:legal')}
                        </h4>
                        <ul class="mt-4">
                            <li class="mt-4">
                                <a href="{lang}/privacy-terms/"
                                   class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {i18n.t('footer:privacy')}
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Firmware License
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://opendatacommons.org/licenses/dbcl/1-0/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    DB Contents License
                                </a>
                            </li>
                            <li class="mt-4">
                                <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Photos License
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8">
            <p class="text-base leading-6 text-gray-400 xl:text-center">
                {i18n.t('footer:withLove')}
            </p>
        </div>
    </div>
</div>
