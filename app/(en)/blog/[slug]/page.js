import View, { meta, params } from '@/views/article';

export const generateStaticParams = () => params('en');
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { slug } = await p;
  return meta('en', slug);
}

export default async function Page({ params: p }) {
  const { slug } = await p;
  return <View lang="en" slug={slug} />;
}
