<script lang="ts">
import MinusIcon from "~icons/tabler/minus";
import PlusIcon from "~icons/tabler/plus";
import XIcon from "~icons/tabler/x";
import QuestionIcon from "~icons/tabler/question-mark";
import CheckIcon from "~icons/tabler/check";
import { RsvpResponseType } from "$lib/rsvp";

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

const { location, deadline }: { location: string, deadline: Date } = $props();

let response: RsvpResponseType | undefined = $state()
let coming = $derived(response !== RsvpResponseType.No && response !== undefined)
let guests = $state(1);

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

<form class="box">
    <h1>{location}</h1>
    <p>Will you be able to join us?</p>
    <div class="notice small"><span class="font-semibold">Note that</span> you will be able to change your reply by <time class="italic">{deadline.toDateString()}</time>. But if none will be provided by then, your response will be automatically set to no. If you give us <a href="#contact-details">your contact details</a>, we'll send you reminders.</div>
    <div class="flex justify-around gap-2">
        <label class="button red wide grow">
            <input bind:group={response} type="radio" name="response" value={RsvpResponseType.No} required />
            <XIcon class="icon" /><br />
            Can't come
        </label>
        <label class="button amber wide grow">
            <input bind:group={response} type="radio" name="response" value={RsvpResponseType.Maybe} />
            <QuestionIcon class="icon" /><br />
            Maybe will
        </label>
        <label class="button green wide grow">
            <input bind:group={response} type="radio" name="response" value={RsvpResponseType.Yes} />
            <CheckIcon class="icon" /><br />
            Yes!
        </label>
    </div>
    {#if coming}
    <p>How many people are you going to be?</p>
    <div class="selection">
        <button class="secondary" onclick={removeGuest} disabled={guests === MIN_GUESTS}><MinusIcon class="icon w-7 h-7" /></button>
        <span class="text-4xl">{guests}</span>
        <button class="secondary" onclick={addGuest} disabled={guests == MAX_GUESTS}><PlusIcon class="icon w-7 h-7" /></button>
    </div>
    {/if}
    {#if guests == MAX_GUESTS}<div class="notice warning small">If you are going to be more than {guests}, please reach out to us.</div>{/if}
    <input type="hidden" name="guests" bind:value={guests} />
    <button type="submit" class="wide">Submit response</button>
    <hr />
	<a href="/romania-travel-information" class="button secondary wide">Travel Information</a>
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