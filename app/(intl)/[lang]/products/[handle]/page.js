import View, { meta, params } from '@/views/product';

export const generateStaticParams = async ({ params: { lang } }) => params();
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { lang, handle } = await p;
  return meta(lang, handle);
}

export default async function Page({ params: p }) {
  const { lang, handle } = await p;
  return <View lang={lang} handle={handle} />;
}
