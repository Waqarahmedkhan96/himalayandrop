import { LoginView, loginMeta } from '@/views/account';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return loginMeta(lang);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <LoginView lang={lang} />;
}
