import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.scss";
import BasicMenu from "../ContextMenu";

const Contact = ({ contact }) => {
  return (
    <div className={css.container}>
      <div>
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
      </div>

      <div className={css.btn}>
        <BasicMenu contact={contact} />
      </div>
    </div>
  );
};

export default Contact;
