import { LoginForm } from '../../redux/operations';
import { DocTitle } from '../../components/DocTitle';

export default function LoginPage() {
  return (
    <>
      <DocTitle>Login</DocTitle>
      <LoginForm />
    </>
  );
}
