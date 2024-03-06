import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';
import { Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/contact/operation';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { selectIsLoading } from '../redux/contact/selector';
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshed = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  console.log('====================================');
  console.log(isLoading);
  console.log('====================================');
  return (
    <>
      {isRefreshed ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layuot />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
              />
              <Route
                path="/register"
                element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
      {isLoading && <Loader />}
    </>
  );
};
