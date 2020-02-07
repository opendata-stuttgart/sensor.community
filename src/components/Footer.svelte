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
                <a href="{lang}/presskit/" rel="prefetch" class="text-sm py-1">Presskit</a>
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
                    <img src="icons/mastodon.svg" alt="mastodon logo" class="w-5 mr-2">
                    @SensorCommunity</a>
                <a href="https://github.com/opendata-stuttgart/" target="_blank"
                   class="md:px-3 pb-3 text-sm flex items-center"><img src="icons/github.svg" alt="GitHub Repo of Sensor.Community" class="w-5 mr-2">
                      @GitHub</a>
                <a href="mailto:contact@sensor.community" target="_blank"
                class="md:px-3 pb-3 text-sm flex items-center pr-5"><span class="w-5 ml-2 mr-2">✉</span>️contact@sensor.community</a>
            </div>
        </div>
        <div class="flex md:flex-row items-start flex-col-reverse mt-8">
            <div class="mt-8 text-lf-regular">
                Made with 💕 in Stuttgart, Germany
            </div>
        </div>
    </div>
</footer>
