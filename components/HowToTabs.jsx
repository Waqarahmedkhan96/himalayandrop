'use client';
// How-to-use tabs: Resin / Gummies / Drops / Capsules, each with four illustrated steps.
import { useState } from 'react';
import { Icon } from './Icons';
import { useLang } from './LangProvider';

const guidesEn = {
  Resin: {
    img: '/images/pack-gold.webp',
    steps: [
      ['jar', 'Measure', 'Take a pea-sized amount with the spoon. Follow the daily dose on your label.'],
      ['drop', 'Dissolve', 'Stir it into a glass of warm water or tea. Warm, never boiling.'],
      ['clock', 'Wait a moment', 'Give it a few minutes, stirring now and then, until nothing is left on the spoon.'],
      ['sun', 'Enjoy', 'Drink it slowly. Earthy and smoky; a little honey is welcome.'],
    ],
  },
  Gummies: {
    img: '/images/pack-gummies.webp',
    steps: [
      ['berry', 'Take two', 'Adults: chew 2 gummies daily. Two gummies make one serving.'],
      ['clock', 'Same time daily', 'With breakfast or your morning tea is easiest to remember.'],
      ['leaf', 'Chew well', 'Strawberry flavour with six companion ingredients. No water needed.'],
      ['box', 'Close the tin', 'Keep it tightly closed, dry and below 25 °C, away from sunlight.'],
    ],
  },
  Drops: {
    img: '/images/pack-drops.webp',
    steps: [
      ['filter', 'Shake well', 'Give the bottle a gentle shake before every use.'],
      ['drop', 'Three drops', 'Adults: 3 drops daily, directly or in water or tea.'],
      ['clock', 'Before food', 'Take them about 30 minutes before a meal.'],
      ['sun', 'Room temperature', 'Close tightly. Store at room temperature, not in the fridge.'],
    ],
  },
  Capsules: {
    img: '/images/pack-capsules.webp',
    steps: [
      ['capsule', 'Take two', 'Adults: take 2 capsules daily. Two capsules make one serving.'],
      ['drop', 'With water', 'Swallow them with a glass of water. No taste, no measuring.'],
      ['clock', 'Same time daily', 'Keep the bottle next to your morning routine.'],
      ['sun', 'Cool and dry', 'Close tightly and keep away from direct sunlight.'],
    ],
  },
};

const guidesDa = {
  Resin: {
    img: '/images/pack-gold.webp',
    steps: [
      ['jar', 'Afmål', 'Tag en ærtestor mængde med skeen. Følg den daglige dosis på etiketten.'],
      ['drop', 'Opløs', 'Rør den ud i et glas varmt vand eller te. Varmt, aldrig kogende.'],
      ['clock', 'Vent lidt', 'Giv den et par minutter, og rør af og til, til der ikke er mere på skeen.'],
      ['sun', 'Nyd det', 'Drik det langsomt. Jordagtig og røget; lidt honning er velkommen.'],
    ],
  },
  Vingummi: {
    img: '/images/pack-gummies.webp',
    steps: [
      ['berry', 'Tag to', 'Voksne: tyg 2 vingummi dagligt. To vingummi er én portion.'],
      ['clock', 'Samme tid hver dag', 'Til morgenmaden eller din første kop te er nemmest at huske.'],
      ['leaf', 'Tyg grundigt', 'Jordbærsmag med seks aktive ingredienser. Intet vand nødvendigt.'],
      ['box', 'Luk dåsen', 'Luk den godt, og opbevar den tørt under 25 °C, væk fra sollys.'],
    ],
  },
  Dråber: {
    img: '/images/pack-drops.webp',
    steps: [
      ['filter', 'Ryst godt', 'Ryst flasken let før hver brug.'],
      ['drop', 'Tre dråber', 'Voksne: 3 dråber dagligt, direkte eller i vand eller te.'],
      ['clock', 'Før måltidet', 'Tag dem cirka 30 minutter før et måltid.'],
      ['sun', 'Stuetemperatur', 'Luk godt. Opbevares ved stuetemperatur, ikke i køleskab.'],
    ],
  },
  Kapsler: {
    img: '/images/pack-capsules.webp',
    steps: [
      ['capsule', 'Tag to', 'Voksne: tag 2 kapsler dagligt. To kapsler er én portion.'],
      ['drop', 'Med vand', 'Synk dem med et glas vand. Ingen smag, ingen afmåling.'],
      ['clock', 'Samme tid hver dag', 'Stil bøtten ved din morgenrutine.'],
      ['sun', 'Køligt og tørt', 'Luk godt, og opbevar væk fra direkte sollys.'],
    ],
  },
};

// German, French, Spanish, Arabic and Urdu: same icons and images, new words.
const make = (names, rows) => Object.fromEntries(Object.values(guidesEn).map((g, i) => [names[i], { ...g, steps: g.steps.map((s, j) => [s[0], ...rows[i][j]]) }]));
const guidesBy = {
  da: guidesDa,
  de: make(['Harz', 'Gummies', 'Tropfen', 'Kapseln'], [
    [['Abmessen', 'Nimm mit dem Löffel eine erbsengroße Menge. Halte dich an die Tagesdosis auf dem Etikett.'], ['Auflösen', 'In ein Glas warmes Wasser oder Tee rühren. Warm, nie kochend.'], ['Kurz warten', 'Ein paar Minuten ziehen lassen und ab und zu umrühren, bis nichts mehr am Löffel ist.'], ['Genießen', 'Langsam trinken. Erdig und rauchig; ein wenig Honig passt gut.']],
    [['Zwei nehmen', 'Erwachsene: täglich 2 Gummies kauen. Zwei Gummies sind eine Portion.'], ['Täglich zur gleichen Zeit', 'Zum Frühstück oder Morgentee merkt man es sich am leichtesten.'], ['Gut kauen', 'Erdbeergeschmack mit sechs begleitenden Zutaten. Kein Wasser nötig.'], ['Dose schließen', 'Gut verschlossen, trocken, unter 25 °C und vor Sonne geschützt aufbewahren.']],
    [['Gut schütteln', 'Die Flasche vor jeder Anwendung leicht schütteln.'], ['Drei Tropfen', 'Erwachsene: täglich 3 Tropfen, direkt oder in Wasser oder Tee.'], ['Vor dem Essen', 'Etwa 30 Minuten vor einer Mahlzeit einnehmen.'], ['Raumtemperatur', 'Gut verschließen. Bei Raumtemperatur lagern, nicht im Kühlschrank.']],
    [['Zwei nehmen', 'Erwachsene: täglich 2 Kapseln. Zwei Kapseln sind eine Portion.'], ['Mit Wasser', 'Mit einem Glas Wasser schlucken. Kein Geschmack, kein Abmessen.'], ['Täglich zur gleichen Zeit', 'Stell die Flasche neben deine Morgenroutine.'], ['Kühl und trocken', 'Gut verschließen und vor direktem Sonnenlicht schützen.']],
  ]),
  fr: make(['Résine', 'Gommes', 'Gouttes', 'Gélules'], [
    [['Doser', 'Prenez avec la cuillère une quantité de la taille d’un petit pois. Respectez la dose indiquée sur l’étiquette.'], ['Dissoudre', 'Mélangez dans un verre d’eau chaude ou de thé. Chaud, jamais bouillant.'], ['Patienter', 'Laissez quelques minutes en remuant de temps en temps, jusqu’à ce que la cuillère soit propre.'], ['Savourer', 'Buvez lentement. Goût terreux et fumé ; un peu de miel est bienvenu.']],
    [['En prendre deux', 'Adultes : mâcher 2 gommes par jour. Deux gommes font une portion.'], ['Chaque jour à la même heure', 'Au petit-déjeuner ou avec le thé du matin, c’est plus facile à retenir.'], ['Bien mâcher', 'Goût fraise avec six ingrédients complémentaires. Pas besoin d’eau.'], ['Refermer la boîte', 'Gardez-la bien fermée, au sec, sous 25 °C et à l’abri du soleil.']],
    [['Bien agiter', 'Agitez doucement le flacon avant chaque utilisation.'], ['Trois gouttes', 'Adultes : 3 gouttes par jour, pures ou dans de l’eau ou du thé.'], ['Avant le repas', 'Prenez-les environ 30 minutes avant un repas.'], ['Température ambiante', 'Bien refermer. Conserver à température ambiante, pas au réfrigérateur.']],
    [['En prendre deux', 'Adultes : 2 gélules par jour. Deux gélules font une portion.'], ['Avec de l’eau', 'Avalez-les avec un verre d’eau. Sans goût, sans dosage.'], ['Chaque jour à la même heure', 'Placez le flacon près de votre routine du matin.'], ['Au frais et au sec', 'Refermez bien et tenez à l’abri de la lumière directe du soleil.']],
  ]),
  es: make(['Resina', 'Gominolas', 'Gotas', 'Cápsulas'], [
    [['Mide', 'Toma con la cucharita una cantidad del tamaño de un guisante. Sigue la dosis diaria de la etiqueta.'], ['Disuelve', 'Remuévela en un vaso de agua caliente o té. Caliente, nunca hirviendo.'], ['Espera un poco', 'Deja unos minutos y remueve de vez en cuando, hasta que no quede nada en la cuchara.'], ['Disfruta', 'Bébelo despacio. Sabor terroso y ahumado; un poco de miel le va bien.']],
    [['Toma dos', 'Adultos: masticar 2 gominolas al día. Dos gominolas son una porción.'], ['A la misma hora', 'Con el desayuno o el té de la mañana es más fácil de recordar.'], ['Mastica bien', 'Sabor fresa con seis ingredientes que lo acompañan. Sin agua.'], ['Cierra la lata', 'Mantenla bien cerrada, seca, por debajo de 25 °C y lejos del sol.']],
    [['Agita bien', 'Agita suavemente el frasco antes de cada uso.'], ['Tres gotas', 'Adultos: 3 gotas al día, directamente o en agua o té.'], ['Antes de comer', 'Tómalas unos 30 minutos antes de una comida.'], ['Temperatura ambiente', 'Cierra bien. Consérvalas a temperatura ambiente, no en la nevera.']],
    [['Toma dos', 'Adultos: 2 cápsulas al día. Dos cápsulas son una porción.'], ['Con agua', 'Trágalas con un vaso de agua. Sin sabor, sin medir.'], ['A la misma hora', 'Deja el frasco junto a tu rutina de la mañana.'], ['Fresco y seco', 'Cierra bien y protégelo de la luz solar directa.']],
  ]),
  ar: make(['الراتنج', 'العلكات', 'القطرات', 'الكبسولات'], [
    [['القياس', 'خذ بالملعقة كمية بحجم حبة البازلاء. التزم بالجرعة اليومية على الملصق.'], ['الإذابة', 'حرّكها في كوب من الماء الدافئ أو الشاي. دافئ وليس مغلياً.'], ['انتظر قليلاً', 'اتركها بضع دقائق مع التحريك أحياناً حتى لا يبقى شيء على الملعقة.'], ['استمتع', 'اشربه ببطء. طعم ترابي مدخّن؛ ويمكن إضافة قليل من العسل.']],
    [['تناول اثنتين', 'للبالغين: امضغ علكتين يومياً. العلكتان حصة واحدة.'], ['الوقت نفسه يومياً', 'مع الإفطار أو شاي الصباح ليسهل تذكّره.'], ['امضغ جيداً', 'بنكهة الفراولة مع ستة مكونات مرافقة. لا حاجة إلى الماء.'], ['أغلق العلبة', 'احفظها مغلقة بإحكام في مكان جاف تحت 25 درجة مئوية بعيداً عن الشمس.']],
    [['رجّ جيداً', 'رجّ الزجاجة برفق قبل كل استخدام.'], ['ثلاث قطرات', 'للبالغين: 3 قطرات يومياً مباشرة أو في الماء أو الشاي.'], ['قبل الطعام', 'تناولها قبل الوجبة بنحو 30 دقيقة.'], ['درجة حرارة الغرفة', 'أغلقها بإحكام واحفظها في درجة حرارة الغرفة، لا في الثلاجة.']],
    [['تناول اثنتين', 'للبالغين: كبسولتان يومياً. الكبسولتان حصة واحدة.'], ['مع الماء', 'ابتلعهما مع كوب من الماء. بلا طعم وبلا قياس.'], ['الوقت نفسه يومياً', 'ضع الزجاجة بجانب روتينك الصباحي.'], ['مكان بارد وجاف', 'أغلقها بإحكام وأبعدها عن أشعة الشمس المباشرة.']],
  ]),
  ur: make(['ریزن', 'گمیز', 'ڈراپس', 'کیپسول'], [
    [['ناپیں', 'چمچ سے مٹر کے دانے جتنی مقدار لیں۔ لیبل پر درج روزانہ خوراک پر عمل کریں۔'], ['حل کریں', 'ایک گلاس نیم گرم پانی یا چائے میں ملائیں۔ گرم، ابلتا ہوا نہیں۔'], ['تھوڑا انتظار', 'چند منٹ دیں اور وقفے وقفے سے ہلاتے رہیں، یہاں تک کہ چمچ صاف ہو جائے۔'], ['لطف اٹھائیں', 'آہستہ آہستہ پئیں۔ ذائقہ مٹی جیسا اور دھواں دار؛ تھوڑا شہد ملا سکتے ہیں۔']],
    [['دو لیں', 'بالغ افراد: روزانہ 2 گمیز چبائیں۔ دو گمیز ایک خوراک ہیں۔'], ['روزانہ ایک ہی وقت', 'ناشتے یا صبح کی چائے کے ساتھ یاد رکھنا آسان ہے۔'], ['اچھی طرح چبائیں', 'اسٹرابیری ذائقہ، چھ ساتھی اجزاء کے ساتھ۔ پانی کی ضرورت نہیں۔'], ['ٹن بند کریں', 'اچھی طرح بند، خشک، 25 ڈگری سے کم اور دھوپ سے دور رکھیں۔']],
    [['اچھی طرح ہلائیں', 'ہر استعمال سے پہلے بوتل کو ہلکا سا ہلائیں۔'], ['تین قطرے', 'بالغ افراد: روزانہ 3 قطرے، براہِ راست یا پانی یا چائے میں۔'], ['کھانے سے پہلے', 'کھانے سے تقریباً 30 منٹ پہلے لیں۔'], ['کمرے کا درجہ حرارت', 'اچھی طرح بند کریں۔ کمرے کے درجہ حرارت پر رکھیں، فریج میں نہیں۔']],
    [['دو لیں', 'بالغ افراد: روزانہ 2 کیپسول۔ دو کیپسول ایک خوراک ہیں۔'], ['پانی کے ساتھ', 'ایک گلاس پانی کے ساتھ نگل لیں۔ نہ ذائقہ، نہ ناپ تول۔'], ['روزانہ ایک ہی وقت', 'بوتل کو اپنے صبح کے معمول کے پاس رکھیں۔'], ['ٹھنڈا اور خشک', 'اچھی طرح بند کریں اور براہِ راست دھوپ سے دور رکھیں۔']],
  ]),
};
// Four steps for one product family, e.g. howToSteps('de', 'drops').
export function howToSteps(lang, kind) {
  const i = ['resin', 'gummies', 'drops', 'capsules'].indexOf(kind);
  return Object.values(guidesBy[lang] || guidesEn)[Math.max(0, i)].steps;
}

const CHOOSE = { en: 'Choose a product', da: 'Vælg et produkt', de: 'Produkt wählen', fr: 'Choisir un produit', es: 'Elige un producto', ar: 'اختر منتجاً', ur: 'پروڈکٹ منتخب کریں' };

export default function HowToTabs() {
  const lang = useLang();
  const guides = guidesBy[lang] || guidesEn;
  const names = Object.keys(guides);
  const [tab, setTab] = useState(names[0]);
  const g = guides[tab];

  return (
    <div className="howto">
      <div className="filter-row tabs" role="tablist" aria-label={CHOOSE[lang] || CHOOSE.en}>
        {names.map((n) => (
          <button key={n} type="button" role="tab" aria-selected={tab === n} className={tab === n ? 'on' : ''} onClick={() => setTab(n)}>
            {n}
          </button>
        ))}
      </div>
      {names.map((n) => (
        <div key={n} className="howto-panel" role="tabpanel" hidden={tab !== n} data-tab={n}>
          <div className="howto-stage">
            <span className="stage-glow" />
            <img src={guides[n].img} alt={`Himalayan Drop ${n}`} loading="lazy" />
          </div>
          <ol className="howto-steps">
            {guides[n].steps.map(([icon, title, text], i) => (
              <li key={title}>
                <span className="howto-num">{i + 1}</span>
                <span className="howto-icon"><Icon name={icon} size={22} /></span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
