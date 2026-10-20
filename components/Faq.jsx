'use client';
import Reveal from './Reveal';
import Accordion from './Accordion';
import { useT } from './LangProvider';

const T = {
  en: {
    eyebrow: 'Questions',
    h: 'Good to know.',
    faqs: [
      { q: 'What is shilajit?', a: 'Shilajit is a dark, resin-like substance that forms slowly in high mountain rock over many years. It has been part of traditional practices across the Himalayas and the Karakoram for generations.' },
      { q: 'How can I tell if shilajit is real?', a: 'Look for a named origin and altitude, a lab report for your batch number, a fulvic acid percentage, and every ingredient listed with its amount. Pure resin is firm when cold and softens in the warmth of your hand.' },
      { q: 'Where can I see lab results?', a: 'Every batch is tested by an independent laboratory for heavy metals, quality and fulvic acid. Enter the batch number from your jar on our Lab results page.' },
      { q: 'How do I take it?', a: 'Dissolve a pea-sized amount of resin in warm water or tea, take three drops, two gummies or two capsules. Follow the daily dose on the label.' },
      { q: 'How can I contact Himalayan Drop?', a: 'Send us a message through our contact page and our team will get back to you, in English or Danish.' },
    ],
  },
  da: {
    eyebrow: 'Spørgsmål',
    h: 'Godt at vide.',
    faqs: [
      { q: 'Hvad er shilajit?', a: 'Shilajit er et mørkt, resinagtigt stof, der dannes langsomt i klipper højt oppe i bjergene over mange år. I generationer har det været en del af traditionel praksis i Himalaya og Karakoram.' },
      { q: 'Hvordan ser jeg, om shilajit er ægte?', a: 'Kig efter en navngivet oprindelse og højde, en laboratorierapport for dit batchnummer, en procentsats for fulvinsyre og alle ingredienser med mængde. Ren resin er fast, når den er kold, og bliver blød i varmen fra din hånd.' },
      { q: 'Hvor kan jeg se laboratorieresultaterne?', a: 'Hver batch testes af et uafhængigt laboratorium for tungmetaller, kvalitet og fulvinsyre. Indtast batchnummeret fra din krukke på siden Laboratorieresultater.' },
      { q: 'Hvordan tager jeg det?', a: 'Opløs en ærtestor mængde resin i varmt vand eller te, eller tag tre dråber, to vingummi eller to kapsler. Følg den daglige dosis på etiketten.' },
      { q: 'Hvordan kontakter jeg Himalayan Drop?', a: 'Send os en besked via kontaktsiden, så vender vi tilbage, på dansk eller engelsk.' },
    ],
  },
  de: {
    eyebrow: 'Fragen',
    h: 'Gut zu wissen.',
    faqs: [
      { q: 'Was ist Shilajit?', a: 'Shilajit (auch Mumijo genannt) ist eine dunkle, harzartige Substanz, die sich über viele Jahre langsam in hohem Gebirgsgestein bildet. Im Himalaya und im Karakorum ist es seit Generationen Teil traditioneller Praktiken.' },
      { q: 'Woran erkenne ich echtes Shilajit?', a: 'Achte auf eine genannte Herkunft und Höhe, einen Laborbericht zu deiner Chargennummer, einen Fulvinsäure-Anteil und jede Zutat mit Mengenangabe. Reines Harz ist kalt fest und wird in der warmen Hand weich.' },
      { q: 'Wo finde ich die Laborergebnisse?', a: 'Jede Charge wird von einem unabhängigen Labor auf Schwermetalle, Qualität und Fulvinsäure geprüft. Gib die Chargennummer deines Glases auf unserer Seite Laborergebnisse ein.' },
      { q: 'Wie nehme ich es ein?', a: 'Eine erbsengroße Menge Harz in warmem Wasser oder Tee auflösen, drei Tropfen, zwei Gummies oder zwei Kapseln nehmen. Halte dich an die Tagesdosis auf dem Etikett.' },
      { q: 'Wie erreiche ich Himalayan Drop?', a: 'Schreib uns über unsere Kontaktseite. Unser Team antwortet auf Deutsch oder Englisch.' },
    ],
  },
  fr: {
    eyebrow: 'Questions',
    h: 'Bon à savoir.',
    faqs: [
      { q: 'Qu’est-ce que le shilajit ?', a: 'Le shilajit est une substance sombre, semblable à une résine, qui se forme lentement dans la roche de haute montagne pendant de nombreuses années. Il fait partie des pratiques traditionnelles de l’Himalaya et du Karakoram depuis des générations.' },
      { q: 'Comment reconnaître un vrai shilajit ?', a: 'Vérifiez l’origine et l’altitude indiquées, un rapport de laboratoire pour votre numéro de lot, un pourcentage d’acide fulvique et la quantité de chaque ingrédient. La résine pure est ferme à froid et s’assouplit à la chaleur de la main.' },
      { q: 'Où voir les résultats de laboratoire ?', a: 'Chaque lot est testé par un laboratoire indépendant pour les métaux lourds, la qualité et l’acide fulvique. Saisissez le numéro de lot de votre pot sur notre page Résultats de laboratoire.' },
      { q: 'Comment le prendre ?', a: 'Dissolvez une quantité de résine de la taille d’un petit pois dans de l’eau chaude ou du thé, ou prenez trois gouttes, deux gommes ou deux gélules. Respectez la dose journalière indiquée sur l’étiquette.' },
      { q: 'Comment contacter Himalayan Drop ?', a: 'Écrivez-nous via notre page contact, notre équipe vous répondra en français ou en anglais.' },
    ],
  },
  es: {
    eyebrow: 'Preguntas',
    h: 'Bueno saberlo.',
    faqs: [
      { q: '¿Qué es el shilajit?', a: 'El shilajit es una sustancia oscura, parecida a una resina, que se forma lentamente en la roca de alta montaña durante muchos años. Forma parte de prácticas tradicionales del Himalaya y el Karakórum desde hace generaciones.' },
      { q: '¿Cómo sé si el shilajit es auténtico?', a: 'Busca un origen y una altitud concretos, un informe de laboratorio para tu número de lote, un porcentaje de ácido fúlvico y cada ingrediente con su cantidad. La resina pura está firme en frío y se ablanda con el calor de la mano.' },
      { q: '¿Dónde veo los resultados de laboratorio?', a: 'Un laboratorio independiente analiza cada lote en metales pesados, calidad y ácido fúlvico. Introduce el número de lote de tu tarro en nuestra página Resultados de laboratorio.' },
      { q: '¿Cómo se toma?', a: 'Disuelve una cantidad de resina del tamaño de un guisante en agua caliente o té, o toma tres gotas, dos gominolas o dos cápsulas. Sigue la dosis diaria de la etiqueta.' },
      { q: '¿Cómo contacto con Himalayan Drop?', a: 'Escríbenos a través de nuestra página de contacto y nuestro equipo te responderá en español o inglés.' },
    ],
  },
  ar: {
    eyebrow: 'أسئلة',
    h: 'معلومات مفيدة.',
    faqs: [
      { q: 'ما هو الشيلاجيت؟', a: 'الشيلاجيت مادة داكنة تشبه الراتنج، تتكوّن ببطء في صخور الجبال العالية على مدى سنوات طويلة. وهو جزء من الممارسات التقليدية في جبال الهيمالايا وقراقرم منذ أجيال.' },
      { q: 'كيف أميّز الشيلاجيت الأصلي؟', a: 'ابحث عن مصدر وارتفاع محددين، وتقرير مخبري لرقم دفعتك، ونسبة حمض الفولفيك، وكل مكوّن مع كميته. الراتنج النقي يكون صلباً في البرودة ويلين بدفء اليد.' },
      { q: 'أين أجد نتائج المختبر؟', a: 'يفحص مختبر مستقل كل دفعة للمعادن الثقيلة والجودة وحمض الفولفيك. أدخل رقم الدفعة من عبوتك في صفحة نتائج المختبر.' },
      { q: 'كيف أستخدمه؟', a: 'أذب كمية من الراتنج بحجم حبة البازلاء في ماء دافئ أو شاي، أو تناول ثلاث قطرات أو علكتين أو كبسولتين. التزم بالجرعة اليومية على الملصق.' },
      { q: 'كيف أتواصل مع Himalayan Drop؟', a: 'راسلنا عبر صفحة التواصل وسيرد عليك فريقنا بالعربية أو الإنجليزية.' },
    ],
  },
  ur: {
    eyebrow: 'سوالات',
    h: 'جاننے کی باتیں۔',
    faqs: [
      { q: 'سلاجیت کیا ہے؟', a: 'سلاجیت ایک گہرا، رال جیسا مادہ ہے جو اونچے پہاڑی پتھروں میں کئی سالوں میں آہستہ آہستہ بنتا ہے۔ یہ نسلوں سے ہمالیہ اور قراقرم کی روایات کا حصہ ہے۔' },
      { q: 'اصلی سلاجیت کی پہچان کیسے کریں؟', a: 'واضح ماخذ اور بلندی، اپنے بیچ نمبر کی لیب رپورٹ، فلوک ایسڈ کی فیصد اور ہر جزو کی مقدار دیکھیں۔ خالص ریزن ٹھنڈک میں سخت اور ہاتھ کی گرمی سے نرم ہو جاتا ہے۔' },
      { q: 'لیب رپورٹس کہاں دیکھیں؟', a: 'ہر بیچ ایک آزاد لیبارٹری میں بھاری دھاتوں، معیار اور فلوک ایسڈ کے لیے ٹیسٹ ہوتا ہے۔ ہمارے لیب رپورٹس کے صفحے پر اپنے برتن کا بیچ نمبر درج کریں۔' },
      { q: 'اسے کیسے استعمال کریں؟', a: 'مٹر کے دانے جتنا ریزن نیم گرم پانی یا چائے میں حل کریں، یا تین قطرے، دو گمیز یا دو کیپسول لیں۔ لیبل پر درج روزانہ خوراک پر عمل کریں۔' },
      { q: 'Himalayan Drop سے رابطہ کیسے کریں؟', a: 'ہمارے رابطہ صفحے کے ذریعے پیغام بھیجیں، ہماری ٹیم اردو یا انگریزی میں جواب دے گی۔' },
    ],
  },
};

export default function Faq() {
  const t = useT(T);
  return (
    <Reveal as="section" id="faq" className="faq" style={{ scrollMarginTop: 90 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.h}</span></span>
          </h2>
        </div>
        <div className="faq-list" data-reveal="stagger">
          <Accordion items={t.faqs} />
        </div>
      </div>
    </Reveal>
  );
}
