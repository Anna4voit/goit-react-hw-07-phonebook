import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contacts-operations';
import css from '../components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.boxContacts}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    </div>
  );
};
