import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setNumber('');
    setName('');
  };

  // const reset = () => {
  //          setName('');
  //       }

  return (
    <form onSubmit={handleSubmit} className={css.formBloc}>
      <label className={css.inputBloc}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.inputBloc}>
        Numer
        <input
          type="tel"
          name="number"
          placeholder="459-12-56"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
