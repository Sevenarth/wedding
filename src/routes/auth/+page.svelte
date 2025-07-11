<script lang="ts">
import ChevronLeft from "~icons/tabler/chevron-left";
import Help from "~icons/tabler/help";
import Loader from "~icons/tabler/loader-2";
import { env } from "$env/dynamic/public";
import * as m from "$lib/paraglide/messages";
import { page } from '$app/state';
import coralPeonies from "$lib/assets/coral-peonies.png";
import personalEnvelope from "$lib/assets/personal-envelope.png";
import addressedEnvelope from "$lib/assets/addressed-envelope.png";
import Header from "$lib/Header.svelte";
import { Turnstile } from "svelte-turnstile";
import type { PageData, ActionData } from './$types';

let { form }: { data: PageData, form: ActionData } = $props();
const redirectTo = page.url.searchParams.get("from");

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
        <h3>{m.legal_many_canary_nourish()}</h3>
        <p>{m.heavy_nimble_gorilla_jump()}</p>
        <img src={personalEnvelope} alt={m.large_proud_bobcat_reap()} class="object-contain h-32 mx-auto" />
        <h3>{m.weak_smug_lark_delight()}</h3>
        <p>{m.grassy_suave_insect_fall()}</p>
        <img src={addressedEnvelope} alt={m.home_bright_moose_loop()} class="object-contain h-32 mx-auto" />
        <p>{m.teal_dull_chicken_smile()}</p>
        <a href="#/" class="button secondary wide" tabindex="0">{m.fluffy_away_pig_support()}</a>
    </div>
</section>

<section class="-mx-4 -my-4 relative min-h-dvh w-screen text-green-900">
    <img src={coralPeonies} alt="Coral Peonies" class="absolute inset-0 w-full h-full object-cover z-[-1]" />
    <div class="overlay w-full min-h-dvh flex flex-col justify-between items-center pt-12 px-8 z-[2] text-xl md:text-2xl">
        <Header coloured />
        <h2 class="text-5xl mb-6 text-center">{m.sound_funny_lionfish_flip()}</h2>
        <form bind:this={formEl} method="post" class="grow flex flex-col w-full max-w-sm text-black" {onsubmit}>
            <div class="inputs">
                {#if form?.error}<div class="notice error">{form.error}</div>{/if}
                {#if redirectTo}<div class="notice">{m.seemly_formal_tuna_pop()}</div>{/if}
                <div class="flex flex-col text-left">
                    <label for="name">{m.tasty_neat_orangutan_engage()}</label>
                    <input type="text" id="name" name="name" bind:value={name} autocomplete="given-name" placeholder={m.arable_dark_clownfish_conquer()} />
                </div>
                <div class="flex flex-col text-left">
                    <label for="access-code">{m.stale_only_kangaroo_care()}</label>
                    <input type="text" id="access-code" name="access-code" autocomplete="current-password" placeholder={m.top_male_pelican_hurl()} bind:value={accessCode} />
                    <a href="#where-is-my-code" class="text-lg" tabindex="0"><Help class="icon mr-1" /><span class="underline">{m.crisp_pretty_piranha_trust()}</span></a>
                </div>
                <Turnstile siteKey={env.PUBLIC_TURNSTILE_KEY} size="invisible" on:callback={() => { turnstileReady = true }} />
            </div>
            <div class="flex flex-col mb-8">
                <button tabindex="0" class="mb-4 big" disabled={submitting}>
                    {#if submitting}
                        <Loader class="icon text-2xl animate-spin" />
                    {:else}
                        {m.odd_antsy_cobra_find()}
                    {/if}
                </button>
                <a href="/" class="button secondary" tabindex="0">
                    <ChevronLeft class="icon" /> {m.heavy_dizzy_yak_walk()}
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