<script lang="ts">
	import type { UIEventHandler } from "svelte/elements";
	import { makeObserver } from "./actions.svelte";

    let scrollY = $state(0);
    let viewportHeight = $state(0);
    let totalHeight = $state(0);
    let current = $state(0);

    const onscroll: UIEventHandler<HTMLElement> = (event) => {
        scrollY = (event.target as HTMLBodyElement)?.scrollTop
    }

    const observe = makeObserver({rootMargin: "0px 0px -50% 0px", threshold: 0});

    const pictureRotations = ["-rotate-1", "rotate-1", "-rotate-3", "rotate-3"];

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

    let sectionsY = $derived(story.map((_, i) => viewportHeight*(i+1)))
</script>

<svelte:body {onscroll} bind:clientHeight={viewportHeight} />

<section class="relative" bind:clientHeight={totalHeight}>
    {#each story as entry, i}
        <div id={`story-${i+1}`} class="h-dvh md:h-lvh w-screen snap-start snap-always">
            <div
                use:observe
                onviewportenter={() => {current = i}}
                class:fixed={scrollY+1 >= sectionsY[i] && scrollY+1 < totalHeight}
                class:absolute={scrollY+1 >= totalHeight}
                class="bottom-0 left-0 right-0 container mx-auto flex justify-around items-center flex-col md:flex-row h-dvh md:h-lvh w-screen"
            >
                <div class="grow md:grow-0 flex items-center justify-center w-5/6 md:w-3/5 max-w-2xl max-h-full">
                    <img src={entry.image} alt={entry.alt} class={`object-cover aspect-square bg-white drop-shadow-xl p-5 pb-10 lg:p-6 lg:pb-12 ${pictureRotations[i % pictureRotations.length]}`} />
                </div>
                <div class:opacity-0={current !== i} class="transition-opacity duration-300 max-w-prose border-t md:border-l md:border-t-0 border-white/50 m-8 py-4 md:m-0 md:ml-8 md:p-6 md:w-1/3 flex flex-col space-around justify-center z-10">
                    <h2 class="text-4xl sm:text-5xl">{entry.title}</h2>
                    <p class="text-xl sm:text-2xl">{entry.text}</p>
                </div>
            </div>
        </div>
    {/each}
</section>