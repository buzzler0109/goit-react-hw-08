import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ContactForm from "../../components/contact_form/ContactForm";
import ContactList from "../../components/contact_list/ContactList";
import SearchBox from "../../components/search_box/SearchBox";

import { fetchContacts } from "../../redux/contacts/operations";
import { DocumentTitle } from "../../components/DocumentTitle";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <div className="wrapper container form-body">
        <h1 className="form-title">Phonebook</h1>

        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
