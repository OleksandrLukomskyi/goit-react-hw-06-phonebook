import React from "react";
import css from './ContactListItem.module.css'

const ContactListItem =({contact, onDeleteContact}) => (
   <li key={contact.id} className={css.item}>
     {contact.name} - {contact.number}
     <button className={css.button} type='button' onClick={() => onDeleteContact(contact.id)}>Delete</button>
   </li>
)


export default ContactListItem;