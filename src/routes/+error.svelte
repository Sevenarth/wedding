<script lang="ts">
import * as m from '$paraglide/messages';
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
    <p>{m.loose_light_squirrel_fry()}</p>
    {:else}
    <p>{m.deft_few_canary_race()}</p>
    {/if}
</section>

<Footer />