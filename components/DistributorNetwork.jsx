'use client';
// Distributor network: a dotted map with a pin per country and gold routes
// from Skardu, region filters, and a card per country with its cities and
// local contact. Tapping a city fills in the enquiry form below.
import { useState } from 'react';
import { COUNTRIES, REGIONS, countryPin, project, locationLabel } from '@/lib/distributors';
import { useLang, useT } from './LangProvider';
import { Icon } from './Icons';

const T = {
  en: {
    map: 'Map of our distributor network', all: 'All', clear: 'Show all countries',
    cities: (n) => (n === 1 ? '1 city' : `${n} cities`), contact: 'Your contact', home: 'Our home', origin: 'Our source',
    originCity: 'Harvested here', ask: 'Get in touch', tap: 'Tap a city to get in touch with our partner there.',
    legendPin: 'Distributor country', legendSource: 'Skardu, where our shilajit is harvested', swipe: 'Swipe the map to see the Gulf and Pakistan',
  },
  da: {
    map: 'Kort over vores forhandlernetværk', all: 'Alle', clear: 'Vis alle lande',
    cities: (n) => (n === 1 ? '1 by' : `${n} byer`), contact: 'Din kontakt', home: 'Vores hjem', origin: 'Vores kilde',
    originCity: 'Høstes her', ask: 'Kontakt', tap: 'Tryk på en by for at kontakte vores partner der.',
    legendPin: 'Land med forhandler', legendSource: 'Skardu, hvor vores shilajit høstes', swipe: 'Swipe på kortet for at se Golfen og Pakistan',
  },
  de: {
    map: 'Karte unseres Händlernetzes', all: 'Alle', clear: 'Alle Länder anzeigen',
    cities: (n) => (n === 1 ? '1 Stadt' : `${n} Städte`), contact: 'Dein Kontakt', home: 'Unser Zuhause', origin: 'Unsere Quelle',
    originCity: 'Hier geerntet', ask: 'Kontakt', tap: 'Tippe auf eine Stadt, um unseren Partner dort zu kontaktieren.',
    legendPin: 'Land mit Händler', legendSource: 'Skardu, wo unser Shilajit geerntet wird', swipe: 'Wische über die Karte für den Golf und Pakistan',
  },
  fr: {
    map: 'Carte de notre réseau de distributeurs', all: 'Tous', clear: 'Afficher tous les pays',
    cities: (n) => (n === 1 ? '1 ville' : `${n} villes`), contact: 'Votre contact', home: 'Notre maison', origin: 'Notre source',
    originCity: 'Récolté ici', ask: 'Contacter', tap: 'Touchez une ville pour contacter notre partenaire sur place.',
    legendPin: 'Pays avec distributeur', legendSource: 'Skardu, où notre shilajit est récolté', swipe: 'Faites glisser la carte vers le Golfe et le Pakistan',
  },
  es: {
    map: 'Mapa de nuestra red de distribuidores', all: 'Todos', clear: 'Mostrar todos los países',
    cities: (n) => (n === 1 ? '1 ciudad' : `${n} ciudades`), contact: 'Tu contacto', home: 'Nuestra casa', origin: 'Nuestro origen',
    originCity: 'Se recolecta aquí', ask: 'Contactar', tap: 'Toca una ciudad para contactar con nuestro socio allí.',
    legendPin: 'País con distribuidor', legendSource: 'Skardu, donde se recolecta nuestro shilajit', swipe: 'Desliza el mapa para ver el Golfo y Pakistán',
  },
  ar: {
    map: 'خريطة شبكة موزعينا', all: 'الكل', clear: 'عرض جميع الدول',
    cities: (n) => (n === 1 ? 'مدينة واحدة' : n === 2 ? 'مدينتان' : `${n} مدن`), contact: 'جهة الاتصال', home: 'موطننا', origin: 'مصدرنا',
    originCity: 'يُجمع هنا', ask: 'تواصل', tap: 'اضغط على مدينة للتواصل مع شريكنا هناك.',
    legendPin: 'دولة بها موزع', legendSource: 'سكردو، حيث يُجمع الشيلاجيت لدينا', swipe: 'اسحب الخريطة لرؤية الخليج وباكستان',
  },
  ur: {
    map: 'ہمارے ڈسٹری بیوٹر نیٹ ورک کا نقشہ', all: 'سب', clear: 'تمام ممالک دکھائیں',
    cities: (n) => (n === 1 ? '1 شہر' : `${n} شہر`), contact: 'آپ کا رابطہ', home: 'ہمارا گھر', origin: 'ہمارا ماخذ',
    originCity: 'یہاں سے حاصل کیا جاتا ہے', ask: 'رابطہ کریں', tap: 'وہاں ہمارے پارٹنر سے رابطے کے لیے کسی شہر پر ٹیپ کریں۔',
    legendPin: 'ڈسٹری بیوٹر والا ملک', legendSource: 'اسکردو، جہاں سے ہمارا سلاجیت حاصل ہوتا ہے', swipe: 'خلیج اور پاکستان دیکھنے کے لیے نقشہ سوائپ کریں',
  },
};

const W = 668.8;
const H = 460;
const SOURCE = project(35.297, 75.633);

export default function DistributorNetwork({ formId = 'dist' }) {
  const lang = useLang();
  const t = useT(T);
  const [region, setRegion] = useState('all');
  const [country, setCountry] = useState(null);

  const pick = (code) => {
    setCountry(code);
    setRegion('all');
    requestAnimationFrame(() => document.getElementById(`dn-${code}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  // Fill in the enquiry form with this location and move to it.
  const ask = (label) => {
    const sel = document.getElementById(`${formId}-location`);
    if (sel) {
      sel.value = label;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const form = document.getElementById('apply');
    if (window.__lenis && form) window.__lenis.scrollTo(form, { offset: -90 });
    else form?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => sel?.focus({ preventScroll: true }), 700);
  };

  const visible = (c) => (country ? c.code === country : region === 'all' || c.region === region);

  return (
    <div className="dn" data-region={region} data-country={country || ''}>
      <div className="dn-map" role="group" aria-label={t.map}>
        <div className="dn-stage">
        <img className="dn-dots" src="/images/world-dots.svg" alt="" width={W} height={H} />
        <svg className="dn-routes" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" preserveAspectRatio="none">
          {COUNTRIES.filter((c) => !c.origin).map((c, i) => {
            const p = countryPin(c);
            const x1 = (SOURCE.x / 100) * W, y1 = (SOURCE.y / 100) * H;
            const x2 = (p.x / 100) * W, y2 = (p.y / 100) * H;
            const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - Math.abs(x1 - x2) * 0.22 - 10;
            return <path key={c.code} d={`M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}`} style={{ animationDelay: `${i * 0.18}s` }} />;
          })}
        </svg>
        <span className="dn-source" style={{ left: `${SOURCE.x}%`, top: `${SOURCE.y}%` }} aria-hidden="true">
          <Icon name="mountain" size={14} />
        </span>
        {COUNTRIES.map((c) => {
          const p = c.origin ? project(33.72, 72.7) : countryPin(c);
          return (
            <button
              type="button"
              key={c.code}
              className={`dn-pin ${country === c.code ? 'is-on' : ''}`}
              data-code={c.code}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={() => pick(c.code)}
              aria-label={`${c[lang]}: ${t.cities(c.cities.length)}`}
            >
              <img src={`/images/flags/${c.code}.svg`} alt="" width="22" height="22" />
              <span className="dn-tip">{c[lang]} · {t.cities(c.cities.length)}</span>
            </button>
          );
        })}
        </div>
      </div>
      <p className="dn-legend">
        <span><i className="dn-key pin" />{t.legendPin}</span>
        <span><i className="dn-key src" />{t.legendSource}</span>
        <span className="dn-swipe">{t.swipe}</span>
      </p>

      <div className="dn-tabs" role="tablist">
        {[{ id: 'all', [lang]: t.all }, ...REGIONS].map((r) => (
          <button
            type="button"
            role="tab"
            key={r.id}
            data-filter={r.id}
            aria-selected={!country && region === r.id}
            onClick={() => { setCountry(null); setRegion(r.id); }}
          >
            {r[lang]}
          </button>
        ))}
      </div>
      <p className="dn-hint">{t.tap}</p>

      <div className="dn-grid">
        {COUNTRIES.map((c) => (
          <article key={c.code} id={`dn-${c.code}`} className="dn-card" data-code={c.code} data-region={c.region} hidden={!visible(c)}>
            <header>
              <img src={`/images/flags/${c.code}.svg`} alt="" width="44" height="44" />
              <div>
                <h3>{c[lang]}</h3>
                <p>{t.cities(c.cities.length)}</p>
              </div>
              {(c.home || c.origin) && <span className="dn-badge">{c.home ? t.home : t.origin}</span>}
            </header>
            {c.contact && (
              <p className="dn-contact"><Icon name="user" size={15} /> {t.contact}: <strong>{c.contact}</strong></p>
            )}
            <ul>
              {c.cities.map((city) => {
                const label = locationLabel(c, city, lang);
                return (
                  <li key={city.en}>
                    <button type="button" className="dn-city" data-location={label} onClick={() => ask(label)}>
                      <Icon name="pin" size={16} />
                      <span className="dn-city-name">
                        {city[lang]}
                        {city.origin && <em>{t.originCity}</em>}
                        {city.contact && <small>{t.contact}: {city.contact}</small>}
                      </span>
                      <span className="dn-ask">{t.ask}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
      <button type="button" className="dn-clear" data-filter="all" hidden={!country} onClick={() => setCountry(null)}>{t.clear}</button>
    </div>
  );
}
