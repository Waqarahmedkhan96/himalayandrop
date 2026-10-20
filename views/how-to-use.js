import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import HowToTabs from '@/components/HowToTabs';
import { SectionHead, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { POST_SLUGS } from '@/lib/postSlugs';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('how-to-use', lang, '/how-to-use/');

const T = {
  en: {
    hero: { eyebrow: 'How to use', title: 'Your ritual,', accent: 'step by step.', lead: 'Choose your format below. Each takes less than a minute to prepare.' },
    s: { eyebrow: 'Good to know', title: 'Five simple', accent: 'notes.' },
    notes: [
      ['Warm, never boiling', 'Dissolve resin and drops in warm liquid. Boiling water is not needed and not recommended.'],
      ['Follow your label', 'Always follow the daily dose printed on your product. Do not exceed it.'],
      ['Store it well', 'Keep it closed, at room temperature and out of direct sunlight.'],
      ['Make it a habit', 'Same time, same cup. Consistency is what turns a product into a ritual.'],
      ['Ask your doctor first', 'If you are pregnant, breastfeeding, take medication or have a medical condition.'],
    ],
    tip: 'Ritual tip', tipText: 'Pair it with something you already do every morning, like your first tea. The ritual sticks when it has a place in your day.',
    ctas: [
      { eyebrow: 'Shop', title: 'Choose your format', text: 'Resin, gummies, drops or capsules.', cta: 'Shop now', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Which one suits you?', text: 'A simple comparison of the four formats.', cta: 'Read article', href: '/blog/resin-gummies-or-drops/' },
      { eyebrow: 'Questions', title: 'FAQ', text: 'Answers about using, storing and ordering.', cta: 'Read FAQ', href: '/faq/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Sådan bruger du det', title: 'Dit ritual,', accent: 'trin for trin.', lead: 'Vælg din form nedenfor. Hver af dem tager under et minut at forberede.' },
    s: { eyebrow: 'Godt at vide', title: 'Fem enkle', accent: 'råd.' },
    notes: [
      ['Varmt, aldrig kogende', 'Opløs resin og dråber i varm væske. Kogende vand er ikke nødvendigt og frarådes.'],
      ['Følg etiketten', 'Følg altid den daglige dosis, der står på produktet. Overskrid den ikke.'],
      ['Opbevar det godt', 'Hold det lukket, ved stuetemperatur og væk fra direkte sollys.'],
      ['Gør det til en vane', 'Samme tid, samme kop. Det er gentagelsen, der gør et produkt til et ritual.'],
      ['Spørg din læge først', 'Hvis du er gravid, ammer, tager medicin eller har en sygdom.'],
    ],
    tip: 'Tip til ritualet', tipText: 'Kobl det til noget, du allerede gør hver morgen, som din første kop te. Ritualet holder, når det har en fast plads i din dag.',
    ctas: [
      { eyebrow: 'Shop', title: 'Vælg din form', text: 'Resin, vingummi, dråber eller kapsler.', cta: 'Køb nu', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Hvad passer til dig?', text: 'En enkel sammenligning af de fire former.', cta: 'Læs artiklen', href: '/blog/resin-vingummi-draaber-eller-kapsler/' },
      { eyebrow: 'Spørgsmål', title: 'FAQ', text: 'Svar om brug, opbevaring og bestilling.', cta: 'Læs FAQ', href: '/faq/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Anwendung', title: 'Dein Ritual,', accent: 'Schritt für Schritt.', lead: 'Wähle unten deine Form. Jede ist in unter einer Minute zubereitet.' },
    s: { eyebrow: 'Gut zu wissen', title: 'Fünf einfache', accent: 'Hinweise.' },
    notes: [
      ['Warm, nie kochend', 'Harz und Tropfen in warmer Flüssigkeit auflösen. Kochendes Wasser ist weder nötig noch empfohlen.'],
      ['Halte dich ans Etikett', 'Immer die auf dem Produkt angegebene Tagesdosis einhalten. Nicht überschreiten.'],
      ['Richtig lagern', 'Verschlossen, bei Raumtemperatur und vor direktem Sonnenlicht geschützt aufbewahren.'],
      ['Mach es zur Gewohnheit', 'Gleiche Zeit, gleiche Tasse. Beständigkeit macht aus einem Produkt ein Ritual.'],
      ['Frag zuerst deine Ärztin oder deinen Arzt', 'Wenn du schwanger bist, stillst, Medikamente nimmst oder eine Erkrankung hast.'],
    ],
    tip: 'Ritual-Tipp', tipText: 'Verbinde es mit etwas, das du jeden Morgen ohnehin tust, etwa deinem ersten Tee. Das Ritual bleibt, wenn es einen Platz in deinem Tag hat.',
    ctas: [
      { eyebrow: 'Shop', title: 'Wähle deine Form', text: 'Harz, Gummies, Tropfen oder Kapseln.', cta: 'Jetzt shoppen', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Was passt zu dir?', text: 'Ein einfacher Vergleich der vier Formen.', cta: 'Artikel lesen', href: `/blog/${POST_SLUGS.formats.de}/` },
      { eyebrow: 'Fragen', title: 'FAQ', text: 'Antworten zu Anwendung, Lagerung und Bestellung.', cta: 'FAQ lesen', href: '/faq/' },
    ],
  },
  fr: {
    hero: { eyebrow: 'Utilisation', title: 'Votre rituel,', accent: 'étape par étape.', lead: 'Choisissez votre format ci-dessous. Chacun se prépare en moins d’une minute.' },
    s: { eyebrow: 'Bon à savoir', title: 'Cinq conseils', accent: 'simples.' },
    notes: [
      ['Chaud, jamais bouillant', 'Dissolvez la résine et les gouttes dans un liquide chaud. L’eau bouillante n’est ni nécessaire ni recommandée.'],
      ['Suivez l’étiquette', 'Respectez toujours la dose journalière indiquée sur votre produit. Ne la dépassez pas.'],
      ['Bien conserver', 'Gardez-le fermé, à température ambiante et à l’abri de la lumière directe du soleil.'],
      ['Faites-en une habitude', 'Même heure, même tasse. La régularité transforme un produit en rituel.'],
      ['Demandez d’abord l’avis de votre médecin', 'Si vous êtes enceinte, allaitez, prenez des médicaments ou avez un problème de santé.'],
    ],
    tip: 'Conseil rituel', tipText: 'Associez-le à un geste que vous faites déjà chaque matin, comme votre premier thé. Le rituel s’installe quand il a sa place dans votre journée.',
    ctas: [
      { eyebrow: 'Boutique', title: 'Choisissez votre format', text: 'Résine, gommes, gouttes ou gélules.', cta: 'Acheter', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Lequel vous convient ?', text: 'Une comparaison simple des quatre formats.', cta: 'Lire l’article', href: `/blog/${POST_SLUGS.formats.fr}/` },
      { eyebrow: 'Questions', title: 'FAQ', text: 'Réponses sur l’utilisation, la conservation et les commandes.', cta: 'Lire la FAQ', href: '/faq/' },
    ],
  },
  es: {
    hero: { eyebrow: 'Modo de uso', title: 'Tu ritual,', accent: 'paso a paso.', lead: 'Elige tu formato abajo. Cada uno se prepara en menos de un minuto.' },
    s: { eyebrow: 'Bueno saberlo', title: 'Cinco notas', accent: 'sencillas.' },
    notes: [
      ['Caliente, nunca hirviendo', 'Disuelve la resina y las gotas en un líquido caliente. El agua hirviendo no es necesaria ni recomendable.'],
      ['Sigue la etiqueta', 'Respeta siempre la dosis diaria indicada en tu producto. No la superes.'],
      ['Consérvalo bien', 'Mantenlo cerrado, a temperatura ambiente y lejos de la luz solar directa.'],
      ['Conviértelo en hábito', 'Misma hora, misma taza. La constancia convierte un producto en un ritual.'],
      ['Consulta antes a tu médico', 'Si estás embarazada, das el pecho, tomas medicación o tienes alguna enfermedad.'],
    ],
    tip: 'Consejo de ritual', tipText: 'Únelo a algo que ya haces cada mañana, como tu primer té. El ritual se queda cuando tiene un lugar en tu día.',
    ctas: [
      { eyebrow: 'Tienda', title: 'Elige tu formato', text: 'Resina, gominolas, gotas o cápsulas.', cta: 'Comprar ahora', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: '¿Cuál es para ti?', text: 'Una comparación sencilla de los cuatro formatos.', cta: 'Leer artículo', href: `/blog/${POST_SLUGS.formats.es}/` },
      { eyebrow: 'Preguntas', title: 'Preguntas frecuentes', text: 'Respuestas sobre uso, conservación y pedidos.', cta: 'Ver preguntas', href: '/faq/' },
    ],
  },
  ar: {
    hero: { eyebrow: 'طريقة الاستخدام', title: 'طقسك،', accent: 'خطوة بخطوة.', lead: 'اختر الشكل المناسب أدناه. كل منها يُحضّر في أقل من دقيقة.' },
    s: { eyebrow: 'معلومات مفيدة', title: 'خمس ملاحظات', accent: 'بسيطة.' },
    notes: [
      ['دافئ وليس مغلياً', 'أذب الراتنج والقطرات في سائل دافئ. الماء المغلي غير ضروري ولا يُنصح به.'],
      ['التزم بالملصق', 'التزم دائماً بالجرعة اليومية المطبوعة على منتجك ولا تتجاوزها.'],
      ['احفظه جيداً', 'أبقه مغلقاً في درجة حرارة الغرفة بعيداً عن أشعة الشمس المباشرة.'],
      ['اجعله عادة', 'الوقت نفسه والكوب نفسه. الاستمرارية تحوّل المنتج إلى طقس.'],
      ['استشر طبيبك أولاً', 'إذا كنتِ حاملاً أو مرضعة، أو تتناول أدوية، أو تعاني من حالة صحية.'],
    ],
    tip: 'نصيحة', tipText: 'اربطه بشيء تفعله كل صباح، مثل أول كوب شاي. يدوم الطقس حين يكون له مكان في يومك.',
    ctas: [
      { eyebrow: 'المتجر', title: 'اختر الشكل المناسب', text: 'راتنج أو علكات أو قطرات أو كبسولات.', cta: 'تسوّق الآن', href: '/shop/', dark: true },
      { eyebrow: 'المدونة', title: 'أيها يناسبك؟', text: 'مقارنة بسيطة بين الأشكال الأربعة.', cta: 'اقرأ المقال', href: `/blog/${POST_SLUGS.formats.ar}/` },
      { eyebrow: 'أسئلة', title: 'الأسئلة الشائعة', text: 'إجابات عن الاستخدام والحفظ والطلب.', cta: 'اقرأ الأسئلة', href: '/faq/' },
    ],
  },
  ur: {
    hero: { eyebrow: 'استعمال کا طریقہ', title: 'آپ کا معمول،', accent: 'مرحلہ وار۔', lead: 'نیچے اپنی پسند کی شکل منتخب کریں۔ ہر ایک ایک منٹ سے کم میں تیار ہو جاتی ہے۔' },
    s: { eyebrow: 'جاننے کی باتیں', title: 'پانچ آسان', accent: 'ہدایات۔' },
    notes: [
      ['نیم گرم، ابلتا ہوا نہیں', 'ریزن اور قطرے نیم گرم مائع میں حل کریں۔ ابلتا پانی نہ ضروری ہے نہ تجویز کردہ۔'],
      ['لیبل پر عمل کریں', 'ہمیشہ پروڈکٹ پر درج روزانہ خوراک پر عمل کریں۔ اس سے زیادہ نہ لیں۔'],
      ['اچھی طرح محفوظ رکھیں', 'بند، کمرے کے درجہ حرارت پر اور براہِ راست دھوپ سے دور رکھیں۔'],
      ['عادت بنائیں', 'ایک ہی وقت، ایک ہی کپ۔ مستقل مزاجی پروڈکٹ کو معمول بناتی ہے۔'],
      ['پہلے ڈاکٹر سے مشورہ کریں', 'اگر آپ حاملہ ہیں، دودھ پلاتی ہیں، دوا لیتے ہیں یا کوئی بیماری ہے۔'],
    ],
    tip: 'معمول کا مشورہ', tipText: 'اسے کسی ایسے کام سے جوڑیں جو آپ ہر صبح کرتے ہیں، جیسے پہلی چائے۔ معمول تب قائم رہتا ہے جب اسے دن میں جگہ ملے۔',
    ctas: [
      { eyebrow: 'شاپ', title: 'اپنی شکل منتخب کریں', text: 'ریزن، گمیز، ڈراپس یا کیپسول۔', cta: 'ابھی خریدیں', href: '/shop/', dark: true },
      { eyebrow: 'بلاگ', title: 'آپ کے لیے کون سا بہتر ہے؟', text: 'چاروں شکلوں کا آسان موازنہ۔', cta: 'مضمون پڑھیں', href: `/blog/${POST_SLUGS.formats.ur}/` },
      { eyebrow: 'سوالات', title: 'عام سوالات', text: 'استعمال، محفوظ رکھنے اور آرڈر کے بارے میں جوابات۔', cta: 'سوالات پڑھیں', href: '/faq/' },
    ],
  },
};

export default function HowToUseView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section tight-top">
        <div className="container" data-reveal>
          <HowToTabs />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="notes-card" data-reveal>
            <SectionHead {...t.s} align="left" />
            <ol className="notes-list">
              {t.notes.map(([title, d], i) => (
                <li key={title}>
                  <span className="howto-num">{i + 1}</span>
                  <div><strong>{title}</strong><p>{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="pro-tip">
              <span className="eyebrow">{t.tip}</span>
              <p>{t.tipText}</p>
            </div>
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
