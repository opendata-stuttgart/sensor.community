<script>
    import {_, locale, locales} from 'svelte-i18n';
    import Icon from './Icon.svelte';

    export let sections = [];
    export let active_section = null;
    export let show_contents;

    let ul;
</script>

<style>
    .reference-toc li {
        display: block;
        /*line-height: 1.2;*/
        margin: 0 0 3rem 0;
    }

    a {
        position: relative;
        transition: color 0.2s;
        border-bottom: none;
        padding: 0;
        color: var(--second);
    }

    .section {
        display: block;
        padding: 0 0 .8rem 0;
        font-size: var(--h6);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
    }

    .subsection {
        display: block;
        font-size: 0.95rem;
        color: white;
        padding: 0 0 0.6em 0;
    }

    .section:hover,
    .subsection:hover,
    .active {
        color: var(--flash);
    }

    .subsection[data-level="4"] {
        padding-left: 1.2rem;
    }

    .icon-container {
        position: absolute;
        top: -.2rem;
        right: 2.4rem;
    }

    @media (min-width: 832px) {
        a {
            color: var(--sidebar-text);
        }

        a:hover,
        .section:hover,
        .subsection:hover,
        .active {
            color: white
        }
    }
</style>

<ul	bind:this={ul} class="reference-toc">
    {#each sections as section}
        <li>
            <a class="section" class:active="{section.slug === active_section}" href="{$locale}/docs#{section.slug}">
                {@html section.metadata.title}

                {#if section.slug === active_section}
                    <div class="icon-container">
                        <Icon name="arrow-right"/>
                    </div>
                {/if}
            </a>

            {#each section.subsections as subsection}
                <a class="subsection"
                   class:active="{subsection.slug === active_section}"
                   href="{$locale}/docs#{subsection.slug}"
                   data-level="{subsection.level}">
                    {@html subsection.title}

                    {#if subsection.slug === active_section}
                        <div class="icon-container">
                            <Icon name="arrow-right"/>
                        </div>
                    {/if}
                </a>
            {/each}
        </li>
    {/each}
</ul>
