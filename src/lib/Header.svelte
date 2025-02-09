<script lang="ts">
    import anagramBlack from "$lib/assets/anagram.png";
    import anagramGreen from "$lib/assets/anagram-green.png";

    const {big = false, small = false, coloured = false} = $props();

    const anagramSrc = coloured ? anagramGreen : anagramBlack;
    const width = big ? "w-24 md:w-36" : (small ? "w-16" : "w-16 md:w-36");
    const margin = big ? "mb-8" : (small ? "mb-2" : "mb-2 md:mb-4");
</script>

<header class={`flex w-full justify-center ${margin}`}>
    <img class={`object-contain ${margin} ${width}`} src={anagramSrc} alt="S&L">
</header>