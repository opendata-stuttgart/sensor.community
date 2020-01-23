<script>
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<Nav {segment}/>

<main>
    <slot/>
</main>

<Footer/>
