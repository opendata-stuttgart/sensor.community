<script context="module">
     export async function preload({params}) {
         const res = await this.fetch(`endpoints/airrohr/${params.lang}.json`);

         if (res.status === 200) {
             const sections = await res.json();
             return { sections };
         } else {
             const sections = await this.fetch(`endpoints/airrohr/en.json`).then(r => r.json())
             return {sections}
         }
     }
</script>

<script>
    import {stores} from "@sapper/app";
    import initI18n from "../../../../utils/initI18n";
    import Docs from '../../../../components/Docs.svelte'

    let {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    export let sections;
</script>


<svelte:head>
    <title>{i18n.t('airrohr:metaTitle')}</title>
    <meta property="og:title" content="{i18n.t('airrohr:metaTitle')}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

{#await sections}
    <p>...waiting</p>
{:then sections}
    <Docs {sections} project="sapper" class="mt-10"/>
{:catch error}
    <p>An error occurred!</p>
{/await}