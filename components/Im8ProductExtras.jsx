'use client';
// IM8-style additions on the product page: trust chips under the buy box, a
// "pair it with the Summit Set" card and an "inside every jar" strip.
// Hidden unless <html data-version="im8">.
import Link from './LLink';
import { Arrow } from './Arrow';
import { Icon } from './Icons';
import { useLang } from './LangProvider';
import { IM8, IM8X } from '@/lib/im8-i18n';

const IN_SUMMIT = ['shilajit-gold-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'];

export default function Im8ProductExtras({ handle }) {
  const lang = useLang();
  const t = IM8[lang] || IM8.en;
  const x = IM8X[lang] || IM8X.en;
  return (
    <div className="im8-pdp">
      <ul className="im8-chips">
        {[t.hero.chips[0], t.hero.chips[1], x.ship].map((c, i) => <li key={c}><Icon name={['shield', 'flask', 'truck'][i]} size={15} />{c}</li>)}
      </ul>
      {IN_SUMMIT.includes(handle) && (
        <Link href="/bundles/#bundle-summit-set" className="im8-pdp-set">
          <img src="/images/bundles/summit-set.webp" alt="" loading="lazy" />
          <span><strong>{x.also}</strong><em>{x.alsoText}</em></span>
          <Arrow size={14} />
        </Link>
      )}
      <div className="im8-pdp-jar">
        <p className="im8-eyebrow">{x.jar}</p>
        <ul>
          <li><Icon name="mountain" size={20} /><span><em>{x.origin}</em><strong>{x.originVal}</strong></span></li>
          <li><Link href="/lab-results/"><Icon name="flask" size={20} /><span><em>{x.batch}</em><strong>{x.batchVal}</strong></span></Link></li>
          <li><Icon name="shield" size={20} /><span><em>{x.std}</em><strong>{x.stdVal}</strong></span></li>
        </ul>
      </div>
    </div>
  );
}
