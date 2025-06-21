import css from './App.module.css';
import { Flip, ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from './redux/auth/operations';
import { fetchContacts } from './redux/contacts/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

import AppBar from './components/AppBar/AppBar'; 

import { lazy, Suspense } from 'react';

// Lazy-loaded pages
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing]);

  if (isRefreshing) {
    return <div className={css.loader}>Loading user data...</div>;
  }

  return (
    <div className={css.wrapper}>
      <AppBar /> 
      <Suspense fallback={<div className={css.loader}>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<RestrictedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer newestOnTop closeOnClick theme="colored" transition={Flip} />
    </div>
  );
}
