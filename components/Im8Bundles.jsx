'use client';
// IM8-inspired bundles page: light hero, the Summit Set as a large "best
// value" feature, the other sets as cards, a gift note, why-a-set tiles and
// the FAQ. Same data, prices and cart actions as the current bundles page.
// Hidden unless <html data-version="im8">.
import Link from './LLink';
import Accordion from './Accordion';
import { Arrow } from './Arrow';
import { Icon } from './Icons';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { demoProducts, localizeProduct } from '@/lib/products';
import { useLang } from './LangProvider';
import { IM8, IM8X } from '@/lib/im8-i18n';

function Actions({ b, x }) {
  const { addItem, buyNow, busy } = useCart();
  return (
    <div className="im8-b-actions">
      <button type="button" className="im8-btn dark block" disabled={busy} onClick={() => buyNow(b.variantId, 1)}>{x.buy} <Arrow size={14} /></button>
      <button type="button" className="im8-btn outl block" disabled={busy} onClick={() => addItem(b.variantId, 1)}><Icon name="cart" size={16} /> {x.add}</button>
    </div>
  );
}

function Inside({ b, lang, x, money }) {
  const items = b.items.map((h) => localizeProduct(demoProducts.find((p) => p.handle === h), lang)).filter(Boolean);
  return (
    <ul className="im8-b-inside">
      {items.map((p) => (
        <li key={p.handle}>
          <Link href={`/products/${p.handle}/`}><img src={p.image.replace('/images/pack-', '/images/thumbs/pack-')} alt="" loading="lazy" />{p.title}</Link>
          <span>{p.amount != null ? money(p.amount) : ''}</span>
        </li>
      ))}
    </ul>
  );
}

function Price({ b, t, money }) {
  return (
    <>
      <div className="im8-price">
        <strong>{b.amount != null ? money(b.amount) : ''}</strong>
        {b.compareAt > b.amount && <s>{money(b.compareAt)}</s>}
        <span>{t.sets.vat}</span>
      </div>
      {b.compareAt > b.amount && <p className="im8-save">{t.sets.youSave(money(b.compareAt - b.amount))}</p>}
    </>
  );
}

export default function Im8Bundles({ bundles, text }) {
  const lang = useLang();
  const t = IM8[lang] || IM8.en;
  const x = IM8X[lang] || IM8X.en;
  const money = (n, c) => formatMoney(n, c || 'DKK');
  const feature = bundles.find((b) => b.handle === 'bundle-summit-set') || bundles[0];
  const rest = bundles.filter((b) => b !== feature);
  const gift = bundles.find((b) => b.handle === 'bundle-gift-of-the-mountain');

  return (
    <div className="im8 im8-bpage">
      <section className="im8-bhero">
        <p className="im8-eyebrow">{text.hero.eyebrow}</p>
        <h1>{text.hero.title} <em>{text.hero.accent}</em></h1>
        <p className="im8-lead">{text.hero.lead}</p>
        <ul className="im8-chips center">
          {text.trust.map((c, i) => <li key={c}><Icon name={['flask', 'shield', 'box'][i]} size={15} />{c}</li>)}
        </ul>
      </section>

      <section className="im8-sec" id="choose">
        {feature && (
          <article className="im8-bfeature" id={feature.handle}>
            <span className="im8-ribbon">★ {t.sets.best}</span>
            <div className="im8-bfeature-in">
              <div className="im8-set-img">
                <img src={feature.image} alt={feature.name} />
                <span className="im8-off">{t.sets.save(feature.savePct)}</span>
              </div>
              <div className="im8-bfeature-body">
                <p className="im8-kicker">{feature.tags.join(' · ')}</p>
                <h2>{feature.name}</h2>
                <p className="im8-tag">{feature.tagline}</p>
                <p className="im8-bfeature-text">{feature.text}</p>
                <p className="im8-kicker mt">{x.separately}</p>
                <Inside b={feature} lang={lang} x={x} money={(n) => money(n, feature.currency)} />
                <Price b={feature} t={t} money={(n) => money(n, feature.currency)} />
                <Actions b={feature} x={x} />
                <p className="im8-b-guar"><Icon name="shield" size={14} /> {t.hero.chips[0]}</p>
              </div>
            </div>
          </article>
        )}

        <div className="im8-bgrid">
          {rest.map((b) => (
            <article key={b.handle} className="im8-set" id={b.handle}>
              {b.badge && <span className="im8-ribbon">{b.badge}</span>}
              <div className="im8-set-img">
                <img src={b.image} alt={b.name} loading="lazy" />
                <span className="im8-off">{t.sets.save(b.savePct)}</span>
              </div>
              <div className="im8-set-body">
                <p className="im8-kicker">{b.tags.join(' · ')}</p>
                <h3>{b.name}</h3>
                <p className="im8-tag">{b.tagline}</p>
                <Inside b={b} lang={lang} x={x} money={(n) => money(n, b.currency)} />
                <Price b={b} t={t} money={(n) => money(n, b.currency)} />
                <Actions b={b} x={x} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {gift && (
        <section className="im8-bgift">
          <Icon name="gift" size={28} />
          <div><h2>{x.gift}</h2><p>{x.giftText}</p></div>
          <Link href="#bundle-gift-of-the-mountain" className="im8-btn dark">{gift.name}</Link>
        </section>
      )}

      <section className="im8-sec band">
        <header className="im8-head"><p className="im8-eyebrow">{text.s2.eyebrow}</p><h2>{text.s2.title} {text.s2.accent}</h2></header>
        <ul className="im8-why">
          {text.why.map((w) => (
            <li key={w.title}><Icon name={w.icon} size={24} /><h3>{w.title}</h3><p>{w.text}</p></li>
          ))}
        </ul>
      </section>

      <section className="im8-sec">
        <header className="im8-head"><p className="im8-eyebrow">{text.s3.eyebrow}</p><h2>{text.s3.title} {text.s3.accent}</h2></header>
        <div className="im8-bfaq"><Accordion items={text.faq} idPrefix="ibfaq" /></div>
      </section>
    </div>
  );
}
