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
                <h6 class="font-lf-light leading-normal text-base md:text-sm mt-6 opacity-75 md:px-10 text-center">{i18n.t('imprint:lastModified')}
                    20.02.2020</h6>
        </div>

        <div class="md:w-2/3 mx-auto md:flex no-wrap">
            <article class="mt-8 w-full ">
                <h2 class="mt-6 text-3xl font-bold uppercase">{i18n.t('imprint:imprint')}</h2>
                <p>Gem. § 5 Telemediengesetz (TMG)</p>
                <p>{i18n.t('imprint:imprintName')}</p>
                <p>{i18n.t('imprint:imprintStreet')}</p>
                <p>{i18n.t('imprint:imprintPostalCode')}</p>
                <p>{i18n.t('imprint:imprintCountry')}</p>
                <p>{i18n.t('imprint:imprintMail')}</p></article>
        </div>
        <div class="md:w-2/3 mx-auto md:flex no-wrap pb-12">
            <article class="mt-8 w-full">
                <h2 class="text-3xl font-bold uppercase">{i18n.t('imprint:privacyPolicy')}</h2>
                <p>{i18n.t('imprint:privacyPolicyDesc')}</p>
                <h3 class="mt-6 text-xl">{i18n.t('imprint:privacyPolicyContact')}</h3>
                <p>{i18n.t('imprint:privacyPolicyName')}</p>
                <p>{i18n.t('imprint:privacyPolicyStreet')}</p>
                <p>{i18n.t('imprint:privacyPolicyPostalCode')}</p>
                <p>{i18n.t('imprint:privacyPolicyCountry')}</p>
                <p>{i18n.t('imprint:privacyPolicyMail')}</p>
                <h3 class="mt-6 text-xl">Webserver-Protokollierung</h3>
                <p>Wenn Sie auf unsere Webseite zugreifen, erfassen unsere Web-Server automatisch Informationen
                    allgemeiner Natur. Dazu gehören:</p>
                <ul class="list-disc ml-4 my-2">
                    <li>IP-Adresse</li>
                    <li>das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite</li>
                    <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                    <li>Zugriffsstatus (HTTP-Status)</li>
                    <li>die übertragene Datenmenge</li>
                    <li>der Internet-Service-Provider des zugreifenden Systems</li>
                    <li>der von Ihnen verwendete Browsertyp und dessen Version</li>
                    <li>das von Ihnen verwendete Betriebssystem</li>
                    <li>die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind</li>
                    <li>die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen.</li>
                </ul>
                <p class="mt-6">Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person
                    zulassen. Wir oder von uns beauftragte Dritte werden diese Daten nur zur Sicherstellung des
                    ordnungsgemäßen Betriebes verwenden, um Ihnen die abgerufenen Daten zur Verfügung zu stellen oder
                    bei Missbrauch die Interessen des Unternehmens zu verteidigen.</p>

                <p class="mt-6">Die Datenverarbeitung erfolgt nach Art. 6 Abs. 1 lit. f DS-GVO zur Erfüllung berechtigter
                    Interessen:</p>
                <ul class="list-disc ml-4 my-2">
                    <li>Geltendmachung rechtlicher Ansprüche und Verteidigung bei rechtlichen Streitigkeiten</li>
                    <li>Gewährleistung der IT-Sicherheit und des IT-Betriebs der Gesellschaft</li>
                    <li>Verhinderung von Straftaten</li>
                    <li>Optimierung des Webseitenangebots durch Auswertung von Webseitennutzungsdaten</li>
                    <li>Direkt- und Fernmarketing</li>
                </ul>
                <p>Die Daten werden nach 7 Tagen gelöscht.</p>

            </article>
        </div>
    </section>
</div>