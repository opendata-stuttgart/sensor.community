<script context="module">
    export async function preload({params, lang, query}) {
        const res = await this.fetch(`{lang}/blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return {post: data};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import initI18n from "../../../utils/initI18n";
    import { stores } from "@sapper/app";

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    export let post;
</script>

<style>

    h1, h2, h3, h4, h5, h6 {
        font-family: sans-serif;
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 0.5em 0;
    }

    h1 {
        font-family: Merriweather, serif;
        font-size: 3em;
        margin: 0 0 1em 0;
    }

    h2 {
        margin: 1.6em 0 0 0;
        font-size: 1.8em;
    }

    h3 {
        font-size: 1.5em;
    }

    h4 {
        font-size: 1.4em;
    }

    h5 {
        font-size: 1.3em;
    }

    h6 {
        font-size: 1.2em;
    }

    a {
        color: inherit;
        transition: color linear .15s;
    }

    a:hover {
        color: #fd6378;
    }

    p a {
        text-decoration: none;
        box-shadow: inset 0 -0.12em 0 #fd6378;
        -webkit-transition: box-shadow .2s ease-in-out, color .2s ease-in-out;
        transition: box-shadow .2s ease-in-out, color .2s ease-in-out;
    }

    p a:hover {
        box-shadow: inset 0 -1.5em 0 #fd6378;
        color: #FFF;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    hr {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(253, 99, 120, .8), rgba(0, 0, 0, 0));
        border: 0;
        height: 2px;
        margin: 40px auto;
    }

    code {
        font-family: 'SF Mono', menlo, inconsolata, monospace;
        font-size: calc(1em - 2px);
        color: #555;
        background-color: #f0f0f0;
        padding: 0.2em 0.4em;
        border-radius: 2px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    pre {
        border-radius: 8px !important;
        margin: 1.2em 0 !important;
    }

    pre code {
        padding: 0;
    }

    blockquote {
        border-left: 4px solid #cccccc;
        font-size: 1.4em;
        font-style: italic;
        margin: 2rem 0;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    blockquote p {
        padding-bottom: 6px;
    }

    blockquote footer {
        font-size: 1.1rem;
        text-align: right;
    }

    figure {
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        -webkit-margin-start: 0;
        -webkit-margin-end: 0;
        margin: 0 0 3em 0;
    }

    table {
        border-collapse: collapse;
        font-family: Rubik, sans-serif;
        font-size: 1.125em;
        margin: 2em 0;
    }

    th {
        border-bottom: 2px solid #cccccc;
        padding: 0.4em 0.8em;
    }

    td {
        padding: 0.4em 0.8em;
    }

    .container {
        margin: 0 auto;
        max-width: 42em;
        width: 100%;
    }

    .content h1 {
        font-size: 3em;
        margin: 1em 0;
    }

    @media (max-width: 1020px) {
        h1 {
            font-size: 3em;
        }

        .content h1 {
            font-size: 2.4em;
        }
    }

    @media (max-width: 480px) {
        .contentBlog body {
            font-size: 14px;
        }

        .contentBlog p, ul, ol {
            font-size: 1.2rem;
            margin: 1em 0;
        }
    }

    header h1 {
        margin-bottom: 0.7em;
    }

    header p {
        color: #AAA;
        font-family: sans-serif;
        font-weight: 600;
    }

    header hr {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(56, 178, 172, .8), rgba(0, 0, 0, 0));
        border: 0;
        height: 2px;
        margin: 40px auto;
        min-width: 100px;
        width: 60%;
    }

    code[class*="language-"], pre[class*="language-"] {
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        hyphens: none;
        color: inherit;
        text-shadow: none;
        /* font-family: Roboto Mono, monospace; */
        font-size: 1em;
        line-height: 1.5em;
        tab-size: 4;
    }

    code[class*="language-"]::-moz-selection, pre[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection,
    pre[class*="language-"] ::-moz-selection {
        text-shadow: none;
        opacity: 1;
        color: #eee;
        background: #363636;
    }

    code[class*="language-"]::selection, pre[class*="language-"]::selection,
    code[class*="language-"] ::selection,
    pre[class*="language-"] ::selection {
        text-shadow: none;
        opacity: 1;
        color: #eee;
        background: #363636;
    }

    @media print {
        code[class*="language-"], pre[class*="language-"] {
            text-shadow: none !important;
        }
    }

    :not(pre) > code[class*="language-"] {
        white-space: normal;
        color: #c3cee3;
        background: #263238;
        border-radius: 0.2em;
        padding: 0.1em;
    }

    pre > code[class*="language-"] {
        background: none;
    }

    pre[class*="language-"] {
        overflow: auto;
        position: relative;
        color: #c3cee3;
        background: #263238;
        border-radius: 0;
        margin: 0.5em 0;
        padding: 1.25em 1em;
    }

    pre[class*="language-"].language-css > code, pre[class*="language-"].language-sass > code, pre[class*="language-"].language-scss > code {
        color: #fd9170;
    }

    [class*="language-"] .namespace {
        opacity: 0.7;
    }

    .token.atrule {
        color: #c792ea;
    }

    .token.attr-name {
        color: #ffcb6b;
    }

    .token.attr-value {
        color: #c3e88d;
    }

    .token.attribute {
        color: #c3e88d;
    }

    .token.boolean {
        color: #c792ea;
    }

    .token.builtin {
        color: #ffcb6b;
    }

    .token.cdata {
        color: #80cbc4;
    }

    .token.char {
        color: #80cbc4;
    }

    .token.class {
        color: #ffcb6b;
    }

    .token.class-name {
        color: #f2ff00;
    }

    .token.color {
        color: #f2ff00;
    }

    .token.comment {
        color: #546e7a;
    }

    .token.constant {
        color: #c792ea;
    }

    .token.deleted {
        color: #f07178;
    }

    .token.doctype {
        color: #546e7a;
    }

    .token.entity {
        color: #f07178;
    }

    .token.function {
        color: #c792ea;
    }

    .token.hexcode {
        color: #f2ff00;
    }

    .token.id {
        color: #c792ea;
        font-weight: bold;
    }

    .token.important {
        color: #c792ea;
        font-weight: bold;
    }

    .token.inserted {
        color: #80cbc4;
    }

    .token.keyword {
        color: #c792ea;
        font-style: italic;
    }

    .token.number {
        color: #fd9170;
    }

    .token.operator {
        color: #89ddff;
    }

    .token.prolog {
        color: #546e7a;
    }

    .token.property {
        color: #80cbc4;
    }

    .token.pseudo-class {
        color: #c3e88d;
    }

    .token.pseudo-element {
        color: #c3e88d;
    }

    .token.punctuation {
        color: #89ddff;
    }

    .token.regex {
        color: #f2ff00;
    }

    .token.selector {
        color: #f07178;
    }

    .token.string {
        color: #c3e88d;
    }

    .token.symbol {
        color: #c792ea;
    }

    .token.tag {
        color: #f07178;
    }

    .token.unit {
        color: #f07178;
    }

    .token.url {
        color: #fd9170;
    }

    .token.variable {
        color: #f07178;
    }

    p, ul, ol {
        font-size: 1.5rem;
        line-height: 1.75em;
        margin: 1.2em 0;
    }

    ol, ul {
        padding-left: 2rem;
        -webkit-padding-start: 5%;
        -webkit-padding-end: 5%;
    }

    li {
        margin: 1rem 0;
    }

    li p {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
</style>


<svelte:head>
    <title>{post.title}</title>

    <meta property="og:title" content="The"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section class="container">
    <div class="w-full md:max-w-3xl mx-auto pt-20">
        <div class="mb-10">
            <a href="{lang}/blog" class="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">BACK
                TO BLOG</a>
        </div>
        <header class="text-center">
            <p class="uppercase">{post.printDate} ~ {post.printReadingTime}</p>
            <h1>{post.title}</h1>
            <hr/>
        </header>
        <div class='article'>
            {@html post.html}
        </div>
    </div>
</section>

