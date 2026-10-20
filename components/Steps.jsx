'use client';
import Reveal from './Reveal';
import { useT } from './LangProvider';

const T = {
  en: {
    eyebrow: 'The ritual', h: 'Make space for your ritual.',
    steps: [
      { n: '1', title: 'Take a little', text: 'A pea-sized amount of resin, three drops, two gummies or two capsules.' },
      { n: '2', title: 'Dissolve', text: 'Stir the resin or drops into warm water or tea until fully dissolved.' },
      { n: '3', title: 'Make it daily', text: 'Same time, same cup. The ritual is the habit you keep.' },
    ],
  },
  da: {
    eyebrow: 'Ritualet', h: 'Giv plads til dit ritual.',
    steps: [
      { n: '1', title: 'Tag lidt', text: 'En ærtestor mængde resin, tre dråber, to vingummi eller to kapsler.' },
      { n: '2', title: 'Opløs', text: 'Rør resin eller dråber ud i varmt vand eller te, til alt er opløst.' },
      { n: '3', title: 'Gør det dagligt', text: 'Samme tid, samme kop. Ritualet er den vane, du holder fast i.' },
    ],
  },
  de: {
    eyebrow: 'Das Ritual', h: 'Schaffe Raum für dein Ritual.',
    steps: [
      { n: '1', title: 'Ein wenig nehmen', text: 'Eine erbsengroße Menge Harz, drei Tropfen, zwei Gummies oder zwei Kapseln.' },
      { n: '2', title: 'Auflösen', text: 'Harz oder Tropfen in warmes Wasser oder Tee rühren, bis alles gelöst ist.' },
      { n: '3', title: 'Täglich wiederholen', text: 'Gleiche Zeit, gleiche Tasse. Das Ritual ist die Gewohnheit, die bleibt.' },
    ],
  },
  fr: {
    eyebrow: 'Le rituel', h: 'Faites de la place à votre rituel.',
    steps: [
      { n: '1', title: 'Un peu suffit', text: 'Une quantité de résine de la taille d’un petit pois, trois gouttes, deux gommes ou deux gélules.' },
      { n: '2', title: 'Dissoudre', text: 'Mélangez la résine ou les gouttes dans de l’eau chaude ou du thé jusqu’à dissolution complète.' },
      { n: '3', title: 'Chaque jour', text: 'Même heure, même tasse. Le rituel, c’est l’habitude que l’on garde.' },
    ],
  },
  es: {
    eyebrow: 'El ritual', h: 'Haz sitio para tu ritual.',
    steps: [
      { n: '1', title: 'Toma un poco', text: 'Una cantidad de resina del tamaño de un guisante, tres gotas, dos gominolas o dos cápsulas.' },
      { n: '2', title: 'Disuelve', text: 'Remueve la resina o las gotas en agua caliente o té hasta que se disuelvan.' },
      { n: '3', title: 'Hazlo a diario', text: 'Misma hora, misma taza. El ritual es el hábito que mantienes.' },
    ],
  },
  ar: {
    eyebrow: 'الطقس اليومي', h: 'اصنع مساحة لطقسك.',
    steps: [
      { n: '1', title: 'كمية صغيرة', text: 'كمية من الراتنج بحجم حبة البازلاء، أو ثلاث قطرات، أو علكتان، أو كبسولتان.' },
      { n: '2', title: 'أذِب', text: 'حرّك الراتنج أو القطرات في ماء دافئ أو شاي حتى تذوب تماماً.' },
      { n: '3', title: 'اجعله يومياً', text: 'الوقت نفسه والكوب نفسه. الطقس هو العادة التي تحافظ عليها.' },
    ],
  },
  ur: {
    eyebrow: 'معمول', h: 'اپنے معمول کے لیے وقت نکالیں۔',
    steps: [
      { n: '1', title: 'تھوڑا سا لیں', text: 'مٹر کے دانے جتنا ریزن، تین قطرے، دو گمیز یا دو کیپسول۔' },
      { n: '2', title: 'حل کریں', text: 'ریزن یا قطرے نیم گرم پانی یا چائے میں اچھی طرح حل ہونے تک ملائیں۔' },
      { n: '3', title: 'روزانہ اپنائیں', text: 'ایک ہی وقت، ایک ہی کپ۔ معمول وہ عادت ہے جو آپ قائم رکھتے ہیں۔' },
    ],
  },
};

// The 1-2-3 markers are a real sequence: how to take it.
export default function Steps() {
  const t = useT(T);
  return (
    <Reveal as="section" id="ritual" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.h}</span></span>
          </h2>
        </div>
        <div className="steps-grid" data-reveal="stagger">
          {t.steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <svg className="step-peak" viewBox="0 0 140 60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M0 60 L38 18 L52 30 L78 4 L104 34 L116 26 L140 52" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
