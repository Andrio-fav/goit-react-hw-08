import css from './App.module.css';
import { Flip, ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer newestOnTop={true} closeOnClick={true} theme="colored" transition={Flip} />
    </div>
  );
}
