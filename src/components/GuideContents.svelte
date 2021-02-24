<script>
    export let sections = [];
    export let active_section = null;
    export let show_contents;

    let ul;
</script>

<style>
    .reference-toc li {
        display: block;
        margin: 0 0 3rem 0;
    }

    a {
        position: relative;
        transition: color 0.2s;
        border-bottom: none;
    }

    .section {
        display: block;
        padding: 0 0 .8rem 0;
        text-transform: uppercase;
        font-weight: bold;

    }

    .subsection {
        display: block;
        font-size: 0.9em;
        padding: 0 0 0.3em 0;
        letter-spacing: -0.03em;
    }

    .section:hover,
    .subsection:hover,
    .active {
        color: #38b2ac;

    }

    .subsection[data-level="4"] {
        padding-left: 0.5rem;
    }
</style>

<ul bind:this={ul} class="reference-toc">
    {#each sections as section}
        <li>
            <a class="section" class:active="{section.slug === active_section}" href="{section.lang}/sensors/{section.path}#{section.slug}">
                {@html section.metadata.title}

                {#if section.slug === active_section}
                    <div class="icon-container">

                    </div>
                {/if}
            </a>

            {#each section.subsections as subsection}
                <a class="subsection"
                   class:active="{subsection.slug === active_section}"
                   href="{section.lang}/sensors/{section.path}#{subsection.slug}"
                   data-level="{subsection.level}">
                    {@html subsection.title}

                    {#if subsection.slug === active_section}

                    {/if}
                </a>
            {/each}
        </li>
    {/each}
</ul>
