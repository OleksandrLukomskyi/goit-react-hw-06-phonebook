import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactReducer } from './contact/sliceContact';
import { filterReducer } from './filter/sliceFilter';

const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactReducer);

const reducer = {
  contact: persistedReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });

export const persistor = persistStore(store);
