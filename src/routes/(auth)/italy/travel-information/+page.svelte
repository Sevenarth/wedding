<script lang="ts">
import { getLocale } from "$lib/paraglide/runtime";
const defaultLang = getLocale() as string;
let lang = $state(defaultLang);
</script>

<select class="float-right" onchange={(event) => lang = event.currentTarget?.value}>
    <option value="en" selected={defaultLang === "en"}>English</option>
    <option value="it" selected={defaultLang === "it"}>Italiano</option>
    <option value="ro" selected={defaultLang === "ro"}>Română</option>
</select>

{#if lang === 'it'}
<h1>Informazioni di Viaggio</h1>

<div class="bg-white p-4 -mx-4">

<h2>Servizio Navetta</h2>

<p>Stiamo valutando di offrire un servizio navetta da Grottaglie a Castello Monaci e ritorno, ma abbiamo bisogno di raccogliere adesioni in anticipo. Se siete interessati, vi preghiamo di contattarci.</p>

<h2>Alloggio a Castello Monaci</h2>

<p>Per chi preferisce non rientrare dopo il matrimonio, Castello Monaci offre alloggi in loco per la notte. Tuttavia, i posti sono limitati e i prezzi sono più elevati. Se siete interessati, vi consigliamo di prenotare il prima possibile.</p>

</div>

{:else if lang === 'ro'}
<h1>Informații de Călătorie în Puglia</h1>

<div class="notice mb-4">
    <strong>Declinare de responsabilitate:</strong> Conținutul acestui ghid a fost creat cu ajutorul ChatGPT, iar traducerea realizată de ChatGPT poate să nu fie 100% exactă.
</div>

<div class="bg-white p-4 -mx-4">
    <h2>Detalii despre Nuntă</h2>

    <h3>Serviciu de transfer</h3>
    <p>
        Ne gândim să oferim un serviciu de transfer de la Grottaglie la Castello Monaci și înapoi, însă trebuie să colectăm numerele în avans. 
        Dacă sunteți interesat, vă rugăm să <em>ne contactați</em>.
    </p>

    <h3>Cod vestimentar</h3>
    <p>
        Nunta va fi <em>formală</em>. Luați în considerare țesăturile ușoare, deoarece clima în Puglia începe de obicei să se încălzească la începutul lunii iunie, 
        deși ploile sunt puțin probabile, dar pot apărea.
    </p>

    <h2>Ai nevoie de ajutor?</h2>
    <p>
        Noi suntem aici să vă ajutăm cu planurile de călătorie! Dacă aveți nevoie de asistență în organizarea transportului, cazării sau aveți orice alte întrebări, 
        nu ezitați să <em>ne contactați</em>. Dorim să facem călătoria voastră cât mai lină și plăcută posibil.
    </p>

    <h2>Ghid rapid pentru oaspeții noștri călători</h2>

    <h3>Aeroporturi & Transport</h3>
    <p>Cele mai apropiate aeroporturi de Grottaglie sunt:</p>
    <ul>
        <li>
            <strong>Aeroportul Brindisi (BDS)</strong> – Aproximativ 35 de minute distanță. Brindisi este în principal un aeroport turistic, ceea ce înseamnă că este mai mic 
            și are mai puține facilități în comparație cu Bari.
        </li>
        <li>
            <strong>Aeroportul Bari (BRI)</strong> – Aproximativ 1 oră și 20 de minute distanță. Bari este principalul aeroport internațional din regiune, oferind o gamă mai largă de servicii 
            și conexiuni de zbor. Este de asemenea conectat direct prin tren, ceea ce îl face o opțiune convenabilă pentru cei care preferă transportul public.
        </li>
    </ul>

    <h3>Sosirea în Grottaglie</h3>
    <ul>
        <li>
            <strong>Cu mașina</strong> – Cea mai convenabilă modalitate de a călători în Puglia. Recomandăm serviciile <u>Locauto</u> (Enterprise/Alamo/National) și <u>Sixt</u> pentru închirieri la aeroporturi. 
            Fiți atenți la clauzele mici din asigurarea de închiriere a mașinii – unele polițe exclud accidentele, furtul și pierderea în Puglia și Campania. Cel mai bine este să optați 
            pentru asigurarea de bază oferită de compania de închirieri și să o completați cu asigurare pentru excedentul de auto de la un furnizor din țara dumneavoastră (de exemplu, Eversure pentru rezidenții britanici).
        </li>
        <li>
            <strong>Cu autocarul</strong> – Pentru servicii directe de autocar către Grottaglie, vizitați <u>COTRAP</u> pentru orare și rute.
        </li>
        <li>
            <strong>Cu trenul</strong> – Grottaglie are o gară, însă serviciile de tren sunt lente și adesea necesită mai multe schimburi, în special de la aeroporturi.
        </li>
        <li>
            <strong>Transferuri private</strong> – Dacă aveți nevoie de asistență pentru organizarea unui transfer privat, vă rugăm să <em>ne contactați</em>.
        </li>
    </ul>

    <h2>Unde să te cazezi</h2>

    <h3>Cazare la Castello Monaci</h3>
    <p>
        Pentru oaspeții care preferă să nu se deplaseze înapoi după nuntă, Castello Monaci oferă cazare la fața locului pentru noapte. Totuși, disponibilitatea este limitată 
        și prețurile sunt pe partea superioară. Dacă sunteți interesat să stați aici, vă recomandăm să faceți o rezervare cât mai curând posibil.
    </p>

    <h3>Cazare în Grottaglie</h3>
    <p>
        Noi personal recomandăm să stați în <em>centrul vechi</em> al orașului Grottaglie, care este <em>pitoresc</em> și plin de farmec. Există multe B&B-uri deosebite la prețuri avantajoase, 
        oferind o experiență autentică. Orașul este cunoscut pentru <u>Cartierul Ceramicii</u> (Quartiere delle Ceramiche), un centru al atelierelor artizanale ce expun tradiții de olărit 
        care datează de secole. Spre deosebire de unele orașe mai liniștite din apropiere, centrul vechi al Grottaglie este <em>vibrant</em>, cu restaurante excelente și baruri care rămân deschise până târziu.
    </p>
    <p>
        Recomandăm cu insistență rezervarea din timp. Puteți găsi opțiuni excelente pe <u>Booking.com</u> și alte platforme de călătorii.
    </p>

    <h2>Locuri de vizitat în Puglia & Matera</h2>
    <p>
        Dacă aveți timp suplimentar în timpul călătoriei, vă recomandăm cu insistență să explorați unele dintre cele mai uimitoare locații din Puglia:
    </p>
    <ul>
        <li>
            <strong>Alberobello & Valea Itria</strong> – Acasă la casele trulli, incluse în patrimoniul <u>UNESCO</u>, cu un peisaj rural pitoresc și orașe fermecătoare precum Locorotondo și Cisternino.
        </li>
        <li>
            <strong>Matera</strong> – Chiar la marginea Pugliei, locuințele antice în peșteri din Matera (<u>Sassi di Matera</u>) sunt un sit al Patrimoniului Mondial <u>UNESCO</u>, 
            recunoscute pentru istoria lor extraordinară și semnificația arhitecturală. Casele unice, sculptate în calcar, au fost locuite continuu de mii de ani.
        </li>
        <li>
            <strong>Ostuni</strong> – <em>"Orașul Alb"</em>, cunoscut pentru centrul vechi zugrăvit în alb și pentru priveliștile panoramice uimitoare.
        </li>
        <li>
            <strong>Polignano a Mare</strong> – Celebru pentru stâncile dramatice și apele turcoaz, un loc ce trebuie vizitat de fotografi și iubitori de fructe de mare. 
            Acest oraș fermecător este, de asemenea, locul de naștere al lui <u>Domenico Modugno</u>, legendarul cântăreț italian care a compus piesa clasică 
            <em>"Volare (Nel blu dipinto di blu)"</em>.
        </li>
        <li>
            <strong>Lecce</strong> – <em>"Florencia Sudului"</em>, renumită pentru arhitectura barocă ornamentată și pentru piețele animate.
        </li>
        <li>
            <strong>Centrul istoric al Taranto</strong> – Un amestec de istorie și cultură, care include <u>Castelul Aragonez</u>, <u>Muzeul Arheologic Național</u> și celebrele midii tarantine (cozze tarantine) din Taranto.
        </li>
    </ul>

    <h2>Mâncare și Tradiții Culinare</h2>
    <p>
        Puglia este renumită pentru bogata sa moștenire culinară, ce pune în valoare ingrediente proaspete, de înaltă calitate și metode tradiționale de gătit:
    </p>
    <ul>
        <li>
            <strong>Ulei de măsline</strong> – Puglia produce unele dintre cele mai bune uleiuri de măsline extra virgin din Italia, un element de bază al bucătăriei locale.
        </li>
        <li>
            <strong>Brânzeturi</strong> – Încercați <em>mozzarella fior di latte</em> (disponibilă în mai multe forme și dimensiuni), <em>burrata</em>, <em>stracciatella</em> 
            și <em>caciocavallo</em>, care sunt folosite pe scară largă în preparatele regionale. Alte brânzeturi includ: <em>giuncata</em>, <em>scamorza</em>, <em>ricotta</em> 
            și <em>ricotta forte</em> (pentru cei curajoși, un unguent de brânză foarte puternic și picant).
        </li>
        <li>
            <strong>Fructe de mare & Pește</strong> – Zonele de coastă, în special Taranto, sunt celebre pentru midiile (cozze tarantine), adesea servite crude cu lămâie 
            sau într-un preparat clasic de midi cu piper (impepata di cozze).
        </li>
        <li>
            <strong>Carnuri</strong> – Mai întâlnite în zonele interioare, carnea de miel, vită și porc este adesea gătită la grătar, la cuptor sau înăbușită lent. 
            Încercați <em>bombette</em> (rulouri de carne umplute) și <em>zampina</em> (cârnați condimentați).
        </li>
        <li>
            <strong>Paste & Pâine</strong> – Preparatele de referință includ <em>orecchiette cu frunze de napi</em> (cime di rapa) și <em>friselle</em> (pâine crocantă cu roșii și ulei de măsline).
        </li>
    </ul>
    <p>
        Orașele din interior se concentrează mai mult pe preparate din carne, în timp ce zonele de coastă oferă preparate din fructe de mare și pește proaspăt.
    </p>

    <h2>Recomandări pentru litoral & plaje (Coasta Ionică)</h2>
    <p>
        Pentru cei care iubesc marea, coasta Ionică oferă plaje uimitoare și ape cristaline:
    </p>
    <ul>
        <li>
            <strong>Lido Gandoli, Saturo & Porto Pirrone</strong> – O zonă de coastă frumoasă, situată lângă Taranto, cu plaje nisipoase, golfuri pitorești 
            și baruri excelente pe plajă.
        </li>
        <li>
            <strong>Campomarino & San Pietro in Bevagna</strong> – O plajă mai liniștită, cunoscută pentru nisipul fin și apele clare, puțin adânci.
        </li>
        <li>
            <strong>Punta Prosciutto & Porto Cesareo</strong> – Unele dintre cele mai frumoase plaje din Italia, cu ape turcoaz asemănătoare celor din Caraibe și nisip alb fin.
        </li>
        <li>
            <strong>Torretta Mare până la Marina di Lizzano</strong> – O porțiune minunată de litoral, cu opțiuni atât de plaje gratuite, cât și private. 
            <u>Onda Blu Lido</u> este o plajă privată recomandată, cu șezlonguri și servicii complete.
        </li>
        <li>
            <strong>Marina di Pulsano</strong> – O zonă de plajă animată, cu multe facilități. Condițiile apei variază în funcție de vânt: 
            <em>Tramontana</em> (vântul din nord) aduce ape clare, în timp ce <em>Scirocco</em> (vântul din sud) poate face ca acestea să fie amestecate.
        </li>
    </ul>
</div>
{:else}
<h1>Puglia Travel Information</h1>

<div class="notice mb-4">
    <strong>Disclaimer:</strong> The content in this guide was created with the help of ChatGPT.
</div>

<div class="bg-white p-4 -mx-4">
    <h2>Wedding Details</h2>

    <h3>Shuttle Service</h3>
    <p>
        We are considering offering a shuttle service from Grottaglie to Castello Monaci and back, but we need to collect numbers in advance. 
        If you are interested, please <em>get in touch with us</em>.
    </p>

    <h3>Dress Code</h3>
    <p>
        The wedding will be <em>formal</em>. Consider light fabrics, as Puglia's climate is usually starting to be <em>warm</em> in early June, 
        though showers are unlikely but may occur.
    </p>

    <h2>Need Help?</h2>
    <p>
        We are here to assist you with your travel plans! If you need any help arranging transportation, accommodation, or have any other questions, 
        please don't hesitate to reach out to us. We want to make your journey as smooth and enjoyable as possible.
    </p>

    <h2>Quick Guide for our Travelling Guests</h2>

    <h3>Airports & Transportation</h3>
    <p>The closest airports to Grottaglie are:</p>
    <ul>
        <li>
            <strong>Brindisi Airport (BDS)</strong> – Approx. 35 minutes away. Brindisi is primarily a touristic airport, meaning it is smaller and has fewer amenities compared to Bari.
        </li>
        <li>
            <strong>Bari Airport (BRI)</strong> – Approx. 1 hour 20 minutes away. Bari is the main international airport in the region, offering a wider range of services and flight connections. 
            It is also directly connected by train, making it a convenient option for those preferring public transport.
        </li>
    </ul>

    <h3>Getting to Grottaglie</h3>
    <ul>
        <li>
            <strong>By Car</strong> – The most convenient way to travel around Puglia. We recommend Locauto (Enterprise/Alamo/National) and Sixt for rentals at the airports. 
            Be mindful of car rental insurance fine print—some policies exclude accidents, theft and loss in Puglia and Campania. It's best to take basic insurance 
            from the rental company and supplement it with car excess insurance from a provider in your home country (e.g., Eversure for British residents).
        </li>
        <li>
            <strong>By Coach</strong> – For direct coach services to Grottaglie, visit COTRAP for schedules and routes.
        </li>
        <li>
            <strong>By Train</strong> – Grottaglie has a train station, but train services are slow and often require multiple connections, especially from the airports.
        </li>
        <li>
            <strong>Private Transfers</strong> – If you need assistance arranging a private transfer, please get in touch with us.
        </li>
    </ul>

    <h2>Where to Stay</h2>

    <h3>Accommodation at Castello Monaci</h3>
    <p>
        For guests who prefer not to travel back after the wedding, Castello Monaci offers on-site accommodation for the night. However, availability is limited, 
        and the pricing is on the higher end. If you’re interested in staying here, we recommend booking as soon as possible.
    </p>

    <h3>Staying in Grottaglie</h3>
    <p>
        We personally recommend staying in the <em>old town</em> of Grottaglie, which is <em>picturesque</em> and full of charm. There are many lovely B&Bs at great prices, 
        offering an authentic experience. The town is known for its Ceramics District (Quartiere delle Ceramiche), a hub of artisan workshops showcasing centuries-old pottery traditions. 
        Unlike some quieter towns nearby, Grottaglie’s old town is <em>vibrant</em>, with excellent restaurants and bars that stay open late.
    </p>
    <p>
        We highly recommend booking early. You can find great options on Booking.com and other travel platforms.
    </p>

    <h2>Must-Visit Places in Puglia & Matera</h2>
    <p>
        If you have extra time during your trip, we highly recommend exploring some of Puglia’s most stunning locations:
    </p>
    <ul>
        <li>
            <strong>Alberobello & The Itria Valley</strong> – Home to <u>UNESCO-listed</u> trulli houses, with picturesque countryside and charming towns like Locorotondo and Cisternino.
        </li>
        <li>
            <strong>Matera</strong> – Just outside Puglia, Matera’s ancient cave dwellings (<u>Sassi di Matera</u>) are a UNESCO World Heritage Site, recognized for their extraordinary history and architectural significance. 
            The city’s unique cave homes, carved into the limestone rock, have been continuously inhabited for thousands of years.
        </li>
        <li>
            <strong>Ostuni</strong> – The <em>"White City"</em>, known for its whitewashed old town and stunning panoramic views.
        </li>
        <li>
            <strong>Polignano a Mare</strong> – Famous for its dramatic cliffs and turquoise waters, a must-visit for photographers and seafood lovers. This charming town is also the birthplace of 
            Domenico Modugno, the legendary Italian singer who wrote the classic song Volare (<em>Nel blu dipinto di blu</em>).
        </li>
        <li>
            <strong>Lecce</strong> – The <em>"Florence of the South"</em> famous for its ornate Baroque architecture and lively piazzas.
        </li>
        <li>
            <strong>Taranto Old Town</strong> – A blend of history and culture, featuring the Aragonese Castle, the National Archaeological Museum, and Taranto’s famous mussels (cozze tarantine).
        </li>
    </ul>

    <h2>Food & Culinary Traditions</h2>
    <p>
        Puglia is renowned for its rich culinary heritage, featuring fresh, high-quality ingredients and traditional cooking methods:
    </p>
    <ul>
        <li>
            <strong>Olive Oil</strong> – Puglia produces some of Italy’s best extra virgin olive oil, a staple of the local cuisine.
        </li>
        <li>
            <strong>Cheese</strong> – Try <em>mozzarella fior di latte</em> (which comes in several shapes and forms), <em>burrata</em>, <em>stracciatella</em>, and <em>caciocavallo</em>, which are widely used in regional dishes. 
            More cheeses include: <em>giuncata</em>, <em>scamorza</em>, <em>ricotta</em> and <em>ricotta forte</em> (for the brave ones, a very strong and spicy cheese spread).
        </li>
        <li>
            <strong>Seafood & Fish</strong> – Coastal areas, especially Taranto, are famous for mussels (cozze tarantine), often served raw with lemon or in a classic peppered mussels dish (impepata di cozze).
        </li>
        <li>
            <strong>Meats</strong> – More common in the inland areas, meats such as lamb, beef, and pork are often grilled, roasted, or slow-cooked. Try <em>bombette</em> (stuffed meat rolls) and <em>zampina</em> (spiced sausages).
        </li>
        <li>
            <strong>Pasta & Bread</strong> – Signature dishes include <em>orecchiette with turnip greens</em> (cime di rapa) and <em>friselle</em> (crispy bread with tomatoes and olive oil).
        </li>
    </ul>
    <p>
        Inland towns focus more on meat-based dishes, while coastal areas feature fresh seafood and fish preparations.
    </p>

    <h2>Seaside & Beach Recommendations (Ionian Coast)</h2>
    <p>
        For those who love the sea, the Ionian coast offers stunning beaches and crystal-clear waters:
    </p>
    <ul>
        <li>
            <strong>Lido Gandoli, Saturo & Porto Pirrone</strong> – A beautiful coastal area near Taranto with sandy beaches, scenic coves, and excellent beach bars.
        </li>
        <li>
            <strong>Campomarino & San Pietro in Bevagna</strong> – A quieter beach known for soft sands and clear, shallow waters.
        </li>
        <li>
            <strong>Punta Prosciutto & Porto Cesareo</strong> – Some of Italy’s most beautiful beaches, featuring Caribbean-like turquoise waters and soft white sand.
        </li>
        <li>
            <strong>Torretta Mare to Marina di Lizzano</strong> – A lovely stretch of coastline with both free and private beach options. Onda Blu Lido is a recommended private beach with sun loungers and full services.
        </li>
        <li>
            <strong>Marina di Pulsano</strong> – A lively beach area with many amenities. Water conditions vary with the wind: Tramontana (north wind) brings clear waters, while Scirocco (south wind) can make them mixed.
        </li>
    </ul>
</div>
{/if}

<style>
p, li {
    @apply my-2;
}
ul {
    @apply list-disc ml-6;
}
</style>