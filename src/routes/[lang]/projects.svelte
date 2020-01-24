<script>
    import {_} from 'svelte-i18n'

    const fs = require('fs');
    let rows = JSON.parse(fs.readFileSync('./projects/projects.json', 'utf-8'));

    const {flag, code, name, countries} = require('country-emoji');
</script>

<svelte:head>
    <title>{$_('projects.metaTitle')}</title>

    <meta property="og:title" content={$_('projects.metaTitle')}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<section>
    <div class="container w-full mx-auto">
        <div class="w-full p-24  md:px-6 text-xl text-gray-800 leading-normal">
            <h1>{$_('projects.h1')}</h1>
            <p class="mb-x2">Find apps, websites,... from our lovely community  💖️</p>

            <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                {#each rows as row}

                    <div class="m-7 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article class="overflow-hidden bg-gray-100 rounded-lg shadow-lg">
                            <a href="{row.link}">
                                <img alt="" class="block h-auto w-full" src={row.screenshot}>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                {flag(`${row.language}`)}
                            </header>
                            <footer>

                                <div class="relative px-6 pb-6 mt-6">
                                    <span class="block opacity-75 -mb-1 text-sm">{row.platform}</span>
                                    <div class="flex justify-between">
                                        <span class="block font-semibold text-xl">{row.title}</span>
                                        <span class="block bg-teal-500 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{row.type}</span>
                                    </div>
                                </div>
                            </footer>
                            </a>
                        </article>

                    </div>
            {/each}
            </div>

            </div>

        </div>
    </div>
</section>
