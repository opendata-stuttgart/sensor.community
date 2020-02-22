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
    const dispatch = createEventDispatcher();

</script>

{#if !deactivate}
    <a href="{link}">
        <div class="bg-white rounded-md shadow-md overflow-hidden border-b-3 border-gray-400">
            <div class="flex justify-center items-center">
                <img class="block h-auto w-full border-b-1 border-gray-700"
                     src="{imageUrl}"
                     alt="">
            </div>
            <div class="p-6">
                {#if hasPrice}
                    <div class="flex justify-between">
                        <span class="block font-bold text-xl">{title}</span>
                        <span class="block bg-white rounded-full text-white bg-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{price}</span>
                    </div>
                    <div class="text-base">{@html description}</div>
                {/if}
                {#if !hasPrice}
                    <div>
                        <h4 class="mb-1 text-xl font-bold">{title}</h4>
                        <div class="mb-1 text-base">{@html description}</div>
                    </div>
                {/if}
                {#if hasCountry}
                    <div class="flex justify-between items-center pt-4">
                        <span class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded text-xs">{type}</span>
                        <span class="px-2 py-1" href="#">{flag(`${country}`)}</span>
                    </div>
                {/if}
            </div>
        </div>
    </a>
{/if}

{#if deactivate}
    <div class="bg-white rounded-md shadow-md overflow-hidden border-b-3 border-gray-400 opacity-25">
        <div class="flex justify-center items-center">
            <img class="block h-auto w-full border-b-1 border-gray-700"
                 src="{imageUrl}"
                 alt="">
        </div>
        <div class="p-6">
            {#if hasPrice}
                <div class="flex justify-between">
                    <span class="block font-bold text-xl">{title}</span>
                    <span class="block bg-white rounded-full text-white bg-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{price}</span>
                </div>
                <div class="mb-1 text-base">{@html description}</div>
            {/if}
            {#if !hasPrice}
                <div>
                    <h4 class="mb-1 text-xl font-bold">{title}</h4>
                    <div class="mb-1 text-base">{@html description}</div>
                </div>
            {/if}
            {#if hasCountry}
                <div class="flex justify-between items-center pt-4">
                    <span class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded text-xs">{type}</span>
                    <span class="px-2 py-1" href="#">{flag(`${country}`)}</span>
                </div>
            {/if}
        </div>
    </div>
{/if}