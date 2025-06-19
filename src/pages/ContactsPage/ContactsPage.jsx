import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";
import {SearchBox} from "../../components/SearchBox/SearchBox";
import {ContactList} from "../../components/ContactList/ContactList"; 

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoadingContacts } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
        <h1>Your contacts</h1>
        <ContactForm />
        <SearchBox />
        <div>{isLoading && "Request in progress..."}</div>
        <ContactList />
    </>
  );
}