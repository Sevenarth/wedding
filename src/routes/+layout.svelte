<script lang="ts">
	import ScrollAnchor from '$lib/ScrollAnchor.svelte';
    import ChevronDown from "~icons/tabler/chevron-down";
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<div class="flex justify-center">
    <ScrollAnchor class="rotate-180 transform-gpu">
        <ChevronDown class="text-5xl animate-bounce" />
	</ScrollAnchor>
</div>
<footer class="container mx-auto border-t border-white/50 mt-5 mx-8 py-4 p-6 flex flex-col md:flex-row justify-between snap-start">
	<p>Made with ❤️ by your groom.</p>
	<p>View on <a href="https://github.com/Sevenarth/wedding" target="_blank">GitHub</a></p>
</footer>