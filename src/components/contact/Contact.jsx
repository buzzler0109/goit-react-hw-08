import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import css from "./Contact.module.scss";
import { deleteContact } from "../../redux/contactsOps";

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
        onClick={() => dispatch(deleteContact(contact))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
