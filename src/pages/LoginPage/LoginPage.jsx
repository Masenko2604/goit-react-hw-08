import { LoginForm } from '../../redux/auth/operations';
import { DocTitle } from '../../components/DocTitle';

export default function LoginPage() {
  return (
    <>
      <DocTitle>Login</DocTitle>
      <LoginForm />
    </>
  );
}
