<script lang="ts">
    import * as m from "$paraglide/messages";
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import Header from "$lib/Header.svelte";
	import { makeObserver } from "$lib/actions.svelte";
    import story from "$lib/story";
	import Footer from "$lib/Footer.svelte";

    const pictureRotations = ["rotate-1", "-rotate-1"];

    const observe = makeObserver({threshold: 1});
    let current = $state(0);
</script>

<section class="relative snap-start h-max w-screen text-green-900">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full h-full flex flex-col justify-between items-center pt-12 px-8 text-center z-[2] text-xl md:text-2xl">
        <Header big coloured />
        <h1>{m.heroic_less_jackal_arrive()}</h1>
        <div class="flex flex-col items-center my-10">
            <span>Thank you for visiting our page!</span>
            <a href="/auth" class="my-8 button big" tabindex="0">RSVP here</a>
        </div>
        <h2 class="mb-28 md:mb-16 text-6xl">Our story</h2>
    </div>
</section>

<section class="-mt-24 md:-mt-12 md:mb-8">
    {#each story as entry, i}
        <div 
            id={`story-${i+1}`}
            use:observe
            onviewportenter={() => {current = i}}
            class="h-4/5 w-screen snap-start container mx-auto flex justify-center items-center flex-col md:flex-row md:odd:flex-row-reverse scroll-mt-8 my-8 md:scroll-mt-4 md:my-4 lg:scroll-mt-0 lg:my-0 transition-opacity duration-300 text-left md:odd:text-right"
            data-current={current === i ? "true" : undefined}
        >
            <div class="flex items-center justify-center w-5/6 md:w-1/2 lg:w-1/3 max-w-2xl min-h-64 min-w-64 max-h-full">
                <div class={`bg-white shadow-xl p-5 pb-10 md:p-6 md:pb-12 origin-center transition-transform duration-300 grow z-20 ${pictureRotations[i % pictureRotations.length]}`} class:scale-90={current !== i}>
                    <img src={entry.image} alt={entry.alt} class="object-cover aspect-square bg-black" />
                </div>
            </div>
            <div class:border-b-2={i < story.length-1} class="max-w-prose mx-8 mt-8 md:my-8 pb-4 md:w-1/3 flex flex-col space-around justify-center border-green-800 md:border-b-2">
                <h2 class="text-4xl sm:text-5xl text-black">{entry.title}</h2>
                <p class="text-xl sm:text-2xl">{entry.text}</p>
            </div>
        </div>
    {/each}
</section>

<Footer />

<style>
    :global(html) {
        scroll-snap-type: y proximity;
    }
</style>