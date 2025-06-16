import css from './App.module.css';
import { Flip, ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { refreshUser } from './redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

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
      <Routes>
        <Route path="/" element={<h1>Welcome to Phonebook App</h1>} />

        <Route element={<RestrictedRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

      <ToastContainer newestOnTop closeOnClick theme="colored" transition={Flip} />
    </div>
  );
}