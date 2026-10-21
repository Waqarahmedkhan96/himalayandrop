// Text for the product-page sections (proof strip, lab spotlight, label,
// ingredients, reviews, myths, guarantee, FAQ), per language.
// Wording note: shilajit has no authorised EU health claim, so these texts
// describe origin, quality and use. The only health wording is the authorised
// zinc and selenium claims, shown on the capsules (they hold ≥15 % NRV).
import { PDP_MORE } from './pdp-i18n';

const en = {
  proof: ['Harvested above 5,000 m', '83.1% fulvic acid*', '85+ minerals*', 'Lab report per batch', 'Danish brand', '60-day money-back guarantee'],
  lab: {
    eyebrow: 'Lab-measured', h: '83.1% fulvic acid.', hg: 'Measured, not estimated.',
    p: 'Of everything in shilajit, fulvic acid is what it is known for, and the number most labels leave out. We had ours measured by an independent laboratory, and we print it on the pack.',
    result: 'Result', method: 'Method', lab: 'Laboratory', labName: 'Independent EU laboratory', report: 'Report', batch: 'Batch', fulvicLabel: 'fulvic acid',
    metalsH: 'Heavy metals, far below EU limits', metalsP: 'Every batch is screened for lead, cadmium and mercury against the EU maximum levels for food supplements.',
    limit: 'EU limit', ofLimit: (p) => `${p}% of the limit`, metals: { lead: 'Lead', cadmium: 'Cadmium', mercury: 'Mercury' },
    cta: 'Look up your batch', certs: 'Produced under', example: 'Example report',
  },
  facts: {
    eyebrow: 'Full transparency', h: 'Every amount,', hg: 'on the label.',
    p: 'No proprietary blends and no hidden doses. This is exactly what you get in each serving.',
    perServing: 'Per serving', amount: 'Amount', nrv: '% NRV*', nrvNote: '*NRV = nutrient reference value. † No reference value established.',
    resinH: 'Typical analysis', resinServing: 'Per jar', resinRows: [['Shilajit resin', '100%'], ['Fulvic acid', '83.1%'], ['Minerals & trace elements', '85+'], ['Fillers, carriers, flavours', 'None']],
    free: ['No fillers', 'No carriers', 'No added flavours', 'No preservatives'],
    claimsH: 'Authorised nutrient claims',
    claims: ['Zinc contributes to the normal function of the immune system.', 'Zinc contributes to the maintenance of normal hair, nails and skin.', 'Selenium contributes to the protection of cells from oxidative stress.', 'Selenium contributes to normal thyroid function.'],
  },
  inside: {
    eyebrow: 'What’s inside', h: 'Inside every', hg: { resin: 'jar.', gummies: 'gummy.', drops: 'drop.', capsules: 'capsule.' },
    p: { resin: 'One ingredient, made of many parts. This is what nature puts into real Himalayan resin.', formula: 'Himalayan shilajit with six companion ingredients, each with its amount on the label.' },
    resin: [
      { k: 'fulvic', t: 'Fulvic acid', v: '83.1%', d: 'The water-soluble organic acids shilajit is known for, measured by an independent lab.' },
      { k: 'minerals', t: 'Minerals & trace elements', v: '85+', d: 'Naturally present in the rock it seeps from. Nothing added, every batch screened for heavy metals.' },
      { k: 'humic', t: 'Humic substances', d: 'Larger organic molecules that give the resin its deep colour and thick, sticky texture.' },
      { k: 'dbp', t: 'Dibenzo-α-pyrones', d: 'Marker compounds that help laboratories tell authentic shilajit from imitations.' },
      { k: 'amino', t: 'Amino acids', d: 'Present naturally in small amounts. A trace, not a protein source.' },
      { k: 'origin', t: 'Skardu origin', v: '5,000 m', d: 'Hand-collected above 5,000 m in Skardu, Pakistan, far from roads and industry.' },
    ],
    formula: {
      shilajit: { t: 'Shilajit', d: 'Himalayan shilajit from Skardu, the heart of every serving.' },
      citrulline: { t: 'L-Citrulline', d: 'An amino acid, first identified in watermelon.' },
      ginseng: { t: 'Panax ginseng', d: 'Root extract of Korean ginseng, a classic of East Asian tradition.' },
      zinc: { t: 'Zinc', d: 'An essential trace element.' },
      selenium: { t: 'Selenium', d: 'An essential trace element.' },
      seamoss: { t: 'Sea moss', d: 'Red seaweed, also called Irish moss, from the Atlantic coast.' },
      blackseed: { t: 'Black seed', d: 'Nigella sativa seed, used in kitchens from Morocco to India.' },
    },
  },
  reviews: {
    eyebrow: 'Reviews', h: 'What customers', hg: 'say.', p: 'Reviews of this exact product.',
    basis: 'Sample rating', videosH: 'Video reviews', play: 'Play video',
    caps: ['Unboxing', 'My morning ritual', 'First taste', 'Why I chose it', 'In my bag', 'Gift unboxing'],
    name: 'Customer name', places: ['Copenhagen', 'London', 'Aarhus'], write: 'Write a review',
    text: {
      resin: ['Sample review. Thick, glossy resin that dissolves completely in warm tea. You can tell it is the real thing.', 'Sample review. The box and jar feel genuinely premium. I liked being able to read the lab report for my batch.', 'Sample review. Earthy and smoky taste, softer with a little honey. Easy to make part of my morning.'],
      gummies: ['Sample review. The strawberry flavour is pleasant and two gummies fit easily into my morning.', 'Sample review. The tin closes tightly and looks great on the kitchen shelf.', 'Sample review. Nice to see every amount listed on the label. No guessing.'],
      drops: ['Sample review. Three drops in my morning tea, done. The dropper makes measuring easy.', 'Sample review. Elderberry flavour works really well. The gift tube is beautiful.', 'Sample review. Arrived quickly and well packed. Amber glass feels solid and premium.'],
      capsules: ['Sample review. Two capsules with water and I am done. No taste at all.', 'Sample review. Clear label with every amount listed. The bottle and box look premium.', 'Sample review. Perfect for travelling. I keep the bottle next to my coffee.'],
    },
  },
  myths: {
    eyebrow: 'Myth vs fact', h: 'Let’s clear', hg: 'things up.', p: 'The most common misunderstandings about shilajit, and what is actually true.',
    myth: 'Myth', fact: 'Fact', tap: 'Tap to see the fact', back: 'Back to the myth',
    shared: [
      ['All shilajit is the same.', 'Origin, form and testing make the difference. Ours comes from Skardu above 5,000 m, and every batch has its own lab report.'],
      ['Shilajit is only for men.', 'It is for adults, women and men alike, with the same daily dose on the label. Not for children or during pregnancy.'],
      ['More is better.', 'Stick to the daily dose on the label. A steady daily routine matters more than a bigger amount.'],
    ],
    resin: ['Boiling water dissolves it faster.', 'Use warm water or tea, never boiling. Give it a few minutes and a stir, and it dissolves completely.'],
    gummies: ['Gummies are just sweets.', 'Each serving of two gummies holds 500 mg shilajit plus six companion ingredients, every amount on the label.'],
    drops: ['Drops belong in the fridge.', 'Keep them at room temperature, tightly closed. The fridge is not needed.'],
    capsules: ['Capsules hide what is inside.', 'Every ingredient and every amount is printed on the label: 500 mg shilajit per serving of two capsules.'],
    powder: ["Real shilajit is a dry powder.", "Pure shilajit is a sticky resin. It softens in warm hands and firms up when cool. Powders are often processed and may contain fillers."],
  },
  guarantee: {
    eyebrow: 'Zero risk', h: '60-day', hg: 'money-back guarantee.',
    p: 'Try it as part of your daily ritual. If it is not for you, contact us within 60 days and we will refund you in full.',
    cta: 'Choose your option', points: ['Lab report per batch', 'Secure checkout', 'Danish brand'],
  },
  faq: {
    eyebrow: 'Questions', h: 'Good to', hg: 'know.',
    q: { who: 'Who is it for?', tested: 'How is it tested?', combine: 'Can I combine it with other supplements?', origin: 'Where does it come from?', last: 'How long does one pack last?', taste: 'What does it taste like?' },
    a: {
      tested: 'Every batch is tested by an independent laboratory for heavy metals (lead, cadmium, mercury), microbiology and fulvic acid. Enter the batch number from your pack on our Lab results page to read the report.',
      combine: 'Usually, yes. If you take medication, or other supplements with the same ingredients, check with your doctor or pharmacist first, and never exceed the daily dose.',
      origin: 'Our shilajit comes from the heights of Skardu in Pakistan, the gateway to K2, where it is hand-collected above 5,000 metres and slowly sun-dried.',
      last: { resin: 'It depends on your daily serving. Follow the dose on your label: a 30 g jar holds many servings.', gummies: 'One tin holds 60 gummies: 30 servings of two, so one month of daily use.', drops: 'At 3 drops a day, one 30 ml bottle lasts for months.', capsules: 'One bottle holds 60 capsules: 30 servings of two, so one month of daily use.' },
      taste: { resin: 'Earthy and smoky, as real resin should be. A little honey in warm tea softens it.', gummies: 'Strawberry, in a soft gummy with a gentle earthy note.', drops: 'Elderberry, with the natural earthy depth of shilajit.', capsules: 'Nothing at all. The capsule keeps it tasteless.' },
    },
  },
  sticky: { choose: 'Choose & buy' },
};

const da = {
  proof: ['Høstet over 5.000 m', '83,1 % fulvinsyre*', '85+ mineraler*', 'Rapport for hver batch', 'Dansk brand', '60 dages penge-tilbage-garanti'],
  lab: {
    eyebrow: 'Målt i laboratoriet', h: '83,1 % fulvinsyre.', hg: 'Målt, ikke anslået.',
    p: 'Af alt i shilajit er fulvinsyren det, den er kendt for, og det tal, de fleste etiketter udelader. Vi har fået vores målt af et uafhængigt laboratorium, og vi trykker det på pakken.',
    result: 'Resultat', method: 'Metode', lab: 'Laboratorium', labName: 'Uafhængigt EU-laboratorium', report: 'Rapport', batch: 'Batch', fulvicLabel: 'fulvinsyre',
    metalsH: 'Tungmetaller langt under EU’s grænser', metalsP: 'Hver batch testes for bly, cadmium og kviksølv mod EU’s grænseværdier for kosttilskud.',
    limit: 'EU-grænse', ofLimit: (p) => `${p} % af grænsen`, metals: { lead: 'Bly', cadmium: 'Cadmium', mercury: 'Kviksølv' },
    cta: 'Find din batch', certs: 'Produceret under', example: 'Eksempel på rapport',
  },
  facts: {
    eyebrow: 'Fuld åbenhed', h: 'Hver mængde', hg: 'står på etiketten.',
    p: 'Ingen hemmelige blandinger og ingen skjulte doser. Det her er præcis, hvad du får i hver portion.',
    perServing: 'Pr. portion', amount: 'Mængde', nrv: '% NRV*', nrvNote: '*NRV = referenceindtag. † Intet referenceindtag fastsat.',
    resinH: 'Typisk analyse', resinServing: 'Pr. krukke', resinRows: [['Shilajit resin', '100 %'], ['Fulvinsyre', '83,1 %'], ['Mineraler og sporstoffer', '85+'], ['Fyldstoffer, bærestoffer, aroma', 'Ingen']],
    free: ['Ingen fyldstoffer', 'Ingen bærestoffer', 'Ingen tilsat aroma', 'Ingen konserveringsmidler'],
    claimsH: 'Godkendte ernæringsanprisninger',
    claims: ['Zink bidrager til immunsystemets normale funktion.', 'Zink bidrager til at opretholde normalt hår, normale negle og normal hud.', 'Selen bidrager til at beskytte cellerne mod oxidativt stress.', 'Selen bidrager til normal skjoldbruskkirtelfunktion.'],
  },
  inside: {
    eyebrow: 'Hvad er der i', h: 'Indeni hver', hg: { resin: 'krukke.', gummies: 'vingummi.', drops: 'dråbe.', capsules: 'kapsel.' },
    p: { resin: 'Én ingrediens, mange dele. Det her er, hvad naturen lægger i ægte Himalaya-resin.', formula: 'Himalaya shilajit med seks følgeingredienser, hver med sin mængde på etiketten.' },
    resin: [
      { k: 'fulvic', t: 'Fulvinsyre', v: '83,1 %', d: 'De vandopløselige organiske syrer, shilajit er kendt for, målt af et uafhængigt laboratorium.' },
      { k: 'minerals', t: 'Mineraler og sporstoffer', v: '85+', d: 'Naturligt til stede i klippen, den siver ud af. Intet tilsat, og hver batch testes for tungmetaller.' },
      { k: 'humic', t: 'Humusstoffer', d: 'Større organiske molekyler, der giver resinen dens dybe farve og tykke, klæbrige konsistens.' },
      { k: 'dbp', t: 'Dibenzo-α-pyroner', d: 'Markørstoffer, der hjælper laboratorier med at skelne ægte shilajit fra efterligninger.' },
      { k: 'amino', t: 'Aminosyrer', d: 'Naturligt til stede i små mængder. Et spor, ikke en proteinkilde.' },
      { k: 'origin', t: 'Fra Skardu', v: '5.000 m', d: 'Håndindsamlet over 5.000 m i Skardu, Pakistan, langt fra veje og industri.' },
    ],
    formula: {
      shilajit: { t: 'Shilajit', d: 'Himalaya shilajit fra Skardu, hjertet i hver portion.' },
      citrulline: { t: 'L-citrullin', d: 'En aminosyre, først fundet i vandmelon.' },
      ginseng: { t: 'Panax ginseng', d: 'Rodekstrakt af koreansk ginseng, en klassiker i østasiatisk tradition.' },
      zinc: { t: 'Zink', d: 'Et essentielt sporstof.' },
      selenium: { t: 'Selen', d: 'Et essentielt sporstof.' },
      seamoss: { t: 'Sea moss', d: 'Rødalge, også kaldet irsk mos, fra Atlanterhavskysten.' },
      blackseed: { t: 'Sortkommen', d: 'Frø af Nigella sativa, brugt i køkkener fra Marokko til Indien.' },
    },
  },
  reviews: {
    eyebrow: 'Anmeldelser', h: 'Det siger', hg: 'kunderne.', p: 'Anmeldelser af netop dette produkt.',
    basis: 'Eksempel på bedømmelse', videosH: 'Videoanmeldelser', play: 'Afspil video',
    caps: ['Udpakning', 'Min morgenrutine', 'Første smag', 'Derfor valgte jeg den', 'I min taske', 'Gaveudpakning'],
    name: 'Kundens navn', places: ['København', 'Aarhus', 'Odense'], write: 'Skriv en anmeldelse',
    text: {
      resin: ['Eksempel på anmeldelse. Tyk, blank resin, der opløses helt i varm te. Man kan mærke, at det er den ægte vare.', 'Eksempel på anmeldelse. Æsken og krukken føles virkelig eksklusive. Godt at kunne læse rapporten for min batch.', 'Eksempel på anmeldelse. Jordagtig og røget smag, blødere med lidt honning. Nem at gøre til en del af morgenen.'],
      gummies: ['Eksempel på anmeldelse. Jordbærsmagen er behagelig, og to vingummi passer nemt ind i min morgen.', 'Eksempel på anmeldelse. Dåsen lukker tæt og ser flot ud på køkkenhylden.', 'Eksempel på anmeldelse. Rart at se hver mængde på etiketten. Intet gætteri.'],
      drops: ['Eksempel på anmeldelse. Tre dråber i morgenteen, færdig. Pipetten gør det nemt at afmåle.', 'Eksempel på anmeldelse. Hyldebærsmagen fungerer rigtig godt. Gaverøret er smukt.', 'Eksempel på anmeldelse. Kom hurtigt og godt pakket. Det ravfarvede glas føles solidt.'],
      capsules: ['Eksempel på anmeldelse. To kapsler med vand, og så er det klaret. Ingen smag overhovedet.', 'Eksempel på anmeldelse. Tydelig etiket med alle mængder. Bøtten og æsken ser eksklusive ud.', 'Eksempel på anmeldelse. Perfekt på rejsen. Jeg har bøtten stående ved kaffen.'],
    },
  },
  myths: {
    eyebrow: 'Myte eller fakta', h: 'Lad os rydde', hg: 'op i myterne.', p: 'De mest udbredte misforståelser om shilajit, og hvad der faktisk er sandt.',
    myth: 'Myte', fact: 'Fakta', tap: 'Tryk for at se fakta', back: 'Tilbage til myten',
    shared: [
      ['Al shilajit er ens.', 'Oprindelse, form og test gør forskellen. Vores kommer fra Skardu over 5.000 m, og hver batch har sin egen rapport.'],
      ['Shilajit er kun for mænd.', 'Den er for voksne, kvinder og mænd, med samme daglige dosis på etiketten. Ikke til børn eller gravide.'],
      ['Mere er bedre.', 'Hold dig til den daglige dosis på etiketten. En fast daglig rutine betyder mere end en større mængde.'],
    ],
    resin: ['Kogende vand opløser den hurtigere.', 'Brug varmt vand eller te, aldrig kogende. Giv den et par minutter og en omrøring, så opløses den helt.'],
    gummies: ['Vingummi er bare slik.', 'Hver portion på to vingummi indeholder 500 mg shilajit plus seks følgeingredienser, alle mængder på etiketten.'],
    drops: ['Dråber skal stå i køleskabet.', 'Opbevar dem ved stuetemperatur, godt lukket. Køleskab er ikke nødvendigt.'],
    capsules: ['Kapsler skjuler, hvad der er i.', 'Hver ingrediens og hver mængde står på etiketten: 500 mg shilajit pr. portion på to kapsler.'],
    powder: ["Ægte shilajit er et tørt pulver.", "Ren shilajit er en klæbrig resin. Den bliver blød i varme hænder og fast, når den er kølig. Pulvere er ofte forarbejdede og kan indeholde fyldstoffer."],
  },
  guarantee: {
    eyebrow: 'Ingen risiko', h: '60 dages', hg: 'penge-tilbage-garanti.',
    p: 'Prøv den som en del af dit daglige ritual. Er den ikke noget for dig, så kontakt os inden for 60 dage, og du får alle pengene tilbage.',
    cta: 'Vælg din løsning', points: ['Rapport for hver batch', 'Sikker betaling', 'Dansk brand'],
  },
  faq: {
    eyebrow: 'Spørgsmål', h: 'Godt at', hg: 'vide.',
    q: { who: 'Hvem er den til?', tested: 'Hvordan testes den?', combine: 'Kan jeg kombinere den med andre kosttilskud?', origin: 'Hvor kommer den fra?', last: 'Hvor længe holder en pakke?', taste: 'Hvordan smager den?' },
    a: {
      tested: 'Hver batch testes af et uafhængigt laboratorium for tungmetaller (bly, cadmium, kviksølv), mikrobiologi og fulvinsyre. Indtast batchnummeret fra din pakke på siden Laboratorieresultater for at læse rapporten.',
      combine: 'Som regel, ja. Tager du medicin eller andre kosttilskud med de samme ingredienser, så tal først med din læge eller apoteket, og overskrid aldrig den daglige dosis.',
      origin: 'Vores shilajit kommer fra højderne ved Skardu i Pakistan, porten til K2, hvor den håndindsamles over 5.000 meter og soltørres langsomt.',
      last: { resin: 'Det afhænger af din daglige portion. Følg dosis på etiketten: en krukke på 30 g rummer mange portioner.', gummies: 'En dåse indeholder 60 vingummi: 30 portioner á to, altså en måneds daglig brug.', drops: 'Med 3 dråber om dagen holder en flaske på 30 ml i flere måneder.', capsules: 'En bøtte indeholder 60 kapsler: 30 portioner á to, altså en måneds daglig brug.' },
      taste: { resin: 'Jordagtig og røget, som ægte resin skal være. Lidt honning i varm te gør den blødere.', gummies: 'Jordbær, i en blød vingummi med en mild jordagtig tone.', drops: 'Hyldebær, med shilajits naturlige jordagtige dybde.', capsules: 'Slet ikke. Kapslen gør den smagsfri.' },
    },
  },
  sticky: { choose: 'Vælg og køb' },
};

export const PDP = { en, da, ...PDP_MORE };
export const pdpText = (lang) => PDP[lang] || en;

// Folder in /public/images/pdp/ for a product (falls back per family).
const DIRS = ['gold-resin', 'silver-resin', 'gummies', 'drops', 'capsules'];
const FALLBACK = { resin: 'gold-resin', gummies: 'gummies', drops: 'drops', capsules: 'capsules' };
export function mediaDir(handle = '', kind = 'resin') {
  const d = handle.replace(/^shilajit-/, '');
  return `/images/pdp/${DIRS.includes(d) ? d : FALLBACK[kind]}`;
}

// Product FAQ (used by the section and by the FAQPage structured data).
export function faqItems(product, kind, lang) {
  const t = pdpText(lang).faq;
  return [
    { q: t.q.who, a: product.caution },
    { q: t.q.taste, a: t.a.taste[kind] },
    { q: t.q.last, a: t.a.last[kind] },
    { q: t.q.tested, a: t.a.tested },
    { q: t.q.origin, a: t.a.origin },
    { q: t.q.combine, a: t.a.combine },
  ].filter((x) => x.q && x.a);
}
