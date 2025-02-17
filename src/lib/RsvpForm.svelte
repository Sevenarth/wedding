<script lang="ts">
import * as m from "$paraglide/messages";
import Loader from "~icons/tabler/loader-2";
import MinusIcon from "~icons/tabler/minus";
import PlusIcon from "~icons/tabler/plus";
import XIcon from "~icons/tabler/x";
import QuestionIcon from "~icons/tabler/question-mark";
import CheckIcon from "~icons/tabler/check";
import SadIcon from "~icons/tabler/mood-sad";
import { ResponseType, Location, type ResponseGetPayload } from "@prisma/client";
	import { enhance } from "$app/forms";

type ResponseWithPeople = ResponseGetPayload<{
    include: {
        persons: true;
    }
}>;

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

const { location, deadline, response, error = null }: { location: Location, deadline: Date, response: ResponseWithPeople, error: string | null } = $props();

let editing = $state(false);

let givenResponse: ResponseType = $state(response.givenResponse)
let coming = $derived(givenResponse !== ResponseType.Declined && givenResponse !== ResponseType.NoResponse)
let guests = $state(response.persons.length);
let submitting = $state(false);

type ButtonEvent = Event & { currentTarget: EventTarget & HTMLButtonElement };

const removeGuest = (e: ButtonEvent) => {
    e.preventDefault()
    e.currentTarget?.blur()
    if(guests > MIN_GUESTS) {
        --guests
    }
}

const addGuest = (e: ButtonEvent) => {
    e.preventDefault()
    e.currentTarget?.blur()
    if (guests < MAX_GUESTS) {
        ++guests
    }
}
</script>

<form class="box" action="?/rsvp" method="post" use:enhance={() => {
    submitting = true;
    return async ({ update, result }) => {
        if (result.type === "success") {
            editing = false;
        }

        submitting = false;
        update({ reset: false });
    };
  }}>
    <h1>
        {#if location === Location.Italy}
        {m.solid_grassy_kudu_sing()}
        {:else if location === Location.Romania}
        {m.cool_awful_barbel_race()}
        {/if}
    </h1>
    {#if (response.givenResponse === ResponseType.NoResponse || editing) && deadline > new Date()}
        {#if error}<div class="notice error small">{m.light_patient_hamster_twirl()} ({error}), {m.silly_fun_octopus_enchant()}</div>{/if}
        <p>{m.these_frail_lynx_create()}</p>
        <div class="notice small"><span class="font-semibold">{m.formal_east_porpoise_jump()}</span> {m.safe_chunky_squid_clap()} <time class="italic">{deadline.toLocaleDateString()}</time>. {m.known_lost_bullock_vent()} <a href="#contact-details">{m.trite_tense_ape_dine()}</a>, {m.still_white_gibbon_advise()}</div>
        <div class="flex justify-around gap-2">
            <label class="button red wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Declined} required />
                <XIcon class="icon" /><br />
                {m.loose_lost_cheetah_value()}
            </label>
            <label class="button amber wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Tentative} />
                <QuestionIcon class="icon" /><br />
                {m.fun_brief_canary_belong()}
            </label>
            <label class="button green wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Accepted} />
                <CheckIcon class="icon" /><br />
                {m.noisy_game_millipede_glow()}
            </label>
        </div>
        {#if coming}
        <p>{m.mellow_muddy_mink_persist()}</p>
        <div class="selection">
            <button class="secondary" onclick={removeGuest} disabled={guests === MIN_GUESTS}><MinusIcon class="icon w-7 h-7" /></button>
            <span class="text-4xl">{guests}</span>
            <button class="secondary" onclick={addGuest} disabled={guests == MAX_GUESTS}><PlusIcon class="icon w-7 h-7" /></button>
        </div>
        {/if}
        {#if guests == MAX_GUESTS}<div class="notice warning small">{m.yummy_equal_niklas_spur()} {guests}, {m.many_helpful_moose_grace()}</div>{/if}
        <input type="hidden" name="location" value={location} />
        <input type="hidden" name="guests" bind:value={guests} />
        <button type="submit" class="wide">
            {#if submitting}
            <Loader class="icon text-2xl animate-spin" />
            {:else}
            {m.kind_civil_mantis_sprout()}
            {/if}
        </button>
    {:else}
        <div class="text-center text-lg">
            <p>
                {#if response.givenResponse === ResponseType.Accepted}
                <CheckIcon class="icon w-8 h-8 border-[3px] border-black rounded-full" />
                {:else if response.givenResponse === ResponseType.Tentative}
                <QuestionIcon class="icon w-8 h-8 border-[3px] border-black rounded-full" />
                {:else}
                <SadIcon class="icon w-10 h-10" />
                {/if}
            </p>
            <p class="font-medium">
                {#if response.givenResponse === ResponseType.Accepted}
                {m.many_level_lion_dial()}
                {:else if response.givenResponse === ResponseType.Tentative}
                {m.brave_full_squirrel_expand()}
                {:else if response.givenResponse === ResponseType.Declined}
                {m.fun_whole_loris_reside()} {m.small_lime_cockroach_accept()}
                {:else}
                {m.small_lime_cockroach_accept()}
                {/if}
            </p>
            <p>
                {#if response.givenResponse === ResponseType.Accepted || response.givenResponse === ResponseType.Tentative}
                {m.chunky_less_dachshund_flip()} {#if response.givenResponse === ResponseType.Tentative}{m.sweet_fresh_fish_dash()}{/if} {m.quiet_any_falcon_aid()} <span class="font-semibold text-2xl">{response.persons.length}</span> {response.persons.length > 1 ? m.sad_zany_bear_support() : m.cool_gaudy_bumblebee_arrive()}.
                {:else if response.givenResponse === ResponseType.Declined}
                {m.mellow_flaky_shrike_gaze()}
                {:else}
                {m.big_arable_swallow_hike()}
                {/if}
            </p>
        </div>
        {#if response.givenResponse !== ResponseType.Declined && response.givenResponse !== ResponseType.NoResponse}
        <div class="notice small">
           {m.simple_formal_flea_foster()}, <a href="#contact-details">{m.best_left_coyote_buzz()}</a>.
        </div>
        {/if}
        {#if deadline > new Date()}
        <div class="notice small" class:warning={response.givenResponse === ResponseType.Tentative}>
            {#if response.givenResponse === ResponseType.Tentative}
            {m.mushy_acidic_blackbird_treat()} <time class="italic">{deadline.toLocaleDateString()}</time>. {m.dark_yummy_spider_amuse()}
            {:else}
            {m.cool_keen_macaw_glow()} <time class="italic">{deadline.toLocaleDateString()}</time>.
            {/if}
        </div>
        <button class="secondary wide" onclick={e => { e.preventDefault(); editing = true }}>{m.small_key_gull_breathe()}</button>
        {:else}
        <div class="notice warning small">{m.basic_pink_ladybug_honor()}</div>
        {/if}
    {/if}
    <hr />
	<a href={`/${response.location.toLowerCase()}/travel-information`} class="button secondary wide">{m.alive_loose_deer_fear()}</a>
</form>

<style>
.box {
    @apply bg-white;
    @apply p-4 mb-4 mt-14 -mx-4 md:mx-0;
    @apply border-t-2 border-flesh-300;
}
.box > * {
    @apply mb-2;
}

.box > *:last-child {
    @apply mb-0;
}

.box .selection {
    @apply flex justify-center gap-4 my-4;
}

.box h1 {
    @apply flex justify-between;
    @apply text-4xl;
    @apply -mx-4 -mt-14 mb-3;
    @apply px-4;
}
</style>