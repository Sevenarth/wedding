<script lang="ts">
import { page } from '$app/state';
	import Footer from '$lib/Footer.svelte';
import Header from '$lib/Header.svelte';
import '../app.css';
</script>

<header>
    <a href="/"><Header small /></a>
</header>
<section id="main" class="px-4 py-4">
    <h1>{page.status} {page.error?.message}</h1>
    {#if page.status === 404}
    <p>Uh oh! The page you are looking for is gone or does not exist! If you think you've done everything right, please reach out to us for help.</p>
    {:else}
    <p>Uh oh! Something went horribly wrong! Please reach out to us for help.</p>
    {/if}
</section>

<Footer />