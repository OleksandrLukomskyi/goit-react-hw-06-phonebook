

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { nanoid } from '@reduxjs/toolkit';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {  addContactAction, removeContactAction, updateFilterAction } from 'store/contact/sliceContact';



const App = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  const filter = useSelector((state) => state.contact.filter);
  const dispatch = useDispatch();


  
  const deleteContact = (id) => {
    dispatch(removeContactAction(id))
  }

 
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

    dispatch(addContactAction(newContact));

    };

  const changeFilter = filter => {
    dispatch(updateFilterAction(filter))
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
          onDeleteContact={deleteContact}
        />
      </div>
   
  );
};

export default App;
