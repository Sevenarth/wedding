<script lang="ts">
	import Footer from '$lib/Footer.svelte';
import Header from '$lib/Header.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<header>
    <a href="/"><Header small /></a>
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