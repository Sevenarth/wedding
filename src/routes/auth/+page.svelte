<script lang="ts">
    import ChevronLeft from "~icons/tabler/chevron-left";
    import Help from "~icons/tabler/help";
    import Loader from "~icons/tabler/loader-2";
    import { PUBLIC_TURNSTILE_KEY as siteKey } from "$env/static/public";
    import * as m from "$paraglide/messages";
    import coralPeonies from "$lib/assets/coral-peonies.png";
    import personalEnvelope from "$lib/assets/personal-envelope.png";
    import addressedEnvelope from "$lib/assets/addressed-envelope.png";
    import Header from "$lib/Header.svelte";
    import { Turnstile } from "svelte-turnstile";
	import type { PageData, ActionData } from './$types';

	let { form }: { data: PageData, form: ActionData } = $props();

    let name = $state(form?.name ?? "");
    let accessCode = $state();

    let formEl: HTMLFormElement | undefined = $state();
    let turnstileReady = $state(false);
    let submitting = $state(false);

    let onsubmit = (e: Event) => {
        if (!turnstileReady) {
            e.preventDefault();
        }
        submitting = true;
    }

    $effect(() => {
        if(turnstileReady && submitting) {
            formEl?.submit();
        }
    })
</script>

<section id="where-is-my-code">
    <div class="max-w-md p-8 bg-white shadow-xl m-auto">
        <h3>Have you personally received the invitation?</h3>
        <p>You can find your code on the bottom left corner of the front of your envelope, it's a 4 digit number.</p>
        <img src={personalEnvelope} alt="Plain envelope" class="object-contain h-32 mx-auto" />
        <h3>Have you received the invitation in the post?</h3>
        <p>Your code is your post code as written on your envelope.</p>
        <img src={addressedEnvelope} alt="Addressed envelope" class="object-contain h-32 mx-auto" />
        <a href="#/" class="button secondary wide" tabindex="0">Close</a>
    </div>
</section>

<section class="-mx-4 -my-4 relative min-h-dvh w-screen text-green-900">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full min-h-dvh flex flex-col justify-between items-center pt-12 px-8 z-[2] text-xl md:text-2xl">
        <Header coloured />
        <h2 class="text-5xl mb-6">Your invitation</h2>
        <form bind:this={formEl} method="post" class="grow flex flex-col w-full max-w-sm text-black" {onsubmit}>
            <div class="inputs">
                {#if form?.error}<div class="notice error">{form.error}</div>{/if}
                <div class="flex flex-col text-left">
                    <label for="name">Your name</label>
                    <input type="text" id="name" name="name" bind:value={name} autocomplete="given-name" placeholder="e.g. John" />
                </div>
                <div class="flex flex-col text-left">
                    <label for="access-code">Your access code</label>
                    <input type="text" id="access-code" name="access-code" autocomplete="current-password" placeholder="e.g. 1234" bind:value={accessCode} />
                    <a href="#where-is-my-code" class="text-lg" tabindex="0"><Help class="icon" /> <span class="underline">Where is my code?</span></a>
                </div>
                <Turnstile {siteKey} size="invisible" on:callback={() => { turnstileReady = true }} />
            </div>
            <div class="flex flex-col mb-8">
                <button tabindex="0" class="mb-4 big" disabled={submitting}>
                    {#if submitting}
                        <Loader class="icon text-2xl animate-spin" />
                    {:else}
                        Enter
                    {/if}
                </button>
                <a href="/" class="button secondary" tabindex="0">
                    <ChevronLeft class="icon" /> Return to the homepage
                </a>
            </div>
        </form>
    </div>
</section>

<style>
input {
    @apply text-xl p-3 md:p-2;
}

#where-is-my-code {
    @apply opacity-0 invisible target:opacity-100 target:visible transition-all duration-300 backdrop-blur w-screen h-dvh fixed top-0 left-0 z-10 flex overflow-auto;
}

.inputs > div {
    @apply mb-4 md:mb-6;
}
</style>