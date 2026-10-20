import View, { meta, params } from '@/views/article';

export const generateStaticParams = () => params('da');
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { slug } = await p;
  return meta('da', slug);
}

export default async function Page({ params: p }) {
  const { slug } = await p;
  return <View lang="da" slug={slug} />;
}
