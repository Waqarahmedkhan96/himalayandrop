import AuthLayout from '@/components/AuthLayout';
import { LoginForm } from '@/components/AuthForms';

export const metadata = { title: 'Log in · Himalayan Drop' };

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome" accent="back." lead="Log in to see your orders and Summit Rewards points." switchText="New to Himalayan Drop?" switchHref="/account/register/" switchLabel="Create an account">
      <LoginForm />
    </AuthLayout>
  );
}
