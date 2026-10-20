import Link from '@/components/LLink';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FaqBrowser from '@/components/FaqBrowser';
import JsonLd from '@/components/JsonLd';
import { Arrow } from '@/components/Arrow';
import Sources from '@/components/Sources';
import { refs } from '@/lib/sources';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

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
          { q: 'What is the difference between Gold and Silver Resin?', a: 'Both are pure shilajit resin. The Gold Edition is our signature resin from Skardu in a gift-ready box; the Silver Edition is our everyday resin.' },
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
          { q: 'Hvad er forskellen på Gold og Silver Resin?', a: 'Begge er ren shilajit resin. Gold Edition er vores signaturresin fra Skardu i en gaveæske; Silver Edition er vores resin til hverdagen.' },
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
};

export default function FaqView({ lang }) {
  const t = tr(T, lang);
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
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
