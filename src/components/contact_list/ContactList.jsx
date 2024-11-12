import { useSelector } from "react-redux";
import Contact from "../contact/Contact";

import css from "./ContactList.module.scss";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { CircularColor } from "../Loader";
import { selectIsLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <div className={css.loader}>
      <CircularColor />
    </div>
  ) : (
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
