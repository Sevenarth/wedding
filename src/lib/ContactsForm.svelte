
<script lang="ts">
</script>

<form class="box" id="contact-details">
    <div class="notice small">It is not mandatory to give us your contact details. But if you do, you'll receive updates if any. Your details won't be shared with anyone, only Luca will have access to these.</div>
    <label for="email">Email address</label>
    <input id="email" type="email" placeholder="e.g. me@example.com" />
    <label for="phone">Phone number</label>
    <input id="phone" type="tel" placeholder="e.g. 07999123456" />
    <div class="notice small">If your phone number is not British, please add an international prefix.</div>
    <button class="wide secondary">Update your contact details</button>
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