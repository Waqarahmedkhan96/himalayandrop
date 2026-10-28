import Link from '@/components/LLink';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FaqBrowser from '@/components/FaqBrowser';
import JsonLd from '@/components/JsonLd';
import { Arrow } from '@/components/Arrow';
import Sources from '@/components/Sources';
import { refs } from '@/lib/sources';
import { pageMeta } from '@/lib/seo';
import { tr, LANGS } from '@/lib/i18n';
import { POST_SLUGS } from '@/lib/postSlugs';

export const meta = (lang) => pageMeta('faq', lang, '/faq/');

const T = {
  en: {
    hero: { eyebrow: 'FAQ', title: 'Questions,', accent: 'answered.', lead: 'Everything about the product, using it, our lab testing, orders and the guarantee.' },
    help: 'Didn’t find your answer?', contact: 'Contact us', sources: 'Sources', research: 'Read: shilajit and testosterone, the research', researchHref: '/blog/shilajit-and-testosterone-what-the-research-says/',
    groups: [
      {
        title: 'The product',
        items: [
          { q: 'What is shilajit?', a: 'A dark, resin-like substance that forms slowly in high mountain rock over many years. It has been part of traditional practices across the Himalayas and the Karakoram for generations.' },
          { q: 'Where does Himalayan Drop shilajit come from?', a: 'From the heights of Skardu, Pakistan, the gateway to K2. It is collected by hand above 5,000 metres, then purified, sun-dried and tested before packing.' },
          { q: 'How can I tell if shilajit is real?', a: 'Look for a named origin and altitude, a lab report for your batch number, a stated fulvic acid percentage and every ingredient listed with its amount. Pure resin is firm when cold, softens in the warmth of your hand and dissolves almost completely in warm water.' },
          { q: 'What is the difference between Himalayan Gold and Premium Skardu resin?', a: 'Both are pure shilajit resin. The Himalayan Gold Edition is our signature resin from Skardu in a gift-ready box; the Premium Skardu is our everyday resin.' },
          { q: 'What is in the gummies, drops and capsules?', a: 'All three combine shilajit with L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed. The gummies are strawberry, the drops elderberry, and the capsules have no taste. Each product page lists every ingredient and amount.' },
          { q: 'What is in the resin?', a: 'Only one thing: pure shilajit resin. No fillers, carriers or flavours.' },
          { q: 'Is shilajit legal in Denmark?', a: 'Yes. Shilajit is sold in Denmark as a food supplement. Food supplements must be notified to the Danish Veterinary and Food Administration before they are sold, and they may not be marketed with health claims that have not been authorised.' },
        ],
      },
      {
        title: 'Using it',
        items: [
          { q: 'How much shilajit should I take per day?', a: 'Follow the daily dose on your label: a pea-sized amount of resin, three drops, two gummies or two capsules. Do not exceed it.' },
          { q: 'How do I take the resin?', a: 'Dissolve a pea-sized amount in warm water or tea and drink it slowly. Our How to use page shows every step.' },
          { q: 'When is the best time to take it?', a: 'Whenever it fits your routine. Many people pair it with their first tea of the day, which makes it easy to remember.' },
          { q: 'Can I take it if I am pregnant or on medication?', a: 'Please ask your doctor first if you are pregnant, breastfeeding, take medication or have a medical condition.' },
          { q: 'The resin has become hard. Is that normal?', a: 'Yes. Resin firms up in the cold and softens with warmth. Hold the jar in your hands for a minute.' },
        ],
      },
      {
        title: 'Research & safety',
        items: [
          { q: 'What is shilajit made of?', a: 'Mostly humic substances (fulvic and humic acids), together with minerals such as calcium, potassium and magnesium, trace elements, amino acids, fatty acids and phenolic compounds. The exact composition varies by region and batch [1].' },
          { q: 'What does the research say about shilajit?', a: 'Shilajit has a long history of traditional use. Scientific research includes laboratory and animal studies and a small number of human trials. Reviews describe the early results as encouraging but call for larger, independent studies [2, 3].' },
          { q: 'Does shilajit increase testosterone?', a: 'One small randomised, placebo-controlled trial in healthy men aged 45–55 found higher testosterone after 90 days of a purified extract [4]. The evidence is limited, and no health claim for shilajit is authorised in the EU. Our article on shilajit and testosterone goes through the studies.' },
          { q: 'Is shilajit safe?', a: 'Purified shilajit has generally been well tolerated in studies [2]. The main risk is contamination: untested products can contain heavy metals [5], which is why every Himalayan Drop batch is tested against EU limits [6]. Not for children or pregnant or breastfeeding women.' },
        ],
      },
      {
        title: 'Quality & testing',
        items: [
          { q: 'Is every batch tested?', a: 'Yes. Each batch is lab-tested for heavy metals and overall quality, and its fulvic acid percentage is measured.' },
          { q: 'Where can I see my lab report?', a: 'Find the batch number on the bottom of your jar and enter it on our Lab results page, or ask us for the PDF.' },
          { q: 'Why UV-protected glass?', a: 'Light can affect natural products over time. UV-protected glass keeps the resin as it was when it left the mountain.' },
        ],
      },
      {
        title: 'Orders & shipping',
        items: [
          { q: 'Where do you ship?', a: 'Available countries, delivery times and costs are shown at checkout before you pay.' },
          { q: 'How can I track my order?', a: 'You receive a confirmation email with tracking as soon as your order ships.' },
          { q: 'Which payment methods do you accept?', a: 'All payment methods available in our secure Shopify checkout, shown when you check out.' },
        ],
      },
      {
        title: 'Subscribe & Save',
        items: [
          { q: 'How does Subscribe & Save work?', a: 'Choose Subscribe & Save on a product page and pick how often you want a delivery: every 30, 60 or 90 days. You get 15% off every delivery, and each order ships automatically at the subscription price.' },
          { q: 'Can I pause, skip or cancel my subscription?', a: 'Yes, anytime and without fees. There is no binding period. Log in to your account to skip a delivery, change the interval or cancel. Changes apply to your next order.' },
          { q: 'When am I charged?', a: 'You pay for the first order at checkout. After that, each delivery is charged on its scheduled date, using the payment method you chose at checkout.' },
          { q: 'Does the multi-buy saving apply to subscriptions?', a: 'Yes. Choose 2 or 3 packs per delivery and the multi-buy saving is added on top of the 15% subscription discount.' },
        ],
      },
      {
        title: 'Returns & guarantee',
        items: [
          { q: 'What is the 60-day money-back guarantee?', a: 'If you are not satisfied, contact us within 60 days of delivery and we will refund your purchase. See our Returns & guarantee policy for the details.' },
          { q: 'My order arrived damaged. What now?', a: 'We are sorry. Send us a photo through the contact page and we will replace it.' },
        ],
      },
    ],
  },
  da: {
    hero: { eyebrow: 'FAQ', title: 'Spørgsmål,', accent: 'besvaret.', lead: 'Alt om produktet, brugen, vores laboratorietest, ordrer og garantien.' },
    help: 'Fandt du ikke dit svar?', contact: 'Kontakt os', sources: 'Kilder', research: 'Læs: shilajit og testosteron, forskningen', researchHref: '/blog/shilajit-og-testosteron-hvad-siger-forskningen/',
    groups: [
      {
        title: 'Produktet',
        items: [
          { q: 'Hvad er shilajit?', a: 'Et mørkt, resinagtigt stof, der dannes langsomt i klipper højt oppe i bjergene over mange år. I generationer har det været en del af traditionel praksis i Himalaya og Karakoram.' },
          { q: 'Hvor kommer Himalayan Drops shilajit fra?', a: 'Fra højderne ved Skardu i Pakistan, porten til K2. Den samles med håndkraft over 5.000 meter og renses, soltørres og testes, før den pakkes.' },
          { q: 'Hvordan ser jeg, om shilajit er ægte?', a: 'Kig efter en navngivet oprindelse og højde, en laboratorierapport for dit batchnummer, en angivet procentsats for fulvinsyre og alle ingredienser med mængde. Ren resin er fast, når den er kold, bliver blød i varmen fra din hånd og opløses næsten helt i varmt vand.' },
          { q: 'Hvad er forskellen på Himalayan Gold og Premium Skardu resin?', a: 'Begge er ren shilajit resin. Himalayan Gold Edition er vores signaturresin fra Skardu i en gaveæske; Premium Skardu er vores resin til hverdagen.' },
          { q: 'Hvad er der i vingummi, dråber og kapsler?', a: 'Alle tre kombinerer shilajit med L-citrullin, Panax ginseng, zink, selen, sea moss og sortkommen. Vingummierne smager af jordbær, dråberne af hyldebær, og kapslerne har ingen smag. Hver produktside viser alle ingredienser og mængder.' },
          { q: 'Hvad er der i resinen?', a: 'Kun én ting: ren shilajit resin. Ingen fyldstoffer, bærestoffer eller smag.' },
          { q: 'Er shilajit lovligt i Danmark?', a: 'Ja. Shilajit sælges i Danmark som kosttilskud. Kosttilskud skal anmeldes til Fødevarestyrelsen, før de sælges, og de må ikke markedsføres med sundhedsanprisninger, der ikke er godkendt.' },
        ],
      },
      {
        title: 'Brug',
        items: [
          { q: 'Hvor meget shilajit skal jeg tage om dagen?', a: 'Følg den daglige dosis på etiketten: en ærtestor mængde resin, tre dråber, to vingummi eller to kapsler. Overskrid den ikke.' },
          { q: 'Hvordan tager jeg resinen?', a: 'Opløs en ærtestor mængde i varmt vand eller te, og drik det langsomt. Siden Sådan bruger du det viser alle trin.' },
          { q: 'Hvornår er det bedste tidspunkt at tage det?', a: 'Når det passer ind i din rutine. Mange kobler det til dagens første kop te, så det er nemt at huske.' },
          { q: 'Kan jeg tage det, hvis jeg er gravid eller tager medicin?', a: 'Spørg din læge først, hvis du er gravid, ammer, tager medicin eller har en sygdom.' },
          { q: 'Resinen er blevet hård. Er det normalt?', a: 'Ja. Resin bliver fast i kulde og blød i varme. Hold krukken i hænderne et minuts tid.' },
        ],
      },
      {
        title: 'Forskning og sikkerhed',
        items: [
          { q: 'Hvad består shilajit af?', a: 'Hovedsageligt humusstoffer (fulvinsyre og huminsyre) sammen med mineraler som calcium, kalium og magnesium, sporstoffer, aminosyrer, fedtsyrer og fenoliske forbindelser. Den præcise sammensætning varierer med region og batch [1].' },
          { q: 'Hvad siger forskningen om shilajit?', a: 'Shilajit har en lang tradition. Forskningen omfatter laboratorie- og dyreforsøg samt et lille antal forsøg på mennesker. Gennemgange beskriver de tidlige resultater som opmuntrende, men efterlyser større og uafhængige undersøgelser [2, 3].' },
          { q: 'Øger shilajit testosteron?', a: 'Ét lille randomiseret, placebokontrolleret forsøg med raske mænd på 45–55 år fandt højere testosteron efter 90 dage med et renset ekstrakt [4]. Evidensen er begrænset, og ingen sundhedsanprisning for shilajit er godkendt i EU. Vores artikel om shilajit og testosteron gennemgår undersøgelserne.' },
          { q: 'Er shilajit sikkert?', a: 'Renset shilajit har generelt været veltolereret i undersøgelserne [2]. Den største risiko er forurening: utestede produkter kan indeholde tungmetaller [5], og derfor testes hver batch fra Himalayan Drop mod EU’s grænseværdier [6]. Ikke til børn, gravide eller ammende.' },
        ],
      },
      {
        title: 'Kvalitet og test',
        items: [
          { q: 'Bliver hver batch testet?', a: 'Ja. Hver batch testes i laboratoriet for tungmetaller og kvalitet, og indholdet af fulvinsyre måles.' },
          { q: 'Hvor kan jeg se min laboratorierapport?', a: 'Find batchnummeret i bunden af din krukke, og indtast det på siden Laboratorieresultater, eller bed os om PDF’en.' },
          { q: 'Hvorfor UV-beskyttet glas?', a: 'Lys kan påvirke naturprodukter over tid. UV-beskyttet glas bevarer resinen, som den var, da den forlod bjerget.' },
        ],
      },
      {
        title: 'Ordrer og levering',
        items: [
          { q: 'Hvor leverer I til?', a: 'Lande, leveringstid og fragtpris vises i checkout, før du betaler.' },
          { q: 'Hvordan følger jeg min ordre?', a: 'Du får en bekræftelse på e-mail med sporing, så snart din ordre er afsendt.' },
          { q: 'Hvilke betalingsmetoder kan jeg bruge?', a: 'Alle betalingsmetoder i vores sikre Shopify checkout, som vises, når du går til kassen.' },
        ],
      },
      {
        title: 'Abonnér & Spar',
        items: [
          { q: 'Hvordan fungerer Abonnér & Spar?', a: 'Vælg Abonnér & Spar på en produktside, og vælg hvor ofte du vil have en levering: hver 30., 60. eller 90. dag. Du får 15 % rabat på hver levering, og hver ordre sendes automatisk til abonnementsprisen.' },
          { q: 'Kan jeg sætte mit abonnement på pause, springe over eller opsige det?', a: 'Ja, når som helst og uden gebyrer. Der er ingen binding. Log ind på din konto for at springe en levering over, skifte interval eller opsige. Ændringer gælder fra din næste ordre.' },
          { q: 'Hvornår bliver jeg trukket?', a: 'Du betaler for den første ordre i checkout. Derefter trækkes hver levering på den planlagte dato med den betalingsmetode, du valgte i checkout.' },
          { q: 'Gælder mængderabatten også for abonnementer?', a: 'Ja. Vælg 2 eller 3 pakker pr. levering, så lægges mængderabatten oven i abonnementsrabatten på 15 %.' },
        ],
      },
      {
        title: 'Returnering og garanti',
        items: [
          { q: 'Hvad er 60 dages penge-tilbage-garanti?', a: 'Er du ikke tilfreds, så kontakt os inden for 60 dage efter levering, og vi refunderer dit køb. Se vores politik for returnering og garanti for detaljer.' },
          { q: 'Min ordre kom beskadiget frem. Hvad nu?', a: 'Det er vi kede af. Send os et billede via kontaktsiden, så sender vi en ny.' },
        ],
      },
    ],
  },
  de: {
    hero: { eyebrow: 'FAQ', title: 'Fragen,', accent: 'beantwortet.', lead: 'Alles über das Produkt, die Anwendung, unsere Laborprüfung, Bestellungen und die Garantie.' },
    help: 'Keine Antwort gefunden?', contact: 'Kontakt', sources: 'Quellen', research: 'Lesen: Shilajit und Testosteron, die Forschung', researchHref: `/blog/${POST_SLUGS.testosterone.de}/`,
    groups: [
      { title: 'Das Produkt', items: [
        { q: 'Was ist Shilajit?', a: 'Eine dunkle, harzartige Substanz (auch Mumijo genannt), die sich über viele Jahre langsam in hohem Gebirgsgestein bildet. Im Himalaya und im Karakorum ist sie seit Generationen Teil traditioneller Praktiken.' },
        { q: 'Woher kommt das Shilajit von Himalayan Drop?', a: 'Aus den Höhen von Skardu in Pakistan, dem Tor zum K2. Es wird über 5.000 Metern von Hand gesammelt, dann gereinigt, sonnengetrocknet und vor dem Abfüllen geprüft.' },
        { q: 'Woran erkenne ich echtes Shilajit?', a: 'Achte auf eine genannte Herkunft und Höhe, einen Laborbericht zu deiner Chargennummer, einen angegebenen Fulvinsäure-Anteil und jede Zutat mit Menge. Reines Harz ist kalt fest, wird in der warmen Hand weich und löst sich in warmem Wasser fast vollständig auf.' },
        { q: 'Was ist der Unterschied zwischen Himalayan Gold und Premium Skardu Harz?', a: 'Beide sind reines Shilajit Harz. Die Himalayan Gold Edition ist unser Signature-Harz aus Skardu in einer Geschenkbox, die Premium Skardu unser Harz für jeden Tag.' },
        { q: 'Was ist in den Gummies, Tropfen und Kapseln?', a: 'Alle drei kombinieren Shilajit mit L-Citrullin, Panax Ginseng, Zink, Selen, Seemoos und Schwarzkümmel. Die Gummies schmecken nach Erdbeere, die Tropfen nach Holunder, die Kapseln sind geschmacksneutral. Jede Produktseite nennt alle Zutaten mit Menge.' },
        { q: 'Was ist im Harz?', a: 'Nur eines: reines Shilajit Harz. Keine Füll-, Träger- oder Aromastoffe.' },
        { q: 'Ist Shilajit in Deutschland erlaubt?', a: 'Ja. Shilajit wird in Deutschland als Nahrungsergänzungsmittel verkauft. Nahrungsergänzungsmittel müssen vor dem ersten Inverkehrbringen beim Bundesamt für Verbraucherschutz und Lebensmittelsicherheit (BVL) angezeigt werden und dürfen nicht mit nicht zugelassenen gesundheitsbezogenen Angaben beworben werden.' },
      ] },
      { title: 'Anwendung', items: [
        { q: 'Wie viel Shilajit sollte ich täglich nehmen?', a: 'Halte dich an die Tagesdosis auf dem Etikett: eine erbsengroße Menge Harz, drei Tropfen, zwei Gummies oder zwei Kapseln. Nicht überschreiten.' },
        { q: 'Wie nehme ich das Harz ein?', a: 'Eine erbsengroße Menge in warmem Wasser oder Tee auflösen und langsam trinken. Unsere Seite Anwendung zeigt jeden Schritt.' },
        { q: 'Wann ist die beste Zeit für die Einnahme?', a: 'Wann immer es in deinen Alltag passt. Viele verbinden es mit dem ersten Tee des Tages, so vergisst man es nicht.' },
        { q: 'Kann ich es in der Schwangerschaft oder mit Medikamenten nehmen?', a: 'Bitte frag zuerst deine Ärztin oder deinen Arzt, wenn du schwanger bist, stillst, Medikamente nimmst oder eine Erkrankung hast.' },
        { q: 'Das Harz ist hart geworden. Ist das normal?', a: 'Ja. Harz wird in der Kälte fest und in der Wärme weich. Halte das Glas eine Minute in den Händen.' },
      ] },
      { title: 'Forschung & Sicherheit', items: [
        { q: 'Woraus besteht Shilajit?', a: 'Vor allem aus Huminstoffen (Fulvin- und Huminsäuren), zusammen mit Mineralien wie Calcium, Kalium und Magnesium, Spurenelementen, Aminosäuren, Fettsäuren und phenolischen Verbindungen. Die genaue Zusammensetzung variiert je nach Region und Charge [1].' },
        { q: 'Was sagt die Forschung über Shilajit?', a: 'Shilajit hat eine lange traditionelle Verwendung. Die Forschung umfasst Labor- und Tierstudien sowie eine kleine Zahl von Studien am Menschen. Übersichtsarbeiten bewerten die ersten Ergebnisse als vielversprechend, fordern aber größere, unabhängige Studien [2, 3].' },
        { q: 'Erhöht Shilajit das Testosteron?', a: 'Eine kleine randomisierte, placebokontrollierte Studie mit gesunden Männern zwischen 45 und 55 Jahren fand nach 90 Tagen mit einem gereinigten Extrakt höhere Testosteronwerte [4]. Die Evidenz ist begrenzt, und in der EU ist keine gesundheitsbezogene Angabe für Shilajit zugelassen. Unser Artikel zu Shilajit und Testosteron geht die Studien durch.' },
        { q: 'Ist Shilajit sicher?', a: 'Gereinigtes Shilajit wurde in Studien im Allgemeinen gut vertragen [2]. Das Hauptrisiko ist Verunreinigung: Ungeprüfte Produkte können Schwermetalle enthalten [5], deshalb wird jede Charge von Himalayan Drop gegen die EU-Grenzwerte geprüft [6]. Nicht für Kinder, Schwangere oder Stillende.' },
      ] },
      { title: 'Qualität & Prüfung', items: [
        { q: 'Wird jede Charge geprüft?', a: 'Ja. Jede Charge wird im Labor auf Schwermetalle und Gesamtqualität geprüft, und ihr Fulvinsäure-Anteil wird gemessen.' },
        { q: 'Wo sehe ich meinen Laborbericht?', a: 'Die Chargennummer steht auf dem Boden deines Glases. Gib sie auf unserer Seite Laborergebnisse ein oder frag uns nach dem PDF.' },
        { q: 'Warum UV-geschütztes Glas?', a: 'Licht kann Naturprodukte mit der Zeit beeinflussen. UV-geschütztes Glas bewahrt das Harz so, wie es den Berg verlassen hat.' },
      ] },
      { title: 'Bestellung & Versand', items: [
        { q: 'Wohin liefert ihr?', a: 'Verfügbare Länder, Lieferzeiten und Kosten siehst du an der Kasse, bevor du bezahlst.' },
        { q: 'Wie verfolge ich meine Bestellung?', a: 'Sobald deine Bestellung versendet ist, bekommst du eine Bestätigung mit Sendungsverfolgung per E-Mail.' },
        { q: 'Welche Zahlungsarten akzeptiert ihr?', a: 'Alle Zahlungsarten unserer sicheren Shopify-Kasse, die dir beim Bezahlen angezeigt werden.' },
      ] },
      { title: 'Abo & Sparen', items: [
        { q: 'Wie funktioniert Abo & Sparen?', a: 'Wähle auf einer Produktseite Abo & Sparen und bestimme, wie oft du beliefert werden möchtest: alle 30, 60 oder 90 Tage. Du erhältst 15 % Rabatt auf jede Lieferung, und jede Bestellung wird automatisch zum Abo-Preis versendet.' },
        { q: 'Kann ich mein Abo pausieren, überspringen oder kündigen?', a: 'Ja, jederzeit und ohne Gebühren. Es gibt keine Mindestlaufzeit. Melde dich in deinem Konto an, um eine Lieferung zu überspringen, das Intervall zu ändern oder zu kündigen. Änderungen gelten ab der nächsten Bestellung.' },
        { q: 'Wann wird abgebucht?', a: 'Die erste Bestellung bezahlst du an der Kasse. Danach wird jede Lieferung an ihrem geplanten Datum mit der beim Checkout gewählten Zahlungsart abgerechnet.' },
        { q: 'Gilt der Mengenrabatt auch für Abos?', a: 'Ja. Wähle 2 oder 3 Packungen pro Lieferung, und der Mengenrabatt kommt zum Abo-Rabatt von 15 % hinzu.' },
      ] },
      { title: 'Rückgabe & Garantie', items: [
        { q: 'Was ist die 60-Tage-Geld-zurück-Garantie?', a: 'Wenn du nicht zufrieden bist, melde dich innerhalb von 60 Tagen nach Lieferung und wir erstatten deinen Kauf. Details findest du in unserer Richtlinie zu Rückgabe & Garantie.' },
        { q: 'Meine Bestellung kam beschädigt an. Was nun?', a: 'Das tut uns leid. Schick uns über die Kontaktseite ein Foto, und wir ersetzen sie.' },
      ] },
    ],
  },
  fr: {
    hero: { eyebrow: 'FAQ', title: 'Vos questions,', accent: 'nos réponses.', lead: 'Tout sur le produit, son utilisation, nos tests en laboratoire, les commandes et la garantie.' },
    help: 'Vous n’avez pas trouvé votre réponse ?', contact: 'Nous contacter', sources: 'Sources', research: 'À lire : shilajit et testostérone, ce que dit la recherche', researchHref: `/blog/${POST_SLUGS.testosterone.fr}/`,
    groups: [
      { title: 'Le produit', items: [
        { q: 'Qu’est-ce que le shilajit ?', a: 'Une substance sombre, semblable à une résine, qui se forme lentement dans la roche de haute montagne pendant de nombreuses années. Elle fait partie des pratiques traditionnelles de l’Himalaya et du Karakoram depuis des générations.' },
        { q: 'D’où vient le shilajit Himalayan Drop ?', a: 'Des hauteurs de Skardu, au Pakistan, porte d’entrée du K2. Il est récolté à la main au-dessus de 5 000 mètres, puis purifié, séché au soleil et testé avant d’être conditionné.' },
        { q: 'Comment reconnaître un vrai shilajit ?', a: 'Vérifiez une origine et une altitude précises, un rapport de laboratoire pour votre numéro de lot, un taux d’acide fulvique indiqué et la quantité de chaque ingrédient. La résine pure est ferme à froid, s’assouplit à la chaleur de la main et se dissout presque entièrement dans l’eau chaude.' },
        { q: 'Quelle différence entre Himalayan Gold et Premium Skardu ?', a: 'Les deux sont de la résine de shilajit pure. La Himalayan Gold Edition est notre résine signature de Skardu dans un coffret cadeau ; la Premium Skardu est notre résine du quotidien.' },
        { q: 'Que contiennent les gommes, gouttes et gélules ?', a: 'Les trois associent le shilajit à la L-citrulline, au Panax ginseng, au zinc, au sélénium, à la mousse de mer et à la nigelle. Les gommes sont à la fraise, les gouttes au sureau et les gélules sans goût. Chaque fiche produit indique tous les ingrédients et leurs quantités.' },
        { q: 'Que contient la résine ?', a: 'Une seule chose : de la résine de shilajit pure. Ni charges, ni supports, ni arômes.' },
        { q: 'Le shilajit est-il autorisé en France ?', a: 'Oui. Le shilajit est vendu en France comme complément alimentaire. Les compléments alimentaires doivent être déclarés auprès de la DGAL (via la plateforme Téléicare) avant leur mise sur le marché, et ne peuvent pas être présentés avec des allégations de santé non autorisées.' },
      ] },
      { title: 'Utilisation', items: [
        { q: 'Quelle quantité de shilajit par jour ?', a: 'Respectez la dose journalière de l’étiquette : une quantité de résine de la taille d’un petit pois, trois gouttes, deux gommes ou deux gélules. Ne la dépassez pas.' },
        { q: 'Comment prendre la résine ?', a: 'Dissolvez une quantité de la taille d’un petit pois dans de l’eau chaude ou du thé et buvez lentement. Notre page Utilisation détaille chaque étape.' },
        { q: 'Quel est le meilleur moment pour le prendre ?', a: 'Quand cela s’intègre à votre routine. Beaucoup l’associent à leur premier thé de la journée, ce qui aide à ne pas oublier.' },
        { q: 'Puis-je en prendre si je suis enceinte ou sous traitement ?', a: 'Demandez d’abord l’avis de votre médecin si vous êtes enceinte, allaitez, prenez des médicaments ou avez un problème de santé.' },
        { q: 'La résine a durci. Est-ce normal ?', a: 'Oui. La résine se raffermit au froid et s’assouplit à la chaleur. Gardez le pot une minute entre vos mains.' },
      ] },
      { title: 'Recherche et sécurité', items: [
        { q: 'De quoi est composé le shilajit ?', a: 'Surtout de substances humiques (acides fulviques et humiques), avec des minéraux comme le calcium, le potassium et le magnésium, des oligo-éléments, des acides aminés, des acides gras et des composés phénoliques. La composition exacte varie selon la région et le lot [1].' },
        { q: 'Que dit la recherche sur le shilajit ?', a: 'Le shilajit a une longue histoire d’usage traditionnel. La recherche comprend des études en laboratoire et sur l’animal, ainsi qu’un petit nombre d’essais chez l’humain. Les revues jugent les premiers résultats encourageants mais appellent à des études plus larges et indépendantes [2, 3].' },
        { q: 'Le shilajit augmente-t-il la testostérone ?', a: 'Un petit essai randomisé contrôlé contre placebo chez des hommes en bonne santé de 45 à 55 ans a observé une testostérone plus élevée après 90 jours d’extrait purifié [4]. Les preuves restent limitées, et aucune allégation de santé n’est autorisée pour le shilajit dans l’UE. Notre article sur le shilajit et la testostérone détaille les études.' },
        { q: 'Le shilajit est-il sûr ?', a: 'Le shilajit purifié a généralement été bien toléré dans les études [2]. Le principal risque est la contamination : des produits non testés peuvent contenir des métaux lourds [5], c’est pourquoi chaque lot Himalayan Drop est testé selon les limites européennes [6]. Déconseillé aux enfants et aux femmes enceintes ou allaitantes.' },
      ] },
      { title: 'Qualité et tests', items: [
        { q: 'Chaque lot est-il testé ?', a: 'Oui. Chaque lot est testé en laboratoire pour les métaux lourds et la qualité globale, et son taux d’acide fulvique est mesuré.' },
        { q: 'Où voir mon rapport de laboratoire ?', a: 'Repérez le numéro de lot sous votre pot et saisissez-le sur notre page Résultats de laboratoire, ou demandez-nous le PDF.' },
        { q: 'Pourquoi du verre anti-UV ?', a: 'La lumière peut altérer les produits naturels avec le temps. Le verre anti-UV préserve la résine telle qu’elle a quitté la montagne.' },
      ] },
      { title: 'Commandes et livraison', items: [
        { q: 'Où livrez-vous ?', a: 'Les pays disponibles, les délais et les frais de livraison s’affichent lors du paiement, avant de payer.' },
        { q: 'Comment suivre ma commande ?', a: 'Vous recevez un e-mail de confirmation avec le suivi dès l’expédition de votre commande.' },
        { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Tous les moyens de paiement proposés par notre paiement sécurisé Shopify, affichés au moment de payer.' },
      ] },
      { title: 'Abonnement', items: [
        { q: 'Comment fonctionne l’abonnement ?', a: 'Choisissez l’abonnement sur une fiche produit et la fréquence de livraison : tous les 30, 60 ou 90 jours. Vous bénéficiez de 15 % de réduction sur chaque livraison, et chaque commande est expédiée automatiquement au prix de l’abonnement.' },
        { q: 'Puis-je suspendre, reporter ou résilier mon abonnement ?', a: 'Oui, à tout moment et sans frais. Il n’y a pas d’engagement. Connectez-vous à votre compte pour reporter une livraison, changer la fréquence ou résilier. Les changements s’appliquent à la commande suivante.' },
        { q: 'Quand suis-je débité ?', a: 'Vous payez la première commande lors du paiement. Ensuite, chaque livraison est débitée à sa date prévue avec le moyen de paiement choisi.' },
        { q: 'La réduction par quantité s’applique-t-elle aux abonnements ?', a: 'Oui. Choisissez 2 ou 3 unités par livraison et la réduction par quantité s’ajoute aux 15 % de l’abonnement.' },
      ] },
      { title: 'Retours et garantie', items: [
        { q: 'Qu’est-ce que la garantie satisfait ou remboursé de 60 jours ?', a: 'Si vous n’êtes pas satisfait, contactez-nous dans les 60 jours suivant la livraison et nous vous remboursons. Voir notre politique de retours et garantie pour les détails.' },
        { q: 'Ma commande est arrivée abîmée. Que faire ?', a: 'Nous en sommes désolés. Envoyez-nous une photo via la page contact et nous la remplacerons.' },
      ] },
    ],
  },
  es: {
    hero: { eyebrow: 'Preguntas frecuentes', title: 'Tus preguntas,', accent: 'respondidas.', lead: 'Todo sobre el producto, su uso, nuestros análisis de laboratorio, los pedidos y la garantía.' },
    help: '¿No has encontrado tu respuesta?', contact: 'Contacto', sources: 'Fuentes', research: 'Lee: shilajit y testosterona, lo que dice la investigación', researchHref: `/blog/${POST_SLUGS.testosterone.es}/`,
    groups: [
      { title: 'El producto', items: [
        { q: '¿Qué es el shilajit?', a: 'Una sustancia oscura, parecida a una resina, que se forma lentamente en la roca de alta montaña durante muchos años. Forma parte de prácticas tradicionales del Himalaya y el Karakórum desde hace generaciones.' },
        { q: '¿De dónde viene el shilajit de Himalayan Drop?', a: 'De las alturas de Skardu, Pakistán, la puerta al K2. Se recoge a mano a más de 5.000 metros y después se purifica, se seca al sol y se analiza antes de envasarlo.' },
        { q: '¿Cómo sé si el shilajit es auténtico?', a: 'Busca un origen y una altitud concretos, un informe de laboratorio para tu número de lote, un porcentaje de ácido fúlvico indicado y cada ingrediente con su cantidad. La resina pura está firme en frío, se ablanda con el calor de la mano y se disuelve casi por completo en agua caliente.' },
        { q: '¿Qué diferencia hay entre Himalayan Gold y Premium Skardu?', a: 'Las dos son resina de shilajit pura. La Himalayan Gold Edition es nuestra resina insignia de Skardu en una caja regalo; la Premium Skardu es nuestra resina para cada día.' },
        { q: '¿Qué llevan las gominolas, gotas y cápsulas?', a: 'Las tres combinan shilajit con L-citrulina, Panax ginseng, zinc, selenio, musgo marino y comino negro. Las gominolas son de fresa, las gotas de saúco y las cápsulas no tienen sabor. Cada página de producto indica todos los ingredientes y cantidades.' },
        { q: '¿Qué contiene la resina?', a: 'Solo una cosa: resina de shilajit pura. Sin rellenos, soportes ni aromas.' },
        { q: '¿Es legal el shilajit en España?', a: 'Sí. El shilajit se vende en España como complemento alimenticio. Los complementos alimenticios deben notificarse a la Agencia Española de Seguridad Alimentaria y Nutrición (AESAN) antes de su comercialización y no pueden promocionarse con declaraciones de salud no autorizadas.' },
      ] },
      { title: 'Uso', items: [
        { q: '¿Cuánto shilajit debo tomar al día?', a: 'Sigue la dosis diaria de la etiqueta: una cantidad de resina del tamaño de un guisante, tres gotas, dos gominolas o dos cápsulas. No la superes.' },
        { q: '¿Cómo tomo la resina?', a: 'Disuelve una cantidad del tamaño de un guisante en agua caliente o té y bébelo despacio. Nuestra página Modo de uso muestra cada paso.' },
        { q: '¿Cuál es el mejor momento para tomarlo?', a: 'Cuando encaje en tu rutina. Mucha gente lo une a su primer té del día, así es fácil de recordar.' },
        { q: '¿Puedo tomarlo si estoy embarazada o tomo medicación?', a: 'Consulta antes a tu médico si estás embarazada, das el pecho, tomas medicación o tienes alguna enfermedad.' },
        { q: 'La resina se ha endurecido. ¿Es normal?', a: 'Sí. La resina se endurece con el frío y se ablanda con el calor. Sujeta el tarro entre las manos un minuto.' },
      ] },
      { title: 'Investigación y seguridad', items: [
        { q: '¿De qué está hecho el shilajit?', a: 'Sobre todo de sustancias húmicas (ácidos fúlvicos y húmicos), junto con minerales como calcio, potasio y magnesio, oligoelementos, aminoácidos, ácidos grasos y compuestos fenólicos. La composición exacta varía según la región y el lote [1].' },
        { q: '¿Qué dice la investigación sobre el shilajit?', a: 'El shilajit tiene una larga historia de uso tradicional. La investigación incluye estudios de laboratorio y en animales y un pequeño número de ensayos en personas. Las revisiones describen los primeros resultados como prometedores, pero piden estudios más amplios e independientes [2, 3].' },
        { q: '¿El shilajit aumenta la testosterona?', a: 'Un pequeño ensayo aleatorizado y controlado con placebo en hombres sanos de 45 a 55 años encontró niveles de testosterona más altos tras 90 días con un extracto purificado [4]. La evidencia es limitada y en la UE no hay ninguna declaración de salud autorizada para el shilajit. Nuestro artículo sobre shilajit y testosterona repasa los estudios.' },
        { q: '¿Es seguro el shilajit?', a: 'El shilajit purificado se ha tolerado bien en general en los estudios [2]. El riesgo principal es la contaminación: los productos sin analizar pueden contener metales pesados [5], por eso cada lote de Himalayan Drop se analiza frente a los límites de la UE [6]. No apto para niños ni para mujeres embarazadas o en periodo de lactancia.' },
      ] },
      { title: 'Calidad y análisis', items: [
        { q: '¿Se analiza cada lote?', a: 'Sí. Cada lote se analiza en laboratorio en metales pesados y calidad general, y se mide su porcentaje de ácido fúlvico.' },
        { q: '¿Dónde veo mi informe de laboratorio?', a: 'Busca el número de lote en la base del tarro e introdúcelo en nuestra página Resultados de laboratorio, o pídenos el PDF.' },
        { q: '¿Por qué vidrio con protección UV?', a: 'La luz puede afectar a los productos naturales con el tiempo. El vidrio con protección UV mantiene la resina como salió de la montaña.' },
      ] },
      { title: 'Pedidos y envíos', items: [
        { q: '¿A dónde enviáis?', a: 'Los países disponibles, plazos y costes de envío se muestran al pagar, antes de confirmar.' },
        { q: '¿Cómo sigo mi pedido?', a: 'Recibirás un correo de confirmación con el seguimiento en cuanto se envíe tu pedido.' },
        { q: '¿Qué métodos de pago aceptáis?', a: 'Todos los métodos de pago de nuestro pago seguro de Shopify, que verás al finalizar la compra.' },
      ] },
      { title: 'Suscríbete y ahorra', items: [
        { q: '¿Cómo funciona Suscríbete y ahorra?', a: 'Elige Suscríbete y ahorra en una página de producto y la frecuencia de entrega: cada 30, 60 o 90 días. Tendrás un 15 % de descuento en cada envío, y cada pedido sale automáticamente con el precio de suscripción.' },
        { q: '¿Puedo pausar, saltar o cancelar mi suscripción?', a: 'Sí, cuando quieras y sin comisiones. No hay permanencia. Inicia sesión en tu cuenta para saltar un envío, cambiar la frecuencia o cancelar. Los cambios se aplican al siguiente pedido.' },
        { q: '¿Cuándo se me cobra?', a: 'Pagas el primer pedido al finalizar la compra. Después, cada envío se cobra en su fecha prevista con el método de pago que elegiste.' },
        { q: '¿El descuento por cantidad se aplica a las suscripciones?', a: 'Sí. Elige 2 o 3 unidades por envío y el descuento por cantidad se suma al 15 % de la suscripción.' },
      ] },
      { title: 'Devoluciones y garantía', items: [
        { q: '¿Qué es la garantía de devolución de 60 días?', a: 'Si no estás satisfecho, escríbenos en los 60 días siguientes a la entrega y te devolvemos el dinero. Consulta nuestra política de devoluciones y garantía para más detalles.' },
        { q: 'Mi pedido llegó dañado. ¿Qué hago?', a: 'Lo sentimos. Envíanos una foto a través de la página de contacto y te lo reponemos.' },
      ] },
    ],
  },
  ar: {
    hero: { eyebrow: 'الأسئلة الشائعة', title: 'أسئلتك،', accent: 'وإجاباتنا.', lead: 'كل ما تريد معرفته عن المنتج واستخدامه وفحوصنا المخبرية والطلبات والضمان.' },
    help: 'لم تجد إجابتك؟', contact: 'اتصل بنا', sources: 'المصادر', research: 'اقرأ: الشيلاجيت والتستوستيرون، ماذا تقول الأبحاث', researchHref: `/blog/${POST_SLUGS.testosterone.ar}/`,
    groups: [
      { title: 'المنتج', items: [
        { q: 'ما هو الشيلاجيت؟', a: 'مادة داكنة تشبه الراتنج، تتكوّن ببطء في صخور الجبال العالية على مدى سنوات طويلة. وهي جزء من الممارسات التقليدية في جبال الهيمالايا وقراقرم منذ أجيال.' },
        { q: 'من أين يأتي شيلاجيت Himalayan Drop؟', a: 'من مرتفعات سكردو في باكستان، بوابة قمة K2. يُجمع يدوياً فوق 5000 متر، ثم يُنقّى ويُجفف بالشمس ويُفحص قبل التعبئة.' },
        { q: 'كيف أميّز الشيلاجيت الأصلي؟', a: 'ابحث عن مصدر وارتفاع محددين، وتقرير مخبري لرقم دفعتك، ونسبة حمض الفولفيك مذكورة، وكل مكوّن مع كميته. الراتنج النقي صلب في البرودة، يلين بدفء اليد، ويذوب بالكامل تقريباً في الماء الدافئ.' },
        { q: 'ما الفرق بين راتنج الهيمالايا الذهبي وسكردو الفاخر؟', a: 'كلاهما راتنج شيلاجيت نقي. إصدار الهيمالايا الذهبي هو راتنجنا المميز من سكردو في علبة هدايا، وسكردو الفاخر هو راتنجنا للاستخدام اليومي.' },
        { q: 'ماذا تحتوي العلكات والقطرات والكبسولات؟', a: 'تجمع الثلاثة بين الشيلاجيت وإل-سيترولين والجينسنغ والزنك والسيلينيوم والطحلب البحري والحبة السوداء. العلكات بنكهة الفراولة، والقطرات بنكهة البلسان، والكبسولات بلا طعم. تذكر كل صفحة منتج جميع المكونات وكمياتها.' },
        { q: 'ماذا يحتوي الراتنج؟', a: 'شيئاً واحداً فقط: راتنج شيلاجيت نقي. بلا مواد مالئة أو حاملة أو منكهات.' },
        { q: 'هل الشيلاجيت مسموح في الإمارات؟', a: 'يُباع الشيلاجيت في الإمارات كمكمل غذائي. يجب تسجيل المكملات الغذائية لدى الجهة المختصة قبل بيعها (في دبي عبر بلدية دبي)، ولا يجوز الترويج لها بادعاءات صحية غير معتمدة. نبيع منتجاتنا عبر شركاء محليين في دبي وأبوظبي والشارقة والعين.' },
      ] },
      { title: 'الاستخدام', items: [
        { q: 'ما الكمية اليومية من الشيلاجيت؟', a: 'التزم بالجرعة اليومية على الملصق: كمية من الراتنج بحجم حبة البازلاء، أو ثلاث قطرات، أو علكتان، أو كبسولتان. لا تتجاوزها.' },
        { q: 'كيف أتناول الراتنج؟', a: 'أذب كمية بحجم حبة البازلاء في ماء دافئ أو شاي واشربه ببطء. تشرح صفحة طريقة الاستخدام كل خطوة.' },
        { q: 'ما أفضل وقت لتناوله؟', a: 'متى ما ناسب روتينك. يربطه كثيرون بأول كوب شاي في اليوم، فيسهل تذكّره.' },
        { q: 'هل يمكنني تناوله أثناء الحمل أو مع الأدوية؟', a: 'استشيري طبيبك أولاً إذا كنتِ حاملاً أو مرضعة، أو إذا كنت تتناول أدوية أو تعاني من حالة صحية.' },
        { q: 'أصبح الراتنج صلباً. هل هذا طبيعي؟', a: 'نعم. يتصلّب الراتنج في البرودة ويلين بالدفء. أمسك العبوة بين يديك لدقيقة.' },
      ] },
      { title: 'الأبحاث والسلامة', items: [
        { q: 'مما يتكوّن الشيلاجيت؟', a: 'بشكل أساسي من المواد الدبالية (حمضا الفولفيك والهيوميك)، مع معادن مثل الكالسيوم والبوتاسيوم والمغنيسيوم، وعناصر نادرة، وأحماض أمينية، وأحماض دهنية، ومركبات فينولية. يختلف التركيب بحسب المنطقة والدفعة [1].' },
        { q: 'ماذا تقول الأبحاث عن الشيلاجيت؟', a: 'للشيلاجيت تاريخ طويل من الاستخدام التقليدي. تشمل الأبحاث دراسات مخبرية وحيوانية وعدداً قليلاً من التجارب على البشر. تصف المراجعات النتائج الأولية بأنها مشجعة، لكنها تدعو إلى دراسات أكبر ومستقلة [2، 3].' },
        { q: 'هل يرفع الشيلاجيت مستوى التستوستيرون؟', a: 'وجدت تجربة صغيرة عشوائية مضبوطة بالدواء الوهمي على رجال أصحاء بين 45 و55 عاماً مستويات أعلى من التستوستيرون بعد 90 يوماً من مستخلص منقّى [4]. الأدلة محدودة، ولا توجد ادعاءات صحية معتمدة للشيلاجيت في الاتحاد الأوروبي. يستعرض مقالنا عن الشيلاجيت والتستوستيرون هذه الدراسات.' },
        { q: 'هل الشيلاجيت آمن؟', a: 'كان الشيلاجيت المنقّى جيد التحمل عموماً في الدراسات [2]. الخطر الرئيسي هو التلوث: قد تحتوي المنتجات غير المفحوصة على معادن ثقيلة [5]، ولذلك تُفحص كل دفعة من Himalayan Drop وفق الحدود الأوروبية [6]. غير مناسب للأطفال أو الحوامل أو المرضعات.' },
      ] },
      { title: 'الجودة والفحص', items: [
        { q: 'هل تُفحص كل دفعة؟', a: 'نعم. تُفحص كل دفعة مخبرياً للمعادن الثقيلة والجودة العامة، وتُقاس نسبة حمض الفولفيك فيها.' },
        { q: 'أين أرى تقريري المخبري؟', a: 'ستجد رقم الدفعة أسفل العبوة. أدخله في صفحة نتائج المختبر، أو اطلب منا ملف PDF.' },
        { q: 'لماذا زجاج محمي من الأشعة فوق البنفسجية؟', a: 'قد يؤثر الضوء في المنتجات الطبيعية مع الوقت. يحافظ الزجاج المحمي على الراتنج كما غادر الجبل.' },
      ] },
      { title: 'الطلبات والشحن', items: [
        { q: 'إلى أين تشحنون؟', a: 'تظهر الدول المتاحة ومواعيد وتكاليف التوصيل عند الدفع، قبل إتمام الطلب.' },
        { q: 'كيف أتتبع طلبي؟', a: 'تصلك رسالة تأكيد مع رقم التتبع فور شحن طلبك.' },
        { q: 'ما طرق الدفع المقبولة؟', a: 'جميع طرق الدفع المتاحة في صفحة الدفع الآمنة من Shopify، وتظهر لك عند الدفع.' },
      ] },
      { title: 'اشترك ووفّر', items: [
        { q: 'كيف يعمل الاشتراك والتوفير؟', a: 'اختر "اشترك ووفّر" في صفحة المنتج وحدد عدد مرات التوصيل: كل 30 أو 60 أو 90 يوماً. تحصل على خصم 15% على كل توصيلة، ويُشحن كل طلب تلقائياً بسعر الاشتراك.' },
        { q: 'هل يمكنني إيقاف الاشتراك مؤقتاً أو تخطي توصيلة أو إلغاؤه؟', a: 'نعم، في أي وقت ودون رسوم. لا يوجد التزام بمدة. سجّل الدخول إلى حسابك لتخطي توصيلة أو تغيير الفترة أو الإلغاء. تسري التغييرات على الطلب التالي.' },
        { q: 'متى يتم الخصم من حسابي؟', a: 'تدفع ثمن الطلب الأول عند الشراء. بعد ذلك يُخصم ثمن كل توصيلة في موعدها المحدد بطريقة الدفع التي اخترتها.' },
        { q: 'هل ينطبق خصم الكمية على الاشتراكات؟', a: 'نعم. اختر عبوتين أو ثلاث لكل توصيلة، ويُضاف خصم الكمية إلى خصم الاشتراك البالغ 15%.' },
      ] },
      { title: 'الإرجاع والضمان', items: [
        { q: 'ما هو ضمان استرداد المال لمدة 60 يوماً؟', a: 'إن لم تكن راضياً، تواصل معنا خلال 60 يوماً من الاستلام وسنعيد لك المبلغ. راجع سياسة الإرجاع والضمان للتفاصيل.' },
        { q: 'وصل طلبي تالفاً. ماذا أفعل؟', a: 'نعتذر عن ذلك. أرسل لنا صورة عبر صفحة التواصل وسنرسل بديلاً.' },
      ] },
    ],
  },
  ur: {
    hero: { eyebrow: 'عام سوالات', title: 'آپ کے سوال،', accent: 'ہمارے جواب۔', lead: 'پروڈکٹ، استعمال، لیب ٹیسٹنگ، آرڈرز اور گارنٹی کے بارے میں سب کچھ۔' },
    help: 'جواب نہیں ملا؟', contact: 'رابطہ کریں', sources: 'حوالہ جات', research: 'پڑھیں: سلاجیت اور ٹیسٹوسٹیرون، تحقیق کیا کہتی ہے', researchHref: `/blog/${POST_SLUGS.testosterone.ur}/`,
    groups: [
      { title: 'پروڈکٹ', items: [
        { q: 'سلاجیت کیا ہے؟', a: 'ایک گہرا، رال جیسا مادہ جو اونچے پہاڑی پتھروں میں کئی سالوں میں آہستہ آہستہ بنتا ہے۔ یہ نسلوں سے ہمالیہ اور قراقرم کی روایات کا حصہ ہے۔' },
        { q: 'Himalayan Drop کا سلاجیت کہاں سے آتا ہے؟', a: 'اسکردو، پاکستان کی بلندیوں سے، جو کے ٹو کا دروازہ ہے۔ اسے 5,000 میٹر سے اوپر ہاتھ سے چنا جاتا ہے، پھر صاف، دھوپ میں خشک اور پیکنگ سے پہلے ٹیسٹ کیا جاتا ہے۔' },
        { q: 'اصلی سلاجیت کی پہچان کیسے کریں؟', a: 'واضح ماخذ اور بلندی، اپنے بیچ نمبر کی لیب رپورٹ، فلوک ایسڈ کی درج فیصد اور ہر جزو کی مقدار دیکھیں۔ خالص ریزن ٹھنڈک میں سخت، ہاتھ کی گرمی سے نرم اور نیم گرم پانی میں تقریباً مکمل حل ہو جاتا ہے۔ بازار میں ملاوٹ والا سلاجیت عام ہے، اس لیے لیب رپورٹ سب سے اہم ہے۔' },
        { q: 'ہمالین گولڈ اور پریمیم اسکردو ریزن میں کیا فرق ہے؟', a: 'دونوں خالص سلاجیت ریزن ہیں۔ ہمالین گولڈ ایڈیشن اسکردو کا ہمارا خاص ریزن ہے جو گفٹ باکس میں آتا ہے؛ پریمیم اسکردو روزانہ استعمال کا ریزن ہے۔' },
        { q: 'گمیز، ڈراپس اور کیپسول میں کیا ہے؟', a: 'تینوں میں سلاجیت کے ساتھ ایل-سٹرولین، پیناکس جنسنگ، زنک، سیلینیم، سی ماس اور کلونجی شامل ہیں۔ گمیز اسٹرابیری، ڈراپس ایلڈربیری اور کیپسول بغیر ذائقے کے ہیں۔ ہر پروڈکٹ پیج پر تمام اجزاء اور مقداریں درج ہیں۔' },
        { q: 'ریزن میں کیا ہے؟', a: 'صرف ایک چیز: خالص سلاجیت ریزن۔ کوئی فلر، ملاوٹ یا ذائقہ نہیں۔' },
        { q: 'پاکستان میں سلاجیت کی قانونی حیثیت کیا ہے؟', a: 'پاکستان میں سلاجیت جیسے ہیلتھ اور نیوٹراسیوٹیکل پروڈکٹس ڈرگ ریگولیٹری اتھارٹی آف پاکستان (DRAP) کے دائرہ کار میں آتے ہیں اور فروخت سے پہلے ان کا اندراج ضروری ہے۔ ہم اسکردو، اسلام آباد اور اٹک سٹی میں اپنے مقامی پارٹنر کے ذریعے فروخت کرتے ہیں۔' },
      ] },
      { title: 'استعمال', items: [
        { q: 'روزانہ کتنا سلاجیت لینا چاہیے؟', a: 'لیبل پر درج روزانہ خوراک پر عمل کریں: مٹر کے دانے جتنا ریزن، تین قطرے، دو گمیز یا دو کیپسول۔ اس سے زیادہ نہ لیں۔' },
        { q: 'ریزن کیسے استعمال کریں؟', a: 'مٹر کے دانے جتنی مقدار نیم گرم پانی یا چائے میں حل کریں اور آہستہ آہستہ پئیں۔ ہمارا استعمال کا طریقہ صفحہ ہر مرحلہ دکھاتا ہے۔' },
        { q: 'لینے کا بہترین وقت کون سا ہے؟', a: 'جب آپ کے معمول میں فٹ ہو۔ بہت سے لوگ اسے دن کی پہلی چائے کے ساتھ لیتے ہیں، اس سے یاد رکھنا آسان ہوتا ہے۔' },
        { q: 'کیا حمل یا دوا کے دوران لے سکتے ہیں؟', a: 'اگر آپ حاملہ ہیں، دودھ پلاتی ہیں، دوا لیتے ہیں یا کوئی بیماری ہے تو پہلے ڈاکٹر سے مشورہ کریں۔' },
        { q: 'ریزن سخت ہو گیا ہے۔ کیا یہ معمول ہے؟', a: 'جی ہاں۔ ریزن ٹھنڈ میں سخت اور گرمی میں نرم ہو جاتا ہے۔ برتن کو ایک منٹ ہاتھوں میں رکھیں۔' },
      ] },
      { title: 'تحقیق اور حفاظت', items: [
        { q: 'سلاجیت کس چیز سے بنتا ہے؟', a: 'زیادہ تر ہیومک مادوں (فلوک اور ہیومک ایسڈ) سے، ساتھ میں کیلشیم، پوٹاشیم اور میگنیشیم جیسی معدنیات، ٹریس عناصر، امائنو ایسڈز، فیٹی ایسڈز اور فینولک مرکبات۔ اصل ترکیب علاقے اور بیچ کے لحاظ سے مختلف ہوتی ہے [1]۔' },
        { q: 'سلاجیت کے بارے میں تحقیق کیا کہتی ہے؟', a: 'سلاجیت کا روایتی استعمال بہت پرانا ہے۔ سائنسی تحقیق میں لیبارٹری اور جانوروں پر مطالعات اور انسانوں پر چند تجربات شامل ہیں۔ جائزے ابتدائی نتائج کو حوصلہ افزا کہتے ہیں مگر بڑے اور آزاد مطالعات کی ضرورت پر زور دیتے ہیں [2، 3]۔' },
        { q: 'کیا سلاجیت ٹیسٹوسٹیرون بڑھاتا ہے؟', a: '45 سے 55 سال کے صحت مند مردوں پر ایک چھوٹے بے ترتیب، پلیسبو کنٹرولڈ تجربے میں صاف شدہ ایکسٹریکٹ کے 90 دن بعد ٹیسٹوسٹیرون زیادہ پایا گیا [4]۔ شواہد محدود ہیں، اور یورپی یونین میں سلاجیت کے لیے کوئی صحت کا دعویٰ منظور شدہ نہیں۔ سلاجیت اور ٹیسٹوسٹیرون پر ہمارا مضمون ان مطالعات کا جائزہ لیتا ہے۔' },
        { q: 'کیا سلاجیت محفوظ ہے؟', a: 'مطالعات میں صاف شدہ سلاجیت عموماً اچھی طرح برداشت کیا گیا [2]۔ اصل خطرہ آلودگی ہے: بغیر ٹیسٹ کی مصنوعات میں بھاری دھاتیں ہو سکتی ہیں [5]، اسی لیے Himalayan Drop کا ہر بیچ یورپی حدود کے مطابق ٹیسٹ ہوتا ہے [6]۔ بچوں، حاملہ یا دودھ پلانے والی خواتین کے لیے نہیں۔' },
      ] },
      { title: 'معیار اور ٹیسٹ', items: [
        { q: 'کیا ہر بیچ ٹیسٹ ہوتا ہے؟', a: 'جی ہاں۔ ہر بیچ کا بھاری دھاتوں اور مجموعی معیار کے لیے لیب ٹیسٹ ہوتا ہے، اور فلوک ایسڈ کی فیصد ناپی جاتی ہے۔' },
        { q: 'اپنی لیب رپورٹ کہاں دیکھوں؟', a: 'برتن کے نیچے بیچ نمبر دیکھیں اور ہمارے لیب رپورٹس صفحے پر درج کریں، یا ہم سے PDF منگوائیں۔' },
        { q: 'UV سے محفوظ شیشہ کیوں؟', a: 'روشنی وقت کے ساتھ قدرتی مصنوعات کو متاثر کر سکتی ہے۔ UV سے محفوظ شیشہ ریزن کو ویسا ہی رکھتا ہے جیسا وہ پہاڑ سے نکلا۔' },
      ] },
      { title: 'آرڈر اور ترسیل', items: [
        { q: 'آپ کہاں ڈیلیور کرتے ہیں؟', a: 'دستیاب ممالک، ترسیل کا وقت اور خرچ ادائیگی سے پہلے چیک آؤٹ پر دکھائے جاتے ہیں۔' },
        { q: 'اپنا آرڈر کیسے ٹریک کروں؟', a: 'آرڈر روانہ ہوتے ہی آپ کو ٹریکنگ کے ساتھ تصدیقی ای میل ملے گی۔' },
        { q: 'ادائیگی کے کون سے طریقے قبول ہیں؟', a: 'ہمارے محفوظ Shopify چیک آؤٹ میں دستیاب تمام طریقے، جو ادائیگی کے وقت دکھائے جاتے ہیں۔' },
      ] },
      { title: 'سبسکرپشن اور بچت', items: [
        { q: 'سبسکرپشن کیسے کام کرتی ہے؟', a: 'پروڈکٹ پیج پر سبسکرپشن منتخب کریں اور طے کریں کہ ترسیل کتنی بار چاہیے: ہر 30، 60 یا 90 دن۔ ہر ترسیل پر 15% رعایت ملتی ہے اور ہر آرڈر سبسکرپشن قیمت پر خود بخود روانہ ہوتا ہے۔' },
        { q: 'کیا میں سبسکرپشن روک، چھوڑ یا منسوخ کر سکتا ہوں؟', a: 'جی ہاں، کسی بھی وقت اور بغیر فیس کے۔ کوئی پابندی نہیں۔ اپنے اکاؤنٹ میں لاگ ان کر کے ترسیل چھوڑیں، وقفہ بدلیں یا منسوخ کریں۔ تبدیلیاں اگلے آرڈر سے لاگو ہوتی ہیں۔' },
        { q: 'ادائیگی کب کٹتی ہے؟', a: 'پہلے آرڈر کی ادائیگی چیک آؤٹ پر ہوتی ہے۔ اس کے بعد ہر ترسیل کی رقم اس کی مقررہ تاریخ پر آپ کے منتخب کردہ طریقے سے کٹتی ہے۔' },
        { q: 'کیا زیادہ تعداد کی رعایت سبسکرپشن پر بھی ملتی ہے؟', a: 'جی ہاں۔ ہر ترسیل میں 2 یا 3 پیک منتخب کریں، اور یہ رعایت سبسکرپشن کی 15% رعایت کے علاوہ ملے گی۔' },
      ] },
      { title: 'واپسی اور گارنٹی', items: [
        { q: '60 دن کی منی بیک گارنٹی کیا ہے؟', a: 'اگر آپ مطمئن نہیں تو ترسیل کے 60 دن کے اندر رابطہ کریں، ہم رقم واپس کر دیں گے۔ تفصیل کے لیے واپسی اور گارنٹی پالیسی دیکھیں۔' },
        { q: 'میرا آرڈر خراب حالت میں پہنچا۔ اب کیا کروں؟', a: 'ہمیں افسوس ہے۔ رابطہ صفحے کے ذریعے تصویر بھیجیں، ہم نیا بھیج دیں گے۔' },
      ] },
    ],
  },
};

export default function FaqView({ lang }) {
  const t = tr(T, lang);
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANGS[lang].hreflang,
    mainEntity: t.groups.flatMap((g) => g.items).map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero {...t.hero} />
      <Reveal as="section" className="section tight-top">
        <div className="container narrow" data-reveal>
          <FaqBrowser groups={t.groups} />
          <p className="faq-research"><Link href={t.researchHref}>{t.research} <Arrow size={14} /></Link></p>
          <Sources items={refs('kamgar2025', 'stohs2014', 'wilson2011', 'pandit2016', 'saper2008', 'reg2023915')} title={t.sources} id="faq-sources" />
          <div className="faq-help">
            <p>{t.help}</p>
            <Link href="/contact/" className="btn">{t.contact} <Arrow /></Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
