<script lang="ts">
import ContactsForm from "$lib/ContactsForm.svelte";
import RsvpForm from "$lib/RsvpForm.svelte";
import Timeline from "$lib/Timeline.svelte";
import type { PageData } from "./$types";

let { data }: { data: PageData } = $props();
</script>

<h1>Hello {data.user},</h1>
<p>Welcome to your reserved area! Please find the wedding timeline, information and the form to RSVP.</p>
<div class="split">
	<main>
		<RsvpForm location="Bucharest, Romania" deadline={new Date(2025, 4, 1)} />
		<RsvpForm location="Puglia, Italy" deadline={new Date(2025, 4, 15)} />
		<ContactsForm />
	</main>
	<aside>
		<h2>Timeline</h2>
		<Timeline italy romania />
	</aside>
</div>

<style>
div.split {
	@apply md:flex gap-4;
}

div.split main {
	@apply grow;
}

div.split aside {
	/* @apply md:w-1/3; */
}
</style>