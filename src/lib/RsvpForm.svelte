<script lang="ts">
import MinusIcon from "~icons/tabler/minus";
import PlusIcon from "~icons/tabler/plus";
import XIcon from "~icons/tabler/x";
import QuestionIcon from "~icons/tabler/question-mark";
import CheckIcon from "~icons/tabler/check";
import SadIcon from "~icons/tabler/mood-sad";
import { ResponseType, type ResponseGetPayload } from "@prisma/client";

type ResponseWithPeople = ResponseGetPayload<{
    include: {
        persons: true;
    }
}>;

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

const { location, deadline, response }: { location: string, deadline: Date, response: ResponseWithPeople } = $props();

let editing = $state(false);

let givenResponse: ResponseType = $state(response.givenResponse)
let coming = $derived(givenResponse !== ResponseType.Declined && givenResponse !== ResponseType.NoResponse)
let guests = $state(response.persons.length);

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
    {#if (response.givenResponse === ResponseType.NoResponse || editing) && deadline > new Date()}
        <p>Will you be able to join us?</p>
        <div class="notice small"><span class="font-semibold">Note that</span> you will be able to change your reply by <time class="italic">{deadline.toDateString()}</time>. But if none will be provided by then, your response will be automatically set to no. If you give us <a href="#contact-details">your contact details</a>, we'll send you reminders.</div>
        <div class="flex justify-around gap-2">
            <label class="button red wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Declined} required />
                <XIcon class="icon" /><br />
                Can't come
            </label>
            <label class="button amber wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Tentative} />
                <QuestionIcon class="icon" /><br />
                Maybe will
            </label>
            <label class="button green wide grow">
                <input bind:group={givenResponse} type="radio" name="response" value={ResponseType.Accepted} />
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
    {:else}
        <div class="text-center text-lg">
            <p>
                {#if response.givenResponse === ResponseType.Accepted}
                <CheckIcon class="icon w-8 h-8 border-2 border-black rounded-full" />
                {:else if response.givenResponse === ResponseType.Tentative}
                <QuestionIcon class="icon w-8 h-8 border-2 border-black rounded-full" />
                {:else}
                <SadIcon class="icon w-8 h-8" />
                {/if}
            </p>
            <p class="font-medium">
                {#if response.givenResponse === ResponseType.Accepted}
                Thank you for your response! We're looking forward to seeing you!
                {:else if response.givenResponse === ResponseType.Tentative}
                Thank you for your response! We hope you can make it!
                {:else if response.givenResponse === ResponseType.Declined}
                Thank you for letting us know! We're sorry you can't make it.
                {:else}
                We're sorry you can't make it!
                {/if}
            </p>
            <p>
                {#if response.givenResponse === ResponseType.Accepted || response.givenResponse === ResponseType.Tentative}
                You have confirmed {#if response.givenResponse === ResponseType.Tentative}tentative{/if} attendance for <span class="font-semibold text-2xl">{response.persons.length}</span> {response.persons.length > 1 ? "guests" : "guest"}.
                {:else if response.givenResponse === ResponseType.Declined}
                You have confirmed that you won't be able to join us.
                {:else}
                Sadly, we have never heard from you. We are assuming you won't be able to join us.
                {/if}
            </p>
        </div>
        {#if deadline > new Date()}
        <div class="notice small" class:warning={response.givenResponse === ResponseType.Tentative}>
            {#if response.givenResponse === ResponseType.Tentative}
            Please make sure to confirm your attendance by <time class="italic">{deadline.toDateString()}</time>. If you setup your contact details, we'll send you reminders.
            {:else}
            You still have time to change your response until <time class="italic">{deadline.toDateString()}</time>.
            {/if}
        </div>
        <button class="secondary wide" onclick={e => { e.preventDefault(); editing = true }}>Change your response</button>
        {:else}
        <div class="notice warning small">The deadline for changing your response has passed. If you need to make any changes, please reach out to us.</div>
        {/if}
    {/if}
    <hr />
	<a href={`/${response.location.toLowerCase()}/travel-information`} class="button secondary wide">Travel Information</a>
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