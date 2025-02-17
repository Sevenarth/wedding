<script lang="ts">
import * as m from "$paraglide/messages";
import { env } from "$env/dynamic/public";
import ContactsForm from "$lib/ContactsForm.svelte";
import RsvpForm from "$lib/RsvpForm.svelte";
import Timeline from "$lib/Timeline.svelte";
import type { ActionData, PageData } from "./$types";
import { Location } from "@prisma/client";

let { data, form }: { data: PageData, form: ActionData } = $props();

const { user: {name, invite}, responses } = data;
const romania = $derived(form?.response?.location === Location.Romania ? form.response : responses.find(r => r.location === "Romania"))
const italy = $derived(form?.response?.location === Location.Italy ? form.response : responses.find(r => r.location === "Italy"))
const romaniaError = $derived(form?.location === Location.Romania ? form?.error : null)
const italyError = $derived(form?.location === Location.Italy ? form?.error : null)
</script>

<h1>{m.aware_mean_otter_prosper()} {name},</h1>
<p>{m.noble_bald_gopher_advise()}</p>
<div class="split">
	<main>
		{#if romania}
		<RsvpForm response={romania} location={Location.Romania} deadline={new Date(env.PUBLIC_ROMANIA_DEADLINE)} error={romaniaError} />
		{/if}
		{#if italy}
		<RsvpForm response={italy} location={Location.Italy} deadline={new Date(env.PUBLIC_ITALY_DEADLINE)} error={italyError} />
		{/if}
		<ContactsForm invite={form?.invite ?? invite} updated={!!form?.invite} />
	</main>
	<aside>
		<h2>{m.due_early_mammoth_mend()}</h2>
		<Timeline italy={!!italy} romania={!!romania} />
	</aside>
</div>

<style>
div.split {
	@apply md:flex gap-4;
}

div.split main {
	@apply basis-2/3;
}

div.split aside {
	@apply basis-1/3;
}
</style>