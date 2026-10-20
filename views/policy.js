import { notFound } from 'next/navigation';
import Link from '@/components/LLink';
import PageHero from '@/components/PageHero';
import { getPolicies, policies as policiesEn } from '@/lib/policies';
import { getPolicy } from '@/lib/shopify';
import { buildMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const params = () => Object.keys(policiesEn).map((slug) => ({ slug }));

export function meta(lang, slug) {
  const p = getPolicies(lang)[slug];
  if (!p) return {};
  return buildMeta({ lang, path: `/policies/${slug}/`, title: p.title, description: p.sections[0]?.[1] });
}

const T = {
  en: { eyebrow: 'Policies', nav: 'Policies', template: 'Template text. Replace it with your own policy in Shopify admin → Settings → Policies, checked by a legal adviser.' },
  da: { eyebrow: 'Politikker', nav: 'Politikker', template: 'Skabelontekst. Erstat den med din egen politik i Shopify admin → Settings → Policies, gennemgået af en juridisk rådgiver.' },
  de: { eyebrow: 'Richtlinien', nav: 'Richtlinien', template: 'Vorlagentext. Ersetze ihn durch deine eigene, rechtlich geprüfte Richtlinie in Shopify Admin → Einstellungen → Richtlinien.' },
  fr: { eyebrow: 'Politiques', nav: 'Politiques', template: 'Texte modèle. Remplacez-le par votre propre politique dans Shopify admin → Paramètres → Politiques, vérifiée par un conseiller juridique.' },
  es: { eyebrow: 'Políticas', nav: 'Políticas', template: 'Texto de plantilla. Sustitúyelo por tu propia política en Shopify admin → Configuración → Políticas, revisada por un asesor legal.' },
  ar: { eyebrow: 'السياسات', nav: 'السياسات', template: 'نص نموذجي. استبدله بسياستك الخاصة في لوحة Shopify ← الإعدادات ← السياسات، بعد مراجعته من مستشار قانوني.' },
  ur: { eyebrow: 'پالیسیاں', nav: 'پالیسیاں', template: 'نمونہ متن۔ اسے Shopify ایڈمن ← سیٹنگز ← پالیسیز میں اپنی قانونی طور پر جانچی ہوئی پالیسی سے بدلیں۔' },
};

export default async function PolicyView({ lang, slug }) {
  const t = tr(T, lang);
  const policies = getPolicies(lang);
  const template = policies[slug];
  if (!template) notFound();
  const shopify = await getPolicy(slug, lang);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={shopify?.title || template.title} />
      <section className="section tight-top">
        <div className="container policy">
          <nav className="policy-nav" aria-label={t.nav}>
            {Object.entries(policies).map(([s, p]) => (
              <Link key={s} href={`/policies/${s}/`} className={s === slug ? 'on' : ''}>{p.title}</Link>
            ))}
          </nav>
          <article className="policy-body">
            {shopify ? (
              <div dangerouslySetInnerHTML={{ __html: shopify.body }} />
            ) : (
              <>
                <p className="page-notice">{t.template}</p>
                {template.sections.map(([h, x]) => (
                  <section key={h}>
                    <h2>{h}</h2>
                    <p>{x}</p>
                  </section>
                ))}
              </>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
