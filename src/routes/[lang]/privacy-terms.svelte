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
    <title>Forum</title>
    <meta property="og:title" content={i18n.t('donate:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="container mx-auto mt-10">
        <div class="container mx-auto text-center">
            <div class="md:w-4/5 px-4 md:px-16 mx-auto md:pt-24 mt-12 md:my-14"><h1
                    class="text-3xl md:text-6xl">
                Privacy & Imprint</h1>
                <h2 class="font-lf-light leading-normal text-base md:text-sm mt-6 opacity-75 md:px-10">Last Modified: 20.02.2020</h2>
            </div>
        </div>

        <div class="md:w-2/3 mx-auto md:flex no-wrap pb-12">
            <article class="mt-8 w-full">
                <h2 class="md:text-xl mt-6">Terms of Use</h2>
                <p>Gem. § 5 Telemediengesetz (TMG)</p>
                <p>Name</p>
                <p>Strasse</p>
                <p>PLZ</p>
                <p>Land</p>
                <p>email</p>
            </article>
        </div>

        <div class="md:w-2/3 mx-auto md:flex no-wrap pb-12">
            <article class="mt-8 w-full">
                <h2>Terms and Conditions</h2>
                <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
                    personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm
                    verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social
                    Media Profile auf. (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die
                    verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die
                    Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).</p>
                <h3 class="mt-2">Verantworlicher</h3>
                <p>Name</p>
                <p>Strasse</p>
                <p>PLZ</p>
                <p>Land</p>
                <p>email</p>
                <h3>This policy applies to information we collect:</h3>
                <ul>
                    <li>On this Website (regardless of the type of the device or other means you use to
                        access).
                    </li>
                    <li>In email, text, and other electronic messages between you and this Website.</li>
                    <li>Through mobile and desktop applications you download from this Website, which provide
                        dedicated non-browser-based interaction between you and this Website.
                    </li>
                    <li>When you interact with our advertising and applications on third-party websites and
                        services, if those applications or advertising include links to this policy.
                    </li>
                    <li>While offering our products and services to you.</li>
                    <li>Any other sources.</li>
                </ul>
                <h3>It does not apply to information collected by:</h3>
                <ul>
                    <li>Us offline or through any other means, including on any other website operated by
                        Company or any third party; or
                    </li>
                    <li>Any third party, including through any application or content (including advertising)
                        that may link to or be accessible from or on the Website.
                    </li>
                </ul>
                <p>Please read this policy carefully to understand our policies and practices regarding your
                    information and how we will treat it. If you do not agree with our policies and practices,
                    your choice is not to use our Website. By accessing or using this Website, you agree to this
                    privacy policy. This policy may change from time to time (see Changes to Our Privacy
                    Policy). Your continued use of this Website after we make changes is deemed to be acceptance
                    of those changes, so please check the policy periodically for updates.</p>
                <h2>Children Under the Age of 13</h2>
                <p>Our Website is not intended for children under 13 years of age. No one under age 13 may
                    provide any personal information to or on the Website. We do not knowingly collect personal
                    information from children under 13. If you are under 13, do not use or provide any
                    information on this Website or through any of its features, register on the Website, make
                    any purchases through the Website, use any of the interactive or public comment features of
                    this Website, or provide any information about yourself to us, including your name, address,
                    telephone number, email address, or any screen name or user name you may use If we learn we
                    have collected or received personal information from a child under 13 without verification
                    of parental consent, we will delete that information. If you believe we might have any
                    information from or about a child under 13, please contact us at
                    privacy@lottiefiles.com.</p>
                <p>California residents under 16 years of age may have additional rights regarding the
                    collection and sale of their personal information. Please see <a
                            href="https://lottiefiles.com/page/ca-privacy">Privacy Notice for California
                        Residents</a> for more information.</p>
                <h2>Information We Collect About You and How We Collect It</h2>
                <h3>We collect several types of information from and about users of our Website, including
                    information:</h3>
                <ul>
                    <li>by which you may be personally identified, such as name, postal address, e-mail address,
                        telephone number, social security number or any other information the website collects
                        that is defined as personal or personally identifiable information under an applicable
                        law or any other identifier by which you may be contacted online or offline (personal
                        information);
                    </li>
                    <li>that is about you but individually does not identify you, such as company name and
                        role;
                    </li>
                    <li>that you provide by our business partners including our customers, suppliers, and
                        vendors for administration of our business relationship;
                        in connection usage of our products and services, such as data relating to performance
                        and configuration of our products and services, our customer’s and end user’s
                        consumption of and interaction of such products and services;
                    </li>
                    <li>that is submitted or uploaded by our customers and their end-users (we process this
                        customer content on behalf of the customer. Our privacy practices will be governed by
                        the contract that we have in place with our customers and this Privacy Policy will not
                        apply to any personal information contained in such customer content,);
                    </li>
                    <li>about your internet connection, the equipment you use to access our Website and usage
                        details.
                    </li>
                </ul>
                <h3>We collect this information:</h3>
                <ul>
                    <li>Directly from you when you provide it to us.</li>
                    <li>Automatically as you navigate through the site. Information collected automatically may
                        include usage details, IP addresses, and information collected through cookies, web
                        beacons, and other tracking technologies.
                    </li>
                    <li>From third parties, for example, our business partners.</li>
                </ul>
                <h3>Information You Provide to Us</h3>
                <p>The information we collect on or through our Website may include:</p>
                <ul>
                    <li>Information that you provide by filling in forms on our Website. This includes
                        information provided at the time of registering to use our Website, subscribing to our
                        service, posting material, or requesting further services. We may also ask you for
                        information when you enter a contest or promotion sponsored by us, and when you report a
                        problem with our Website.
                    </li>
                    <li>Records and copies of your correspondence (including email addresses), if you contact
                        us.
                    </li>
                    <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                    <li>Details of transactions you carry out through our Website and of the fulfillment of your
                        orders. You may be required to provide financial information before placing an order
                        through our Website.
                    </li>
                    <li>Your search queries on the Website.</li>
                </ul>
            </article>
        </div>

    </section>
</div>
