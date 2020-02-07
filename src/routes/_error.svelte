<script>
    export let status;
    export let error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    h1, p {
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    p {
        margin: 1em auto;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>

<svelte:head>
    <title>{status}</title>

    <meta property="og:title" content="error"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>

<div class="bg-white">
    <section class="container mx-auto mt-10">
        <div class="container mx-auto text-center">
            <div class="md:w-4/5 px-4 md:px-16 mx-auto md:py-24 my-12 md:my-14">
                <h1 class="leading-lf font-lf-extra-bold text-3xl md:text-6xl">
                    {status}
                </h1>
                <h2 class="font-lf-light leading-normal text-base md:text-xl mt-6 opacity-75 md:px-10">{error.message}</h2>
            </div>
        </div>

        <div class="container mx-auto mb-48">
            <div class="container mx-auto text-center">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player
                        src="https://assets9.lottiefiles.com/packages/lf20_73jq34.json" background="transparent"
                        speed="1" style="width: 300px; height: 300px;" loop controls autoplay>
                </lottie-player>
            </div>
            {#if dev && error.stack}
                <pre>{error.stack}</pre>
            {/if}
        </div>
    </section>
</div>
