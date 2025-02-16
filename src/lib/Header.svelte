<script lang="ts">
    import * as m from "$paraglide/messages";
    import ChevronLeft from "~icons/tabler/chevron-left";
    import anagramBlack from "$lib/assets/anagram.png";
    import anagramGreen from "$lib/assets/anagram-green.png";

    const {big = false, small = false, coloured = false, backlink = false} = $props();

    const anagramSrc = coloured ? anagramGreen : anagramBlack;
    const width = big ? "w-24 md:w-36" : (small ? "w-16" : "w-16 md:w-36");
    const margin = big ? "mb-8" : (small ? "mb-2" : "mb-2 md:mb-4");
</script>

<header class={`flex w-full justify-center items-center ${margin}`}>
    {#if backlink}
        <a href="/rsvp" class="text-xl grow basis-0"><ChevronLeft class="icon mr-1" />{m.tired_raw_gibbon_boost()}</a>
    {/if}
    <a href="/"><img class={`object-contain ${margin} ${width}`} src={anagramSrc} alt="S&L"></a>
    {#if backlink}
        <span class="grow basis-0"></span>
    {/if}
</header>