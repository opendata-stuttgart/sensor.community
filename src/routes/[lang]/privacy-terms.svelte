<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<div class="bg-white">
    <section class="container mx-auto mt-10">
        <div class="container mx-auto">
            <div class="md:w-2/3 px-4 md:px-16 mx-auto md:pt-24"><h1
                    class="leading-lf font-bold text-3xl md:text-6xl">
                {i18n.t('imprint:h1')}</h1>
                <h6 class="font-lf-light leading-normal text-sm">{i18n.t('imprint:lastModified')}
                    20.02.2020</h6>
            </div>

            <div class="md:w-2/3 mx-auto md:flex no-wrap">
                <article class="mt-8 w-full ">
                    <h2 class="mt-6 text-3xl font-bold uppercase">{i18n.t('imprint:imprint')}</h2>
                    <div class="mt-1">Gem. § 5 Telemediengesetz (TMG)</div>
                    <div class="pt-4">{i18n.t('imprint:imprintName')}</div>
                    <div>{i18n.t('imprint:imprintStreet')}</div>
                    <div>{i18n.t('imprint:imprintPostalCode')}</div>
                    <div>{i18n.t('imprint:imprintCountry')}</div>
                    <div>{i18n.t('imprint:imprintMail')}</div></article>
            </div>
            <div class="md:w-2/3 mx-auto md:flex no-wrap pb-12">
                <article class="mt-8 w-full">
                    <h2 class="text-3xl font-bold uppercase">{i18n.t('imprint:privacyPolicy')}</h2>
                    <div class="mt-2">{i18n.t('imprint:privacyPolicyDesc')}</div>
                    <h3 class="mt-6 text-xl">{i18n.t('imprint:privacyPolicyContact')}</h3>
                    <div>{i18n.t('imprint:privacyPolicyName')}</div>
                    <div>{i18n.t('imprint:privacyPolicyStreet')}</div>
                    <div>{i18n.t('imprint:privacyPolicyPostalCode')}</div>
                    <div>{i18n.t('imprint:privacyPolicyCountry')}</div>
                    <div>{i18n.t('imprint:privacyPolicyMail')}</div>
                    <h3 class="mt-6 text-xl">{i18n.t('imprint:privacyPolicyContactTitle')}</h3>
                    <div class="mt-2">{i18n.t('imprint:privacyPolicyContactDescription')}</div>
                </article>
            </div>
    </section>
</div>