
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactReducer } from './contact/sliceContact';

const reducer = combineReducers({
contact: contactReducer,

})




const persistConfig = {
   key: 'contacts',
   storage,
 }



 const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({reducer: persistedReducer}) ;

export const  persistor = persistStore(store);



