<script lang="ts">
    import ChevronDown from "~icons/tabler/chevron-down";
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import Header from "$lib/Header.svelte"
	import ScrollAnchor from "$lib/ScrollAnchor.svelte";
</script>

<section class="relative h-svh md:h-screen w-screen">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full h-full flex flex-col justify-between items-center snap-start pt-12 px-8 text-center z-[2] text-xl md:text-2xl">
        <Header splash />
        <div class="flex flex-col items-center">
            Have you got your invite to our wedding yet?
        </div>
        <div class="flex flex-col items-center">
            <span>To confirm your participation:</span>
            <button class="m-4 p-3 text-black">RSVP here</button>
        </div>
        <div class="flex flex-col items-center">
            <span>or scroll to learn about our story!</span>
            <ScrollAnchor target="story-1">
                <ChevronDown class="text-5xl mt-10 animate-bounce" />
            </ScrollAnchor>
        </div>
    </div>
</section>

<style>
div.overlay {
    background-color: rgba(0, 0, 0, 0.4);
    color: var(--sage);
}
</style>