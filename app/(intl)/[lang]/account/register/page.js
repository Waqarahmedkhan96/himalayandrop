import { RegisterView, registerMeta } from '@/views/account';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return registerMeta(lang);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <RegisterView lang={lang} />;
}
