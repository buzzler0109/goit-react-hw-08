import { useSelector } from "react-redux";
import Contact from "../contact/Contact";

import css from "./ContactList.module.scss";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const nameFilter = useSelector(selectNameFilter);
  const contacts = useSelector((state) => state.contacts.items);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
