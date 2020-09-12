<script>
    import {onMount} from 'svelte';
    import GuideContents from './GuideContents.svelte';
    import {getFragment} from '../utils/navigation';
    import {_, locale, locales} from 'svelte-i18n';
    import { stores } from '@sapper/app';
    const { page } = stores();

    export const owner = 'opendata-stuttgart';
    export const project = 'sensor.community';
    export let dir = '';
    export let edit_title = 'edit this section';
    export let sections;
    let active_section;

    let container;
    let aside;
    let show_contents = false;

    onMount(() => {
        // don't update `active_section` for headings above level 4, see _sections.js
        const anchors = container.querySelectorAll('[id]:not([data-scrollignore])');

        let positions;

        const onresize = () => {
            const {top} = container.getBoundingClientRect();
            positions = [].map.call(anchors, anchor => {
                return anchor.getBoundingClientRect().top - top;
            });
        }

        let last_id = getFragment();

        const onscroll = () => {
            const top = -window.scrollY;

            let i = anchors.length;
            while (i--) {
                if (positions[i] + top < 40) {
                    const anchor = anchors[i];
                    const {id} = anchor;

                    if (id !== last_id) {
                        active_section = id;
                        last_id = id;
                    }

                    return;
                }
            }
        };

        window.addEventListener('scroll', onscroll, true);
        window.addEventListener('resize', onresize, true);

        // wait for fonts to load...
        const timeouts = [
            setTimeout(onresize, 1000),
            setTimeout(onscroll, 5000)
        ];

        onresize();
        onscroll();

        return () => {
            window.removeEventListener('scroll', onscroll, true);
            window.removeEventListener('resize', onresize, true);

            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    });
</script>

<style>
    aside {
        position: fixed;
        transition: width 0.2s, height 0.2s;
        margin: var(--top-offset) 0;
        padding: 5em 1.6rem 2em 3.2rem;
    }

    .content {
        margin: auto;
        padding-left: 1em;
        padding-right: 1em;
    }

    @media (min-width: 770px) {
        aside {
            position: absolute;
            display: block;
            width: var(--sidebar-w);
            top: 0;
            left: 2em;
            overflow: hidden;
            box-shadow: none;
            border: none;
            color: #1a202c;
        }

        .content {
            padding-left: calc(var(--sidebar-w) + var(--side-nav));
            padding-right: var(--side-nav);
            margin: var(--top-offset) 0;
        }

        .content .side-by-side {
            display: grid;
            grid-template-columns: calc(50% - 1em) calc(50% - 1em);
            grid-gap: 1em;
        }

        .content .side-by-side .code {
            padding: 1em 0;
        }
    }


    .content h2 {
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 1.1;
        margin: 1em 0 1.6rem 0;
    }

    .content h3 {
        font-size: 1.5em;
        margin: 1em 0;
    }

    .content h4 {
        font-size: 1em;
        margin: 2em 0 0.5em 0.5em;
    }

    .content h3,
    .content h3 > code {
        margin: 6.4rem 0 0 0;
        padding: 2rem 1.6rem 2.6rem .2rem;
        /*font-size: var(--h4);*/
        /*border-top: var(--border-w) solid #6767781f; !* based on --second *!*/
        background: transparent;
        line-height: 1;
    }

    .content h3:first-of-type {
        border: none;
        margin: 0;
    }

    /* avoid doubled border-top */
    .content h3 > code {
        border-radius: 0 0 0 0;
        border: none;
        font-size: inherit;
    }

    /*.content h4,*/
    /*.content h4 > code {*/
    /*    font-family: inherit;*/
    /*    font-weight: 600;*/
    /*    font-size: 2rem;*/
    /*    margin: 6.4rem 0 1.6rem 0;*/
    /*    background: transparent;*/
    /*    line-height: 1;*/
    /*    padding: 0;*/
    /*    top: 0;*/
    /*}*/

    .content h4 > em {
        opacity: 0.7;
    }

    .content h5 {
        font-size: 2.4rem;
        margin: 2em 0 0.5em 0;
    }

    .content code {
        padding: .3rem .8rem .3rem;
        margin: 0 0.2rem;
        top: -.1rem;
        background: #eff8ff;
    }

    .content pre code {
        padding: 0;
        margin: 0;
        top: 0;
        background: transparent;
    }

    .content pre {
        margin: 0 0 2em 0;
        width: 100%;
        max-width: 100%;
    }

    .content .icon {
        width: 1.4em;
        height: 1.4em;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        -o-object-fit: contain;
        object-fit: contain;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }

    .content table {
        margin: 0 0 2em 0;
    }

    section > .code-block > pre {
        display: inline-block;
        background: #eff8ff;
        color: white;
        padding: .3rem .8rem;
        margin: 0;
        max-width: 100%;
    }

    section > .code-block > pre.language-markup {
        padding: .3rem .8rem .2rem;
        /*background: var(--back-api);*/
    }

    section p {
        margin: 1em 0;
    }

    small {
        font-size: 0.7rem;
        float: right;
        letter-spacing: 0.1em;
        margin: 5px;
    }

    img {
        display: inline;
        padding: 0.5em 0;
        border-radius: 5px;
    }

</style>

<div bind:this={container} class="content listify">
    {#each sections as section}
        <section data-id={section.slug}>
            <h2>
                <span id={section.slug}></span>

                {@html section.metadata.title}
                <a href="{section.lang}/sensors/airrohr#{section.slug}" class="anchor" aria-hidden></a>

                <small>
                    <a href="https://github.com/{owner}/{project}/edit/develop/content/airrohr/{$locale}/{dir}/{section.file}"
                       title="{$_('guide.editOnGithub')}">
                        <svg class="icon" viewBox='0 0 24 24'>
                            <path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'/>
                            <polygon points='18 2 22 6 12 16 8 16 8 12 18 2'/>
                        </svg>
                    </a>
                </small>
            </h2>

            {@html section.html}
        </section>
    {/each}
</div>

<aside bind:this={aside}>
    <GuideContents {sections} {active_section} {show_contents}/>
</aside>
