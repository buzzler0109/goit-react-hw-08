import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

import css from "./Contact.module.scss";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p>
        <FaUser />
        &nbsp;
        {contact.name}
      </p>
      <p>
        <FaPhoneAlt />
        &nbsp;
        {contact.number}
      </p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
