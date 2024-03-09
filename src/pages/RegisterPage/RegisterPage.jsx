import { RegisterForm } from '../../redux/auth/operations';
import { DocTitle } from '../../components/DocTitle';

export default function RegisterPage() {
  return (
    <>
      <DocTitle>Registration</DocTitle>
      <RegisterForm />
    </>
  );
}
