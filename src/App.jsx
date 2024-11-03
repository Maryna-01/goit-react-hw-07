import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactsForm from './components/ContactsForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App mounted, dispatching fetchContacts...");
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;



