import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.text}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
