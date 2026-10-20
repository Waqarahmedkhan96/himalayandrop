import View, { meta } from '@/views/rewards';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return meta(lang);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <View lang={lang} />;
}
