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

{#if lang === "ro"}
<h1>Informații pentru Transport</h1>
<div class="bg-white p-4 -mx-4">
<p>
    Pentru a vă asigura că veți ajunge la timp și fără bătăi de cap la evenimentele noastre din București, vă oferim câteva recomandări:
</p>
<ul>
    <li>
        <strong>Petrecerea:</strong> Pentru a vă deplasa la petrecere, vă recomandăm cu încredere să folosiți aplicațiile <strong>Bolt</strong> sau <strong>Uber</strong>. Acestea sunt opțiuni rapide, sigure și foarte convenabile, asigurându-vă o călătorie relaxată până la locație.
    </li>
    <li>
        <strong>Biserica:</strong> Locația bisericii este ușor accesibilă și cu transportul public. Dacă preferați această opțiune, veți găsi mijloace de transport care să vă ducă rapid și eficient la destinație.
    </li>
</ul>
<h2>Suntem aici să vă ajutăm!</h2>
<p>
    Dacă aveți nevoie de informații suplimentare sau asistență în privința transportului, nu ezitați să ne contactați. Suntem bucuroși să vă oferim orice ajutor necesar pentru a vă asigura că veți avea o experiență plăcută și fără griji la evenimentele noastre.
</p>
</div>
{:else if lang === "it"}
<h1>Informazioni di Viaggio per Bucarest</h1>

<div class="notice mb-4">
    <b>Disclaimer:</b> Il contenuto di questa guida è stato creato con l'aiuto di ChatGPT.
</div>

<div class="bg-white p-4 -mx-4">

<h2>Come arrivare a Bucarest</h2>
<ul>
    <li><strong>In Aereo</strong>: L'aeroporto principale che serve Bucarest è il <strong>Aeroporto Internazionale Henri Coandă (OTP)</strong>. È ben collegato con le principali città d'Europa e oltre. </li>
    <li>
        <strong>Dall'aeroporto alla città</strong>:
        <ul>
            <li><strong>Taxi &amp; Ride-Sharing</strong>: Usa <strong>Bolt</strong> o <strong>Uber</strong> per viaggi sicuri e a prezzi ragionevoli. Evita taxi non ufficiali che offrono corse all'interno del terminal.</li>
            <li><strong>Trasporto Pubblico</strong>: La linea autobus <strong>100 Express</strong> opera 24/7 tra l'aeroporto e il centro città. In alternativa, puoi prendere il <strong>treno dall'aeroporto</strong> fino a <strong>Gara de Nord (Stazione Ferroviaria Nord di Bucarest)</strong>, poi utilizzare la metro o il servizio di ride-sharing.</li>
        </ul>
    </li>
</ul>

<h2>Alloggio</h2>
<p>Raccomandiamo di soggiornare nel centro o nei dintorni di <strong>Città Vecchia (Centrul Vechi)</strong> o di <strong>Piața Unirii</strong> per avere facile accesso ai luoghi del matrimonio e alle principali attrazioni. Ci sono molte ottime opzioni a prezzi convenienti su <strong>Booking.com</strong>. Ecco alcune raccomandazioni per hotel:</p>
<ul>
    <li><strong>Lusso</strong>: InterContinental Athénée Palace Bucharest, JW Marriott Bucharest Grand Hotel</li>
    <li><strong>Fascia Media</strong>: Hilton Garden Inn, Moxy Bucharest Old Town</li>
    <li><strong>Economico</strong>: Ibis Styles Bucharest City Center, Rembrandt Hotel</li>
</ul>
<p>Si consiglia di prenotare in anticipo, poiché Bucarest è una destinazione popolare!</p>

<h2>Muoversi a Bucarest</h2>
<ul>
    <li><strong>Metro</strong>: Efficiente ed economica, con quattro linee principali che coprono gran parte della città.</li>
    <li><strong>Ride-Sharing</strong>: <strong>Bolt</strong> e <strong>Uber</strong> sono le migliori opzioni per comodità e sicurezza.</li>
    <li><strong>A Piedi</strong>: Molte attrazioni nel centro città sono raggiungibili a piedi.</li>
</ul>

<h2>Esplorare oltre Bucarest</h2>
<p>Se prevedi di esplorare altre parti della Romania, è <strong>fortemente consigliato</strong> noleggiare un'auto. Il paese è pieno di paesaggi mozzafiato, castelli medievali e affascinanti cittadine. Ecco alcune destinazioni da non perdere:</p>
<ul>
    <li><strong>Sinaia &amp; Castello di Peleș</strong> – Un magnifico castello neorinascimentale nelle montagne dei Carpazi, un tempo residenza reale. La città di Sinaia è anche un ottimo punto per escursioni panoramiche e per godersi l'aria fresca di montagna.</li>
    <li><strong>Castello di Bran</strong> – Spesso associato alla leggenda di Dracula, questa fortezza gotica è imperdibile per gli appassionati di storia e folklore.</li>
    <li><strong>Brașov</strong> – Una bellissima città medievale circondata da montagne, perfetta per passeggiare nel suo affascinante centro storico e visitare la Chiesa Nera.</li>
    <li><strong>Sighișoara</strong> – Patrimonio dell'Umanità dell'UNESCO e luogo di nascita di Vlad l'Impalatore, con strade colorate e un'atmosfera da favola.</li>
    <li><strong>Strada Transfăgărășan</strong> – Una delle strade panoramiche più spettacolari al mondo, che si snoda attraverso i Carpazi offrendo viste mozzafiato.</li>
    <li><strong>Constanța &amp; Il Mar Nero</strong> – Se cerchi una fuga al mare, la città costiera di Constanța offre monumenti storici, splendide viste sul mare e un'atmosfera rilassata.</li>
</ul>

<h2>Cose da fare a Bucarest</h2>
<p>Se hai un po' di tempo per esplorare, ecco alcuni luoghi da non perdere:</p>
<ul>
    <li><strong>Palazzo del Parlamento</strong> – Uno degli edifici più grandi al mondo!</li>
    <li><strong>Città Vecchia (Centrul Vechi)</strong> – Strade vivaci con bar, ristoranti e architettura storica. Per un'esperienza autentica, visita <strong>Hanu' lui Manuc</strong>, una locanda storica con cucina tradizionale rumena, oppure <strong>Caru' cu Bere</strong>, una famosa birreria con un'architettura sorprendente e ottimo cibo.</li>
    <li><strong>Parco Herăstrău &amp; Museo del Villaggio</strong> – Un bellissimo spazio verde con case tradizionali rumene.</li>
    <li><strong>Ateneu Român (Ateneul Român)</strong> – Un magnifico auditorium e punto di riferimento culturale.</li>
    <li><strong>Therme Bucharest</strong> – Uno dei più grandi centri benessere e spa in Europa, con piscine termali, saune e aree relax, perfetto per una giornata di relax.</li>
</ul>

<h2>Cibi e Bevande Consigliati</h2>
<p>La cucina rumena è sostanziosa e ricca di sapore. Ecco alcuni piatti e bevande da provare a Bucarest:</p>
<ul>
    <li><strong>Sarmale</strong> – Involtini di cavolo ripieni di carne macinata e riso, spesso serviti con panna acida e <strong>mămăligă</strong> (polenta rumena).</li>
    <li><strong>Mămăligă</strong> – Un piatto base a base di farina di mais, servito come contorno con carni, stufati o formaggio.</li>
    <li><strong>Mici</strong> – Involtini di carne macinata alla griglia, simili a salsicce, tipicamente serviti con senape e pane fresco.</li>
    <li><strong>Zacuscă</strong> – Una deliziosa crema spalmabile a base di melanzane arrostite, peperoni e pomodori, perfetta per colazione o uno spuntino leggero.</li>
    <li><strong>Salată de vinete</strong> – Una crema di melanzane affumicata, spesso consumata con pane fresco.</li>
    <li><strong>Fasole bătută</strong> – Una crema di fagioli, tipicamente guarnita con cipolle caramellate.</li>
    <li><strong>Ciorbă de burtă</strong> – Una ricca e acidula zuppa di trippa, molto amata in Romania. Se non sei un fan degli organi, prova la <strong>Ciorbă rădăuțeană</strong>, una zuppa simile preparata con pollo.</li>
    <li><strong>Papanași</strong> – Ciambelle fritte o bollite, guarnite con panna acida e marmellata, un dolce imperdibile in Romania.</li>
    <li><strong>Cozonac</strong> – Un pane dolce e soffice ripieno di noci, cacao o dolce turco, tradizionalmente consumato durante le festività ma disponibile tutto l'anno.</li>
    <li><strong>Plăcintă</strong> – Una pasta ripiena di ingredienti dolci o salati come formaggio, patate o mele.</li>
    <li><strong>Covrig</strong> – Un popolare cibo da strada rumeno, simile a un pretzel, spesso cosparso di sesamo o papavero. Li puoi trovare appena sfornati nei chioschi e nelle panetterie della città. Le varianti includono <strong>covrig cu ciocolată</strong> (ripieno di cioccolato), <strong>covrig cu brânză</strong> (ripieno di formaggio) e <strong>covrig cu gem</strong> (ripieno di marmellata), perfetti per uno spuntino veloce e gustoso in movimento.</li>
    <li><strong>Țuică &amp; Palincă</strong> – Tradizionali brandy di frutta rumeni, forti e spesso fatti in casa.</li>
    <li><strong>Socată</strong> – Una bevanda rinfrescante a base di fiori di sambuco, perfetta per la tarda primavera e l'estate.</li>
</ul>

</div>
{:else}
<h1>Bucharest Travel Information</h1>

<div class="notice mb-4">
    <b>Disclaimer:</b> The content in this guide was created with the help of ChatGPT.
</div>

<div class="bg-white p-4 -mx-4">

<h2>Getting to Bucharest</h2>
<ul>
    <li><strong>By Air</strong>: The main airport serving Bucharest is <strong>Henri Coandă International Airport (OTP)</strong>. It is well-connected with major cities in Europe and beyond. </li>
    <li>
        <strong>From the Airport to the City</strong>:
        <ul>
            <li><strong>Taxi &amp; Ride-Sharing</strong>: Use <strong>Bolt</strong> or <strong>Uber</strong> for safe and reasonably priced rides. Avoid unofficial taxis offering rides inside the terminal.</li>
            <li><strong>Public Transport</strong>: The <strong>100 Express</strong> bus runs 24/7 between the airport and the city center. Alternatively, you can take the <strong>train from the airport</strong> to <strong>Gara de Nord (Bucharest North Railway Station)</strong>, then use the metro or ride-sharing service.</li>
        </ul>
    </li>
</ul>

<h2>Accommodation</h2>
<p>We recommend staying in or near <strong>Old Town (Centrul Vechi)</strong> or <strong>Piața Unirii</strong> for easy access to wedding venues and main attractions. There are many great options available at good prices on <strong>Booking.com</strong>. Here are some hotel recommendations:</p>
<ul>
    <li><strong>Luxury</strong>: InterContinental Athénée Palace Bucharest, JW Marriott Bucharest Grand Hotel</li>
    <li><strong>Mid-Range</strong>: Hilton Garden Inn, Moxy Bucharest Old Town</li>
    <li><strong>Budget</strong>: Ibis Styles Bucharest City Center, Rembrandt Hotel</li>
</ul>
<p>We recommend booking early, as Bucharest is a popular destination!</p>

<h2>Getting Around Bucharest</h2>
<ul>
    <li><strong>Metro</strong>: Efficient and affordable, with four main lines covering much of the city.</li>
    <li><strong>Ride-Sharing</strong>: <strong>Bolt</strong> and <strong>Uber</strong> are the best options for convenience and safety.</li>
    <li><strong>Walking</strong>: Many attractions in the city center are within walking distance.</li>
</ul>

<h2>Exploring Beyond Bucharest</h2>
<p>If you plan on exploring more of Romania, renting a car is <strong>highly recommended</strong>. The country is full of breathtaking landscapes, medieval castles, and charming towns. Here are some must-visit destinations:</p>
<ul>
    <li><strong>Sinaia &amp; Peleș Castle</strong> – A stunning Neo-Renaissance castle in the Carpathian Mountains, once a royal residence. The town of Sinaia is also a great spot for scenic hikes and fresh mountain air.</li>
    <li><strong>Bran Castle</strong> – Often associated with the Dracula legend, this gothic fortress is a must-see for history and folklore lovers.</li>
    <li><strong>Brașov</strong> – A beautiful medieval town surrounded by mountains, perfect for strolling through its charming old town and visiting the Black Church.</li>
    <li><strong>Sighișoara</strong> – A UNESCO World Heritage Site and the birthplace of Vlad the Impaler, featuring colorful streets and a fairy-tale atmosphere.</li>
    <li><strong>Transfăgărășan Highway</strong> – One of the most scenic drives in the world, winding through the Carpathian Mountains with breathtaking views.</li>
    <li><strong>Constanța &amp; The Black Sea</strong> – If you’re looking for a beach getaway, the coastal city of Constanța offers historic landmarks, beautiful sea views, and a relaxed atmosphere.</li>
</ul>

<h2>Things to Do in Bucharest</h2>
<p>If you have some time to explore, here are some must-see places:</p>
<ul>
    <li><strong>Palace of the Parliament</strong> – One of the largest buildings in the world!</li>
    <li><strong>Old Town (Centrul Vechi)</strong> – Lively streets with bars, restaurants, and historic architecture. For an authentic experience, visit <strong>Hanu&#39; lui Manuc</strong>, a historic inn with traditional Romanian cuisine, or <strong>Caru&#39; cu Bere</strong>, a famous beerhouse with stunning architecture and great food.</li>
    <li><strong>Herastrau Park &amp; Village Museum</strong> – A beautiful green space with traditional Romanian houses.</li>
    <li><strong>Ateneu Român (Romanian Athenaeum)</strong> – A stunning concert hall and cultural landmark.</li>
    <li><strong>Therme Bucharest</strong> – One of the largest wellness and spa centers in Europe, featuring thermal pools, saunas, and relaxation areas, perfect for a day of unwinding.</li>
</ul>

<h2>Recommended Food & Drinks</h2>
<p>Romanian cuisine is hearty and full of flavor. Here are some dishes and drinks to try while in Bucharest:</p>
<ul>
    <li><strong>Sarmale</strong> – Cabbage rolls stuffed with minced meat and rice, often served with sour cream and <strong>mămăligă</strong> (Romanian polenta).</li>
    <li><strong>Mămăligă</strong> – A staple dish made of cornmeal, served as a side with meats, stews, or cheese.</li>
    <li><strong>Mici</strong> – Grilled minced meat rolls, similar to sausages, typically served with mustard and fresh bread.</li>
    <li><strong>Zacuscă</strong> – A delicious spread made from roasted eggplants, peppers, and tomatoes, perfect for breakfast or a light snack.</li>
    <li><strong>Salată de vinete</strong> – A smoky eggplant spread, often eaten with fresh bread.</li>
    <li><strong>Fasole bătută</strong> – A creamy bean dip, typically garnished with caramelized onions.</li>
    <li><strong>Ciorbă de burtă</strong> – A rich and sour tripe soup, beloved in Romania. If you&#39;re not a fan of organ meats, try <strong>Ciorbă rădăuțeană</strong>, a similar soup made with chicken.</li>
    <li><strong>Papanași</strong> – Fried or boiled doughnuts topped with sour cream and jam, a must-try Romanian dessert.</li>
    <li><strong>Cozonac</strong> – A sweet, fluffy bread filled with nuts, cocoa, or Turkish delight, traditionally eaten during holidays but available year-round.</li>
    <li><strong>Plăcintă</strong> – A pastry filled with sweet or savory ingredients like cheese, potatoes, or apples.</li>
    <li><strong>Covrig</strong> – A popular Romanian street food, similar to a pretzel, often topped with sesame or poppy seeds. You can find them freshly baked at street kiosks and bakeries throughout the city. Variations include <strong>covrig cu ciocolată</strong> (chocolate-filled), <strong>covrig cu brânză</strong> (cheese-filled), and <strong>covrig cu gem</strong> (jam-filled), perfect for a quick and tasty snack on the go.</li>
    <li><strong>Țuică &amp; Palincă</strong> – Traditional Romanian fruit brandies, strong and often homemade.</li>
    <li><strong>Socată</strong> – A refreshing elderflower drink, perfect for late spring and summer.</li>
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