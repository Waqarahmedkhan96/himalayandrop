import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { Manifesto, Route } from '@/components/StoryBlocks';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('our-story', lang, '/our-story/');

const T = {
  en: {
    hero: { eyebrow: 'Our story', title: 'The Mountain', accent: 'within.', lead: 'A Danish brand with its roots high in the Himalayas.' },
    why: 'Why we began',
    manifesto: 'We started Himalayan Drop because we wanted shilajit we could trust. Not another unmarked tub with a story, but a resin with an origin, a process and a lab report behind it. So we went to the source: high mountain rock near Skardu, hand-collected stones, water, sun and time. Then we packed it the way something this old deserves.',
    route: { eyebrow: 'Two places, one ritual', h: 'Sourced in the Himalayas.', hg: 'Designed in Denmark.', p: 'The resin comes from the mountains. The care, the design and the standards come from Scandinavia: simple, honest, built to last.' },
    s: { eyebrow: 'What we stand for', title: 'Patience, proof', accent: 'and place.' },
    values: [
      { icon: 'clock', title: 'Patience', text: 'Shilajit forms over centuries. We give it the time it needs: up to 60 days in the sun, never rushed with heat.' },
      { icon: 'shield', title: 'Proof', text: 'A lab report for every batch, and a batch number on every jar. Trust should be something you can check.' },
      { icon: 'mountain', title: 'Place', text: 'High mountain rock near Skardu, collected by hand above 5,000 metres. Where it comes from is half of what it is.' },
    ],
    quote: '“Every jar carries a little of the mountain. We call it the Mountain within.”',
    ctas: [
      { eyebrow: 'The process', title: 'From mountain to jar', text: 'Six patient steps, told in motion.', cta: 'Watch the story', href: '/#process', dark: true },
      { eyebrow: 'Proof', title: 'Certificates', text: 'The standards behind every batch.', cta: 'See certificates', href: '/certificates/' },
      { eyebrow: 'Shop', title: 'Begin your ritual', text: 'Resin, gummies, drops or capsules.', cta: 'Shop now', href: '/shop/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Vores historie', title: 'The Mountain', accent: 'within.', lead: 'Et dansk brand med rødder højt oppe i bjergene.' },
    why: 'Hvorfor vi begyndte',
    manifesto: 'Vi startede Himalayan Drop, fordi vi ville have shilajit, vi kunne stole på. Ikke endnu en umærket bøtte med en historie, men en resin med en oprindelse, en proces og en laboratorierapport bag sig. Så vi tog til kilden: høje klipper ved Skardu, sten samlet med håndkraft, vand, sol og tid. Og så pakkede vi den, som noget så gammelt fortjener.',
    route: { eyebrow: 'To steder, ét ritual', h: 'Hentet i bjergene.', hg: 'Designet i Danmark.', p: 'Resinen kommer fra bjergene. Omhuen, designet og standarderne kommer fra Skandinavien: enkelt, ærligt og bygget til at holde.' },
    s: { eyebrow: 'Det står vi for', title: 'Tålmodighed, bevis', accent: 'og sted.' },
    values: [
      { icon: 'clock', title: 'Tålmodighed', text: 'Shilajit dannes over århundreder. Vi giver den den tid, den behøver: op til 60 dage i solen, aldrig forceret med varme.' },
      { icon: 'shield', title: 'Bevis', text: 'En laboratorierapport for hver batch og et batchnummer på hver krukke. Tillid skal være noget, du kan tjekke.' },
      { icon: 'mountain', title: 'Sted', text: 'Høje klipper ved Skardu, samlet med håndkraft over 5.000 meter. Hvor den kommer fra, er halvdelen af, hvad den er.' },
    ],
    quote: '“Hver krukke bærer lidt af bjerget i sig. Vi kalder det the Mountain within.”',
    ctas: [
      { eyebrow: 'Processen', title: 'Fra bjerg til krukke', text: 'Seks tålmodige trin, fortalt i bevægelse.', cta: 'Se historien', href: '/#process', dark: true },
      { eyebrow: 'Bevis', title: 'Certifikater', text: 'Standarderne bag hver batch.', cta: 'Se certifikaterne', href: '/certificates/' },
      { eyebrow: 'Shop', title: 'Begynd dit ritual', text: 'Resin, vingummi, dråber eller kapsler.', cta: 'Køb nu', href: '/shop/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Unsere Geschichte', title: 'The Mountain', accent: 'within.', lead: 'Eine dänische Marke mit Wurzeln hoch im Himalaya.' },
    why: 'Warum wir begonnen haben',
    manifesto: 'Wir haben Himalayan Drop gegründet, weil wir Shilajit wollten, dem wir vertrauen können. Keine weitere namenlose Dose mit einer Geschichte, sondern ein Harz mit Herkunft, Verfahren und Laborbericht. Also sind wir zur Quelle gegangen: hohes Gebirgsgestein nahe Skardu, von Hand gesammelte Steine, Wasser, Sonne und Zeit. Dann haben wir es so verpackt, wie etwas so Altes es verdient.',
    route: { eyebrow: 'Zwei Orte, ein Ritual', h: 'Gewonnen im Himalaya.', hg: 'Gestaltet in Dänemark.', p: 'Das Harz kommt aus den Bergen. Sorgfalt, Design und Standards kommen aus Skandinavien: schlicht, ehrlich, gemacht für die Dauer.' },
    s: { eyebrow: 'Wofür wir stehen', title: 'Geduld, Beweis', accent: 'und Ort.' },
    values: [
      { icon: 'clock', title: 'Geduld', text: 'Shilajit entsteht über Jahrhunderte. Wir geben ihm die Zeit, die es braucht: bis zu 60 Tage in der Sonne, nie mit Hitze beschleunigt.' },
      { icon: 'shield', title: 'Beweis', text: 'Ein Laborbericht für jede Charge und eine Chargennummer auf jedem Glas. Vertrauen sollte man überprüfen können.' },
      { icon: 'mountain', title: 'Ort', text: 'Hohes Gebirgsgestein nahe Skardu, von Hand gesammelt über 5.000 Metern. Woher es kommt, ist die Hälfte dessen, was es ist.' },
    ],
    quote: '„Jedes Glas trägt ein wenig vom Berg in sich. Wir nennen es the Mountain within.“',
    ctas: [
      { eyebrow: 'Der Prozess', title: 'Vom Berg ins Glas', text: 'Sechs geduldige Schritte, in Bewegung erzählt.', cta: 'Die Geschichte ansehen', href: '/#process', dark: true },
      { eyebrow: 'Beweis', title: 'Zertifikate', text: 'Die Standards hinter jeder Charge.', cta: 'Zertifikate ansehen', href: '/certificates/' },
      { eyebrow: 'Shop', title: 'Beginne dein Ritual', text: 'Harz, Gummies, Tropfen oder Kapseln.', cta: 'Jetzt shoppen', href: '/shop/' },
    ],
  },
  fr: {
    hero: { eyebrow: 'Notre histoire', title: 'The Mountain', accent: 'within.', lead: 'Une marque danoise aux racines plantées haut dans l’Himalaya.' },
    why: 'Pourquoi nous avons commencé',
    manifesto: 'Nous avons créé Himalayan Drop parce que nous voulions un shilajit digne de confiance. Pas un énième pot anonyme avec une belle histoire, mais une résine avec une origine, un procédé et un rapport de laboratoire. Alors nous sommes allés à la source : la roche de haute montagne près de Skardu, des pierres récoltées à la main, de l’eau, du soleil et du temps. Puis nous l’avons emballée comme le mérite une matière aussi ancienne.',
    route: { eyebrow: 'Deux lieux, un rituel', h: 'Récolté dans l’Himalaya.', hg: 'Conçu au Danemark.', p: 'La résine vient des montagnes. Le soin, le design et les exigences viennent de Scandinavie : simples, honnêtes, faits pour durer.' },
    s: { eyebrow: 'Nos valeurs', title: 'Patience, preuve', accent: 'et lieu.' },
    values: [
      { icon: 'clock', title: 'Patience', text: 'Le shilajit se forme au fil des siècles. Nous lui laissons le temps : jusqu’à 60 jours au soleil, jamais accéléré par la chaleur.' },
      { icon: 'shield', title: 'Preuve', text: 'Un rapport de laboratoire pour chaque lot et un numéro de lot sur chaque pot. La confiance doit pouvoir se vérifier.' },
      { icon: 'mountain', title: 'Lieu', text: 'La roche de haute montagne près de Skardu, récoltée à la main au-dessus de 5 000 mètres. Son origine fait la moitié de ce qu’il est.' },
    ],
    quote: '« Chaque pot porte un peu de la montagne. Nous l’appelons the Mountain within. »',
    ctas: [
      { eyebrow: 'Le processus', title: 'De la montagne au pot', text: 'Six étapes patientes, racontées en mouvement.', cta: 'Voir l’histoire', href: '/#process', dark: true },
      { eyebrow: 'Preuve', title: 'Certificats', text: 'Les normes derrière chaque lot.', cta: 'Voir les certificats', href: '/certificates/' },
      { eyebrow: 'Boutique', title: 'Commencez votre rituel', text: 'Résine, gommes, gouttes ou gélules.', cta: 'Acheter', href: '/shop/' },
    ],
  },
  es: {
    hero: { eyebrow: 'Nuestra historia', title: 'The Mountain', accent: 'within.', lead: 'Una marca danesa con raíces en lo alto del Himalaya.' },
    why: 'Por qué empezamos',
    manifesto: 'Creamos Himalayan Drop porque queríamos un shilajit en el que pudiéramos confiar. No otro bote sin marca con una historia, sino una resina con origen, proceso e informe de laboratorio. Así que fuimos a la fuente: roca de alta montaña cerca de Skardu, piedras recogidas a mano, agua, sol y tiempo. Después lo envasamos como merece algo tan antiguo.',
    route: { eyebrow: 'Dos lugares, un ritual', h: 'Recolectado en el Himalaya.', hg: 'Diseñado en Dinamarca.', p: 'La resina viene de las montañas. El cuidado, el diseño y los estándares vienen de Escandinavia: sencillos, honestos, hechos para durar.' },
    s: { eyebrow: 'Lo que defendemos', title: 'Paciencia, pruebas', accent: 'y lugar.' },
    values: [
      { icon: 'clock', title: 'Paciencia', text: 'El shilajit se forma a lo largo de siglos. Le damos el tiempo que necesita: hasta 60 días al sol, nunca acelerado con calor.' },
      { icon: 'shield', title: 'Pruebas', text: 'Un informe de laboratorio para cada lote y un número de lote en cada tarro. La confianza debe poder comprobarse.' },
      { icon: 'mountain', title: 'Lugar', text: 'Roca de alta montaña cerca de Skardu, recogida a mano a más de 5.000 metros. De dónde viene es la mitad de lo que es.' },
    ],
    quote: '«Cada tarro lleva un poco de la montaña. Lo llamamos the Mountain within.»',
    ctas: [
      { eyebrow: 'El proceso', title: 'De la montaña al tarro', text: 'Seis pasos pacientes, contados en movimiento.', cta: 'Ver la historia', href: '/#process', dark: true },
      { eyebrow: 'Pruebas', title: 'Certificados', text: 'Los estándares detrás de cada lote.', cta: 'Ver certificados', href: '/certificates/' },
      { eyebrow: 'Tienda', title: 'Empieza tu ritual', text: 'Resina, gominolas, gotas o cápsulas.', cta: 'Comprar ahora', href: '/shop/' },
    ],
  },
  ar: {
    hero: { eyebrow: 'قصتنا', title: 'The Mountain', accent: 'within.', lead: 'علامة دنماركية جذورها في أعالي الهيمالايا.' },
    why: 'لماذا بدأنا',
    manifesto: 'أسسنا Himalayan Drop لأننا أردنا شيلاجيت يمكننا الوثوق به. ليس عبوة أخرى بلا هوية تحمل قصة، بل راتنجاً له مصدر وطريقة إنتاج وتقرير مخبري. فذهبنا إلى المصدر: صخور الجبال العالية قرب سكردو، أحجار تُجمع باليد، ماء وشمس ووقت. ثم عبأناه بالطريقة التي يستحقها شيء بهذا القِدم.',
    route: { eyebrow: 'مكانان وطقس واحد', h: 'يُجمع في الهيمالايا.', hg: 'يُصمم في الدنمارك.', p: 'الراتنج يأتي من الجبال. أما العناية والتصميم والمعايير فمن إسكندنافيا: بساطة وصدق وجودة تدوم.' },
    s: { eyebrow: 'ما نؤمن به', title: 'الصبر والإثبات', accent: 'والمكان.' },
    values: [
      { icon: 'clock', title: 'الصبر', text: 'يتكوّن الشيلاجيت عبر قرون. نمنحه الوقت الذي يحتاجه: حتى 60 يوماً تحت الشمس، دون استعجال بالحرارة.' },
      { icon: 'shield', title: 'الإثبات', text: 'تقرير مخبري لكل دفعة ورقم دفعة على كل عبوة. الثقة يجب أن تكون قابلة للتحقق.' },
      { icon: 'mountain', title: 'المكان', text: 'صخور جبلية عالية قرب سكردو، تُجمع يدوياً فوق 5000 متر. مصدره نصف حقيقته.' },
    ],
    quote: '«كل عبوة تحمل شيئاً من الجبل. نسميه the Mountain within.»',
    ctas: [
      { eyebrow: 'مراحل الإنتاج', title: 'من الجبل إلى العبوة', text: 'ست خطوات متأنية، تُروى بالحركة.', cta: 'شاهد القصة', href: '/#process', dark: true },
      { eyebrow: 'الإثبات', title: 'الشهادات', text: 'المعايير وراء كل دفعة.', cta: 'عرض الشهادات', href: '/certificates/' },
      { eyebrow: 'المتجر', title: 'ابدأ طقسك', text: 'راتنج أو علكات أو قطرات أو كبسولات.', cta: 'تسوّق الآن', href: '/shop/' },
    ],
  },
  ur: {
    hero: { eyebrow: 'ہماری کہانی', title: 'The Mountain', accent: 'within.', lead: 'ڈنمارک کا ایک برانڈ جس کی جڑیں ہمالیہ کی بلندیوں میں ہیں۔' },
    why: 'ہم نے آغاز کیوں کیا',
    manifesto: 'ہم نے Himalayan Drop اس لیے شروع کیا کیونکہ ہمیں ایسا سلاجیت چاہیے تھا جس پر بھروسہ کیا جا سکے۔ کہانی سنانے والا ایک اور بے نام ڈبہ نہیں، بلکہ ایسا ریزن جس کا ماخذ، طریقہ اور لیب رپورٹ ہو۔ اس لیے ہم ماخذ تک گئے: اسکردو کے قریب اونچی پہاڑی چٹانیں، ہاتھ سے چنے گئے پتھر، پانی، دھوپ اور وقت۔ پھر ہم نے اسے اس انداز میں پیک کیا جس کا اتنی قدیم چیز حق رکھتی ہے۔',
    route: { eyebrow: 'دو جگہیں، ایک معمول', h: 'ہمالیہ سے حاصل کردہ۔', hg: 'ڈنمارک میں ڈیزائن۔', p: 'ریزن پہاڑوں سے آتا ہے۔ دیکھ بھال، ڈیزائن اور معیار اسکینڈینیویا سے: سادہ، ایماندار اور دیرپا۔' },
    s: { eyebrow: 'ہماری اقدار', title: 'صبر، ثبوت', accent: 'اور مقام۔' },
    values: [
      { icon: 'clock', title: 'صبر', text: 'سلاجیت صدیوں میں بنتا ہے۔ ہم اسے وہ وقت دیتے ہیں جس کی اسے ضرورت ہے: 60 دن تک دھوپ میں، آنچ سے کبھی جلدی نہیں۔' },
      { icon: 'shield', title: 'ثبوت', text: 'ہر بیچ کی لیب رپورٹ اور ہر برتن پر بیچ نمبر۔ بھروسہ ایسا ہونا چاہیے جسے جانچا جا سکے۔' },
      { icon: 'mountain', title: 'مقام', text: 'اسکردو کے قریب اونچی پہاڑی چٹانیں، 5,000 میٹر سے بلندی پر ہاتھ سے چنی گئیں۔ یہ کہاں سے آتا ہے، یہی اس کی آدھی پہچان ہے۔' },
    ],
    quote: '«ہر برتن میں پہاڑ کا تھوڑا سا حصہ ہے۔ ہم اسے the Mountain within کہتے ہیں۔»',
    ctas: [
      { eyebrow: 'تیاری کا طریقہ', title: 'پہاڑ سے برتن تک', text: 'چھ صبر آزما مراحل، حرکت میں۔', cta: 'کہانی دیکھیں', href: '/#process', dark: true },
      { eyebrow: 'ثبوت', title: 'سرٹیفکیٹس', text: 'ہر بیچ کے پیچھے معیار۔', cta: 'سرٹیفکیٹس دیکھیں', href: '/certificates/' },
      { eyebrow: 'شاپ', title: 'اپنا معمول شروع کریں', text: 'ریزن، گمیز، ڈراپس یا کیپسول۔', cta: 'ابھی خریدیں', href: '/shop/' },
    ],
  },
};

export default function OurStoryView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow manifesto-eyebrow">{t.why}</span>
          <Manifesto text={t.manifesto} />
        </div>
      </section>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="route-card" data-reveal>
            <div className="route-copy">
              <span className="eyebrow">{t.route.eyebrow}</span>
              <h2>{t.route.h} <em className="gold-text">{t.route.hg}</em></h2>
              <p>{t.route.p}</p>
            </div>
            <Route />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.values} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>{t.quote}</p>
            <span>Himalayan Drop</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards items={t.ctas} />
        </div>
      </Reveal>
    </>
  );
}
