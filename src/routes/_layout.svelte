<script context="module">
  export async function preload(page) {
    const DEFAULT_LANGUAGE = "en";

    if (page.path === "/") {
      return this.redirect(302, `/${DEFAULT_LANGUAGE}`);
    }

    return {};
  }
</script>

<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>



<Nav {segment} class="z-50"/>

<main>
  <slot/>
</main>

<Footer class="z-50"/>