<script lang="ts">
import { PUBLIC_ROMANIA_DEADLINE, PUBLIC_ITALY_DEADLINE } from "$env/static/public";
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

<h1>Hello {name},</h1>
<p>Welcome to your reserved area! Please find the wedding timeline, information and the form to RSVP.</p>
<div class="split">
	<main>
		{#if romania}
		<RsvpForm response={romania} location={Location.Romania} deadline={new Date(PUBLIC_ROMANIA_DEADLINE)} error={romaniaError} />
		{/if}
		{#if italy}
		<RsvpForm response={italy} location={Location.Italy} deadline={new Date(PUBLIC_ITALY_DEADLINE)} error={italyError} />
		{/if}
		<ContactsForm invite={form?.invite ?? invite} updated={!!form?.invite} />
	</main>
	<aside>
		<h2>Timeline</h2>
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