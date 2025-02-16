<script lang="ts">
import * as m from "$paraglide/messages";
import domnita_balasa_outline from "$lib/assets/domnita_balasa_outline.png";
import wow_hambar_outline from "$lib/assets/wowhambar_outline.png";
import paolotti_outline from "$lib/assets/paolotti_outline.png";
import castello_monaci_outline from "$lib/assets/castello_monaci_outline.png";

let { italy = false, romania = false } = $props();
</script>

{#if romania}
<p>{m.loved_minor_nils_cherish()}</p>
<ol>
    <li>
        <time datetime="2025-05-31T13:00:00+03:00">13.00</time>
        <p class="font-semibold">{m.super_tired_tapir_relish()}</p>
        <p>{m.deft_pink_gibbon_earn()}</p>
        <p>{m.plane_mealy_goat_mix()}</p>
        <a href="https://maps.app.goo.gl/2X14PMoBVRF213xi6" target="_blank">Google Maps</a>
        <img src={domnita_balasa_outline} alt="Church Outline" />
    </li>
    <li>{m.aloof_free_snake_loop()}</li>
    <li>
        <time datetime="2025-05-31T17:00:00+03:00">17.00</time>
        <p class="font-semibold">{m.acidic_such_camel_bend()}</p>
        <p>WOW Hambar</p>
        <p>Strada Haltei, Domnești</p>
        <a href="https://maps.app.goo.gl/eRAS6TnNHNdoNRb97" target="_blank">Google Maps</a>
        <img src={wow_hambar_outline} alt="WOW Hambar Outline" />
    </li>
    <li>{m.merry_legal_mole_urge()}</li>
</ol>
{/if}

{#if italy}
<p>{m.icy_best_mink_pause()}</p>
<ol>
    <li>
        <time datetime="2025-06-06T17:00:00+02:00">17.00</time>
        <p class="font-semibold">{m.short_due_elk_vent()}</p>
        <p>{m.day_royal_lizard_file()}</p>
        <p>Via XXV Luglio, Grottaglie</p>
        <a href="https://maps.app.goo.gl/AFELJNB2k3rUs4ca9" target="_blank">Google Maps</a>
        <img src={paolotti_outline} alt="Church Outline" />
    </li>
    <li>{m.such_away_whale_belong()}</li>
    <li>
        <time datetime="2025-06-06T19:00:00+02:00">19.00</time>
        <p class="font-semibold">{m.acidic_such_camel_bend()}</p>
        <p>Castello Monaci</p>
        <p>Contrada Monaci, Salice Salentino</p>
        <a href="https://maps.app.goo.gl/hRpr1aAoCsXFxmUS6" target="_blank">Google Maps</a>
        <img src={castello_monaci_outline} alt="Castello Monaci Outline" />
    </li>
    <li>{m.safe_livid_flea_yell()}</li>
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