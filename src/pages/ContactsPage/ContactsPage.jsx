import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/PageTitle/PageTitle";
import {ContactForm} from "../../components/ContactForm/ContactForm";
import {SearchBox} from "../../components/SearchBox/SearchBox";
import {ContactList} from "../../components/ContactList/ContactList"; 

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
        <PageTitle>Your contacts</PageTitle>
        <ContactForm />
        <SearchBox />
        <div>{isLoading && "Request in progress..."}</div>
        <ContactList />
    </>
  );
}