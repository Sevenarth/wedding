<script lang="ts">
import { PUBLIC_ROMANIA_DEADLINE, PUBLIC_ITALY_DEADLINE } from "$env/static/public";
import ContactsForm from "$lib/ContactsForm.svelte";
import RsvpForm from "$lib/RsvpForm.svelte";
import Timeline from "$lib/Timeline.svelte";
import type { ActionData, PageData } from "./$types";

let { data, form }: { data: PageData, form: ActionData } = $props();

const { user: {name, invite}, responses } = data;
const romania = responses.find(r => r.location === "Romania");
const italy = responses.find(r => r.location === "Italy");
</script>

<h1>Hello {name},</h1>
<p>Welcome to your reserved area! Please find the wedding timeline, information and the form to RSVP.</p>
<div class="split">
	<main>
		{#if romania}
		<RsvpForm response={romania} location="Bucharest, Romania" deadline={new Date(PUBLIC_ROMANIA_DEADLINE)} />
		{/if}
		{#if italy}
		<RsvpForm response={italy} location="Puglia, Italy" deadline={new Date(PUBLIC_ITALY_DEADLINE)} />
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