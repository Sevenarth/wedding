<script lang="ts">
    import ChevronLeft from "~icons/tabler/chevron-left";
    import Cross from "~icons/tabler/x";
    import Help from "~icons/tabler/help";
    import { PUBLIC_TURNSTILE_KEY as siteKey } from "$env/static/public";
    import * as m from "$paraglide/messages";
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import personalEnvelope from "$lib/assets/personal-envelope.png";
    import addressedEnvelope from "$lib/assets/addressed-envelope.png";
    import Header from "$lib/Header.svelte";
    import { Turnstile } from "svelte-turnstile";
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData, form: ActionData } = $props();
</script>

<section id="where-is-my-code">
    <div class="max-w-md p-8 bg-white shadow-xl">
        <h2>Where is my code?</h2>
        <h3>Have you personally received the invitation?</h3>
        <p class="mb-4">You can find your code on the bottom left corner of the front of your envelope, it's a 4 digit number.</p>
        <img src={personalEnvelope} alt="Plain envelope" class="object-contain h-32 mx-auto" />
        <h3>Have you received the invitation in the post?</h3>
        <p class="mb-4">Your code is your post code as written on your envelope.</p>
        <img src={addressedEnvelope} alt="Addressed envelope" class="object-contain h-32 mx-auto" />
        <a href="#/" class="p-2 text-black text-xl w-full block text-center bg-gray-200">Close</a>
    </div>
</section>

<section class="relative h-dvh w-screen text-green-900">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full h-full flex flex-col justify-between items-center pt-12 px-8 text-center z-[2] text-xl md:text-2xl">
        <Header coloured />
        <h2 class="text-5xl mb-6">Your invitation</h2>
        <form method="post" class="grow flex flex-col justify-between w-full max-w-sm text-black">
            {#if form?.error}<p>{form.error}</p>{/if}
            <div>
                <div class="flex flex-col text-left mb-4 md:mb-6">
                    <label for="name">Your name</label>
                    <input type="text" id="name" name="name" value={form?.name ?? ""} autocomplete="given-name" placeholder="e.g. John" />
                </div>
                <div class="flex flex-col text-left mb-4 md:mb-6">
                    <label for="access-code">Your access code</label>
                    <input type="text" id="access-code" name="access-code" autocomplete="current-password" placeholder="e.g. 1234" />
                    <a href="#where-is-my-code" class="text-lg"><Help class="icon" /> <span class="underline">Where is my code?</span></a>
                </div>
                <Turnstile {siteKey} size="invisible" />
            </div>
            <div class="flex flex-col mb-8">
                <button class="mb-4 p-4 text-black text-2xl bg-peach">Enter</button>
                <a href="/" class="p-2 text-black text-xl bg-white">
                    <ChevronLeft class="icon" /> Return to the homepage
                </a>
            </div>
        </form>
    </div>
</section>

<style>
input[type="text"] {
    @apply focus:ring-green-900 focus:border-green-900 text-xl p-3 md:p-2;
}

#where-is-my-code {
    @apply opacity-0 invisible target:opacity-100 target:visible transition-all duration-300 backdrop-blur w-screen h-dvh fixed top-0 left-0 z-10 flex items-center justify-center;
}
</style>