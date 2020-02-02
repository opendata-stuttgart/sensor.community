<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Contact from "../../components/Contact.svelte"
</script>

<svelte:head>
    <title>About</title>

    <meta property="og:title" content={$_('index.metaTitle')}/>
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
                        Hello from the team👋</h1>
                </div>
                <p class="text-grey-darkest text-xl font-lf-regular md:text-md mx-auto md:pr-8 mt-4 mb-4 leading-reading">
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

        <h2 class="w-full py-4 md:py-8 pb-8 text-grey-darkest text-4xl md:text-4xl font-lf-bold leading-normal text-center md:text-left">
            Meet the team</h2>
        <div class="flex flex-wrap md:-mx-8 sm:-mx-0 p-8">
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Rajko</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">DevOps
                            </div>
                        </div>
                        <div class="flex align-center">
                            <a href="https://github.com/ricki-z" target="_blank" rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/linkedin.svg" class="w-5 mr-1">
                            </a>
                            <a href="https://twitter.com/ricki_z" target="_blank" rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/twitter.svg" class="w-5 mr-1">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Lukas</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Community & Partnership
                            </div>
                        </div>
                        <div class="flex align-center">
                            <a href="https://github.com/ricki-z" target="_blank" rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/linkedin.svg" class="w-5 mr-1">
                            </a>
                            <a href="https://twitter.com/ricki_z" target="_blank" rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/twitter.svg" class="w-5 mr-1">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">David</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Software Developer</div>
                        </div>
                        <div class="flex align-center">
                            <a href="https://github.com/ricki-z" target="_blank" rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/linkedin.svg" class="w-5 mr-1" alt="">
                            </a>
                            <a href="https://fosstodon.org/@ohheyitsdave" target="_blank"
                               rel="noopener nofollow noreferrer"
                               class="inline-block">
                                <img src="icons/mastodon.svg" class="w-5 mr-1" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Martin</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Software Developer
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Frank</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Public Relation</div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Piotr</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Software Developer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Pierre-Jean</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Data Visualisation</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="block h-auto w-full" src="https://luftdaten.info/wp-content/uploads/2015/02/Feinstaub-Sensor-Spenden-300x300.jpg"
                         alt="">
                    <div class="flex items-center p-6">
                        <div class="flex-1">
                            <div class="mb-1 text-xl font-bold font-lf-regular text-grey-darkest">Benedikt</div>
                            <div class="mb-1 text-base font-lf-regular text-grey-darkest">Software Developer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex items-center text-center">
                    <div class="p-4 py-8 ">
                        <div class="mb-4 text-xl font-lf-regular text-grey-darkest leading-reading pb-4">Want to help
                            us?
                        </div>
                        <a href="/careers"
                           class="mb-auto font-lf-semi-bold text-base text-lf-teal-dark cursor-pointer">Check out our
                            Github</a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<Contact/>


