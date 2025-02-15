<script lang="ts">
import Loader from "~icons/tabler/loader-2";
import type { Invite } from "@prisma/client";
import { localPhoneNumber } from "$lib/utils";
import { enhance } from "$app/forms";

const { invite, updated }: { invite: Invite, updated: boolean } = $props();
let email = $state(invite.emailAddress);
let phone = $state(localPhoneNumber(invite.phoneNumber));
let submitting = $state(false);
</script>

<form class="box" id="contact-details" action="?/contacts" method="post" use:enhance={() => {
    submitting = true;
    return async ({ update }) => {
        submitting = false;
        update({ reset: false });
    };
  }}>
    {#if updated && !submitting}
        <div class="notice small success">Your contact details have been updated!</div>
    {/if}
    <div class="notice small">It is not mandatory to give us your contact details. But if you do, you'll receive updates if any. Your details won't be shared with anyone, only Luca will have access to these.</div>
    <label for="email">Email address</label>
    <input id="email" type="email" name="emailAddress" placeholder="e.g. me@example.com" autocomplete="email" bind:value={email}  />
    <label for="phone">Phone number</label>
    <input id="phone" type="tel" name="phoneNumber" placeholder="e.g. 07999123456" autocomplete="tel" bind:value={phone} />
    <div class="notice small">If your phone number is not British, please add an international prefix.</div>
    <button class="wide secondary" disabled={submitting}>
        {#if submitting}
            <Loader class="icon text-2xl animate-spin" />
        {:else}
            Update your contact details
        {/if}
    </button>
</form>

<style>
.box {
    @apply bg-white;
    @apply p-4 my-4 -mx-4 md:mx-0;
    @apply flex flex-col;
}
.box > * {
    @apply mb-2;
}

.box > *:last-child {
    @apply mb-0;
}
</style>