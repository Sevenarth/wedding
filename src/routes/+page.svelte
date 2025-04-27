<script lang="ts">
    import '../app.css';
    import * as m from "$lib/paraglide/messages";
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import Header from "$lib/Header.svelte";
	import { makeObserver } from "$lib/actions.svelte";
    import story from "$lib/story";
	import Footer from "$lib/Footer.svelte";

    const observe = makeObserver({threshold: 1});
    let current = $state(0);
</script>

<section class="relative -mx-4 -mt-4 h-max w-screen text-green-900">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full h-full flex flex-col justify-between items-center pt-12 px-8 text-center z-[2] text-xl md:text-2xl">
        <Header big coloured />
        <h1>{m.heroic_less_jackal_arrive()}</h1>
        <div class="flex flex-col items-center my-10">
            <span>{m.north_fancy_quail_absorb()}</span>
            <a href="/auth" class="my-8 button big" tabindex="0">{m.real_teary_puffin_favor()}</a>
        </div>
        <h2 class="mb-28 md:mb-16 text-6xl">{m.great_keen_husky_drum()}</h2>
    </div>
</section>

<section id="main" class="-mt-24 md:-mt-12 md:mb-8">
    {#each story as entry, i}
        <div class="story-card" use:observe onviewportenter={() => {current = i}} data-current={current === i}>
            <div class="polaroid-container">
                <div class="polaroid">
                    <img src={entry.image} alt={entry.alt} class="object-cover aspect-square bg-black" />
                </div>
            </div>
            <div class="text-block">
                <h2 class="text-4xl sm:text-5xl text-black">{entry.title}</h2>
                <p class="text-xl sm:text-2xl">{entry.text}</p>
            </div>
        </div>
    {/each}
</section>

<Footer />

<style>
div.story-card {
    @apply h-4/5 w-full;
    @apply flex justify-center items-center flex-col md:flex-row md:odd:flex-row-reverse;
    @apply scroll-mt-8 my-8 md:scroll-mt-4 md:my-4 lg:scroll-mt-0 lg:my-0;
    @apply transition-opacity duration-300;
    @apply text-left md:odd:text-right;
}

div.story-card .polaroid-container {
    @apply flex items-center justify-center;
    @apply w-11/12 md:w-1/2 lg:w-2/5 max-w-2xl min-h-64 min-w-64 max-h-full;
}


div.story-card .polaroid {
    @apply bg-white shadow-xl;
    @apply p-5 pb-10 md:p-6 md:pb-12;
    @apply origin-center transition-transform duration-300 z-20 rotate-1;
    @apply grow;
}

div.story-card:nth-child(odd) .polaroid {
    @apply -rotate-1;
}

div.story-card[data-current="false"] .polaroid {
    @apply scale-90;
}

div.story-card .text-block {
    @apply max-w-prose md:w-1/3;
    @apply mx-4 mt-8 md:my-8 pb-4 md:ml-8 md:border-b-2;
    @apply flex flex-col justify-center;
    @apply border-b border-green-800;
}

div.story-card:nth-child(odd) .text-block {
    @apply md:ml-0 md:mr-8;
}

div.story-card:last-child .text-block {
    @apply border-none;
}
</style>