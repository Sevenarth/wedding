<script lang="ts">
	import { makeBottomlessStack, makeObserver } from "./actions.svelte";

    const observe = makeObserver({rootMargin: "0 0 -100% 0", threshold: 0});
    const { pop, push, last } = makeBottomlessStack(0);

    const pictureRotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];


    const story = [
        {
            image: "https://picsum.photos/1600/900/",
            alt: "Wedding",
            title: "Our Wedding",
            text: "We're getting married on the 1st of January 2023. We can't wait to celebrate with you!"
        },
        {
            image: "https://picsum.photos/1600/900/",
            alt: "Honeymoon",
            title: "Our Honeymoon",
            text: "We're going to the Maldives for our honeymoon. We're so excited to relax and enjoy the sun!"
        },
        {
            image: "https://picsum.photos/1600/900/",
            alt: "Love",
            title: "Our Love",
            text: "We met in 2019 and have been inseparable ever since. We can't wait to spend the rest of our lives together!"
        }
    ];
</script>

<section class="mb-5 container mx-auto">
{#each story as entry, i}
    <div
        id={`story-${i+1}`}
        use:observe
        onviewportenter={() => i !== last() && push(i)}
        onviewportexit={() => pop()}
        class="sticky top-0 flex flex-col items-center h-lvh w-full snap-start"
    >
        <div class="flex justify-around items-center w-full grow flex-col md:flex-row">
            <div class={`bg-white drop-shadow-xl flex flex-col justify-between w-5/6 md:w-3/5 grow p-4 pb-10 space-y-4 ${pictureRotations[i % pictureRotations.length]}`}>
                <div class="w-full h-full">
                    <img src={entry.image} alt={entry.alt} class="object-cover w-full h-full" />
                </div>
            </div>
            <div class:opacity-0={last() !== i} class="transition-opacity border-t md:border-l md:border-t-0 border-white/50 mt-8 mx-8 py-4 md:m-8 md:p-6 md:w-1/3 flex flex-col space-around justify-center">
                <h2 class="text-4xl sm:text-5xl">{entry.title}</h2>
                <p class="text-xl sm:text-2xl">{entry.text}</p>
            </div>
        </div>
    </div >
{/each}
</section>