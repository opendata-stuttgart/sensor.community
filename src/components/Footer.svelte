<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>
<footer class="bg-gray-200">
    <div class="container px-8 md:px-4 mx-auto mt-12 border-grey-lighter py-10 flex flex-col">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">{i18n.t('footer:importantLinks')}</h4>
                <a href="https://maps.sensor.community/" target="_blank" class="text-sm py-1">Maps</a>
                <a href="https://archive.sensor.community/" target="_blank" class="text-sm py-1">Archive</a>
                <a href="https://devices.sensor.community/" target="_blank" class="text-sm py-1">Devices</a>
                <a href="{lang}/forum" target="_blank" class="text-sm py-1">Forum</a>
                <a href="https://press.sensor.community/" target="_blank" class="text-sm py-1">Press</a>
                <a href="https://api.sensor.community/" target="_blank" class="text-sm py-1">API</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">{i18n.t('footer:sitemap')}</h4>
                <a href="{lang}/privacy-terms/" rel="prefetch" class="text-sm py-1">{i18n.t('footer:privacy')}</a>
                <a href="{lang}/contributors/" rel="prefetch" class="text-sm py-1">{i18n.t('footer:contributors')}</a>
                <!--                <a href="{lang}/presskit/" rel="prefetch" class="text-sm py-1">Presskit</a>-->
                <a href="{lang}/projects/" rel="prefetch" class="text-sm py-1">{i18n.t('footer:communityProjects')}</a>
                <a href="{lang}/hubs/" rel="prefetch" class="text-sm py-1">{i18n.t('footer:communityHubs')}</a>
                <a href="{lang}/blog/" rel="prefetch" class="text-sm py-1">{i18n.t('footer:blog')}</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">{i18n.t('footer:license')}</h4>
                <a href="https://opendatacommons.org/licenses/dbcl/1.0/" class="text-sm py-1">Database Contents DbCL
                    v1</a>
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="text-sm py-1">Airrohr Firmware GPL v3</a>

            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">{i18n.t('footer:socialLinks')}</h4>
                <a href="https://fosstodon.org/@SensorCommunity" target="_blank"
                   class="md:px-3 pb-2 text-sm flex items-center">

                    <svg class="w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="20px" height="25px"
                         viewBox="0 0 216.4144 232.00976">
                        <path fill="#495057"
                              d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
                        <path fill="#fff"
                              d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                    </svg>

                    @SensorCommunity</a>

                <a href="https://github.com/opendata-stuttgart/" target="_blank"
                   class="md:px-3 pb-3 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="w-5 mr-2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    @GitHub</a>
                <a href="mailto:contact@sensor.community" target="_blank"
                   class="md:px-3 pb-3 text-sm flex items-center pr-5">
                    <svg class="w-4 mr-3 text-gray-700" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" stroke-width="1">
                                <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
                                    C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
                                     M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
                                    L338.213,256L482,112.212V399.787z"/>
                        </svg>
                    Contact@sensor.community</a>
            </div>
        </div>
        <div class="flex md:flex-row items-start flex-col-reverse mt-8">
            <div class="mt-8">
                {i18n.t('footer:withLove')}
            </div>
        </div>
    </div>
</footer>
