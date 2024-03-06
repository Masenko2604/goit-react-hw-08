import { useDispatch, useSelector } from 'react-redux';
import css from './Logout.module.css';
import { logout } from '../../redux/auth/operations';
import { selectIsToken } from '../../redux/auth/selectors';
export const Logout = () => {
  const dispatch = useDispatch();

  const token_user = useSelector(selectIsToken);

  return (
    <>
      <button className={css.btn} onClick={() => dispatch(logout(token_user))}>
        Log out
      </button>
    </>
  );
};
