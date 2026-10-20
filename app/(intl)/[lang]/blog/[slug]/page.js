import View, { meta, params } from '@/views/article';

export const generateStaticParams = async ({ params: { lang } }) => params(lang);
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { lang, slug } = await p;
  return meta(lang, slug);
}

export default async function Page({ params: p }) {
  const { lang, slug } = await p;
  return <View lang={lang} slug={slug} />;
}
