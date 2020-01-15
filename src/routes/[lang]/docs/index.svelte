<!--<script context="module">-->
<!--    export async function preload() {-->
<!--        const sections = await this.fetch(`{$locale}/docs/en.json`).then(r => r.json());-->
<!--        return {sections};-->
<!--    }-->
<!--</script>-->

<script>
    import {_, locale, locales} from 'svelte-i18n'
    import {stores} from '@sapper/app';
    import {Docs} from '../../../../site-kit/'

    let {page} = stores();
    let langPath;

    langPath = $page.path.split("/")[1];

    let sections = (async () => {
        let uri = `/${langPath}/docs/${langPath}.json`;
        return await fetch(uri).then(response => response.json());
    })()

</script>

<style>
    :root {
        --nav-h: 5rem;
        --top-offset: 6rem;
        --sidebar-w: 25rem;
        --sidebar-mid-w: 36rem;
        --sidebar-large-w: 48rem;
        --main-width: 80rem;
        --side-nav: 3.2rem;
        --side-page: var(--side-nav);
        --code-fs: 1.3rem;
        --h6: 1rem;
        --h5: 1.6rem;
        --h4: 1.8rem;
        --h3: 2.6rem;
        --h2: 3rem;
        --h1: 3.2rem;
        --linemax: 42em;
        --lh: 1.5;
        --back: #ffffff;
        --back-light: #f6fafd;
        --back-api: #eff8ff;
        --prime: #ff3e00;
        --second: #676778;
        --flash: #40b3ff;
        --heading: #676778;
        --text: #444;
        --sidebar-text: rgba(255, 255, 255, .75);
        --border-w: .3rem;
        --border-r: .4rem;

        /* easings */
        --out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @media screen and (min-width: 768px) {
        :root {
            --side-page: 14vw;
            --top-offset: 6rem;
            --side-nav: 4.8rem;
        }
    }

    /*	link reset ----------------------------- */
    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    a:hover, a:active {
        color: var(--flash)
    }

    a:focus {
        outline: none
    }

    /*	typography ----------------------------- */
    p, ol, ul {
        margin: 0 0 1em 0;
    }

    .b, b, strong {
        font-weight: 600
    }

    code {
        position: relative;
        border-radius: .3em;
        white-space: nowrap;
        color: #444;
        -webkit-font-smoothing: initial;
    }

    pre code {
        top: 0;
        white-space: inherit;
    }

    /* sync CodeMirror with prism  */
    .CodeMirror {
        font-size: var(--code-fs) !important;
    }

    ::selection {
        background: var(--flash);
        color: white;
    }

    /*	opinionated styles --------------------- */

    li:not(.white) > h2 {
        color: var(--second)
    }

    blockquote {
        position: relative;
        margin: 1.6rem 0 2.4rem;
        padding: 2rem 2.4rem 1.8rem 2.4rem;
        border-radius: var(--border-r);
        max-width: var(--linemax);
    }

    blockquote p {
        font-size: var(--h5);
    }

    blockquote :last-child {
        margin: 0;
    }

    /*  links ------------------------------------- */
    a {
        position: relative;
        padding: 0 0 1px 0;
        border-bottom: 1px solid currentColor;
        user-select: none;
        color: var(--prime);
        transition: color .2s, border .2s, padding .2s;
    }

    a:hover {
        color: var(--flash);
    }

    a:hover {
        padding: 0;
        border-bottom: 2px solid currentColor;
    }

    a.no-underline {
        border-bottom: none;
        padding: 0;
    }

    a:hover:not(.disabled) > .icon {
        stroke: var(--flash)
    }

    /*  lists ---------------------------------- */
    .listify ol,
    .listify ul {
        --list-padding: 2.9rem;
        list-style: none;
        /*margin-left: var(--list-padding);*/
    }

    .listify ol > li,
    .listify ul > li {
        /*max-width: calc(var(--linemax) - var(--list-padding));*/
        line-height: 1.5;
        margin: 0 0 0.4rem 0;
    }

    .listify ul > li:before {
        content: '';
        position: absolute;
        margin-top: 1.1rem;
        margin-left: -1.8rem;
        background-color: var(--second);
        width: .6rem;
        height: .6rem;
        border-radius: 2px;
        opacity: 0.7;
    }

    .listify ol {
        list-style: decimal
    }

    /*  tables --------------------------------- */
    table {
        width: 100%;
        font-size: var(--h5);
    }

    td, th {
        text-align: left;
        border-bottom: 1px solid #eee;
        padding: 0.4rem 0.8rem 0.4rem 0;
    }

    table code, table span {
        white-space: pre;
    }

    /*	grid ----------------------------------- */
    .grid, .grid.half {
        display: grid;
        grid-gap: 2.4rem;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .grid.stretch {
        align-items: stretch
    }

    .grid > .cols-2,
    .grid > .cols-3 {
        grid-column: span 1
    }

    @media screen and (min-width: 840px) {
        .grid.half,
        .grid {
            grid-template-columns: repeat(2, 1fr)
        }

        .grid > .cols-2,
        .grid > .cols-3 {
            grid-column: span 2
        }
    }

    @media screen and (min-width: 1100px) {
        .grid {
            grid-template-columns: repeat(3, 1fr)
        }

        .grid > .cols-2 {
            grid-column: span 2
        }

        .grid > .cols-3 {
            grid-column: span 3
        }
    }

    /*	helper styles -------------------------- */
    .flex-auto {
        flex: 1 0 auto
    }

    .py0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .legend, figcaption, .post aside {
        max-width: none;
        margin: 0 auto;
        padding: 1.6rem 0 0 .8rem;
    }

    .filename {
        display: inline-block;
        padding: 1.6rem 0 0 1rem;
    }

    .box {
        padding: 2.4rem 3.2rem;
        border-radius: var(--border-r);
    }

    /*	theme colors --------------------------- */
    .prime {
        color: var(--prime) !important
    }

    .second {
        color: var(--second) !important
    }

    .flash {
        color: var(--flash) !important
    }

    .black {
        color: black !important
    }

    .white {
        color: white !important
    }

    .back {
        background-color: var(--back) !important
    }

    .back-light {
        background-color: var(--back-light) !important
    }

    .bg-prime {
        background-color: var(--prime) !important
    }

    .bg-second {
        background-color: var(--second) !important
    }

    .bg-flash {
        background-color: var(--flash) !important
    }

    /*	inputs --------------------------------- */
    input[type="checkbox"] {
        /* display: block; */
        position: relative;
        height: 1em;
        width: calc(100% - 0.6em);
        max-width: 2em;
        top: -2px;
        border-radius: 0.5em;
        -webkit-appearance: none;
        outline: none;
        margin: 0 0.6em 0 0;
    }

    input[type="checkbox"]::before {
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        padding: 2px;
        border-radius: 1em;
        top: 0;
        left: 0;
        background: var(--second);
        /* box-sizing: border-box; */
        box-sizing: content-box;
    }

    input[type="checkbox"]:checked::before {
        background: var(--prime);
    }

    input[type="checkbox"]::after {
        content: "";
        position: absolute;
        display: block;
        height: 1em;
        width: 1em;
        top: 2px;
        left: 2px;
        border-radius: 1em;
        background: white;
        box-shadow: 0 0px 1px rgba(0, 0, 0, .4), 0 4px 2px rgba(0, 0, 0, .1);
        -webkit-transition: background .2s ease-out, left .2s ease-out;
    }

    input[type="checkbox"]:checked::after {
        left: calc(100% - 9px);
    }
</style>

<svelte:head>
    <title>{$_('docs.metaTitle')}</title>
    <meta name="Description" content={$_('docs.metaDescription')}>

    <meta name="twitter:title" content={$_('docs.metaTitle')}>
    <meta name="twitter:description" content={$_('docs.metaDescription')}>
</svelte:head>


{#await sections}
    <p>...waiting</p>
{:then sections}
    <Docs {sections} project="sapper" class="mt-10"/>
{:catch error}
    <p>An error occurred!</p>
{/await}
