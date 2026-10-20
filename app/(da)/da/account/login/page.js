import { LoginView, loginMeta } from '@/views/account';

export const metadata = loginMeta('da');

export default function Page() {
  return <LoginView lang="da" />;
}
