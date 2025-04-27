<script lang="ts">
import { getLocale } from "$lib/paraglide/runtime";
import type { PageData } from "./$types";

const lang = getLocale();
const { data }: { data: PageData } = $props();
const bankDetails = data.bankDetails;
</script>

{#if lang === "en"}
<h1>Gifts information</h1>
<div class="p-4 -mx-4 bg-white">
    <p>Your presence at our wedding is truly the greatest gift we could ask for! 💛</p>
    <p>If you’d like to give something, here are a few things to keep in mind:</p>

    <ul class="ml-4">
        <li>🏡 <strong>A Home of Our Own</strong> – Our next big adventure after the wedding is saving up for a place to call our own! If you’d like to contribute towards our future home, we would be incredibly grateful.</li>
        <li>📦 <strong>Living Light</strong> – We currently live in a small flat, so we truly appreciate gifts that are mindful of space. Experiences, digital gifts (like vouchers), or contributions towards our future are always welcome!</li>
        <li>🌍 <strong>International Travel & Customs</strong> – Since we’re travelling for the wedding and live in the UK, bringing back physical gifts can be tricky due to taxes and shipping costs. If you’d like to give something tangible, sending it directly to our home would be the best option.</li>
        <li>💳 <strong>Monetary Gifts</strong> – If you plan on a monetary gift, we will appreciate electronic transfers, as it makes things much easier for us while travelling. Here are our details:<br>
            Please use <em>"Wedding Gift"</em> as reference in your transfer!
            <ul class="ml-4">
                <li>
                    <strong>🇬🇧 Sterling Pound</strong><br>
                    Beneficiary: <em>{bankDetails.gbpBeneficiary}</em><br>
                    Bank name: <em>{bankDetails.gbpBankName}</em><br>
                    Sort code: <tt>{bankDetails.gbpSortCode}</tt><br>
                    Account number: <tt>{bankDetails.gbpAccountNumber}</tt><br>
                </li>
                <li>
                    <strong>🇪🇺 Euro</strong><br>
                    Beneficiary: <em>{bankDetails.eurBeneficiary}</em><br>
                    Bank name: <em>{bankDetails.eurBankName}</em><br>
                    IBAN: <tt>{bankDetails.eurIban}</tt><br>
                </li>
                <li>
                    For <strong>🇷🇴 Romanian Leu</strong> and <strong>🇪🇺 Euro</strong>, you can also use Revolut:<br>
                    &bullet; Luca's Revtag <tt>{bankDetails.lucaRevtag}</tt><br>
                    &bullet; Sarah's Revtag <tt>{bankDetails.sarahRevtag}</tt>
                </li>
            </ul>
        </li>
    </ul>
    <p>That said, whatever you choose—whether a gift, a kind word, or simply your presence — we will be truly grateful. We can’t wait to celebrate with you! ❤️</p>
</div>
{:else if lang === "it"}
<h1>Informazioni sui regali</h1>
<div class="p-4 -mx-4 bg-white">
    <p>La vostra presenza al nostro matrimonio è davvero il dono più grande che potessimo desiderare! 💛</p>
    <p>Se desiderate fare un regalo, ecco alcuni aspetti da tenere a mente:</p>

    <ul class="ml-4">
        <li>🏡 <strong>Una Casa tutta Nostra</strong> – La nostra prossima grande avventura dopo il matrimonio è risparmiare per avere un posto da chiamare casa! Se volete contribuire al nostro futuro nido, ve ne saremmo immensamente grati.</li>
        <li>📦 <strong>Vivere Leggeri</strong> – Attualmente viviamo in un piccolo appartamento, perciò apprezziamo regali che tengano conto dello spazio. Esperienze, regali digitali (come buoni regalo) o contributi per il nostro futuro sono sempre ben accetti!</li>
        <li>🌍 <strong>Viaggi Internazionali & Dogane</strong> – Dal momento che viaggiamo per il matrimonio e viviamo nel Regno Unito, riportare regali fisici può risultare complicato a causa di tasse e costi di spedizione. Se desiderate fare un regalo tangibile, l’invio diretto a casa nostra è la soluzione migliore.</li>
        <li>💳 <strong>Regali in Denaro</strong> – Se preferite un contributo in denaro, apprezzeremmo molto i bonifici elettronici, che semplificano le cose durante i nostri viaggi. Ecco i nostri dati:<br>
            Vi preghiamo di utilizzare la dicitura <em>"Wedding Gift"</em> come causale nel bonifico!
            <ul class="ml-4">
                <li>
                    <strong>🇬🇧 Sterlina Inglese</strong><br>
                    Beneficiari: <em>{bankDetails.gbpBeneficiary}</em><br>
                    Nome della banca: <em>{bankDetails.gbpBankName}</em><br>
                    Sort code: <tt>{bankDetails.gbpSortCode}</tt><br>
                    Numero di conto: <tt>{bankDetails.gbpAccountNumber}</tt><br>
                </li>
                <li>
                    <strong>🇪🇺 Euro</strong><br>
                    Beneficiario: <em>{bankDetails.eurBeneficiary}</em><br>
                    Nome della banca: <em>{bankDetails.eurBankName}</em><br>
                    IBAN: <tt>{bankDetails.eurIban}</tt><br>
                </li>
                <li>
                    Per <strong>🇷🇴 Leu Rumeno</strong> e <strong>🇪🇺 Euro</strong> potete anche utilizzare Revolut:<br>
                    &bullet; Revtag di Luca <tt>{bankDetails.lucaRevtag}</tt><br>
                    &bullet; Revtag di Sarah <tt>{bankDetails.sarahRevtag}</tt>
                </li>
            </ul>
        </li>
    </ul>
    <p>Detto ciò, qualunque cosa scegliate — che si tratti di un regalo, di una parola gentile o semplicemente della vostra presenza — ne saremo davvero grati. Grazie di cuore! Non vediamo l'ora di festeggiare insieme a voi! ❤️</p>
</div>
{/if}

<style>
ul li {
	@apply mb-2;
}

strong {
	@apply font-semibold
}
</style>