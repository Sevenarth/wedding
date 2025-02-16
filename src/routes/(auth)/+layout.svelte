<script lang="ts">
import { page } from "$app/state";
import Footer from '$lib/Footer.svelte';
import Header from '$lib/Header.svelte';
import '../../app.css';
let { children } = $props();
</script>

<header>
    <Header small backlink={page.route.id !== "/(auth)/rsvp"} />
</header>
<section id="main" class="px-4 py-4">
    {@render children()}
</section>

<Footer />

<style>
header {
    @apply border-b-green-900/10 border-b;
}
</style>