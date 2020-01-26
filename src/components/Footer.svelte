<script>
    import { _, locale, locales} from 'svelte-i18n';
</script>
<footer class="bg-gray-200">
    <div class="container px-8 md:px-4 mx-auto mt-12 border-grey-lighter py-10 flex flex-col">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">Important Links</h4>
                <a href="https://maps.sensor.community/" target="_blank" class="text-sm text-grey-darker py-1">Maps</a>
                <a href="/" target="_blank" class="text-sm text-grey-darker py-1">Archive</a>
                <a href="/" target="_blank" class="text-sm text-grey-darker py-1">API</a>
                <a href="/" target="_blank" class="text-sm text-grey-darker py-1">Devices</a>
                <a href="/" target="_blank" class="text-sm text-grey-darker py-1">Forum</a>
                <a href="/"  target="_blank" class="text-sm text-grey-darker py-1">Press</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0"><h4 class="text-base pb-4">About</h4>
                <a href="{$locale}/mission" class="text-sm text-grey-darker py-1">Project</a>
                <a href="{$locale}/team" class="text-sm text-grey-darker py-1">Team</a>
                <a href="{$locale}/code-of-conduct" class="text-sm text-grey-darker py-1">Code of Conduct</a>
                <a href="{$locale}/privacy-policy" class="text-sm text-grey-darker py-1">Privacy Policy</a>
                <a href="{$locale}/blog" class="text-sm text-grey-darker py-1">Blog</a>
                <a href="{$locale}/presskit" class="text-sm text-grey-darker py-1">Presskit</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">License</h4>
                <a href="{$locale}/mission" class="text-sm text-grey-darker py-1">Project</a>
                <a href="{$locale}/team" class="text-sm text-grey-darker py-1">Team</a>
                <a href="{$locale}/code-of-conduct" class="text-sm text-grey-darker py-1">Code of Conduct</a>
                <a href="{$locale}/blog"  rel=prefetch class="text-sm text-grey-darker py-1">Blog</a>
            </div>
            <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                <h4 class="text-base pb-4">Connect</h4>
                <a href="https://fosstodon.org/@SensorCommunity" target="_blank"
                   class="md:px-3 pb-2 text-sm flex items-center text-grey-darkest">
                    <img src="icons/mastodon.svg" alt="mastodon logo" class="w-5 mr-2">
                    @SensorCommunity</a>
                <a href="https://twitter.com/sensorcommunity" target="_blank"
                   class="md:px-3 pb-2 text-sm flex items-center text-grey-darkest">
                    <img src="icons/twitter.svg" alt="twitter logo" class="w-5 mr-2">
                    @SensorCommunity</a>
                <a href="" target="_blank"
                   class="md:px-3 pb-2 text-sm flex items-center text-grey-darkest">
                    <img src="icons/discourse.svg" alt="twitter logo" class="w-5 mr-2">
                    Forum.Sensor.Community</a>
                <a href="mailto:support@sensor.community" target="_blank"
                   class="md:px-3 pb-3 text-sm flex items-center text-grey-darkest">✉️ support@sensor.community</a>
            </div>
        </div>
        <div class="flex md:flex-row items-start flex-col-reverse mt-8">
            <div class="">
                <div>
                    <h4 class="text-base pb-4">License</h4>

                    <p class="text-sm text-grey-dark mt-2">
                        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="text-sm text-grey-darker py-1">Airrohr Firmware GPL v3</a>
                    </p>
                    <p class="text-sm text-grey-dark mt-1">
                        <a href="https://opendatacommons.org/licenses/dbcl/1.0/" class="text-sm text-grey-darker py-1">Database Contents DbCL v1</a>
                    </p>
                </div>
            </div>
        </div>
            <div class="flex md:flex-row items-start flex-col-reverse mt-8">
                <div class="">
                <div class="mt-8 text-lf-regular">
                    <div class="text-grey-dark">
                        Made with 💕 in Stuttgart, Germany
                    </div>
                </div>
            </div>

        </div>
    </div>
</footer>
