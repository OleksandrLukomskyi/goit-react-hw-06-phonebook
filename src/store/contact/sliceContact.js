import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
 
};

const sliceContact = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      prepare: data => {
        const newContacts = { ...data, id: nanoid() };
        return { payload: newContacts };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const contactReducer = sliceContact.reducer;
export const { addContactAction, removeContactAction } = sliceContact.actions;
