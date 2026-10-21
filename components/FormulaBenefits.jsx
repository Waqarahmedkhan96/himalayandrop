'use client';
// Benefits section for the capsules: a smiling woman in an arch, with round
// icon cards around her. EU rules: shilajit itself has no authorised health
// claim, so the cards use only the officially authorised zinc and selenium
// claims (the capsules give 50 % NRV zinc and 100 % NRV selenium per serving).
// Do not add other health wording without checking it first.
import { useRef } from 'react';
import RealIcon from './RealIcon';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

// Photo: Jan Kopřiva on Unsplash (loaded from Unsplash, as their licence asks).
const PHOTO = 'https://images.unsplash.com/photo-1581714161666-dade083654ae?auto=format&fit=crop&crop=faces&w=760&h=1040&q=80';
const CREDIT = 'https://unsplash.com/@jxk?utm_source=himalayan_drop&utm_medium=referral';

const ICONS = ['shield', 'brain', 'molecule', 'cell', 'butterfly', 'hair'];

const T = {
  en: {
    eyebrow: 'Feel the difference', h: 'Two minerals,', hg: 'six approved benefits.',
    p: 'Every serving of two capsules gives you 5 mg zinc (50% NRV) and 55 µg selenium (100% NRV). These are the benefits the EU has officially approved for them.',
    cards: [
      ['Immune system', 'Zinc contributes to the normal function of the immune system.'],
      ['Clear thinking', 'Zinc contributes to normal cognitive function.'],
      ['Testosterone', 'Zinc contributes to the maintenance of normal testosterone levels in the blood.'],
      ['Cell protection', 'Selenium contributes to the protection of cells from oxidative stress.'],
      ['Thyroid', 'Selenium contributes to normal thyroid function.'],
      ['Hair, skin & nails', 'Zinc contributes to the maintenance of normal hair, nails and skin.'],
    ],
    note: 'Food supplement. Not a substitute for a varied, balanced diet and a healthy lifestyle.', photo: 'Photo',
  },
  da: {
    eyebrow: 'Mærk forskellen', h: 'To mineraler,', hg: 'seks godkendte fordele.',
    p: 'Hver portion på to kapsler giver dig 5 mg zink (50 % NRV) og 55 µg selen (100 % NRV). Det er de fordele, EU officielt har godkendt for dem.',
    cards: [
      ['Immunforsvar', 'Zink bidrager til immunsystemets normale funktion.'],
      ['Klar tankegang', 'Zink bidrager til en normal kognitiv funktion.'],
      ['Testosteron', 'Zink bidrager til at opretholde et normalt testosteronniveau i blodet.'],
      ['Cellebeskyttelse', 'Selen bidrager til at beskytte cellerne mod oxidativt stress.'],
      ['Skjoldbruskkirtel', 'Selen bidrager til normal skjoldbruskkirtelfunktion.'],
      ['Hår, hud og negle', 'Zink bidrager til at opretholde normalt hår, normale negle og normal hud.'],
    ],
    note: 'Kosttilskud. Ikke en erstatning for en varieret og balanceret kost og en sund livsstil.', photo: 'Foto',
  },
  de: {
    eyebrow: 'Spür den Unterschied', h: 'Zwei Mineralstoffe,', hg: 'sechs zugelassene Vorteile.',
    p: 'Jede Portion aus zwei Kapseln liefert 5 mg Zink (50 % NRV) und 55 µg Selen (100 % NRV). Das sind die Vorteile, die die EU dafür offiziell zugelassen hat.',
    cards: [
      ['Immunsystem', 'Zink trägt zu einer normalen Funktion des Immunsystems bei.'],
      ['Klarer Kopf', 'Zink trägt zu einer normalen kognitiven Funktion bei.'],
      ['Testosteron', 'Zink trägt zur Erhaltung eines normalen Testosteronspiegels im Blut bei.'],
      ['Zellschutz', 'Selen trägt dazu bei, die Zellen vor oxidativem Stress zu schützen.'],
      ['Schilddrüse', 'Selen trägt zu einer normalen Schilddrüsenfunktion bei.'],
      ['Haare, Haut & Nägel', 'Zink trägt zur Erhaltung normaler Haare, Nägel und Haut bei.'],
    ],
    note: 'Nahrungsergänzungsmittel. Kein Ersatz für eine abwechslungsreiche, ausgewogene Ernährung und eine gesunde Lebensweise.', photo: 'Foto',
  },
  fr: {
    eyebrow: 'Sentez la différence', h: 'Deux minéraux,', hg: 'six bienfaits autorisés.',
    p: 'Chaque portion de deux gélules apporte 5 mg de zinc (50 % VNR) et 55 µg de sélénium (100 % VNR). Voici les bienfaits officiellement autorisés par l’UE.',
    cards: [
      ['Système immunitaire', 'Le zinc contribue au fonctionnement normal du système immunitaire.'],
      ['Esprit clair', 'Le zinc contribue à des fonctions cognitives normales.'],
      ['Testostérone', 'Le zinc contribue au maintien d’un taux normal de testostérone dans le sang.'],
      ['Protection des cellules', 'Le sélénium contribue à protéger les cellules contre le stress oxydatif.'],
      ['Thyroïde', 'Le sélénium contribue à une fonction thyroïdienne normale.'],
      ['Cheveux, peau et ongles', 'Le zinc contribue au maintien de cheveux, d’ongles et d’une peau normaux.'],
    ],
    note: 'Complément alimentaire. Ne remplace pas une alimentation variée et équilibrée et un mode de vie sain.', photo: 'Photo',
  },
  es: {
    eyebrow: 'Siente la diferencia', h: 'Dos minerales,', hg: 'seis beneficios autorizados.',
    p: 'Cada porción de dos cápsulas aporta 5 mg de zinc (50 % VRN) y 55 µg de selenio (100 % VRN). Estos son los beneficios que la UE ha autorizado oficialmente.',
    cards: [
      ['Sistema inmunitario', 'El zinc contribuye al funcionamiento normal del sistema inmunitario.'],
      ['Mente clara', 'El zinc contribuye a la función cognitiva normal.'],
      ['Testosterona', 'El zinc contribuye al mantenimiento de niveles normales de testosterona en sangre.'],
      ['Protección celular', 'El selenio contribuye a la protección de las células frente al daño oxidativo.'],
      ['Tiroides', 'El selenio contribuye a la función tiroidea normal.'],
      ['Cabello, piel y uñas', 'El zinc contribuye al mantenimiento del cabello, las uñas y la piel en condiciones normales.'],
    ],
    note: 'Complemento alimenticio. No sustituye una dieta variada y equilibrada ni un estilo de vida saludable.', photo: 'Foto',
  },
  ar: {
    eyebrow: 'اشعر بالفرق', h: 'معدنان،', hg: 'ستة فوائد معتمدة.',
    p: 'كل حصة من كبسولتين تمنحك 5 ملغ زنك (50% من القيمة المرجعية) و55 ميكروغرام سيلينيوم (100%). هذه هي الفوائد التي اعتمدها الاتحاد الأوروبي رسمياً لهما.',
    cards: [
      ['جهاز المناعة', 'يساهم الزنك في الوظيفة الطبيعية لجهاز المناعة.'],
      ['صفاء الذهن', 'يساهم الزنك في الوظيفة الإدراكية الطبيعية.'],
      ['التستوستيرون', 'يساهم الزنك في الحفاظ على مستويات طبيعية من التستوستيرون في الدم.'],
      ['حماية الخلايا', 'يساهم السيلينيوم في حماية الخلايا من الإجهاد التأكسدي.'],
      ['الغدة الدرقية', 'يساهم السيلينيوم في الوظيفة الطبيعية للغدة الدرقية.'],
      ['الشعر والبشرة والأظافر', 'يساهم الزنك في الحفاظ على الشعر والأظافر والبشرة بحالة طبيعية.'],
    ],
    note: 'مكمل غذائي. لا يغني عن نظام غذائي متنوع ومتوازن ونمط حياة صحي.', photo: 'تصوير',
  },
  ur: {
    eyebrow: 'فرق محسوس کریں', h: 'دو معدنیات،', hg: 'چھ منظور شدہ فوائد۔',
    p: 'دو کیپسول کی ہر خوراک میں 5 ملی گرام زنک (50% NRV) اور 55 مائیکروگرام سیلینیم (100% NRV) ہے۔ یہ وہ فوائد ہیں جو یورپی یونین نے ان کے لیے سرکاری طور پر منظور کیے ہیں۔',
    cards: [
      ['مدافعتی نظام', 'زنک مدافعتی نظام کے معمول کے کام میں حصہ ڈالتا ہے۔'],
      ['صاف ذہن', 'زنک معمول کی ذہنی کارکردگی میں حصہ ڈالتا ہے۔'],
      ['ٹیسٹوسٹیرون', 'زنک خون میں ٹیسٹوسٹیرون کی معمول کی سطح برقرار رکھنے میں حصہ ڈالتا ہے۔'],
      ['خلیوں کا تحفظ', 'سیلینیم خلیوں کو آکسیڈیٹو اسٹریس سے بچانے میں حصہ ڈالتا ہے۔'],
      ['تھائیرائیڈ', 'سیلینیم تھائیرائیڈ کے معمول کے کام میں حصہ ڈالتا ہے۔'],
      ['بال، جلد اور ناخن', 'زنک بالوں، ناخنوں اور جلد کو معمول کی حالت میں رکھنے میں حصہ ڈالتا ہے۔'],
    ],
    note: 'غذائی سپلیمنٹ۔ متنوع، متوازن غذا اور صحت مند طرزِ زندگی کا متبادل نہیں۔', photo: 'تصویر',
  },
};

export default function FormulaBenefits({ product }) {
  const lang = useLang();
  const t = T[lang] || T.en;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top 70%', once: true };
      gsap.timeline({ scrollTrigger: st })
        .from('.fb-head > *', { y: 28, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' })
        .from('.fb-arch', { clipPath: 'inset(100% 0 0 0 round 300px 300px 30px 30px)', duration: 1.6, ease: 'expo.inOut' }, 0.1)
        .from('.fb-arch img', { scale: 1.25, duration: 2, ease: 'expo.out' }, 0.3)
        .from('.fb-orbit', { rotate: -90, opacity: 0, duration: 1.8, ease: 'expo.out' }, 0.3)
        .from('.fb-product', { y: 80, opacity: 0, rotate: 8, duration: 1.2, ease: 'expo.out' }, 0.8)
        .from('.fb-card', { scale: 0.5, opacity: 0, stagger: 0.09, duration: 1, ease: 'back.out(1.7)' }, 0.7);
      if (window.matchMedia('(min-width: 1000px)').matches) gsap.to('.fb-card', { y: (i) => (i % 2 ? 8 : -8), duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.4, delay: 2 });
      gsap.to('.fb-orbit', { rotation: 360, duration: 80, ease: 'none', repeat: -1 });
    },
    { scope: root }
  );

  return (
    <section className="fb-section" ref={root}>
      <div className="container">
        <div className="fb-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <p>{t.p}</p>
        </div>
        <div className="fb-stage">
          <div className="fb-visual">
            <span className="fb-orbit" aria-hidden="true" />
            <figure className="fb-arch">
              <img src={PHOTO} alt="" loading="lazy" width="760" height="1040" />
            </figure>
            {product?.image && <img className="fb-product" src={product.image} alt="" loading="lazy" />}
            <a className="fb-credit" href={CREDIT} target="_blank" rel="noopener noreferrer">{t.photo}: Jan Kopřiva / Unsplash</a>
          </div>
          <ul className="fb-cards">
            {t.cards.map(([title, claim], i) => (
              <li className={`fb-card c${i}`} key={title}>
                <span className="fb-ico"><RealIcon name={ICONS[i]} size={44} /></span>
                <span className="fb-txt">
                  <strong>{title}</strong>
                  <span>{claim}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="fb-note">{t.note}</p>
      </div>
    </section>
  );
}
