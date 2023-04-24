import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
