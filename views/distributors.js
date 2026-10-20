import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SimpleForm from '@/components/SimpleForm';
import DistributorNetwork from '@/components/DistributorNetwork';
import JsonLd from '@/components/JsonLd';
import { SectionHead, FeatureGrid } from '@/components/Blocks';
import { COUNTRIES, networkStats, locationLabel } from '@/lib/distributors';
import { pageMeta, abs } from '@/lib/seo';
import { tr, localizeHref } from '@/lib/i18n';

export const meta = (lang) => pageMeta('distributors', lang, '/distributors/');

const T = {
  en: {
    hero: { eyebrow: 'Distributors', title: 'From Skardu', accent: 'to the world.', lead: 'Find Himalayan Drop near you through our partners across Europe, the Middle East and Pakistan, or join the network yourself.' },
    stats: (s) => [[s.countries, 'Countries'], [s.cities, 'Cities'], [s.regions, 'Regions'], [s.contacts, 'Local contacts']],
    net: { eyebrow: 'Our growing network', title: 'Wherever you are,', accent: 'we are close.', lead: 'Every route starts in Skardu, where our shilajit is harvested above 5,000 metres. Choose a country on the map or a region below.' },
    s: { eyebrow: 'Why partner with us', title: 'Built to sell', accent: 'with confidence.' },
    why: [
      { icon: 'star', title: 'A premium brand', text: 'Gift-ready packaging in maroon and gold that stands out on any shelf.' },
      { icon: 'shield', title: 'Proof built in', text: 'Batch numbers and lab reports your customers can check themselves.' },
      { icon: 'box', title: 'Four formats', text: 'Resin, gummies, drops and capsules, for every kind of customer.' },
      { icon: 'globe', title: 'Support from Denmark', text: 'Product training, marketing assets and a direct contact person.' },
    ],
    apply: 'Come on board', applyP: 'Looking for a partner near you, or want to become one? Tell us where you are and we will connect you within two working days.',
    form: {
      submit: 'Send message', thanks: 'Message received.', thanksText: 'Thank you. Our partner team will reply by email.',
      name: 'Your name', company: 'Company (optional)', email: 'Email', phone: 'Phone', location: 'Nearest location', other: 'Other / not listed',
      intent: 'I would like to', intents: ['Buy from a partner near me', 'Become a distributor', 'Stock Himalayan Drop in my store', 'Something else'],
      message: 'Message', consent: 'I agree that Himalayan Drop and the partner in my area may use my details to answer this message.',
    },
    become: 'Become a distributor', becomeP: 'Retailers, clinics, gyms and regional distributors who share our standards are welcome. Your city not on the map? Apply to be the first.',
    excl: 'Exclusive regions', exclP: 'Regional exclusivity is available for qualified distributors.',
  },
  da: {
    hero: { eyebrow: 'Forhandlere', title: 'Fra Skardu', accent: 'til hele verden.', lead: 'Find Himalayan Drop nær dig hos vores partnere i Europa, Mellemøsten og Pakistan, eller bliv selv en del af netværket.' },
    stats: (s) => [[s.countries, 'Lande'], [s.cities, 'Byer'], [s.regions, 'Regioner'], [s.contacts, 'Lokale kontakter']],
    net: { eyebrow: 'Vores voksende netværk', title: 'Uanset hvor du er,', accent: 'er vi tæt på.', lead: 'Hver rute starter i Skardu, hvor vores shilajit høstes over 5.000 meter. Vælg et land på kortet eller en region nedenfor.' },
    s: { eyebrow: 'Derfor skal du samarbejde med os', title: 'Skabt til at sælge', accent: 'med overbevisning.' },
    why: [
      { icon: 'star', title: 'Et premium-brand', text: 'Gaveklar emballage i bordeaux og guld, der skiller sig ud på enhver hylde.' },
      { icon: 'shield', title: 'Indbygget dokumentation', text: 'Batchnumre og laboratorierapporter, som dine kunder selv kan tjekke.' },
      { icon: 'box', title: 'Fire former', text: 'Resin, vingummi, dråber og kapsler, til alle typer kunder.' },
      { icon: 'globe', title: 'Support fra Danmark', text: 'Produkttræning, markedsføringsmateriale og en fast kontaktperson.' },
    ],
    apply: 'Bliv en del af det', applyP: 'Leder du efter en partner nær dig, eller vil du selv være en? Fortæl os, hvor du er, så sætter vi dig i forbindelse inden for to hverdage.',
    form: {
      submit: 'Send besked', thanks: 'Besked modtaget.', thanksText: 'Tak. Vores partnerteam svarer dig på e-mail.',
      name: 'Dit navn', company: 'Virksomhed (valgfri)', email: 'E-mail', phone: 'Telefon', location: 'Nærmeste lokation', other: 'Andet / ikke på listen',
      intent: 'Jeg vil gerne', intents: ['Købe hos en partner nær mig', 'Blive distributør', 'Forhandle Himalayan Drop i min butik', 'Noget andet'],
      message: 'Besked', consent: 'Jeg accepterer, at Himalayan Drop og partneren i mit område må bruge mine oplysninger til at besvare denne besked.',
    },
    become: 'Bliv forhandler', becomeP: 'Butikker, klinikker, træningscentre og regionale distributører, der deler vores standarder, er velkomne. Er din by ikke på kortet? Ansøg om at blive den første.',
    excl: 'Eksklusive regioner', exclP: 'Regional eksklusivitet er mulig for kvalificerede distributører.',
  },
  de: {
    hero: { eyebrow: 'Händler', title: 'Von Skardu', accent: 'in die Welt.', lead: 'Finde Himalayan Drop in deiner Nähe bei unseren Partnern in Europa, im Nahen Osten und in Pakistan, oder werde selbst Teil des Netzwerks.' },
    stats: (s) => [[s.countries, 'Länder'], [s.cities, 'Städte'], [s.regions, 'Regionen'], [s.contacts, 'Lokale Kontakte']],
    net: { eyebrow: 'Unser wachsendes Netzwerk', title: 'Wo immer du bist,', accent: 'wir sind nah.', lead: 'Jede Route beginnt in Skardu, wo unser Shilajit über 5.000 Metern geerntet wird. Wähle ein Land auf der Karte oder eine Region darunter.' },
    s: { eyebrow: 'Warum mit uns', title: 'Gemacht, um', accent: 'überzeugt zu verkaufen.' },
    why: [
      { icon: 'star', title: 'Eine Premium-Marke', text: 'Geschenkfertige Verpackung in Bordeaux und Gold, die in jedem Regal auffällt.' },
      { icon: 'shield', title: 'Eingebaute Nachweise', text: 'Chargennummern und Laborberichte, die deine Kunden selbst prüfen können.' },
      { icon: 'box', title: 'Vier Formen', text: 'Harz, Gummies, Tropfen und Kapseln, für jede Art von Kunde.' },
      { icon: 'globe', title: 'Support aus Dänemark', text: 'Produktschulung, Marketingmaterial und ein direkter Ansprechpartner.' },
    ],
    apply: 'Mach mit', applyP: 'Suchst du einen Partner in deiner Nähe oder möchtest selbst einer werden? Sag uns, wo du bist, und wir verbinden dich innerhalb von zwei Werktagen.',
    form: {
      submit: 'Nachricht senden', thanks: 'Nachricht erhalten.', thanksText: 'Danke. Unser Partnerteam antwortet dir per E-Mail.',
      name: 'Dein Name', company: 'Firma (optional)', email: 'E-Mail', phone: 'Telefon', location: 'Nächster Standort', other: 'Andere / nicht aufgeführt',
      intent: 'Ich möchte', intents: ['Bei einem Partner in meiner Nähe kaufen', 'Händler werden', 'Himalayan Drop in meinem Geschäft führen', 'Etwas anderes'],
      message: 'Nachricht', consent: 'Ich bin einverstanden, dass Himalayan Drop und der Partner in meiner Region meine Angaben zur Beantwortung dieser Nachricht verwenden.',
    },
    become: 'Händler werden', becomeP: 'Geschäfte, Praxen, Studios und regionale Händler, die unsere Standards teilen, sind willkommen. Deine Stadt ist nicht auf der Karte? Bewirb dich als Erster.',
    excl: 'Exklusive Regionen', exclP: 'Für qualifizierte Händler ist regionale Exklusivität möglich.',
  },
  fr: {
    hero: { eyebrow: 'Distributeurs', title: 'De Skardu', accent: 'au monde entier.', lead: 'Trouvez Himalayan Drop près de chez vous grâce à nos partenaires en Europe, au Moyen-Orient et au Pakistan, ou rejoignez vous-même le réseau.' },
    stats: (s) => [[s.countries, 'Pays'], [s.cities, 'Villes'], [s.regions, 'Régions'], [s.contacts, 'Contacts locaux']],
    net: { eyebrow: 'Notre réseau grandissant', title: 'Où que vous soyez,', accent: 'nous sommes proches.', lead: 'Chaque route part de Skardu, où notre shilajit est récolté au-dessus de 5 000 mètres. Choisissez un pays sur la carte ou une région ci-dessous.' },
    s: { eyebrow: 'Pourquoi devenir partenaire', title: 'Pensé pour', accent: 'vendre en confiance.' },
    why: [
      { icon: 'star', title: 'Une marque premium', text: 'Un emballage cadeau bordeaux et or qui se remarque sur chaque étagère.' },
      { icon: 'shield', title: 'Des preuves intégrées', text: 'Numéros de lot et rapports de laboratoire que vos clients peuvent vérifier eux-mêmes.' },
      { icon: 'box', title: 'Quatre formats', text: 'Résine, gommes, gouttes et gélules, pour chaque type de client.' },
      { icon: 'globe', title: 'Un soutien depuis le Danemark', text: 'Formation produit, supports marketing et un interlocuteur direct.' },
    ],
    apply: 'Rejoignez-nous', applyP: 'Vous cherchez un partenaire près de chez vous, ou voulez en devenir un ? Dites-nous où vous êtes et nous vous mettrons en relation sous deux jours ouvrés.',
    form: {
      submit: 'Envoyer le message', thanks: 'Message reçu.', thanksText: 'Merci. Notre équipe partenaires vous répondra par e-mail.',
      name: 'Votre nom', company: 'Société (facultatif)', email: 'E-mail', phone: 'Téléphone', location: 'Lieu le plus proche', other: 'Autre / non listé',
      intent: 'Je souhaite', intents: ['Acheter auprès d’un partenaire près de chez moi', 'Devenir distributeur', 'Vendre Himalayan Drop dans ma boutique', 'Autre chose'],
      message: 'Message', consent: 'J’accepte que Himalayan Drop et le partenaire de ma région utilisent mes données pour répondre à ce message.',
    },
    become: 'Devenir distributeur', becomeP: 'Boutiques, cabinets, salles de sport et distributeurs régionaux partageant nos exigences sont les bienvenus. Votre ville n’est pas sur la carte ? Soyez le premier.',
    excl: 'Régions exclusives', exclP: 'L’exclusivité régionale est possible pour les distributeurs qualifiés.',
  },
  es: {
    hero: { eyebrow: 'Distribuidores', title: 'De Skardu', accent: 'al mundo.', lead: 'Encuentra Himalayan Drop cerca de ti con nuestros socios en Europa, Oriente Medio y Pakistán, o únete tú mismo a la red.' },
    stats: (s) => [[s.countries, 'Países'], [s.cities, 'Ciudades'], [s.regions, 'Regiones'], [s.contacts, 'Contactos locales']],
    net: { eyebrow: 'Nuestra red en crecimiento', title: 'Estés donde estés,', accent: 'estamos cerca.', lead: 'Cada ruta empieza en Skardu, donde se recolecta nuestro shilajit a más de 5.000 metros. Elige un país en el mapa o una región abajo.' },
    s: { eyebrow: 'Por qué asociarte', title: 'Pensado para', accent: 'vender con confianza.' },
    why: [
      { icon: 'star', title: 'Una marca premium', text: 'Envase de regalo en granate y oro que destaca en cualquier estantería.' },
      { icon: 'shield', title: 'Pruebas incluidas', text: 'Números de lote e informes de laboratorio que tus clientes pueden comprobar.' },
      { icon: 'box', title: 'Cuatro formatos', text: 'Resina, gominolas, gotas y cápsulas, para cada tipo de cliente.' },
      { icon: 'globe', title: 'Apoyo desde Dinamarca', text: 'Formación de producto, material de marketing y un contacto directo.' },
    ],
    apply: 'Únete', applyP: '¿Buscas un socio cerca de ti o quieres serlo? Dinos dónde estás y te pondremos en contacto en dos días laborables.',
    form: {
      submit: 'Enviar mensaje', thanks: 'Mensaje recibido.', thanksText: 'Gracias. Nuestro equipo de socios te responderá por correo.',
      name: 'Tu nombre', company: 'Empresa (opcional)', email: 'Correo electrónico', phone: 'Teléfono', location: 'Ubicación más cercana', other: 'Otra / no aparece',
      intent: 'Quiero', intents: ['Comprar a un socio cerca de mí', 'Ser distribuidor', 'Vender Himalayan Drop en mi tienda', 'Otra cosa'],
      message: 'Mensaje', consent: 'Acepto que Himalayan Drop y el socio de mi zona usen mis datos para responder a este mensaje.',
    },
    become: 'Hazte distribuidor', becomeP: 'Tiendas, clínicas, gimnasios y distribuidores regionales que compartan nuestros estándares son bienvenidos. ¿Tu ciudad no está en el mapa? Sé el primero.',
    excl: 'Regiones exclusivas', exclP: 'La exclusividad regional está disponible para distribuidores cualificados.',
  },
  ar: {
    hero: { eyebrow: 'الموزعون', title: 'من سكردو', accent: 'إلى العالم.', lead: 'اعثر على Himalayan Drop بالقرب منك لدى شركائنا في أوروبا والشرق الأوسط وباكستان، أو انضم إلى الشبكة بنفسك.' },
    stats: (s) => [[s.countries, 'دولة'], [s.cities, 'مدينة'], [s.regions, 'مناطق'], [s.contacts, 'جهات اتصال محلية']],
    net: { eyebrow: 'شبكتنا المتنامية', title: 'أينما كنت،', accent: 'نحن قريبون.', lead: 'كل طريق يبدأ من سكردو، حيث يُجمع الشيلاجيت لدينا فوق 5000 متر. اختر دولة على الخريطة أو منطقة أدناه.' },
    s: { eyebrow: 'لماذا تشاركنا', title: 'صُمم لتبيع', accent: 'بثقة.' },
    why: [
      { icon: 'star', title: 'علامة فاخرة', text: 'تغليف جاهز للإهداء باللونين العنابي والذهبي يلفت الانتباه على أي رف.' },
      { icon: 'shield', title: 'إثبات مدمج', text: 'أرقام دفعات وتقارير مخبرية يستطيع عملاؤك التحقق منها بأنفسهم.' },
      { icon: 'box', title: 'أربعة أشكال', text: 'راتنج وعلكات وقطرات وكبسولات، لكل نوع من العملاء.' },
      { icon: 'globe', title: 'دعم من الدنمارك', text: 'تدريب على المنتج ومواد تسويقية وجهة اتصال مباشرة.' },
    ],
    apply: 'انضم إلينا', applyP: 'تبحث عن شريك بالقرب منك أو تريد أن تصبح شريكاً؟ أخبرنا أين أنت وسنوصلك خلال يومي عمل.',
    form: {
      submit: 'إرسال الرسالة', thanks: 'تم استلام رسالتك.', thanksText: 'شكراً لك. سيرد عليك فريق الشركاء عبر البريد الإلكتروني.',
      name: 'اسمك', company: 'الشركة (اختياري)', email: 'البريد الإلكتروني', phone: 'الهاتف', location: 'أقرب موقع', other: 'أخرى / غير مدرجة',
      intent: 'أرغب في', intents: ['الشراء من شريك قريب مني', 'أن أصبح موزعاً', 'بيع Himalayan Drop في متجري', 'شيء آخر'],
      message: 'الرسالة', consent: 'أوافق على أن تستخدم Himalayan Drop والشريك في منطقتي بياناتي للرد على هذه الرسالة.',
    },
    become: 'كن موزعاً', becomeP: 'نرحب بالمتاجر والعيادات والصالات الرياضية والموزعين الإقليميين الذين يشاركوننا معاييرنا. مدينتك ليست على الخريطة؟ كن الأول.',
    excl: 'مناطق حصرية', exclP: 'الحصرية الإقليمية متاحة للموزعين المؤهلين.',
  },
  ur: {
    hero: { eyebrow: 'ڈسٹری بیوٹرز', title: 'اسکردو سے', accent: 'دنیا بھر تک۔', lead: 'یورپ، مشرقِ وسطیٰ اور پاکستان میں ہمارے پارٹنرز کے ذریعے اپنے قریب Himalayan Drop تلاش کریں، یا خود نیٹ ورک کا حصہ بنیں۔' },
    stats: (s) => [[s.countries, 'ممالک'], [s.cities, 'شہر'], [s.regions, 'خطے'], [s.contacts, 'مقامی رابطے']],
    net: { eyebrow: 'ہمارا بڑھتا نیٹ ورک', title: 'آپ جہاں بھی ہوں،', accent: 'ہم قریب ہیں۔', lead: 'ہر راستہ اسکردو سے شروع ہوتا ہے، جہاں ہمارا سلاجیت 5,000 میٹر سے بلندی پر حاصل کیا جاتا ہے۔ نقشے پر ملک یا نیچے خطہ منتخب کریں۔' },
    s: { eyebrow: 'ہمارے ساتھ کیوں', title: 'اعتماد سے', accent: 'فروخت کے لیے۔' },
    why: [
      { icon: 'star', title: 'پریمیم برانڈ', text: 'میرون اور سنہری تحفے والی پیکنگ جو ہر شیلف پر نمایاں ہو۔' },
      { icon: 'shield', title: 'ساتھ موجود ثبوت', text: 'بیچ نمبر اور لیب رپورٹس جو آپ کے گاہک خود چیک کر سکیں۔' },
      { icon: 'box', title: 'چار شکلیں', text: 'ریزن، گمیز، ڈراپس اور کیپسول، ہر طرح کے گاہک کے لیے۔' },
      { icon: 'globe', title: 'ڈنمارک سے سپورٹ', text: 'پروڈکٹ ٹریننگ، مارکیٹنگ مواد اور براہِ راست رابطہ۔' },
    ],
    apply: 'ہمارے ساتھ شامل ہوں', applyP: 'اپنے قریب پارٹنر تلاش کر رہے ہیں یا خود پارٹنر بننا چاہتے ہیں؟ ہمیں بتائیں آپ کہاں ہیں، ہم دو کاروباری دنوں میں رابطہ کرا دیں گے۔',
    form: {
      submit: 'پیغام بھیجیں', thanks: 'پیغام موصول ہو گیا۔', thanksText: 'شکریہ۔ ہماری پارٹنر ٹیم ای میل پر جواب دے گی۔',
      name: 'آپ کا نام', company: 'کمپنی (اختیاری)', email: 'ای میل', phone: 'فون', location: 'قریب ترین مقام', other: 'دیگر / فہرست میں نہیں',
      intent: 'میں چاہتا/چاہتی ہوں', intents: ['اپنے قریب پارٹنر سے خریدنا', 'ڈسٹری بیوٹر بننا', 'اپنی دکان میں Himalayan Drop رکھنا', 'کچھ اور'],
      message: 'پیغام', consent: 'میں اتفاق کرتا/کرتی ہوں کہ Himalayan Drop اور میرے علاقے کا پارٹنر اس پیغام کا جواب دینے کے لیے میری معلومات استعمال کریں۔',
    },
    become: 'ڈسٹری بیوٹر بنیں', becomeP: 'ہمارے معیار کو اپنانے والی دکانیں، کلینکس، جم اور علاقائی ڈسٹری بیوٹرز خوش آمدید ہیں۔ آپ کا شہر نقشے پر نہیں؟ پہلے بنیں۔',
    excl: 'خصوصی علاقے', exclP: 'اہل ڈسٹری بیوٹرز کے لیے علاقائی خصوصی حقوق دستیاب ہیں۔',
  },
};

export default function DistributorsView({ lang }) {
  const t = tr(T, lang);
  const f = t.form;
  const stats = t.stats(networkStats());
  const locations = [...COUNTRIES.flatMap((c) => c.cities.map((city) => locationLabel(c, city, lang))), f.other];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Himalayan Drop',
    url: abs(localizeHref('/distributors/', lang)),
    areaServed: COUNTRIES.flatMap((c) => c.cities.map((city) => ({ '@type': 'City', name: city.en, containedInPlace: { '@type': 'Country', name: c.en } }))),
  };

  return (
    <>
      <JsonLd data={ld} />
      <PageHero {...t.hero} />

      <section className="section tight-top">
        <div className="container">
          <div className="stat-band stat-band-4" data-reveal>
            <svg className="stat-lines" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <path d="M0 200 L160 110 L230 150 L380 40 L500 130 L560 100 L720 170 L820 120 L1000 180 L1200 140" fill="none" stroke="#cca25e" strokeWidth="1.2" />
            </svg>
            <dl>
              {stats.map(([v, l]) => (
                <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section tight-top" id="network">
        <div className="container">
          <SectionHead {...t.net} />
          <DistributorNetwork formId="dist" />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.why} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top" id="apply">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>{t.apply}</h2>
            <p className="muted">{t.applyP}</p>
            <SimpleForm
              id="dist"
              submit={f.submit}
              thanks={f.thanks}
              thanksText={f.thanksText}
              fields={[
                [{ name: 'name', label: f.name, required: true, autoComplete: 'name' }, { name: 'company', label: f.company, autoComplete: 'organization' }],
                [{ name: 'email', label: f.email, type: 'email', required: true, autoComplete: 'email' }, { name: 'phone', label: f.phone, type: 'tel', autoComplete: 'tel' }],
                [{ name: 'location', label: f.location, type: 'select', required: true, options: locations }, { name: 'intent', label: f.intent, type: 'select', required: true, options: f.intents }],
                { name: 'message', label: f.message, type: 'textarea' },
              ]}
              consent={{ required: true, text: f.consent }}
            />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            <div className="topic dark">
              <div>
                <h3>{t.become}</h3>
                <p>{t.becomeP}</p>
              </div>
            </div>
            <div className="topic">
              <span className="topic-peak" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 19 9.5 8l3.5 6 2.5-4L21 19Z" /></svg></span>
              <div><h3>{t.excl}</h3><p>{t.exclP}</p></div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
