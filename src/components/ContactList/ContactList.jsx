import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

import { deleteContact } from '../../redux/contacts-operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const contact = contacts.map(({ id, name, number }) => (
    <li className={css.list} key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{contact}</ul>;
};
