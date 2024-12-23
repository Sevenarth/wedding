<script lang="ts">
    import * as m from "$paraglide/messages";
    import anagramBlack from "$lib/assets/anagram.png";
    import anagramSage from "$lib/assets/anagram-sage.png";

    const {splash = false} = $props();

    const anagramSrc = splash ? anagramSage : anagramBlack;
    const width = splash ? "w-24 md:w-36" : "w-16";
    const extraClasses = !splash ? "p-4 fixed z-[-1]" : "";
</script>

<header class={`flex flex-col w-full space-between items-center space-y-8 ${extraClasses}`}>
    <img class={`object-contain mb-8 ${width}`} src={anagramSrc} alt="S&L">
    {#if splash}<h1>{m.heroic_less_jackal_arrive()}</h1>{/if}
</header>