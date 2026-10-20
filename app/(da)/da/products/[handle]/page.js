import View, { meta, params } from '@/views/product';

export const generateStaticParams = () => params();
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { handle } = await p;
  return meta('da', handle);
}

export default async function Page({ params: p }) {
  const { handle } = await p;
  return <View lang="da" handle={handle} />;
}
