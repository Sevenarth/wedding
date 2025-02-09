<script lang="ts">
import domnita_balasa_outline from "$lib/assets/domnita_balasa_outline.png";
import wow_hambar_outline from "$lib/assets/wowhambar_outline.png";
import paolotti_outline from "$lib/assets/paolotti_outline.png";
import castello_monaci_outline from "$lib/assets/castello_monaci_outline.png";

let { italy = false, romania = false } = $props();
</script>

{#if romania}
<p>31st May 2025 &bullet; Romania</p>
<ol>
    <li>
        <time>13.00</time>
        <p class="font-semibold">Orthodox Wedding</p>
        <p>Domnița Bălașa Church</p>
        <p>Strada Sfinții Apostoli 60, Bucharest</p>
        <a href="https://maps.app.goo.gl/2X14PMoBVRF213xi6" target="_blank">Google Maps</a>
        <img src={domnita_balasa_outline} alt="Church Outline" />
    </li>
    <li>Guests are expected to take a break until the reception.</li>
    <li>
        <time>17.00</time>
        <p class="font-semibold">Wedding Reception</p>
        <p>WOW Hambar</p>
        <p>Strada Haltei, Domnești</p>
        <a href="https://maps.app.goo.gl/eRAS6TnNHNdoNRb97" target="_blank">Google Maps</a>
        <img src={wow_hambar_outline} alt="WOW Hambar Outline" />
    </li>
    <li>We expect the reception will start dying down from 3am.</li>
</ol>
{/if}

{#if italy}
<p>6th June 2025 &bullet; Italy</p>
<ol>
    <li>
        <time>17.00</time>
        <p class="font-semibold">Wedding Blessing Catholic Mass</p>
        <p>Chiesa di San Francesco di Paola</p>
        <p>Via XXV Luglio, Grottaglie</p>
        <a href="https://maps.app.goo.gl/AFELJNB2k3rUs4ca9" target="_blank">Google Maps</a>
        <img src={paolotti_outline} alt="Church Outline" />
    </li>
    <li>Guests are expected to travel towards the wedding reception. They will be received with a welcome drink while the newlyweds arrive.</li>
    <li>
        <time>19.00</time>
        <p class="font-semibold">Wedding Reception</p>
        <p>Castello Monaci</p>
        <p>Contrada Monaci, Salice Salentino</p>
        <a href="https://maps.app.goo.gl/hRpr1aAoCsXFxmUS6" target="_blank">Google Maps</a>
        <img src={castello_monaci_outline} alt="Castello Monaci Outline" />
    </li>
    <li>We expect the reception to end from 1am onwards, with the curfew at 2am.</li>
</ol>
{/if}

<style>
ol {
    @apply relative border-s border-green-900 border-s-2;
    @apply ml-2 lg:ml-6 pl-4 pt-2 pb-1;
}

li:before {
    content: "";
    @apply bg-white border-2 border-green-900 w-3 h-3 rounded-full;
    @apply block absolute;
    @apply -ml-[1.425em] mt-[0.4em];
}

li {
    @apply relative mb-4;
}

li img {
    @apply absolute top-0 right-0 h-full opacity-20;
}

p {
    @apply m-0;
}

a {
    @apply underline;
}
</style>