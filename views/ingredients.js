import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IngredientCards from '@/components/IngredientCards';
import { pageMeta } from '@/lib/seo';
import { pdpText } from '@/lib/pdp';
import { site } from '@/lib/site';
import { tr } from '@/lib/i18n';
import { COPY, MORE, PHOTOS, AMOUNTS, RESIN_ORDER, FORMULA_ORDER, CLAIMS } from '@/lib/ingredients';

export const meta = (lang) => pageMeta('ingredients', lang, '/ingredients/');

export default function IngredientsView({ lang }) {
  const c = tr(COPY, lang);
  const p = pdpText(lang);
  const more = MORE[lang] || {};
  // Product names in the visitor's language (Gummies, Drops, Capsules) from the shop menu.
  const shop = site[lang].menu[0].items;
  const names = [shop[3].label, shop[4].label, shop[5].label];
  const t = { more: c.more, back: c.back, perServing: p.facts.perServing };

  const resin = RESIN_ORDER.map((k) => {
    const r = p.inside.resin.find((x) => x.k === k);
    return { key: k, title: r.t, desc: r.d, value: r.v || '', photo: PHOTOS[k], more: more[k], rows: [], claims: [] };
  });
  const formula = FORMULA_ORDER.map((k) => {
    const f = p.inside.formula[k];
    return {
      key: k, title: f.t, desc: f.d, value: '', photo: PHOTOS[k], more: more[k],
      rows: AMOUNTS[k].map((a, i) => [names[i], a]),
      claims: (CLAIMS[k] || []).map((i) => `${names[2]}: ${p.facts.claims[i]}`),
    };
  });

  return (
    <>
      <PageHero {...c.hero} />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <header className="ig-head">
            <p className="eyebrow">{c.s1.eyebrow}</p>
            <h2>{c.s1.title}</h2>
          </header>
          <IngredientCards cards={resin} t={t} />
        </div>
      </Reveal>
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <header className="ig-head">
            <p className="eyebrow">{c.s2.eyebrow}</p>
            <h2>{c.s2.title}</h2>
            <p>{c.s2.text}</p>
          </header>
          <IngredientCards cards={formula} t={t} />
          <p className="ig-credit">{c.credit}</p>
        </div>
      </Reveal>
    </>
  );
}
