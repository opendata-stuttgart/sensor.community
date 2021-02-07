<script>
    import initI18n from "../../utils/initI18n";
    import { stores } from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const { page } = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('presskit:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('presskit:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class=" container w-1/2 mx-auto mt-10 items-center">
        <div class="flex flex-row flex-wrap items-center">

            <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal items-center">
                Presskit</h2>

            The OK Lab Stuttgart is part of the program Code for Germany of the Open Knowledge Foundation Germany. The
            aim of the program is to promote developments in the areas of transparency, Open Data and Citizen Science.
            Regional groups consisting of designers, developers, journalists and others meet regularly in Labs. They
            develop apps that inform, positively shape and support society and make the work of administrations and
            authorities more transparent.
            <br>
            <strong>code a difference</strong>: Use your skills to improve your city!

            <hr>
            <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal items-center">
                Logo</h2>
            <div class="flex flex-wrap">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-20 px-10 flex items-center justify-center">
                        <img class="relative" src="logo.svg" alt="" loading="lazy">
                    </div>
                </div>

                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-black rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-20 px-10 flex items-center justify-center">
                        <img class="relative" src="logo-sw.svg" alt="" loading="lazy">
                    </div>
                </div>
            </div>

            <hr>

            <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal items-center">
                Colors</h2>
            <div class="flex flex-wrap">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-900 rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-20 px-20 flex items-center justify-center text-white">
                        #00A672
                    </div>
                </div>

                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-20 px-20 flex items-center justify-center text-white">
                        #00835C
                    </div>
                </div>

                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-300 rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-20 px-20 flex items-center justify-center text-white">
                        #0d2538
                    </div>
                </div>
            </div>
            <h2 class="w-full py-4 md:py-8 pb-8 text-4xl md:text-4xl font-bold leading-normal items-center">
                Pictures</h2>

            <img src="https://exchange.sensor.community/index.php/s/6FWx7MGZZ89CXrt/preview" alt="" loading="lazy">
            <img src="https://exchange.sensor.community/index.php/s/WYqRSTiJciDHSFZ/preview" alt="" class="mt-6" loading="lazy">
        </div>
    </section>

    <div class="pt-20">
        <Contact/>
    </div>

</div>
