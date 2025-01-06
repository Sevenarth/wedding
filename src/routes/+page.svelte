<script lang="ts">
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import Header from "$lib/Header.svelte";
	import { makeObserver } from "$lib/actions.svelte";
    import story from "$lib/story";

    const pictureRotations = ["rotate-1", "-rotate-1"];

    const observe = makeObserver({threshold: 1});
    let current = $state();
</script>

<section class="relative snap-start h-max w-screen text-sage">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full h-full flex flex-col justify-between items-center pt-12 px-8 text-center z-[2] text-xl md:text-2xl">
        <Header splash />
        <div class="flex flex-col items-center my-10">
            <span>Thank you for visiting our page!</span>
            <button class="my-8 p-4 text-black text-2xl bg-peach">RSVP here</button>
        </div>
        <h2 class="mb-24 text-6xl">Our story</h2>
    </div>
</section>

<section class="-mt-24 md:mb-8">
    {#each story as entry, i}
        <div 
            id={`story-${i+1}`}
            use:observe
            onviewportenter={() => {current = i}}
            class="h-4/5 w-screen snap-start snap-always container mx-auto flex justify-center items-center flex-col md:flex-row md:odd:flex-row-reverse scroll-mt-4 my-4 lg:scroll-mt-2 lg:my-2 transition-opacity duration-300 opacity-60 data-[current=true]:opacity-100 text-left md:odd:text-right"
            data-current={current === i ? "true" : undefined}
        >
            <div class="flex items-center justify-center w-5/6 md:w-1/2 lg:w-2/5 max-w-2xl min-h-64 min-w-64 max-h-full">
                <img src={entry.image} alt={entry.alt} class={`object-cover aspect-square bg-white shadow-xl p-5 pb-10 md:p-6 md:pb-12 origin-center transition-transform duration-300 scale-90 ${pictureRotations[i % pictureRotations.length]}`} class:scale-100={current === i} />
            </div>
            <div class="max-w-prose mx-8 mt-8 md:my-8 pb-4 md:w-1/3 flex flex-col space-around justify-center border-black border-b-2">
                <h2 class="text-4xl sm:text-5xl">{entry.title}</h2>
                <p class="text-xl sm:text-2xl">{entry.text}</p>
            </div>
        </div>
    {/each}
</section>

<style>
    :global(html) {
        scroll-snap-type: y mandatory;
    }

div.overlay {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>