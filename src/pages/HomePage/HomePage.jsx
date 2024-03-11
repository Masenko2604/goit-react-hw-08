// import { GiRotaryPhone } from 'react-icons/gi';
import css from './HomePage.module.css';
import { DocTitle } from '../../components/DocTitle';

export default function HomePage() {
  return (
    <>
      <DocTitle>Home</DocTitle>
      <div className="context">
        {/* <div className={css.phone}>
          <GiRotaryPhone size={150} />
        </div> */}
        <p className={css.text}></p>
      </div>
      <>
        <div>
          <h1>Welcome to contact storage app!</h1>
        </div>
      </>
    </>
  );
}
