<script>
    import initI18n from "../utils/initI18n";
    import { stores } from "@sapper/app";

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
</script>
<footer class="bg-gray-200">
    <div class="container px-8 md:px-4 mx-auto mt-12 border-grey-lighter py-10 flex flex-col">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">Important Links</h4>
                <a href="https://maps.sensor.community/" target="_blank" class="text-sm py-1">Maps</a>
                <a href="https://archive.sensor.community/" target="_blank" class="text-sm py-1">Archive</a>
                <a href="https://devices.sensor.community/" target="_blank" class="text-sm py-1">Devices</a>
                <a href="{lang}/forum" target="_blank" class="text-sm py-1">Forum</a>
                <a href="https://press.sensor.community/"  target="_blank" class="text-sm py-1">Press</a>
                <a href="https://api.sensor.community/" target="_blank" class="text-sm py-1">API</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0"><h4 class="text-base pb-4">Sitemap</h4>
                <a href="{lang}/privacy-terms/" rel="prefetch" class="text-sm py-1">Privacy & Terms</a>
                <a href="{lang}/contributors/" rel="prefetch" class="text-sm py-1">Contributors</a>
<!--                <a href="{lang}/presskit/" rel="prefetch" class="text-sm py-1">Presskit</a>-->
                <a href="{lang}/projects/" rel="prefetch" class="text-sm py-1">Project</a>
                <a href="{lang}/hubs/" rel="prefetch" class="text-sm py-1">Hubs</a>
                <a href="{lang}/blog/" rel="prefetch"class="text-sm py-1">Blog</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">License</h4>
                <a href="https://opendatacommons.org/licenses/dbcl/1.0/" class="text-sm py-1">Database Contents DbCL v1</a>
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="text-sm py-1">Airrohr Firmware GPL v3</a>

            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">Connect</h4>
                <a href="https://fosstodon.org/@SensorCommunity" target="_blank"
                   class="md:px-3 pb-2 text-sm flex items-center">
                    <div class="w-5 mr-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" viewBox="0 0 216.4144 232.00976">
                            <path fill="#495057" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/>
                            <path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                        </svg>
                    </div>
                    @SensorCommunity</a>
                <a href="https://github.com/opendata-stuttgart/" target="_blank"
                   class="md:px-3 pb-3 text-sm flex items-center">
                    <div class="w-5 mr-2">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path fill="#495057" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>

                    </div>
                      @GitHub</a>
                <a href="mailto:contact@sensor.community" target="_blank"
                class="md:px-3 pb-3 text-sm flex items-center pr-5"><span class="w-5 ml-2 mr-2 text-xl">✉</span>️contact@sensor.community</a>
            </div>
        </div>
        <div class="flex md:flex-row items-start flex-col-reverse mt-8">
            <div class="mt-8 text-lf-regular">
                Made with 💕 in Stuttgart, Germany
            </div>
        </div>
    </div>
</footer>
