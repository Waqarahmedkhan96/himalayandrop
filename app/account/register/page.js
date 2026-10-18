import AuthLayout from '@/components/AuthLayout';
import { RegisterForm } from '@/components/AuthForms';

export const metadata = { title: 'Create account · Himalayan Drop' };

export default function RegisterPage() {
  return (
    <AuthLayout title="Create your" accent="account." lead="Join Summit Rewards and start at Base Camp with 100 points." switchText="Already a member?" switchHref="/account/login/" switchLabel="Log in">
      <RegisterForm />
    </AuthLayout>
  );
}
