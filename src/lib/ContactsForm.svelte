<script lang="ts">
import * as m from "$lib/paraglide/messages";
import Loader from "~icons/tabler/loader-2";
import type { Invite } from "@prisma/client";
import { localPhoneNumber } from "$lib/utils";
import { enhance } from "$app/forms";
import { getLocale } from "$lib/paraglide/runtime";

const { invite, updated }: { invite: Invite, updated: boolean } = $props();
const lang = getLocale();
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
        <div class="notice small success">{m.alert_stale_snake_list()}</div>
    {/if}
    <div class="notice small">{m.major_east_niklas_gulp()}</div>
    <label for="email">{m.funny_inner_wallaby_assure()}</label>
    <input id="email" type="email" name="emailAddress" placeholder={m.hour_salty_jay_expand()} autocomplete="email" bind:value={email}  />
    <label for="phone">{m.sea_brave_yak_dazzle()}</label>
    <input id="phone" type="tel" name="phoneNumber" placeholder={m.stout_day_duck_fall()} autocomplete="tel" bind:value={phone} />
    <div class="notice small">{m.knotty_white_macaw_approve()}</div>
    <button class="wide secondary" disabled={submitting}>
        {#if submitting}
            <Loader class="icon text-2xl animate-spin" />
        {:else}
            {m.fun_mean_frog_cuddle()}
        {/if}
    </button>
    {#if lang === "en" || lang === "it"}
    <hr>
    <a class="button wide secondary" href="/gifts">{m.only_aware_husky_propel()}</a>
    {/if}
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