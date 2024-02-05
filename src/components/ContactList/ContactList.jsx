import React from 'react';
import ContactListItem from 'components/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from 'store/contact/sliceContact';

const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(removeContactAction(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
