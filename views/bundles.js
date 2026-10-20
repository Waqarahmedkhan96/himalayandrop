import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import BundleCard from '@/components/BundleCard';
import JsonLd from '@/components/JsonLd';
import Accordion from '@/components/Accordion';
import { SectionHead, FeatureGrid } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import { getDemoBundles, maxSaving } from '@/lib/bundles';
import { getProduct, isShopifyConnected } from '@/lib/shopify';
import { pageMeta, abs } from '@/lib/seo';
import { tr, localizeHref } from '@/lib/i18n';

export const meta = (lang) => pageMeta('bundles', lang, '/bundles/');

// With Shopify connected, each bundle's price, stock and variant come from the
// Shopify product with the same handle.
async function getBundles(lang) {
  const demo = getDemoBundles(lang);
  if (!isShopifyConnected) return demo;
  return Promise.all(
    demo.map(async (b) => {
      try {
        const p = await getProduct(b.handle, lang);
        return p ? { ...b, amount: p.amount ?? b.amount, currency: p.currency, variantId: p.variantId, available: p.available } : b;
      } catch {
        return b;
      }
    })
  );
}

const T = {
  en: {
    hero: (n) => ({ eyebrow: 'Bundles', title: 'Save up to', accent: `${n}%.`, lead: 'Our products, paired into sets for every kind of day. One order, one parcel, and a better price than buying separately.' }),
    trust: ['Lab report for every batch', '60-day money-back guarantee', 'Shipped together in one parcel'],
    s1: { eyebrow: 'Choose your bundle', title: 'Sets made', accent: 'to be shared.' },
    s2: { eyebrow: 'Why a bundle', title: 'More ritual,', accent: 'less spend.' },
    why: [
      { icon: 'star', title: 'A better price', text: 'Every bundle costs less than buying the same products one by one.' },
      { icon: 'sun', title: 'Formats that fit your day', text: 'Resin for slow mornings at home, gummies, capsules or drops for busy days and travel.' },
      { icon: 'gift', title: 'Ready to give', text: 'Our products come in gift-ready packaging, so a bundle makes an easy, thoughtful present.' },
    ],
    s3: { eyebrow: 'Questions', title: 'Good to know', accent: 'about bundles.' },
    faq: [
      { q: 'Can I use two formats on the same day?', a: 'Each product has its own daily dose on the label. Most people use one format per day, for example resin at home and gummies when they travel. Do not take the full daily dose of several shilajit products on the same day, and ask your doctor if you are unsure.' },
      { q: 'Does every product in a bundle have a lab report?', a: 'Yes. Each product carries its own batch number, and you can look up its report on our Lab results page.' },
      { q: 'Does the 60-day guarantee apply to bundles?', a: 'Yes. If you are not satisfied, contact us within 60 days of delivery and we refund your purchase.' },
      { q: 'Can I send a bundle as a gift?', a: 'Yes. Gift of the Mountain is made for it, and every product comes in gift-ready packaging. Add the recipient’s address at checkout.' },
    ],
  },
  da: {
    hero: (n) => ({ eyebrow: 'Sæt', title: 'Spar op til', accent: `${n}%.`, lead: 'Vores produkter samlet i sæt til alle slags dage. Én ordre, én pakke og en bedre pris end at købe dem hver for sig.' }),
    trust: ['Laboratorierapport for hver batch', '60 dages penge-tilbage-garanti', 'Sendes samlet i én pakke'],
    s1: { eyebrow: 'Vælg dit sæt', title: 'Sæt skabt', accent: 'til at deles.' },
    s2: { eyebrow: 'Hvorfor et sæt', title: 'Mere ritual,', accent: 'mindre forbrug.' },
    why: [
      { icon: 'star', title: 'En bedre pris', text: 'Hvert sæt koster mindre end de samme produkter købt hver for sig.' },
      { icon: 'sun', title: 'Former, der passer til din dag', text: 'Resin til rolige morgener derhjemme, vingummi, kapsler eller dråber til travle dage og rejser.' },
      { icon: 'gift', title: 'Klar til at give', text: 'Vores produkter kommer i gaveklar emballage, så et sæt er en nem og gennemtænkt gave.' },
    ],
    s3: { eyebrow: 'Spørgsmål', title: 'Godt at vide', accent: 'om sæt.' },
    faq: [
      { q: 'Kan jeg bruge to former samme dag?', a: 'Hvert produkt har sin egen daglige dosis på etiketten. De fleste bruger én form om dagen, for eksempel resin derhjemme og vingummi på rejsen. Tag ikke den fulde daglige dosis af flere shilajit-produkter samme dag, og spørg din læge, hvis du er i tvivl.' },
      { q: 'Har alle produkter i et sæt en laboratorierapport?', a: 'Ja. Hvert produkt har sit eget batchnummer, og du kan finde rapporten på siden Laboratorieresultater.' },
      { q: 'Gælder 60 dages garanti også for sæt?', a: 'Ja. Er du ikke tilfreds, så kontakt os inden for 60 dage efter levering, så refunderer vi dit køb.' },
      { q: 'Kan jeg sende et sæt som gave?', a: 'Ja. Gift of the Mountain er lavet til det, og alle produkter kommer i gaveklar emballage. Skriv modtagerens adresse i checkout.' },
    ],
  },
  de: {
    hero: (n) => ({ eyebrow: 'Sets', title: 'Spare bis zu', accent: `${n} %.`, lead: 'Unsere Produkte, kombiniert zu Sets für jeden Tag. Eine Bestellung, ein Paket und ein besserer Preis als einzeln.' }),
    trust: ['Laborbericht für jede Charge', '60 Tage Geld-zurück-Garantie', 'Zusammen in einem Paket versendet'],
    s1: { eyebrow: 'Wähle dein Set', title: 'Sets, gemacht', accent: 'zum Teilen.' },
    s2: { eyebrow: 'Warum ein Set', title: 'Mehr Ritual,', accent: 'weniger Ausgaben.' },
    why: [
      { icon: 'star', title: 'Ein besserer Preis', text: 'Jedes Set kostet weniger als dieselben Produkte einzeln gekauft.' },
      { icon: 'sun', title: 'Formen für deinen Tag', text: 'Harz für ruhige Morgen zu Hause, Gummies, Kapseln oder Tropfen für volle Tage und Reisen.' },
      { icon: 'gift', title: 'Bereit zum Verschenken', text: 'Unsere Produkte kommen in geschenkfertiger Verpackung, ein Set ist also ein einfaches, durchdachtes Geschenk.' },
    ],
    s3: { eyebrow: 'Fragen', title: 'Gut zu wissen', accent: 'über Sets.' },
    faq: [
      { q: 'Kann ich zwei Formen am selben Tag verwenden?', a: 'Jedes Produkt hat seine eigene Tagesdosis auf dem Etikett. Die meisten nutzen eine Form pro Tag, zum Beispiel Harz zu Hause und Gummies auf Reisen. Nimm nicht die volle Tagesdosis mehrerer Shilajit-Produkte am selben Tag, und frag im Zweifel deine Ärztin oder deinen Arzt.' },
      { q: 'Hat jedes Produkt im Set einen Laborbericht?', a: 'Ja. Jedes Produkt trägt seine eigene Chargennummer, und du findest den Bericht auf unserer Seite Laborergebnisse.' },
      { q: 'Gilt die 60-Tage-Garantie auch für Sets?', a: 'Ja. Wenn du nicht zufrieden bist, melde dich innerhalb von 60 Tagen nach Lieferung und wir erstatten deinen Kauf.' },
      { q: 'Kann ich ein Set verschenken?', a: 'Ja. Gift of the Mountain ist genau dafür gemacht, und jedes Produkt kommt geschenkfertig verpackt. Gib an der Kasse die Adresse des Empfängers an.' },
    ],
  },
  fr: {
    hero: (n) => ({ eyebrow: 'Coffrets', title: 'Jusqu’à', accent: `-${n} %.`, lead: 'Nos produits réunis en coffrets pour chaque type de journée. Une commande, un colis et un meilleur prix qu’à l’unité.' }),
    trust: ['Rapport de laboratoire pour chaque lot', 'Garantie satisfait ou remboursé 60 jours', 'Expédiés ensemble dans un seul colis'],
    s1: { eyebrow: 'Choisissez votre coffret', title: 'Des coffrets faits', accent: 'pour être partagés.' },
    s2: { eyebrow: 'Pourquoi un coffret', title: 'Plus de rituel,', accent: 'moins de dépenses.' },
    why: [
      { icon: 'star', title: 'Un meilleur prix', text: 'Chaque coffret coûte moins cher que les mêmes produits achetés séparément.' },
      { icon: 'sun', title: 'Des formats pour votre journée', text: 'La résine pour les matins calmes, les gommes, gélules ou gouttes pour les journées chargées et les voyages.' },
      { icon: 'gift', title: 'Prêt à offrir', text: 'Nos produits sont présentés dans un emballage cadeau : un coffret est un présent simple et attentionné.' },
    ],
    s3: { eyebrow: 'Questions', title: 'Bon à savoir', accent: 'sur les coffrets.' },
    faq: [
      { q: 'Puis-je utiliser deux formats le même jour ?', a: 'Chaque produit a sa propre dose journalière sur l’étiquette. La plupart des gens utilisent un format par jour, par exemple la résine à la maison et les gommes en voyage. Ne prenez pas la dose journalière complète de plusieurs produits au shilajit le même jour, et demandez l’avis de votre médecin en cas de doute.' },
      { q: 'Chaque produit du coffret a-t-il un rapport de laboratoire ?', a: 'Oui. Chaque produit porte son propre numéro de lot, et vous pouvez consulter son rapport sur notre page Résultats de laboratoire.' },
      { q: 'La garantie de 60 jours s’applique-t-elle aux coffrets ?', a: 'Oui. Si vous n’êtes pas satisfait, contactez-nous dans les 60 jours suivant la livraison et nous vous remboursons.' },
      { q: 'Puis-je offrir un coffret ?', a: 'Oui. Gift of the Mountain est fait pour cela, et chaque produit arrive dans un emballage cadeau. Indiquez l’adresse du destinataire lors du paiement.' },
    ],
  },
  es: {
    hero: (n) => ({ eyebrow: 'Packs', title: 'Ahorra hasta', accent: `un ${n} %.`, lead: 'Nuestros productos combinados en packs para cada tipo de día. Un pedido, un paquete y mejor precio que por separado.' }),
    trust: ['Informe de laboratorio para cada lote', 'Garantía de devolución de 60 días', 'Enviados juntos en un solo paquete'],
    s1: { eyebrow: 'Elige tu pack', title: 'Packs pensados', accent: 'para compartir.' },
    s2: { eyebrow: 'Por qué un pack', title: 'Más ritual,', accent: 'menos gasto.' },
    why: [
      { icon: 'star', title: 'Mejor precio', text: 'Cada pack cuesta menos que comprar los mismos productos por separado.' },
      { icon: 'sun', title: 'Formatos para tu día', text: 'Resina para mañanas tranquilas en casa; gominolas, cápsulas o gotas para días ocupados y viajes.' },
      { icon: 'gift', title: 'Listo para regalar', text: 'Nuestros productos vienen en un envase listo para regalar, así que un pack es un regalo fácil y cuidado.' },
    ],
    s3: { eyebrow: 'Preguntas', title: 'Bueno saberlo', accent: 'sobre los packs.' },
    faq: [
      { q: '¿Puedo usar dos formatos el mismo día?', a: 'Cada producto tiene su propia dosis diaria en la etiqueta. La mayoría usa un formato al día, por ejemplo resina en casa y gominolas de viaje. No tomes la dosis diaria completa de varios productos de shilajit el mismo día y consulta a tu médico si tienes dudas.' },
      { q: '¿Cada producto del pack tiene informe de laboratorio?', a: 'Sí. Cada producto lleva su propio número de lote y puedes consultar su informe en nuestra página Resultados de laboratorio.' },
      { q: '¿La garantía de 60 días se aplica a los packs?', a: 'Sí. Si no estás satisfecho, escríbenos en los 60 días siguientes a la entrega y te devolvemos el dinero.' },
      { q: '¿Puedo enviar un pack como regalo?', a: 'Sí. Gift of the Mountain está pensado para eso, y cada producto viene en envase de regalo. Añade la dirección del destinatario al pagar.' },
    ],
  },
  ar: {
    hero: (n) => ({ eyebrow: 'المجموعات', title: 'وفّر حتى', accent: `${n}%.`, lead: 'منتجاتنا في مجموعات تناسب كل أنواع الأيام. طلب واحد وطرد واحد وسعر أفضل من الشراء منفرداً.' }),
    trust: ['تقرير مخبري لكل دفعة', 'ضمان استرداد المال لمدة 60 يوماً', 'تُشحن معاً في طرد واحد'],
    s1: { eyebrow: 'اختر مجموعتك', title: 'مجموعات صُممت', accent: 'لتُشارك.' },
    s2: { eyebrow: 'لماذا مجموعة', title: 'طقوس أكثر،', accent: 'إنفاق أقل.' },
    why: [
      { icon: 'star', title: 'سعر أفضل', text: 'كل مجموعة تكلف أقل من شراء المنتجات نفسها كلٌّ على حدة.' },
      { icon: 'sun', title: 'أشكال تناسب يومك', text: 'الراتنج لصباحات هادئة في المنزل، والعلكات أو الكبسولات أو القطرات للأيام المزدحمة والسفر.' },
      { icon: 'gift', title: 'جاهزة للإهداء', text: 'تأتي منتجاتنا في تغليف جاهز للإهداء، فالمجموعة هدية سهلة ومدروسة.' },
    ],
    s3: { eyebrow: 'أسئلة', title: 'معلومات مفيدة', accent: 'عن المجموعات.' },
    faq: [
      { q: 'هل يمكنني استخدام شكلين في اليوم نفسه؟', a: 'لكل منتج جرعته اليومية على الملصق. يستخدم معظم الناس شكلاً واحداً يومياً، مثل الراتنج في المنزل والعلكات في السفر. لا تتناول الجرعة اليومية الكاملة لعدة منتجات شيلاجيت في اليوم نفسه، واستشر طبيبك إن كنت غير متأكد.' },
      { q: 'هل لكل منتج في المجموعة تقرير مخبري؟', a: 'نعم. يحمل كل منتج رقم دفعته الخاص، ويمكنك الاطلاع على تقريره في صفحة نتائج المختبر.' },
      { q: 'هل يشمل ضمان الـ60 يوماً المجموعات؟', a: 'نعم. إن لم تكن راضياً، تواصل معنا خلال 60 يوماً من الاستلام وسنعيد لك المبلغ.' },
      { q: 'هل يمكنني إرسال مجموعة كهدية؟', a: 'نعم. صُممت مجموعة Gift of the Mountain لذلك، وكل منتج يأتي في تغليف جاهز للإهداء. أضف عنوان المستلم عند الدفع.' },
    ],
  },
  ur: {
    hero: (n) => ({ eyebrow: 'بنڈلز', title: 'بچت کریں', accent: `${n}% تک۔`, lead: 'ہماری مصنوعات ہر طرح کے دن کے لیے سیٹس میں۔ ایک آرڈر، ایک پارسل، اور الگ الگ خریدنے سے بہتر قیمت۔' }),
    trust: ['ہر بیچ کی لیب رپورٹ', '60 دن کی منی بیک گارنٹی', 'ایک ہی پارسل میں ترسیل'],
    s1: { eyebrow: 'اپنا بنڈل منتخب کریں', title: 'سیٹس جو بانٹنے', accent: 'کے لیے بنے۔' },
    s2: { eyebrow: 'بنڈل کیوں', title: 'زیادہ معمول،', accent: 'کم خرچ۔' },
    why: [
      { icon: 'star', title: 'بہتر قیمت', text: 'ہر بنڈل انہی مصنوعات کو الگ الگ خریدنے سے سستا ہے۔' },
      { icon: 'sun', title: 'آپ کے دن کے مطابق', text: 'گھر پر پُرسکون صبح کے لیے ریزن، مصروف دنوں اور سفر کے لیے گمیز، کیپسول یا ڈراپس۔' },
      { icon: 'gift', title: 'تحفے کے لیے تیار', text: 'ہماری مصنوعات تحفے کے قابل پیکنگ میں آتی ہیں، اس لیے بنڈل ایک آسان اور خوبصورت تحفہ ہے۔' },
    ],
    s3: { eyebrow: 'سوالات', title: 'بنڈلز کے بارے میں', accent: 'جاننے کی باتیں۔' },
    faq: [
      { q: 'کیا میں ایک ہی دن دو شکلیں استعمال کر سکتا ہوں؟', a: 'ہر پروڈکٹ کی اپنی روزانہ خوراک لیبل پر درج ہے۔ زیادہ تر لوگ روزانہ ایک شکل استعمال کرتے ہیں، مثلاً گھر پر ریزن اور سفر میں گمیز۔ ایک ہی دن کئی سلاجیت مصنوعات کی پوری روزانہ خوراک نہ لیں، اور شک ہو تو ڈاکٹر سے مشورہ کریں۔' },
      { q: 'کیا بنڈل کی ہر پروڈکٹ کی لیب رپورٹ ہے؟', a: 'جی ہاں۔ ہر پروڈکٹ کا اپنا بیچ نمبر ہے اور آپ ہمارے لیب رپورٹس کے صفحے پر اس کی رپورٹ دیکھ سکتے ہیں۔' },
      { q: 'کیا 60 دن کی گارنٹی بنڈلز پر بھی ہے؟', a: 'جی ہاں۔ اگر آپ مطمئن نہیں تو ترسیل کے 60 دن کے اندر رابطہ کریں، ہم رقم واپس کر دیں گے۔' },
      { q: 'کیا میں بنڈل تحفے میں بھیج سکتا ہوں؟', a: 'جی ہاں۔ Gift of the Mountain اسی کے لیے ہے، اور ہر پروڈکٹ تحفے کی پیکنگ میں آتی ہے۔ چیک آؤٹ پر وصول کنندہ کا پتہ درج کریں۔' },
    ],
  },
};

export default async function BundlesView({ lang }) {
  const t = tr(T, lang);
  const bundles = await getBundles(lang);
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: bundles.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, url: abs(`${localizeHref('/bundles/', lang)}#${b.handle}`) })),
  };
  return (
    <>
      <JsonLd data={list} />
      <PageHero {...t.hero(maxSaving())} />

      <section className="section tight-top bundles-trust-wrap">
        <ul className="bundles-trust container">
          {t.trust.map((x, i) => (
            <li key={x}><Icon name={['flask', 'shield', 'box'][i]} size={16} /> {x}</li>
          ))}
        </ul>
      </section>

      <Reveal as="section" className="section tight-top" id="choose">
        <div className="container">
          <SectionHead {...t.s1} />
          <div className="bundle-grid" data-reveal="stagger">
            {bundles.map((b) => <BundleCard key={b.handle} bundle={b} />)}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s2} />
          <FeatureGrid items={t.why} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container narrow">
          <SectionHead {...t.s3} />
          <div className="faq-list" data-reveal>
            <Accordion items={t.faq} idPrefix="bfaq" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
