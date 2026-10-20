import { LoginView, loginMeta } from '@/views/account';

export const metadata = loginMeta('en');

export default function Page() {
  return <LoginView lang="en" />;
}
