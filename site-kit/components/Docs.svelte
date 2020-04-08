<script>
    import {onMount} from 'svelte';
    import GuideContents from './GuideContents.svelte';
    import {getFragment} from '../utils/navigation';

    import {_, locale, locales} from 'svelte-i18n';

    export const owner = 'ohheyitsdave';
    export const project = 'sensor.community';
    export let dir = 'docs';
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
        left: 0.8rem;
        bottom: 0.8rem;
        width: 2em;
        height: 2em;
        overflow: scroll;
        border: 1px solid #eee;
        transition: width 0.2s, height 0.2s;
    }

    aside button {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 3.4rem;
        height: 3.4rem;
    }

    aside.open {
        width: 80vw;
        height: 90vh;
        border: 1px solid #1a202c;
    }

    aside.open::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 2rem);
        height: 2em;
        pointer-events: none;
        z-index: 2;
    }

    aside::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1.9em;
        width: calc(100% - 2rem);
        height: 2em;
        pointer-events: none;
    }

    .sidebar {
        /*position: absolute;*/
        overflow-x: auto;
        width: 100%;
        height: 100%;
        padding: 5em 1.6rem 2em 3.2rem;
        bottom: 2em;
        background-color: white;
        margin: var(--top-offset) 0;
    }

    .content {
        /*width: 85%;*/
        /*margin: 0;*/
        padding-top: var(--side-nav);
        /*tab-size: 2;*/
        /*-moz-tab-size: 2;*/
    }

    @media (min-width: 832px) {
        aside {
            display: block;
            width: var(--sidebar-w);
            height: 100vh;
            top: 0;
            left: 2em;
            overflow: hidden;
            box-shadow: none;
            border: none;
            color: #1a202c;
        }

        aside button {
            display: none;
        }

        .sidebar {
            padding: var(--top-offset) 20px 6.4rem 3.2rem;
            height: 80%;
            bottom: auto;
            width: 100%;
        }

        .content {
            padding-left: calc(var(--sidebar-w) + var(--side-nav));
            padding-right: var(--side-nav);
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


</style>

<div bind:this={container} class="content listify">
    {#each sections as section}
        <section data-id={section.slug}>
            <h2>
                <span id={section.slug}></span>

<!--                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">-->
<!--                    <path d="M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22 l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z"/>-->
<!--                </svg>-->

                {@html section.metadata.title}
                <a href="{$locale}/sensors/airrohr#{section.slug}" class="anchor" aria-hidden></a>

                <small>
                    <a href="https://github.com/{owner}/{project}/edit/master/content/airrohr/{$locale}/{dir}/{section.file}"
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

<aside bind:this={aside} class:open={show_contents}>
    <div class="sidebar" on:click="{() => show_contents = false}">
        <GuideContents {sections} {active_section} {show_contents}/>
    </div>
    <button on:click="{() => show_contents = !show_contents}" name="{show_contents? 'close' : 'menu'}">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px"
             viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve">
			  <path d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z"/>
            <path d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333 S445.417,181.333,416,181.333z"/>
            <path d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z"/>
        </svg>
    </button>
</aside>
