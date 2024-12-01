import { RiDeleteBinLine, RiUserFill, RiPhoneFill } from "react-icons/ri";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactContainer}>
        <div className={css.contactInfo}>
          <RiUserFill />
          {name}
        </div>
        <div className={css.contactInfo}>
          <RiPhoneFill />
          {number}
        </div>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine className={css.deleteBtn} size={24} />
      </button>
    </div>
  );
};

export default Contact;
