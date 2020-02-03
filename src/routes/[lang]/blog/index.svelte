<script context="module">
    export function preload({params, query}) {
        return this.fetch(`{lang}/blog.json`).then(r => r.json()).then(posts => {
            return {posts};
        });
    }
</script>

<script>
    import initI18n from "../../../utils/initI18n";
    import { stores } from "@sapper/app";

    const { page } = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    export let posts;
</script>

<style>
    h1 {
        font-size: 3em;
        margin: 0 0 1em 0;
        font-weight: bold;
    }

    h2 {
        margin: 1em 0 0 0;
        font-size: 1.6em;
        font-weight: bolder;
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

    p, ul, ol {
        font-size: 1.3rem;
        line-height: 1.5em;
        margin: 1em 0;
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
    }

    hr {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(56, 178, 172, .8), rgba(0, 0, 0, 0));
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
        body {
            font-size: 14px;
        }

        p, ul, ol {
            font-size: 1.2rem;
            margin: 1em 0;
        }
    }

    .post-item-date {
        color: #AAA;
        text-align: left;
        text-transform: uppercase;
        margin-right: 16px;
        font-size: smaller;
    }

    hr {
        margin: 60px auto;
    }
</style>

<svelte:head>
    <title>{i18n.t('blog:metaTitle')}</title>

    <meta property="og:title" content={i18n.t('blog:metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section>
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
            <h1>Recent posts</h1>
            {#each posts as post, index}
            <!-- `rel=prefetch` attribute to load the data for the page as soon as  the user hovers over the link or taps it, instead of waiting for the 'click' event -->
                <article class="post-item p-8 border border-teal-300 mb-8 hover:shadow-lg">
                    <h3>
                        <a rel='prefetch' href='{lang}/blog/{post.slug}'>{post.title}</a>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div class="post-item-footer">
                        <span class="post-item-date"> {post.printDate}</span>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>
