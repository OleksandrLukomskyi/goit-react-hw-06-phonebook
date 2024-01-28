import { useState, useEffect, useRef } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFiltet] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
      
    }
  }, []);

  const prevContacts = useRef(contacts);

  useEffect(() => {
    if (contacts !== prevContacts.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const isExist = contacts.some(
      contact =>
        contact.name === name.trim() || contact.number === number.trim()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = filter => {
    setFiltet(filter);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>

      <Filter filter={filter} onFilterChange={changeFilter} />

      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
