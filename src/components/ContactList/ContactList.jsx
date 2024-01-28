import React from 'react'
import ContactListItem from 'components/ContactListItem';
import css from './ContactList.module.css'


 const ContactList = ({contacts, onDeleteContact}) => (
   <ul className= {css.list} >
      {contacts.map((contact) => (
         <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>
      ))}
   </ul>
  
 );

 
export default ContactList;