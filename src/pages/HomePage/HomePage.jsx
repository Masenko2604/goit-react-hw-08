import css from './HomePage.module.css';
import { DocTitle } from '../../components/DocTitle';

export default function HomePage() {
  return (
    <>
      <DocTitle>Home</DocTitle>
      <div className="context">
        <p className={css.text}></p>
      </div>
      <>
        <div>
          <h1>Welcome to the phone book!</h1>
          <h2>Please log in to your account or register.</h2>
        </div>
      </>
    </>
  );
}
