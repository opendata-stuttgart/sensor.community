<script>
    import {createEventDispatcher} from "svelte";
    import {flag} from "country-emoji"

    export let link;
    export let title;
    export let type;
    export let imageUrl;
    export let description;
    export let country;
    export let hasCountry;
    export let hasPrice;
    export let price;
    export let deactivate;
    export let opacity;
    const dispatch = createEventDispatcher();

</script>

{#if !deactivate}
    <a href="{link}">
        <div class="mr-6 mb-6 hover:shadow-lg">
            <div class="bg-white rounded-md shadow-md overflow-hidden border-b-3 border-gray-400">
                <div class="flex justify-center items-center">
                    <img class="block h-auto w-full border-b-1 border-gray-700"
                         src="{imageUrl}"
                         alt="" loading="lazy">
                </div>
                <div class="p-6 text-gray-700">
                    <div class="text-2xl font-bold">{@html description}</div>
                    {#if hasCountry}
                        <div class="flex justify-between items-center pt-4">
                            <span class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded text-xs">{type}</span>
                            <span class="px-2 py-1" href="#">{flag(`${country}`)}</span>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </a>
{/if}

{#if deactivate}
    <div class="mr-6 mb-6">
        <div class="bg-white rounded-md shadow-md overflow-hidden border-b-3 border-gray-400 {opacity ? 'opacity-25' : ''}">
            <div class="flex justify-center items-center">
                <img class="block h-auto w-full border-b-1 border-gray-700"
                     src="{imageUrl}"
                     alt="" loading="lazy">
            </div>
            <div class="p-6 text-gray-700">
                <div class="text-2xl font-bold">{@html description}</div>

                {#if hasCountry}
                    <div class="flex justify-between items-center pt-4">
                        <span class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded text-xs">{type}</span>
                        <span class="px-2 py-1" href="#">{flag(`${country}`)}</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
