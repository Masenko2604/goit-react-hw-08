// import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/auth/operations';
// import { useAuth } from '../../hooks/useAuth';
// import css from './UserMenu.module.css';
// import { Button } from '@mui/material';

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <Button variant="contained" onClick={() => dispatch(logout())}>
//         Logout
//       </Button>
//     </div>
//   );
// };
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log({ user });

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
